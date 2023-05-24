import Smartphone from "../models/Smartphone.js";
import Laptop from "../models/Laptop.js";

import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

export default function PortfolioSection() {
  return (
    <group>
      <Smartphone />
      <Laptop />
    </group>
  );
}
