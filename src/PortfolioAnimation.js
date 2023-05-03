import Smartphone from "./Smartphone.js";
import Laptop from "./Laptop.js";

import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

export default function PortfolioSection() {
   return (
    <group>
      <Smartphone/>
      <Laptop/>
    </group>
  );
}