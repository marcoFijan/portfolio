/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/laptopv5.glb
Author: Blaž Mraz (https://sketchfab.com/Mraz3D)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/modern-slim-laptop-fbf172f8b14241feab581dcb1fbcd475
Title: Modern Slim Laptop
*/

import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture, useScroll } from "@react-three/drei";
import { gsap } from "gsap";

// IMAGES
import KBOReeshofThumbnail from "../public/images/Thumbnails/KBOReeshofThumb.png";
import StandaardAanbouwThumbnail from "../public/images/Thumbnails/StandaardAanbouwThumb.png";
import YODashboardThumbnail from "../public/images/Thumbnails/YODashboardThumb.png";
import YOGwotyThumbnail from "../public/images/Thumbnails/YOGwotyThumb.png";
// import KBOReeshofThumbnail from "../public/images/Thumbnails/KBOReeshofThumb.png";

export default function Laptop(...props) {
  const { nodes, materials } = useGLTF("./models/laptop.glb");
  const [laptopScreenPath, setLaptopScreenPath] = useState("./images/p1.jpg");
  // const rotation = {
  //   open: { rot: [1.36, 0, 0], pos: [0, 0.12, 0.01] },
  //   close: { rot: [Math.PI / 0.995, 0, 0], pos: [0, 0.122, 0.01] },
  // };

  const startScreenPosition = {
    rot: { x: 1.06, y: 0, z: 0 },
    pos: { x: 0, y: 0.12, z: 0.01 },
  };
  const [animationDone, setAnimationDone] = useState(false);
  const laptopScreenTexture = useTexture(laptopScreenPath);

  const laptop = useRef();
  const screenRot = useRef();
  const scroll = useScroll();
  const timeline = useRef();
  // changePortfolioScrollBottom(true)

  // Update timeline
  useFrame((state, delta) => {
    if (typeof timeline.current !== "undefined")
      timeline.current.seek(scroll.offset * timeline.current.duration());
    // Hardcoded screenchange since .call function from gsap has performance issues
    if (scroll.offset < 0.09) {
      setLaptopScreenPath("./images/Thumbnails/codeThumb.png");
    } else if ((scroll.offset >= 0.09) & (scroll.offset <= 0.4)) {
      setLaptopScreenPath("./images/Thumbnails/KBOReeshofThumb.png");
    } else if ((scroll.offset >= 0.41) & (scroll.offset <= 0.43)) {
      setLaptopScreenPath("./images/Thumbnails/YODashboardThumb.png");
    } else if ((scroll.offset >= 0.526) & (scroll.offset <= 0.6)) {
      setLaptopScreenPath("./images/Thumbnails/YOGwotyThumb.png");
    } else if ((scroll.offset >= 0.601) & (scroll.offset <= 0.621)) {
      setLaptopScreenPath("./images/Thumbnails/StandaardAanbouwThumb.png");
    } else if ((scroll.offset >= 0.697) & (scroll.offset <= 0.71)) {
      setLaptopScreenPath("./images/Thumbnails/StandaardAanbouwThumb.png");
    }
    console.log(scroll.offset);
  });

  useEffect(() => {
    // Setup timeline
    timeline.current = gsap.timeline({
      defaults: { duration: 1 },
    });

    // Screen rotation values
    const rotation = {
      openStart: {
        rot: { x: 1.06, y: 0, z: 0 },
        pos: { x: 0, y: 0.12, z: 0.01 },
      },
      open: { rot: { x: 1.56, y: 0, z: 0 }, pos: { x: 0, y: 0.12, z: 0.01 } },
      close: {
        rot: { x: Math.PI / 0.995, y: 0, z: 0 },
        pos: { x: 0, y: 0.122, z: 0.01 },
      },
    };

    const startpositions = {
      hero: 0,
      portfolioIntro: 5,
      firstProject: 7,
      firstProjectEnd: 8,
      secondProject: 9,
      secondProjectEnd: 10,
      thirdProject: 11,
      thirdProjectEnd: 12,
      fourthProject: 13,
      fourthProjectEnd: 14,
      otherProjects: 15,
    };

    // Animation
    timeline.current
      // OPENINGSANIMATION
      .to(
        screenRot.current.rotation,
        { x: rotation.close.rot.x },
        startpositions.hero
      )
      .to(
        screenRot.current.rotation,
        { y: rotation.close.rot.y },
        startpositions.hero
      )
      .to(
        screenRot.current.rotation,
        { z: rotation.close.rot.z },
        startpositions.hero
      )
      .to(
        screenRot.current.position,
        { x: rotation.close.pos.x },
        startpositions.hero
      )
      .to(
        screenRot.current.position,
        { y: rotation.close.pos.y },
        startpositions.hero
      )
      .to(
        screenRot.current.position,
        { z: rotation.close.pos.z },
        startpositions.hero
      )
      .to(laptop.current.rotation, { x: -Math.PI / 2 }, startpositions.hero)
      .to(laptop.current.position, { y: -2 }, startpositions.hero)
      .to(laptop.current.position, { x: -20 }, 3.5)
      .to(laptop.current.position, { y: -2 }, startpositions.portfolioIntro)
      .to(laptop.current.position, { x: 0 }, startpositions.portfolioIntro)
      // FIRST PROJECT
      .to(
        screenRot.current.rotation,
        { x: rotation.open.rot.x },
        startpositions.firstProject
      )
      .to(
        screenRot.current.rotation,
        { y: rotation.open.rot.y },
        startpositions.firstProject
      )
      .to(
        screenRot.current.rotation,
        { z: rotation.open.rot.z },
        startpositions.firstProject
      )
      .to(
        screenRot.current.position,
        { x: rotation.open.pos.x },
        startpositions.firstProject
      )
      .to(
        screenRot.current.position,
        { y: rotation.open.pos.y },
        startpositions.firstProject
      )
      .to(
        screenRot.current.position,
        { z: rotation.open.pos.z },
        startpositions.firstProject
      )
      .to(laptop.current.position, { x: -5 }, startpositions.firstProject)
      .to(
        laptop.current.rotation,
        { z: Math.PI / 4 },
        startpositions.firstProject
      )
      // First to second project transition
      .to(
        screenRot.current.rotation,
        { x: rotation.close.rot.x },
        startpositions.firstProjectEnd
      )
      .to(
        screenRot.current.rotation,
        { y: rotation.close.rot.y },
        startpositions.firstProjectEnd
      )
      .to(
        screenRot.current.rotation,
        { z: rotation.close.rot.z },
        startpositions.firstProjectEnd
      )
      .to(
        screenRot.current.position,
        { x: rotation.close.pos.x },
        startpositions.firstProjectEnd
      )
      .to(
        screenRot.current.position,
        { y: rotation.close.pos.y },
        startpositions.firstProjectEnd
      )
      .to(
        screenRot.current.position,
        { z: rotation.close.pos.z },
        startpositions.firstProjectEnd
      )
      // .call(
      //   () => {
      //     this.props.dispatch(
      //       setLaptopScreenPath("./images/Thumbnails/YODashboardThumb.png")
      //     );
      //   },
      //   [],
      //   null,
      //   ">"
      // )
      // .call(
      //   () => {
      //     setLaptopScreenPath("./images/Thumbnails/YODashboardThumb.png");
      //   },
      //   [],
      //   null,
      //   ">"
      // )
      .to(laptop.current.position, { x: 0 }, startpositions.firstProjectEnd)
      .to(laptop.current.rotation, { z: 0 }, startpositions.firstProjectEnd)
      // SECOND PROJECT
      .to(
        screenRot.current.rotation,
        { x: rotation.open.rot.x },
        startpositions.secondProject
      )
      .to(
        screenRot.current.rotation,
        { y: rotation.open.rot.y },
        startpositions.secondProject
      )
      .to(
        screenRot.current.rotation,
        { z: rotation.open.rot.z },
        startpositions.secondProject
      )
      .to(
        screenRot.current.position,
        { x: rotation.open.pos.x },
        startpositions.secondProject
      )
      .to(
        screenRot.current.position,
        { y: rotation.open.pos.y },
        startpositions.secondProject
      )
      .to(
        screenRot.current.position,
        { z: rotation.open.pos.z },
        startpositions.secondProject
      )
      .to(laptop.current.position, { x: 5 }, startpositions.secondProject)
      .to(
        laptop.current.rotation,
        { z: -Math.PI / 4 },
        startpositions.secondProject
      )
      // Second to third project transition
      .to(
        screenRot.current.rotation,
        { x: rotation.close.rot.x },
        startpositions.secondProjectEnd
      )
      .to(
        screenRot.current.rotation,
        { y: rotation.close.rot.y },
        startpositions.secondProjectEnd
      )
      .to(
        screenRot.current.rotation,
        { z: rotation.close.rot.z },
        startpositions.secondProjectEnd
      )
      .to(
        screenRot.current.position,
        { x: rotation.close.pos.x },
        startpositions.secondProjectEnd
      )
      .to(
        screenRot.current.position,
        { y: rotation.close.pos.y },
        startpositions.secondProjectEnd
      )
      .to(
        screenRot.current.position,
        { z: rotation.close.pos.z },
        startpositions.secondProjectEnd
      )
      // .call(
      //   () => {
      //     setLaptopScreenPath("./images/Thumbnails/YOGwotyThumb.png");
      //   },
      //   [],
      //   null,
      //   "<1"
      // )
      // .call(
      //   () => {
      //     setLaptopScreenPath("./images/Thumbnails/YOGwotyThumb.png");
      //   },
      //   [],
      //   null,
      //   "<1"
      // )
      .to(laptop.current.position, { x: 0 }, startpositions.secondProjectEnd)
      .to(laptop.current.rotation, { z: 0 }, startpositions.secondProjectEnd)

      // THIRD PROJECT
      .to(
        screenRot.current.rotation,
        { x: rotation.open.rot.x },
        startpositions.thirdProject
      )
      .to(
        screenRot.current.rotation,
        { y: rotation.open.rot.y },
        startpositions.thirdProject
      )
      .to(
        screenRot.current.rotation,
        { z: rotation.open.rot.z },
        startpositions.thirdProject
      )
      .to(
        screenRot.current.position,
        { x: rotation.open.pos.x },
        startpositions.thirdProject
      )
      .to(
        screenRot.current.position,
        { y: rotation.open.pos.y },
        startpositions.thirdProject
      )
      .to(
        screenRot.current.position,
        { z: rotation.open.pos.z },
        startpositions.thirdProject
      )
      .to(laptop.current.position, { x: -5 }, startpositions.thirdProject)
      .to(
        laptop.current.rotation,
        { z: Math.PI / 4 },
        startpositions.thirdProject
      )
      // Third to fourth project transition
      .to(
        screenRot.current.rotation,
        { x: rotation.close.rot.x },
        startpositions.thirdProjectEnd
      )
      .to(
        screenRot.current.rotation,
        { y: rotation.close.rot.y },
        startpositions.thirdProjectEnd
      )
      .to(
        screenRot.current.rotation,
        { z: rotation.close.rot.z },
        startpositions.thirdProjectEnd
      )
      .to(
        screenRot.current.position,
        { x: rotation.close.pos.x },
        startpositions.thirdProjectEnd
      )
      .to(
        screenRot.current.position,
        { y: rotation.close.pos.y },
        startpositions.thirdProjectEnd
      )
      .to(
        screenRot.current.position,
        { z: rotation.close.pos.z },
        startpositions.thirdProjectEnd
      )
      // .call(
      //   () => {
      //     setLaptopScreenPath("./images/Thumbnails/StandaardAanbouwThumb.png");
      //   },
      //   [],
      //   null,
      //   "<1"
      // )
      // .call(
      //   () => {
      //     setLaptopScreenPath("./images/Thumbnails/StandaardAanbouwThumb.png");
      //   },
      //   [],
      //   null,
      //   "<1"
      // )
      .to(laptop.current.position, { x: 0 }, startpositions.thirdProjectEnd)
      .to(laptop.current.rotation, { z: 0 }, startpositions.thirdProjectEnd)
      // FOURTH PROJECT
      .to(
        screenRot.current.rotation,
        { x: rotation.open.rot.x },
        startpositions.fourthProject
      )
      .to(
        screenRot.current.rotation,
        { y: rotation.open.rot.y },
        startpositions.fourthProject
      )
      .to(
        screenRot.current.rotation,
        { z: rotation.open.rot.z },
        startpositions.fourthProject
      )
      .to(
        screenRot.current.position,
        { x: rotation.open.pos.x },
        startpositions.fourthProject
      )
      .to(
        screenRot.current.position,
        { y: rotation.open.pos.y },
        startpositions.fourthProject
      )
      .to(
        screenRot.current.position,
        { z: rotation.open.pos.z },
        startpositions.fourthProject
      )
      .to(laptop.current.position, { x: 5 }, startpositions.fourthProject)
      .to(
        laptop.current.rotation,
        { z: -Math.PI / 4 },
        startpositions.fourthProject
      )
      // Fourth to other project transition
      .to(
        screenRot.current.rotation,
        { x: rotation.close.rot.x },
        startpositions.fourthProjectEnd
      )
      .to(
        screenRot.current.rotation,
        { y: rotation.close.rot.y },
        startpositions.fourthProjectEnd
      )
      .to(
        screenRot.current.rotation,
        { z: rotation.close.rot.z },
        startpositions.fourthProjectEnd
      )
      .to(
        screenRot.current.position,
        { x: rotation.close.pos.x },
        startpositions.fourthProjectEnd
      )
      .to(
        screenRot.current.position,
        { y: rotation.close.pos.y },
        startpositions.fourthProjectEnd
      )
      .to(
        screenRot.current.position,
        { z: rotation.close.pos.z },
        startpositions.fourthProjectEnd
      )
      .to(laptop.current.position, { x: 0 }, startpositions.fourthProjectEnd)
      .to(laptop.current.rotation, { z: 0 }, startpositions.fourthProjectEnd)

      // .to(laptop.current.rotation, { x: -0.2 }, startpositions.firstProject)

      // .to(laptop.current.rotation, { z: 0.6 }, startpositions.firstProject)

      // .to(laptop.current.rotation, { y: -3 }, 2.5)
      // .to(laptop.current.position, { x: -6 }, 2.5)

      // .call(
      //   () => setLaptopScreenPath("./images/marcoPointing.png"),

      //   [],
      //   null,
      //   "<2"
      // )
      // .to(laptop.current.rotation, { y: -5 }, 4.5)

      // .to(laptop.current.rotation, { y: 1 }, 8)
      // .to(laptop.current.position, { x: -1 }, 8)
      // .call(
      //   function () {
      //     setLaptopScreenPath("./images/p1.jpg");
      //   },
      //   [],
      //   null,
      //   "<1"
      // )

      // .to(laptop.current.rotation, { y: 0 }, 11)
      // .to(laptop.current.rotation, { x: 1 }, 11)
      // .to(laptop.current.position, { x: 0 }, 11)

      // .to(laptop.current.rotation, { y: 0 }, 13)
      // .to(laptop.current.rotation, { x: -1 }, 13)
      // .to(laptop.current.position, { x: 0 }, 13)

      // .to(laptop.current.rotation, { y: 0 }, 16)
      // .to(laptop.current.rotation, { x: 0 }, 16)
      // .to(laptop.current.position, { x: 0 }, 16)

      .to(laptop.current.rotation, { y: 0 }, 20)
      .to(laptop.current.rotation, { x: 0 }, 20)
      .to(laptop.current.position, { x: 0 }, 20);
  }, []);

  return (
    <group
      {...props}
      dispose={null}
      scale={16}
      ref={laptop}
      position={[0, -7, 0]}
      rotation={[-0.4, 0, 0]}
    >
      <group scale={0.01}>
        <group position={[0, 0.02, 0]} rotation={[0, 0, 0]} scale={100}>
          <group
            position={[
              startScreenPosition.pos.x,
              startScreenPosition.pos.y,
              startScreenPosition.pos.z,
            ]}
            rotation={[
              startScreenPosition.rot.x,
              startScreenPosition.rot.y,
              startScreenPosition.rot.z,
            ]}
            ref={screenRot}
          >
            <mesh
              geometry={nodes.Screen_Frame_Screen_Frame_0.geometry}
              material={materials.Screen_Frame}
            />
            <mesh
              geometry={nodes.Screen_Frame_Screen_Shiny_Border_0.geometry}
              material={materials.Screen_Shiny_Border}
            />
            <mesh
              geometry={nodes.Screen_Frame_Base_0.geometry}
              material={materials.Base}
            />
            <mesh
              rotation={[0, Math.PI / 2, 0]}
              position={[0, 0.127, 0]}
              scale={0.0198}
            >
              <boxGeometry args={[0.01, 10.6, 16]} />
              <meshStandardMaterial
                map={laptopScreenTexture}
                roughness={0.3}
                metalness={0.3}
              />
            </mesh>
          </group>
          <mesh
            geometry={nodes.Modern_Slim_Laptop_Base_0.geometry}
            material={materials.Base}
          />
          <mesh
            geometry={nodes.Modern_Slim_Laptop_Touchpad_0.geometry}
            material={materials.Touchpad}
          />
          <mesh
            geometry={nodes.Modern_Slim_Laptop_Plastic_Black_Ports_0.geometry}
            material={materials.Plastic_Black_Ports}
          />
          <mesh
            geometry={nodes.Modern_Slim_Laptop_Lights_0.geometry}
            material={materials.Lights}
          />
          <mesh
            geometry={nodes.Keyboard_Keyboard_0.geometry}
            material={materials.Keyboard}
            position={[-0.07, 0, 0.01]}
            rotation={[0.02, 0, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/laptop.glb");
