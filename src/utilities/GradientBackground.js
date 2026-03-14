"use client";

import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";

// ─── GLSL Shaders ─────────────────────────────────────────────────────────────

const NOISE = `
vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);
  vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;
  vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
  float n_=.142857142857;vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);
  vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);
  m=m*m;return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}`;

const BLEND = `
vec3 blendNormal(vec3 base,vec3 blend){return blend;}
vec3 blendNormal(vec3 base,vec3 blend,float opacity){
  return blendNormal(base,blend)*opacity+base*(1.-opacity);
}`;

const VERT = `
varying vec3 v_color;
void main(){
  float time=u_time*u_global.noiseSpeed;
  vec2 noiseCoord=resolution*uvNorm*u_global.noiseFreq;
  float tilt=resolution.y/2.0*uvNorm.y;
  float incline=resolution.x*uvNorm.x/2.0*u_vertDeform.incline;
  float offset=resolution.x/2.0*u_vertDeform.incline*mix(u_vertDeform.offsetBottom,u_vertDeform.offsetTop,uv.y);
  float noise=snoise(vec3(
    noiseCoord.x*u_vertDeform.noiseFreq.x+time*u_vertDeform.noiseFlow,
    noiseCoord.y*u_vertDeform.noiseFreq.y,
    time*u_vertDeform.noiseSpeed+u_vertDeform.noiseSeed
  ))*u_vertDeform.noiseAmp;
  noise*=1.0-pow(abs(uvNorm.y),2.0);
  noise=max(0.0,noise);
  vec3 pos=vec3(position.x,position.y+tilt+incline+noise-offset,position.z);
  if(u_active_colors[0]==1.){v_color=u_baseColor;}
  for(int i=0;i<u_waveLayers_length;i++){
    if(u_active_colors[i+1]==1.){
      WaveLayers layer=u_waveLayers[i];
      float n=smoothstep(layer.noiseFloor,layer.noiseCeil,
        snoise(vec3(
          noiseCoord.x*layer.noiseFreq.x+time*layer.noiseFlow,
          noiseCoord.y*layer.noiseFreq.y,
          time*layer.noiseSpeed+layer.noiseSeed
        ))/2.0+0.5);
      v_color=blendNormal(v_color,layer.color,pow(n,4.));
    }
  }
  gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);
}`;

const FRAG = `
varying vec3 v_color;
void main(){
  vec3 color=v_color;
  if(u_darken_top==1.){
    vec2 st=gl_FragCoord.xy/resolution.xy;
    color.g-=pow(st.y+sin(-12.)*st.x,u_shadow_power)*.4;
  }
  gl_FragColor=vec4(color,1.0);
}`;

// ─── WebGL engine ─────────────────────────────────────────────────────────────

function hexToRgb(hex) {
  let h = hex.trim();
  if (h.length === 4)
    h =
      "#" +
      h
        .slice(1)
        .split("")
        .map((c) => c + c)
        .join("");
  const n = parseInt(h.slice(1), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (255 & n) / 255];
}

const TYPE_FN = {
  float: "1f",
  int: "1i",
  vec2: "2fv",
  vec3: "3fv",
  vec4: "4fv",
  mat4: "Matrix4fv",
};

