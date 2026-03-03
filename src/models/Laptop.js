/*
  Model by Blaž Mraz (https://sketchfab.com/Mraz3D) — CC-BY-4.0
*/

import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture, Float } from "@react-three/drei";
import { gsap } from "gsap";
import { usePageScroll } from "@/hooks/Usepagescroll";

const SCREEN_TEXTURES = [
  "./images/ThumbnailsSmall/KBOReeshofThumb.png",       // 0 — default / projectIntro
  "./images/ThumbnailsSmall/YODashboardThumb.png",      // 1 — project1
  "./images/ThumbnailsSmall/YOGwotyThumb.png",          // 2 — project2
  "./images/ThumbnailsSmall/StandaardAanbouwThumb.png", // 3 — project3
  "./images/ThumbnailsSmall/ReisartikelenThumb.jpg",    // 4 — project4+
];

const ACCENT_COLORS = ["colorKBO", "colorYo", "colorYo2", "colorSa", "colorOther"];

const SCREEN_ROT = {
  open: { rot: { x: 1.56, y: 0, z: 0 }, pos: { x: 0, y: 0.12, z: 0.01 } },
  close: { rot: { x: Math.PI / 0.995, y: 0, z: 0 }, pos: { x: 0, y: 0.122, z: 0.01 } },
};

const INITIAL = {
  rot: { x: 1.03, y: 0, z: 0 },
  pos: { x: -2, y: -80, z: 0.45 },
};

const TIMELINE_DURATION = 20;

function ScreenMesh({ texture, isActive }) {
  return (
    <mesh rotation={[0, Math.PI / 2, 0]} position={[0, 0.127, 0]} scale={0.0198}>
      <boxGeometry args={[0.01, 10.6, 16]} />
      <meshStandardMaterial
        map={texture}
        roughness={0.3}
        metalness={0.3}
        opacity={isActive ? 1 : 0}
        transparent
      />
    </mesh>
  );
}

