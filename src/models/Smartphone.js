/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/smartphone.glb
Author: Manuel W. (https://sketchfab.com/nebulariser)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/smartphone-380280333c9f4fb8a21a53d18f6789e6
Title: Smartphone
*/

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGLTF, useTexture, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Smartphone({ pos, rot, mobile, ...props }) {
  const { nodes, materials } = useGLTF("/modelsResource/smartphone.glb");
  let [smartScreenPath, setSmartScreenPath] = useState(
    "./images/Thumbnails/codeThumb.png"
  );
  const smartScreen = useTexture(smartScreenPath);

  const smartphone = useRef();
  const scroll = useScroll();
  const timeline = useRef();

  // Update timeline
  useFrame((state, delta) => {
    if (typeof timeline.current !== "undefined")
      timeline.current.seek(scroll.offset * timeline.current.duration());
    if (scroll.offset < 0.09) {
      setSmartScreenPath("./images/Thumbnails/codeThumb.png");
    } else if ((scroll.offset > 0.09) & (scroll.offset <= 0.47)) {
      setSmartScreenPath("./images/Thumbnails/KBOReeshofThumbMobile.png");
    } else if ((scroll.offset >= 0.48) & (scroll.offset <= 0.633)) {
      setSmartScreenPath("./images/Thumbnails/YOGwotyThumbMobile.png");
    } else if ((scroll.offset >= 0.634) & (scroll.offset <= 0.77)) {
      setSmartScreenPath("./images/Thumbnails/StandaardAanbouwThumbMobile.png");
    } else if ((scroll.offset >= 0.78) & (scroll.offset <= 0.99)) {
      setSmartScreenPath("./images/Thumbnails/RingRingThumbMobile.png");
    }
  });

  useEffect(() => {
    // Setup timeline
    timeline.current = gsap.timeline({
      defaults: { duration: 1 },
    });
    const startpositions = mobile
      ? {
          hero: 0,
          portfolioIntro: 5.8,
          firstProject: 8,
          firstProjectEnd: 9.5,
          thirdProject: 11.8,
          thirdProjectEnd: 13,
          fourthProject: 13.8,
          fourthProjectEnd: 14.8,
          otherProjects: 16,
          otherProjectsEnd: 17,
          otherProjectsEnd2: 17.5,
          endpoint: 20,
        }
      : {
          hero: 0,
          portfolioIntro: 5,
          firstProject: 7,
          firstProjectEnd: 8,
          thirdProject: 10.5,
          thirdProjectEnd: 12,
          fourthProject: 13,
          fourthProjectEnd: 14,
          otherProjects: 15,
          otherProjectsEnd: 16,
          otherProjectsEnd2: 16.5,
          endpoint: 20,
        };

    // Animation
    timeline.current
      // OPENINGSANIMATION
      .to(smartphone.current.rotation, { x: -Math.PI / 2 }, startpositions.hero)
      .to(
        smartphone.current.position,
        { y: mobile ? 0 : -2 },
        startpositions.hero
      )
      .to(smartphone.current.position, { x: 18 }, 2)
      .to(smartphone.current.rotation, { z: 2 }, 2)
      .to(
        smartphone.current.position,
        { x: mobile ? 0 : 5 },
        startpositions.portfolioIntro
      )
      .to(
        smartphone.current.rotation,
        { z: 0.2 },
        startpositions.portfolioIntro
      )
      .to(
        smartphone.current.position,
        { y: mobile ? 0 : -3 },
        startpositions.portfolioIntro
      )

      // FIRST PROJECT
      .to(
        smartphone.current.position,
        { x: mobile ? 0 : 4 },
        startpositions.firstProject
      )
      .to(smartphone.current.rotation, { x: 0 }, startpositions.firstProject)
      // First to second project transition
      .to(
        smartphone.current.position,
        { x: 20 },
        startpositions.firstProjectEnd
      )
      // THIRD PROJECT
      .to(
        smartphone.current.rotation,
        { y: Math.PI * 2 },
        startpositions.firstProjectEnd
      )
      .to(
        smartphone.current.position,
        { x: mobile ? 0 : 4 },
        startpositions.thirdProject
      )
      .to(
        smartphone.current.rotation,
        { y: Math.PI * 2 },
        startpositions.thirdProject
      )
      .to(
        smartphone.current.rotation,
        { x: Math.PI * 2 },
        startpositions.thirdProject
      )
      .to(smartphone.current.position, { y: 0 }, startpositions.thirdProjectEnd)
      .to(
        smartphone.current.position,
        { x: mobile ? 0 : -1 },
        startpositions.thirdProjectEnd
      )
      .to(smartphone.current.position, { z: 2 }, startpositions.thirdProjectEnd)
      .to(
        smartphone.current.rotation,
        { y: Math.PI },
        startpositions.thirdProjectEnd
      )

      // Third to fourth project transition
      .to(smartphone.current.position, { z: 0 }, startpositions.fourthProject)
      .to(
        smartphone.current.position,
        { x: mobile ? 0 : -5 },
        startpositions.fourthProject
      )
      .to(
        smartphone.current.position,
        { y: mobile ? 0 : -1 },
        startpositions.fourthProject
      )
      .to(smartphone.current.rotation, { y: 0 }, startpositions.fourthProject)

      .to(
        smartphone.current.position,
        { y: mobile ? 2 : 0 },
        startpositions.fourthProjectEnd
      )
      .to(
        smartphone.current.rotation,
        { z: -0.3 },
        startpositions.fourthProjectEnd
      )

      // FOURTH PROJECT
      .to(
        smartphone.current.position,
        { x: mobile ? 0 : 5 },
        startpositions.otherProjects
      )
      .to(smartphone.current.rotation, { z: 0.3 }, startpositions.otherProjects)
      .to(
        smartphone.current.rotation,
        { y: Math.PI * 2 },
        startpositions.otherProjects
      )
      .to(
        smartphone.current.rotation,
        { z: -0.3 },
        startpositions.otherProjectsEnd
      )
      .to(
        smartphone.current.rotation,
        { y: Math.PI * 2 - 0.1 },
        startpositions.otherProjectsEnd
      )
      .to(
        smartphone.current.position,
        { y: mobile ? 0 : -3 },
        startpositions.otherProjectsEnd
      )
      .to(
        smartphone.current.rotation,
        { x: Math.PI * 2 - Math.PI / 2 },
        startpositions.otherProjectsEnd2
      )
      // Fourth to other project transition

      .to(smartphone.current.position, { x: 0 }, startpositions.endpoint);
  }, []);

  return (
    <group
      {...props}
      dispose={null}
      scale={1.3}
      ref={smartphone}
      position={[mobile ? 0 : 6, mobile ? 3 : 1, 0]}
      rotation={[0, 0, 0.3]}
    >
      {/* [-1.91, 0.19, -0.49] */}
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials.Vidrio_Negro}
            ></mesh>
            <mesh
              geometry={nodes.Object_7.geometry}
              material={materials.Vidrio_Negro}
            />
            <mesh
              geometry={nodes.Object_8.geometry}
              material={materials.Vidrio_Negro}
            />
            <mesh
              geometry={nodes.Object_9.geometry}
              material={materials.Metal_Cromado}
            />
            <mesh
              geometry={nodes.Object_10.geometry}
              material={materials.Metal_Cromado}
            />
            {/* <mesh
              geometry={nodes.Object_11.geometry}
              material={materials.Pantalla}
            >
              <meshStandardMaterial map={smartScreen} />
            </mesh> */}
            <mesh
              recieveShadow={true}
              castShadow
              position={[0, 0.01, 0]}
              rotation={[0, 0, 0]}
              className=" hover:cursor-pointer"
            >
              <boxGeometry args={[0.9, 0.05, 1.9]} />
              <meshStandardMaterial
                map={smartScreen}
                roughness={1}
                metalness={1}
              />
            </mesh>
            {/* <mesh
              geometry={nodes.Object_12.geometry}
              material={materials.Pantalla}
            /> */}
            <mesh
              geometry={nodes.Object_13.geometry}
              material={materials.Metal_Negro}
            />
            <mesh
              geometry={nodes.Object_14.geometry}
              material={materials.Bandas_magneticas}
            />
          </group>
          <group position={[0, 1, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Object_18.geometry}
              material={materials.Vidrio_Negro}
            />
            <mesh
              geometry={nodes.Object_19.geometry}
              material={materials.Metal_Cromado}
            />
          </group>
          <group
            position={[0.38, 0.88, -0.06]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={0.06}
          >
            <mesh
              geometry={nodes.Object_21.geometry}
              material={materials.Vidrio_Negro}
            />
            <mesh
              geometry={nodes.Object_22.geometry}
              material={materials.Metal_Cromado}
            />
          </group>
          <group
            position={[0, -0.99, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={0.01}
          >
            <mesh
              geometry={nodes.Object_32.geometry}
              material={materials.Metal_Ceramico}
            />
            <mesh
              geometry={nodes.Object_33.geometry}
              material={materials.Cobre}
            />
          </group>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.Metal_Cromado}
            position={[0.5, 0.54, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[1, 0.67, 1]}
          />
          <mesh
            geometry={nodes.Object_16.geometry}
            material={materials.Metal_Cromado}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.Object_24.geometry}
            material={materials.Camara}
            position={[0.38, 0.88, -0.05]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={0.04}
          />
          <mesh
            geometry={nodes.Object_26.geometry}
            material={materials.Luz_Led}
            position={[0.19, 0.91, -0.05]}
            rotation={[-Math.PI / 2, -1.39, Math.PI]}
            scale={0.03}
          />
          <mesh
            geometry={nodes.Object_28.geometry}
            material={materials.Camara}
            position={[0.27, 0.88, -0.05]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={0.04}
          />
          <mesh
            geometry={nodes.Object_30.geometry}
            material={materials.Camara}
            position={[0, 0.85, 0.03]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[1.08, 1.03, 1.18]}
          />
          <mesh
            geometry={nodes.Object_35.geometry}
            material={materials.Metal_Negro}
            position={[0, -0.95, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[1.03, 1.1, 1.03]}
          />
          <mesh
            geometry={nodes.Object_37.geometry}
            material={materials.Metal_Negro}
            position={[0.22, -0.99, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.Object_39.geometry}
            material={materials.Metal_Negro}
            position={[-0.22, -0.99, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[1.02, 1.1, 1.02]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/modelsResource/smartphone.glb");
