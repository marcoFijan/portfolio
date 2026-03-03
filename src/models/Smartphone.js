/*
  Smartphone.js
  ------------
  Scroll-driven GSAP animation across all sections.
  Desktop only — not rendered on mobile.

  Model by Manuel W. (https://sketchfab.com/nebulariser) — CC-BY-4.0
*/

import { useRef, useEffect, useState } from "react";
import { useGLTF, useTexture, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { usePageScroll } from "@/hooks/Usepagescroll";

const SCREENS = [
  "./images/Thumbnails/KBOReeshofThumbMobile.png",        // 0 — default / projectIntro
  "./images/Thumbnails/YOGwotyThumbMobile.png",           // 1 — project2
  "./images/Thumbnails/StandaardAanbouwThumbMobile.png",  // 2 — project3
  "./images/Thumbnails/RingRingThumbMobile.png",          // 3 — project4+
];

const INITIAL = {
  rot: { x: 0, y: 0, z: 0.3 },
  pos: { x: 5, y: -10, z: 0 },
};

const TIMELINE_DURATION = 20;

export default function Smartphone({ offsets, ...props }) {
  const { nodes, materials } = useGLTF("/modelsResource/smartphone.glb");

  const [screenIndex, setScreenIndex] = useState(0);
  const smartScreen = useTexture(SCREENS[screenIndex]);

  const smartphoneRef = useRef();
  const timeline = useRef();
  const scroll = usePageScroll();

  // Preload all textures on mount so swaps are instant
  useEffect(() => {
    SCREENS.forEach((path) => { const img = new Image(); img.src = path; });
  }, []);

  // Per-frame: seek timeline + swap screen texture
  useFrame(() => {
    if (timeline.current) {
      timeline.current.seek(scroll.current * TIMELINE_DURATION);
    }

    const o = scroll.current;
    const { projectIntro, project1, project2, project3, project4 } = offsets;
    if (projectIntro === undefined) return;

    const next =
      o < project2 ? 0 :
        o < project3 ? 1 :
          o < project4 ? 2 : 3;

    if (next !== screenIndex) setScreenIndex(next);
  });

  // Build GSAP timeline
  useEffect(() => {
    if (!smartphoneRef.current || offsets.projectIntro === undefined) return;

    const t = (key) => offsets[key] * TIMELINE_DURATION;
    const mid = (a, b) => (offsets[a] + offsets[b]) / 2 * TIMELINE_DURATION;
    const quarter = (a, b) => (offsets[a] * 0.75 + offsets[b] * 0.25) * TIMELINE_DURATION;
    const quarter3 = (a, b) => (offsets[a] * 0.25 + offsets[b] * 0.75) * TIMELINE_DURATION;

    const pos = smartphoneRef.current.position;
    const rot = smartphoneRef.current.rotation;

    timeline.current = gsap
      .timeline({ defaults: { duration: 1 } })

      // Hero: initial orientation, stays off-screen right
      .to(rot, { x: -Math.PI / 2 }, t("hero"))
      // .to(pos, { y: -2 }, t("hero"))
      // .to(pos, { x: 18 }, t("heroMid"))
      // .to(rot, { z: 2 }, t("heroMid"))
      // .to(pos, { x: 5 }, t("heroEnd"))
      .to(rot, { z: 0.2 }, t("heroEnd"))
    // .to(pos, { y: -3 }, t("heroEnd"))

    // About: float alongside content
    // .to(pos, { x: 5 }, t("about"))
    // .to(rot, { z: 0.2 }, t("about"))

    // Hover up
    timeline.current
      .to(pos, { x: 5, y: -3 }, mid("about", "projectIntro"))


      // Project intro: fly to right side, face forward
      .to(pos, { x: 4 }, t("projectIntro"))
      .to(rot, { x: 0, z: 0 }, t("projectIntro"))

      // Project 1: hold position (screen swaps)
      // .to(pos, { x: 4 }, t("project1"))
      // .to(rot, { x: 0 }, t("project1"))

      // Project 2: fly off at mid(projectIntro→project1), land at project2
      .to(pos, { x: 20 }, mid("projectIntro", "project1"))
      .to(rot, { y: Math.PI * 2 }, mid("projectIntro", "project1"))
      .to(pos, { x: 20 }, mid("project1", "project2"))

      .to(pos, { x: 4 }, t("project2"))
      .to(rot, { x: Math.PI * 2 }, t("project2"))


      // Project 3: swing left at mid, land at project3
      .to(pos, { y: 0, x: -1, z: 2 }, mid("project2", "project3"))
      .to(rot, { y: Math.PI }, mid("project2", "project3"))
      // .to(pos, { x: -1 }, t("project3"))
      // .to(rot, { y: Math.PI }, t("project3"))
      .to(pos, { z: 0, x: -5, y: -1 }, t("project3"))
      .to(rot, { y: 0 }, t("project3"))

      // Project 4: reposition at mid, land at project4
      .to(pos, { y: 1 }, mid("project3", "project4"))
      .to(rot, { z: 0.2 }, mid("project3", "project4"))

      .to(pos, { x: 5 }, quarter3("project3", "project4"))
      .to(rot, { y: Math.PI * 4 }, quarter3("project3", "project4"))

      .to(rot, { z: -0.2 }, t("project4"))
      .to(pos, { y: -3 }, t("project4"))

      .to(pos, { z: 0 }, mid("project4", "project5"))
      .to(rot, { x: Math.PI * 2 - Math.PI / 2 }, mid("project4", "project5"))

      .to([pos], { y: 9 }, t("project5"))







      // .to(pos, { z: 3, x: 5, y: -1 }, mid("project3", "project4"))

      // .to(rot, { y: 0 }, mid("project3", "project4"))
      // .to(pos, { y: 0 }, t("project4"))
      // .to(rot, { z: -0.3 }, t("project4"))


      // Experience: fly out
      .to(rot, { z: -0.3, y: Math.PI * 2 - 0.1 }, t("experience"))
      .to(pos, { y: -3 }, t("experience"))
      .to(rot, { x: Math.PI * 2 - Math.PI / 2 }, t("experience") + 0.5)
      .to(pos, { x: 20 }, TIMELINE_DURATION);

  }, [offsets]);

  // Render — starts off-screen right
  return (
    <Float speed={1.3} rotationIntensity={0.5} floatIntensity={0.5} floatingRange={[0.05, 0.05]}>
      <group
        {...props}
        ref={smartphoneRef}
        dispose={null}
        scale={1.3}
        position={[INITIAL.pos.x, INITIAL.pos.y, INITIAL.pos.z]}
        rotation={[INITIAL.rot.x, INITIAL.rot.y, INITIAL.rot.z]}
      >
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <mesh geometry={nodes.Object_6.geometry} material={materials.Vidrio_Negro} />
              <mesh geometry={nodes.Object_7.geometry} material={materials.Vidrio_Negro} />
              <mesh geometry={nodes.Object_8.geometry} material={materials.Vidrio_Negro} />
              <mesh geometry={nodes.Object_9.geometry} material={materials.Metal_Cromado} />
              <mesh geometry={nodes.Object_10.geometry} material={materials.Metal_Cromado} />
              <mesh receiveShadow castShadow position={[0, 0.01, 0]}>
                <boxGeometry args={[0.9, 0.05, 1.9]} />
                <meshStandardMaterial map={smartScreen} roughness={1} metalness={1} />
              </mesh>
              <mesh geometry={nodes.Object_13.geometry} material={materials.Metal_Negro} />
              <mesh geometry={nodes.Object_14.geometry} material={materials.Bandas_magneticas} />
            </group>
            <group position={[0, 1, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <mesh geometry={nodes.Object_18.geometry} material={materials.Vidrio_Negro} />
              <mesh geometry={nodes.Object_19.geometry} material={materials.Metal_Cromado} />
            </group>
            <group position={[0.38, 0.88, -0.06]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={0.06}>
              <mesh geometry={nodes.Object_21.geometry} material={materials.Vidrio_Negro} />
              <mesh geometry={nodes.Object_22.geometry} material={materials.Metal_Cromado} />
            </group>
            <group position={[0, -0.99, 0]} rotation={[0, Math.PI / 2, 0]} scale={0.01}>
              <mesh geometry={nodes.Object_32.geometry} material={materials.Metal_Ceramico} />
              <mesh geometry={nodes.Object_33.geometry} material={materials.Cobre} />
            </group>
            <mesh geometry={nodes.Object_4.geometry} material={materials.Metal_Cromado} position={[0.5, 0.54, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 0.67, 1]} />
            <mesh geometry={nodes.Object_16.geometry} material={materials.Metal_Cromado} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Object_24.geometry} material={materials.Camara} position={[0.38, 0.88, -0.05]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={0.04} />
            <mesh geometry={nodes.Object_26.geometry} material={materials.Luz_Led} position={[0.19, 0.91, -0.05]} rotation={[-Math.PI / 2, -1.39, Math.PI]} scale={0.03} />
            <mesh geometry={nodes.Object_28.geometry} material={materials.Camara} position={[0.27, 0.88, -0.05]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={0.04} />
            <mesh geometry={nodes.Object_30.geometry} material={materials.Camara} position={[0, 0.85, 0.03]} rotation={[Math.PI / 2, 0, 0]} scale={[1.08, 1.03, 1.18]} />
            <mesh geometry={nodes.Object_35.geometry} material={materials.Metal_Negro} position={[0, -0.95, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.03, 1.1, 1.03]} />
            <mesh geometry={nodes.Object_37.geometry} material={materials.Metal_Negro} position={[0.22, -0.99, 0]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Object_39.geometry} material={materials.Metal_Negro} position={[-0.22, -0.99, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.02, 1.1, 1.02]} />
          </group>
        </group>
      </group>
    </Float>
  );
}

useGLTF.preload("/modelsResource/smartphone.glb");