function createGradient(
  canvas,
  { colors, height, density, amp, seed, darkenTop },
) {
  const gl = canvas.getContext("webgl", { antialias: true });
  if (!gl) throw new Error("WebGL not supported");

  // ── Uniform ──────────────────────────────────────────────────────────────
  class Uniform {
    constructor({ type = "float", value, excludeFrom, transpose }) {
      this.type = type;
      this.value = value;
      this.excludeFrom = excludeFrom;
      this.transpose = transpose;
      this.typeFn = TYPE_FN[type] ?? "1f";
    }
    update(loc) {
      if (this.value === undefined || loc === undefined) return;
      const isMatrix = this.typeFn.startsWith("Matrix");
      gl[`uniform${this.typeFn}`](
        loc,
        isMatrix ? this.transpose : this.value,
        isMatrix ? this.value : null,
      );
    }
    getDeclaration(name, type, length) {
      if (this.excludeFrom === type) return "";
      if (this.type === "array") {
        return (
          this.value[0].getDeclaration(name, type, this.value.length) +
          `\nconst int ${name}_length = ${this.value.length};`
        );
      }
      if (this.type === "struct") {
        const typeName = name.replace("u_", "");
        const cap = typeName.charAt(0).toUpperCase() + typeName.slice(1);
        return (
          `uniform struct ${cap} {\n` +
          Object.entries(this.value)
            .map(([k, v]) => v.getDeclaration(k, type).replace(/^uniform/, ""))
            .join("") +
          `\n} ${name}${(length ?? 0) > 0 ? `[${length}]` : ""};`
        );
      }
      return `uniform ${this.type} ${name}${(length ?? 0) > 0 ? `[${length}]` : ""};`;
    }
  }

  // ── Attribute ─────────────────────────────────────────────────────────────
  class Attr {
    constructor({ target, size, type, normalized = false }) {
      this.target = target;
      this.size = size;
      this.type = type ?? gl.FLOAT;
      this.normalized = normalized;
      this.buffer = gl.createBuffer();
      this.values = undefined;
    }
    update() {
      if (!this.values) return;
      gl.bindBuffer(this.target, this.buffer);
      gl.bufferData(this.target, this.values, gl.STATIC_DRAW);
    }
    attach(name, program) {
      const loc = gl.getAttribLocation(program, name);
      if (this.target === gl.ARRAY_BUFFER) {
        gl.enableVertexAttribArray(loc);
        gl.vertexAttribPointer(
          loc,
          this.size,
          this.type,
          this.normalized,
          0,
          0,
        );
      }
      return loc;
    }
    use(loc) {
      gl.bindBuffer(this.target, this.buffer);
      if (this.target === gl.ARRAY_BUFFER) {
        gl.enableVertexAttribArray(loc);
        gl.vertexAttribPointer(
          loc,
          this.size,
          this.type,
          this.normalized,
          0,
          0,
        );
      }
    }
  }

  // ── Common uniforms ───────────────────────────────────────────────────────
  const identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  const common = {
    projectionMatrix: new Uniform({ type: "mat4", value: identity }),
    modelViewMatrix: new Uniform({ type: "mat4", value: identity }),
    resolution: new Uniform({ type: "vec2", value: [1, 1] }),
    aspectRatio: new Uniform({ type: "float", value: 1 }),
  };

  // ── Shader helpers ────────────────────────────────────────────────────────
  function compile(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS))
      console.error(gl.getShaderInfoLog(s));
    return s;
  }

  function decls(uniforms, type) {
    return Object.entries(uniforms)
      .map(([n, u]) => u.getDeclaration(n, type))
      .join("\n");
  }

  function buildProgram(matUniforms) {
    const pre = "precision highp float;";
    const vSrc = [
      pre,
      "attribute vec4 position;",
      "attribute vec2 uv;",
      "attribute vec2 uvNorm;",
      decls(common, "vertex"),
      decls(matUniforms, "vertex"),
      NOISE,
      BLEND,
      VERT,
    ].join("\n");
    const fSrc = [
      pre,
      decls(common, "fragment"),
      decls(matUniforms, "fragment"),
      FRAG,
    ].join("\n");
    const program = gl.createProgram();
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vSrc));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fSrc));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS))
      console.error(gl.getProgramInfoLog(program));
    return program;
  }

  function attachAll(program, instances, name, uniforms) {
    if (name === undefined) {
      Object.entries(uniforms).forEach(([n, u]) =>
        attachAll(program, instances, n, u),
      );
    } else if (uniforms.type === "array") {
      uniforms.value.forEach((u, i) =>
        attachAll(program, instances, `${name}[${i}]`, u),
      );
    } else if (uniforms.type === "struct") {
      Object.entries(uniforms.value).forEach(([k, v]) =>
        attachAll(program, instances, `${name}.${k}`, v),
      );
    } else {
      instances.push({
        uniform: uniforms,
        location: gl.getUniformLocation(program, name),
      });
    }
  }

  // ── Geometry ──────────────────────────────────────────────────────────────
  const attrs = {
    position: new Attr({ target: gl.ARRAY_BUFFER, size: 3 }),
    uv: new Attr({ target: gl.ARRAY_BUFFER, size: 2 }),
    uvNorm: new Attr({ target: gl.ARRAY_BUFFER, size: 2 }),
    index: new Attr({
      target: gl.ELEMENT_ARRAY_BUFFER,
      size: 3,
      type: gl.UNSIGNED_SHORT,
    }),
  };
  let xSeg = 0,
    ySeg = 0,
    vertCount = 0;

  function setTopology(xs, ys) {
    xSeg = xs;
    ySeg = ys;
    vertCount = (xs + 1) * (ys + 1);
    attrs.uv.values = new Float32Array(2 * vertCount);
    attrs.uvNorm.values = new Float32Array(2 * vertCount);
    attrs.index.values = new Uint16Array(3 * xs * ys * 2);
    for (let y = 0; y <= ys; y++) {
      for (let x = 0; x <= xs; x++) {
        const i = y * (xs + 1) + x;
        attrs.uv.values[2 * i] = x / xs;
        attrs.uv.values[2 * i + 1] = 1 - y / ys;
        attrs.uvNorm.values[2 * i] = (x / xs) * 2 - 1;
        attrs.uvNorm.values[2 * i + 1] = 1 - (y / ys) * 2;
        if (x < xs && y < ys) {
          const q = y * xs + x;
          attrs.index.values.set(
            [i, i + 1 + xs, i + 1, i + 1, i + 1 + xs, i + 2 + xs],
            6 * q,
          );
        }
      }
    }
    attrs.uv.update();
    attrs.uvNorm.update();
    attrs.index.update();
  }

  function setSize(w, h) {
    if (
      !attrs.position.values ||
      attrs.position.values.length !== 3 * vertCount
    )
      attrs.position.values = new Float32Array(3 * vertCount);
    const ox = w / -2,
      oy = h / -2,
      sw = w / xSeg,
      sh = h / ySeg;
    for (let y = 0; y <= ySeg; y++) {
      for (let x = 0; x <= xSeg; x++) {
        const i = y * (xSeg + 1) + x;
        attrs.position.values[3 * i] = ox + x * sw;
        attrs.position.values[3 * i + 2] = -(oy + y * sh);
      }
    }
    attrs.position.update();
  }

  // ── Material uniforms ─────────────────────────────────────────────────────
  const u = (o) => new Uniform(o);
  const sectionColors = colors.map(hexToRgb);

  const matUniforms = {
    u_time: u({ value: 0 }),
    u_shadow_power: u({ value: 5 }),
    u_darken_top: u({ value: darkenTop ? 1 : 0 }),
    u_active_colors: u({ type: "vec4", value: [1, 1, 1, 1] }),
    u_global: u({
      type: "struct",
      value: {
        noiseFreq: u({ type: "vec2", value: [14e-5, 29e-5] }),
        noiseSpeed: u({ value: 5e-6 }),
      },
    }),
    u_vertDeform: u({
      type: "struct",
      excludeFrom: "fragment",
      value: {
        incline: u({ value: 0 }),
        offsetTop: u({ value: -0.5 }),
        offsetBottom: u({ value: -0.5 }),
        noiseFreq: u({ type: "vec2", value: [3, 4] }),
        noiseAmp: u({ value: amp }),
        noiseSpeed: u({ value: 10 }),
        noiseFlow: u({ value: 3 }),
        noiseSeed: u({ value: seed }),
      },
    }),
    u_baseColor: u({
      type: "vec3",
      excludeFrom: "fragment",
      value: sectionColors[0],
    }),
    u_waveLayers: u({ type: "array", excludeFrom: "fragment", value: [] }),
  };

  for (let i = 1; i < sectionColors.length; i++) {
    matUniforms.u_waveLayers.value.push(
      u({
        type: "struct",
        value: {
          color: u({ type: "vec3", value: sectionColors[i] }),
          noiseFreq: u({
            type: "vec2",
            value: [2 + i / sectionColors.length, 3 + i / sectionColors.length],
          }),
          noiseSpeed: u({ value: 11 + 0.3 * i }),
          noiseFlow: u({ value: 6.5 + 0.3 * i }),
          noiseSeed: u({ value: seed + 10 * i }),
          noiseFloor: u({ value: 0.1 }),
          noiseCeil: u({ value: 0.63 + 0.07 * i }),
        },
      }),
    );
  }

  const program = buildProgram(matUniforms);
  gl.useProgram(program);

  const uniformInstances = [];
  attachAll(program, uniformInstances, undefined, common);
  attachAll(program, uniformInstances, undefined, matUniforms);

  const attrInstances = Object.entries(attrs).map(([name, attr]) => ({
    attr,
    location: attr.attach(name, program),
  }));

  // ── Resize ────────────────────────────────────────────────────────────────
  function resize() {
    const w = window.innerWidth,
      h = height;
    canvas.width = w;
    canvas.height = h;
    gl.viewport(0, 0, w, h);
    common.resolution.value = [w, h];
    common.aspectRatio.value = w / h;
    common.projectionMatrix.value = [
      2 / w,
      0,
      0,
      0,
      0,
      2 / h,
      0,
      0,
      0,
      0,
      2 / -4000,
      0,
      0,
      0,
      0,
      1,
    ];
    setTopology(Math.ceil(w * density[0]), Math.ceil(h * density[1]));
    setSize(w, h);
    matUniforms.u_shadow_power.value = w < 600 ? 5 : 6;
  }

  // ── Animation loop ────────────────────────────────────────────────────────
  let t = 1_253_106,
    last = 0,
    rafId = 0,
    playing = true;

  function draw(ts) {
    if (!document.hidden && playing && Math.trunc(ts) % 2 !== 0) {
      t += Math.min(ts - last, 1000 / 15);
      last = ts;
      matUniforms.u_time.value = t;
      gl.clearColor(0, 0, 0, 0);
      gl.clearDepth(1);
      gl.useProgram(program);
      uniformInstances.forEach(({ uniform, location }) =>
        uniform.update(location ?? undefined),
      );
      attrInstances.forEach(({ attr, location }) => attr.use(location));
      gl.drawElements(
        gl.TRIANGLES,
        attrs.index.values.length,
        gl.UNSIGNED_SHORT,
        0,
      );
    }
    if (playing) rafId = requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  rafId = requestAnimationFrame(draw);

  return {
    pause: () => {
      playing = false;
    },
    play: () => {
      if (playing) return;
      playing = true;
      rafId = requestAnimationFrame(draw);
    },
    destroy: () => {
      playing = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    },
  };
}

