"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";

import Smartphone from "@/models/Smartphone.js";
import Laptop from "@/models/Laptop.js";

export default function FixedScene({ offsets }) {
  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    >
      <Canvas shadows camera={{ position: [0, 0, 7] }}>
        <Suspense fallback={null}>
          <ambientLight color="white" intensity={0.3} />
          <Environment
            blur={0}
            files="/images/Environment/studio_small_08_1k.hdr"
          />
          <Laptop offsets={offsets} />
          <Smartphone offsets={offsets} />
        </Suspense>
      </Canvas>
    </div>
  );
}
