import Smartphone from "../models/Smartphone.js";
import Laptop from "../models/Laptop.js";

import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

export default function PortfolioSection({ mobile }) {
  return (
    <group>
      <Smartphone mobile={mobile} />
      <Laptop mobile={mobile} />
    </group>
  );
}