// ─── Component ────────────────────────────────────────────────────────────────

const DEFAULT_COLORS = ["#121a26", "#121a26", "#20447a", "#2065cc"];

const GradientBackground = forwardRef(function GradientBackground(
  {
    colors = DEFAULT_COLORS,
    height = 600,
    density = [0.06, 0.16],
    amp = 320,
    seed = 5,
    darkenTop = false,
    className,
    style,
  },
  ref,
) {
  const canvasRef = useRef(null);
  const instanceRef = useRef(null);

  useImperativeHandle(ref, () => ({
    pause: () => instanceRef.current?.pause(),
    play: () => instanceRef.current?.play(),
  }));

  useEffect(() => {
    if (!canvasRef.current) return;
    try {
      instanceRef.current = createGradient(canvasRef.current, {
        colors,
        height,
        density,
        amp,
        seed,
        darkenTop,
      });
    } catch (e) {
      console.warn("[GradientBackground] WebGL init failed:", e);
    }
    return () => {
      instanceRef.current?.destroy();
      instanceRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-0">
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="w-full h-full absolute inset-0 -z-20"
      />
      <div className="w-full h-full -z-10 absolute inset-0 bg-gradient-to-bl from-color-bg-top/60 to-color-bg-bottom" />
    </div>
  );
});

export default GradientBackground;