export default function Laptop({ offsets, ...props }) {
  const { nodes, materials } = useGLTF("/modelsResource/laptop.glb");
  const textures = SCREEN_TEXTURES.map((path) => useTexture(path));

  const [activeScreen, setActiveScreen] = useState(0);
  const [accentColor, setAccentColor] = useState("colorKBO");
  const [float, setFloat] = useState(false);

  const laptopRef = useRef();
  const screenRef = useRef();
  const timeline = useRef();
  const scroll = usePageScroll();

  // Sync accent color to #background data attribute
  useEffect(() => {
    const bg = document.querySelector("#background");
    if (bg) bg.setAttribute("data-color", accentColor);
  }, [accentColor]);

  useFrame(() => {
    if (timeline.current) {
      timeline.current.seek(scroll.current * TIMELINE_DURATION);
    }

    const o = scroll.current;
    const { projectIntro, project1, project2, project3, project4, project5 } = offsets;
    if (projectIntro === undefined) return;

    const next =
      o < projectIntro ? 0 :
        o < project1 ? 0 :
          o < project2 ? 1 :
            o < project3 ? 2 :
              o < project4 ? 3 :
                o < project5 ? 4 : 5;

    if (next !== activeScreen) {
      setActiveScreen(next);
      setAccentColor(ACCENT_COLORS[next] ?? ACCENT_COLORS[ACCENT_COLORS.length - 1]);
      setFloat(next >= 1);
    }
  });


  useEffect(() => {
    if (!laptopRef.current || !screenRef.current || offsets.projectIntro === undefined) return;

    const t = (key) => offsets[key] * TIMELINE_DURATION;
    const mid = (a, b) => (offsets[a] + offsets[b]) / 2 * TIMELINE_DURATION;
    const lap = laptopRef.current;
    const scr = screenRef.current;

    const screenTo = (state, at) => {
      const { rot, pos } = SCREEN_ROT[state];
      timeline.current
        .to(scr.rotation, { x: rot.x, y: rot.y, z: rot.z }, at)
        .to(scr.position, { x: pos.x, y: pos.y, z: pos.z }, at);
    };

    timeline.current = gsap.timeline({ defaults: { duration: 1 } });

    // ── Hero: orient flat, stay fully off-screen ──────────────────────────
    screenTo("close", t("hero"))
    timeline.current
      .to(lap.rotation, { x: -Math.PI / 2, z: 0 }, t("hero"))

    // ── Slide in during about, land at mid(about → projectIntro) ─────────
    timeline.current
      .to(lap.position, { x: -2, y: -3 }, mid("about", "projectIntro"))
    // .to(lap.rotation, { x: -Math.PI / 2, z: Math.PI / 6 }, mid("about", "projectIntro"))

    // ── Project intro: open screen ────────────────────────────────────────
    screenTo("open", t("projectIntro"))
    timeline.current
      .to(lap.rotation, { x: -Math.PI / 2, z: Math.PI / 6 }, t("projectIntro"))


    // ── Project 1: transition starts mid(projectIntro→project1) ──────────
    screenTo("close", mid("projectIntro", "project1"))
    timeline.current
      .to(lap.position, { x: 0 }, mid("projectIntro", "project1"))
      .to(lap.rotation, { z: Math.PI }, mid("projectIntro", "project1"))
    screenTo("open", t("project1"))
    timeline.current
      .to(lap.position, { x: 3, z: 0 }, t("project1"))
      .to(lap.rotation, { z: Math.PI * 2 - Math.PI / 4 }, t("project1"))

    // ── Project 2: transition starts mid(project1→project2) ──────────────
    screenTo("close", mid("project1", "project2"))
    timeline.current
      .to(lap.position, { x: 0 }, mid("project1", "project2"))
      .to(lap.rotation, { z: Math.PI }, mid("project1", "project2"))
    screenTo("open", t("project2"))
    timeline.current
      .to(lap.position, { x: -5 }, t("project2"))
      .to(lap.rotation, { z: Math.PI / 4 }, t("project2"))

    // ── Project 3: transition starts mid(project2→project3) ──────────────
    screenTo("close", mid("project2", "project3"))
    timeline.current
      .to(lap.position, { z: -2, x: 0 }, mid("project2", "project3"))
      .to(lap.rotation, { z: 0, x: -Math.PI }, mid("project2", "project3"))
    timeline.current
      .to(lap.position, { z: 0 }, t("project3"))
      .to(lap.rotation, { x: -Math.PI / 2 }, t("project3"))
    screenTo("open", t("project3"))
    timeline.current
      .to(lap.position, { x: 5 }, t("project3"))
      .to(lap.rotation, { z: -Math.PI / 4 }, t("project3"))

    // ── Project 4: transition starts mid(project3→project4) ──────────────
    screenTo("close", mid("project3", "project4"))
    timeline.current
      .to(lap.position, { x: 0 }, mid("project3", "project4"))
      .to(lap.rotation, { z: 0 }, mid("project3", "project4"))
    screenTo("open", t("project4"))

    // ── Project 5: fly out mid(project4→project5), done at project5 ──────
    screenTo("close", mid("project4", "project5"))
    timeline.current
      .to(lap.position, { y: 9 }, t("project5"))
    // .to(lap.rotation, { y: 0, x: 0, z: 0 }, t("project5"));

  }, [offsets]);

  return (
    <Float speed={float ? 0.85 : 0} rotationIntensity={0.5} floatIntensity={0.5} floatingRange={[0.05, 0.05]}>
      <group
        {...props}
        ref={laptopRef}
        dispose={null}
        scale={16}
        position={[INITIAL.pos.x, -9, INITIAL.pos.z]}
        rotation={[INITIAL.rot.x, INITIAL.rot.y, INITIAL.rot.z]}
      >
        <group scale={0.01}>
          <group position={[0, 0.02, 0]} rotation={[0, 0, 0]} scale={100}>

            {/* Screen lid */}
            <group
              ref={screenRef}
              position={[INITIAL.pos.x, INITIAL.pos.y, INITIAL.pos.z]}
              rotation={[INITIAL.rot.x, INITIAL.rot.y, INITIAL.rot.z]}
            >
              <mesh geometry={nodes.Screen_Frame_Screen_Frame_0.geometry} material={materials.Screen_Frame} />
              <mesh geometry={nodes.Screen_Frame_Screen_Shiny_Border_0.geometry} material={materials.Screen_Shiny_Border} />
              <mesh geometry={nodes.Screen_Frame_Base_0.geometry} material={materials.Base} />
              {textures.map((tex, i) => (
                <ScreenMesh key={i} texture={tex} isActive={activeScreen === i} />
              ))}
            </group>

            {/* Base */}
            <group>
              <mesh geometry={nodes.Modern_Slim_Laptop_Base_0.geometry} material={materials.Base} />
              <mesh geometry={nodes.Modern_Slim_Laptop_Touchpad_0.geometry} material={materials.Touchpad} />
              <mesh geometry={nodes.Modern_Slim_Laptop_Plastic_Black_Ports_0.geometry} material={materials.Plastic_Black_Ports} />
              <mesh geometry={nodes.Modern_Slim_Laptop_Lights_0.geometry} material={materials.Lights} />
              <mesh
                geometry={nodes.Keyboard_Keyboard_0.geometry}
                material={materials.Keyboard}
                position={[-0.07, 0, 0.01]}
                rotation={[0.02, 0, 0]}
              />
            </group>

          </group>
        </group>
      </group>
    </Float>
  );
}

useGLTF.preload("/modelsResource/laptop.glb");