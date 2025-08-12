"use client";

import { Canvas } from "@react-three/fiber";
import { useState, Suspense, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// import LoadingScreen from "../organisms/LoadingScreen.js";
// import Footer from "../organisms/Footer.js";
import Smartphone from "../models/Smartphone.js";
import Laptop from "../models/Laptop.js";
import SectionHome from "../sections/SectionHome.js";
import Container from "../sections/Container.js";
import Article from "../sections/Article.js";
import Section from "../sections/Section.js";
import SectionContact from "../sections/ContactSection.js";
import Action from "@/elements/Action.js";
import Footer from "../sections/Footer.js";
import LoadingScreen from "@/collections/LoadingScreen.js";

import H1 from "../elements/H1.js";
import H2 from "../elements/H2.js";
import H3 from "../elements/H3.js";
import Li from "../elements/Li.js";
import Img from "../elements/Img.js";
import P from "../elements/P.js";
import Divider from "../elements/Divider.js";
import NextLink from "@/elements/NextLink";
import ReadMore from "@/collections/ReadMore.js";
import Strong from "@/elements/Strong.js";
import InfiniteTextBar from "@/elements/infiniteTextBar.js";
import Focus from "@/elements/Focus.js";

import testImgUrl from "../../public/images/KBOReeshof/Persona1.jpg";

import {
  ScrollControls,
  Scroll,
  Environment,
  MeshDistortMaterial,
  Sparkles,
  Circle,
  Loader,
  Html,
  Text,
} from "@react-three/drei";

export default function MainCanvas({}) {
  const [screenSize, setScreenSize] = useState(0);
  const [pages, setPages] = useState(0);
  const [mobile, setMobile] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateDimension = () => {
        setScreenSize(window.innerWidth);
      };
      window.addEventListener("resize", updateDimension);

      // if (window.innerWidth <= 832) {
      if (window.innerWidth <= 1000) {
        setPages(11.5);
        setMobile(true);
      } else {
        setPages(11);
        setMobile(false);
      }

      return () => {
        window.removeEventListener("resize", updateDimension);
      };
    }
  }, [screenSize]);

  useEffect(() => {}, []);

  return (
    <div className="w-full h-screen">
      <Canvas
        shadows
        className="h-full w-full overflow-hidden"
        camera={{ position: [0, 0, 7] }}
      >
        {" "}
        <Suspense fallback={null}>
          <ambientLight color={"white"} intensity={0.3} />

          <ScrollControls pages={pages} damping={mobile ? 0 : 0.1}>
            <Environment
              blur={0}
              files="../images/Environment/studio_small_08_1k.hdr"
            />

            <Laptop mobile={mobile} />
            <Smartphone mobile={mobile} />
            <Scroll>
              {/* <Circle args={[1, 100, 200]} scale={5} position={[0, 0, -5]}>
              <MeshDistortMaterial
                color="#e5e7f9"
                attach="material"
                distort={0.5}
                speed={0.6}
              />
            </Circle> */}
            </Scroll>
            <Scroll html className="w-full">
              {/* Introduction animation [1 page] */}
              {/* <HeroSection /> */}
              <Container>
                <SectionHome
                  amountOfPages={1}
                  className={
                    "relative flex flex-col-reverse xl:flex-col items-center justify-end xl:justify-start"
                  }
                >
                  <div className="m-0 p-0 box-border h-[30vh] sm:h-[50vh] threeDSlider w-full xl:w-1/2 xl:self-end xl:min-h-screen relative">
                    <div className="relative opacity-50 z-10 w-full h-screen text-center overflow-visible  scale-[20%] xs:scale-[30%] sm:scale-[40%] md:scale-[40%] lg:scale-[50%] xl:scale-[40%] 2xl:scale-[60%] max-h-[25vh] lg:max-h-[50vh] group ">
                      {/* <!-- 3D Slider --> */}
                      {mobile ? (
                        ""
                      ) : (
                        <div
                          className="absolute aspect-square w-[150px] h-[150px] top-[10%] left-1/2 -ml-[125px] [transform-style:preserve-3d] [transform:perspective(1000px)] animate-[autoRun_90s_linear_infinite] z-20 "
                          style={{ "--quantity": 10 }}
                        >
                          {/* <!-- Items --> */}
                          <div
                            key={1}
                            className="absolute inset-0"
                            style={{
                              "--position": "1",
                              transform: `rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(550px)`,
                            }}
                          >
                            <svg
                              width="800px"
                              height="800px"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              title="Wordpress"
                              className="w-full h-full object-contain block group"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="12"
                                fill="#fff"
                                className="group-hover:fill-[#ffffff] fill-color-logo-bg transition-all duration-500"
                              ></circle>
                              <path
                                fill="#21759B"
                                d="M0,11.99925 C0,16.749 2.76,20.85375 6.76275,22.7985 L1.03875,7.116 C0.3735,8.60775 0,10.25925 0,11.99925 M20.10015,11.394 C20.10015,9.9105 19.5669,8.88375 19.1109,8.085 C18.50265,7.09575 17.9319,6.25875 17.9319,5.27025 C17.9319,4.167 18.76815,3.14025 19.94715,3.14025 C20.0004,3.14025 20.05065,3.147 20.1024,3.15 C17.9679,1.194 15.12315,0 11.9994,0 C7.8069,0 4.11915,2.151 1.9734,5.40825 C2.2554,5.41725 2.5209,5.4225 2.7459,5.4225 C4.00065,5.4225 5.9439,5.27025 5.9439,5.27025 C6.5904,5.232 6.6669,6.183 6.0204,6.25875 C6.0204,6.25875 5.37015,6.33525 4.64715,6.3735 L9.01665,19.371 L11.64315,11.49525 L9.77415,6.3735 C9.12765,6.33525 8.5149,6.25875 8.5149,6.25875 C7.8684,6.2205 7.94415,5.232 8.5914,5.27025 C8.5914,5.27025 10.5729,5.4225 11.7519,5.4225 C13.00665,5.4225 14.9499,5.27025 14.9499,5.27025 C15.59715,5.232 15.6729,6.183 15.0264,6.25875 C15.0264,6.25875 14.3754,6.33525 13.65315,6.3735 L17.98965,19.272 L19.1874,15.273 C19.7049,13.6125 20.10015,12.42075 20.10015,11.394 M12.21015,13.04895 L8.6094,23.5107 C9.6849,23.8272 10.8219,23.9997 11.9994,23.9997 C13.39665,23.9997 14.7369,23.7582 15.98415,23.31945 C15.95265,23.2677 15.92265,23.2137 15.89865,23.15445 L12.21015,13.04895 Z M22.52925,6.242475 C22.581,6.624975 22.61025,7.034475 22.61025,7.476225 C22.61025,8.693475 22.38225,10.062225 21.6975,11.774475 L18.03225,22.371225 C21.6,20.291475 23.99925,16.425975 23.99925,11.999475 C23.99925,9.912975 23.466,7.951725 22.52925,6.242475"
                                className="group-hover:fill-[#21759B] fill-color-logo-inner transition-all duration-500"
                              />
                            </svg>
                          </div>
                          <div
                            key={2}
                            className="absolute inset-0"
                            style={{
                              "--position": "2",
                              transform: `rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(550px)`,
                            }}
                          >
                            <svg
                              width="800px"
                              height="800px"
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              title="Figma"
                              className="w-full h-full object-contain block group"
                            >
                              <path
                                fill="#1ABCFE"
                                d="M8.55 8c0-1.289 1.019-2.333 2.275-2.333C12.082 5.667 13.1 6.71 13.1 8c0 1.289-1.018 2.333-2.275 2.333C9.57 10.333 8.55 9.29 8.55 8z"
                                className="group-hover:fill-[#1ABCFE] fill-color-logo-inner transition-all duration-500"
                              />
                              <path
                                fill="#0ACF83"
                                d="M4 12.667c0-1.289 1.019-2.334 2.275-2.334H8.55v2.334C8.55 13.955 7.531 15 6.275 15S4 13.955 4 12.667z"
                                className="group-hover:fill-[#0ACF83] fill-color-logo-inner transition-all duration-500"
                              />
                              <path
                                fill="#FF7262"
                                d="M8.55 1v4.667h2.275c1.257 0 2.275-1.045 2.275-2.334C13.1 2.045 12.082 1 10.825 1H8.55z"
                                className="group-hover:fill-[#FF7262] fill-color-logo-inner transition-all duration-500"
                              />
                              <path
                                fill="#F24E1E"
                                d="M4 3.333c0 1.289 1.019 2.334 2.275 2.334H8.55V1H6.275C5.019 1 4 2.045 4 3.333z"
                                className="group-hover:fill-[#F24E1E] fill-color-logo-inner transition-all duration-500"
                              />
                              <path
                                fill="#A259FF"
                                d="M4 8c0 1.289 1.019 2.333 2.275 2.333H8.55V5.667H6.275C5.019 5.667 4 6.71 4 8z"
                                className="group-hover:fill-[#A259FF] fill-color-logo-inner transition-all duration-500"
                              />
                            </svg>
                          </div>

                          <div
                            key={3}
                            className="absolute inset-0"
                            style={{
                              "--position": "3",
                              transform: `rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(550px)`,
                            }}
                          >
                            <svg
                              width="800px"
                              height="800px"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              title="React"
                              className="w-full h-full object-contain block"
                            >
                              <path
                                d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
                                fill="#53C1DE"
                                className="group-hover:fill-[#53C1DE] fill-color-logo-inner transition-all duration-500"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
                                fill="#53C1DE"
                                className="group-hover:fill-[#53C1DE] fill-color-logo-inner transition-all duration-500"
                              />
                            </svg>
                          </div>

                          <div
                            key={4}
                            className="absolute inset-0"
                            style={{
                              "--position": "4",
                              transform: `rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(550px)`,
                            }}
                          >
                            <svg
                              width="800px"
                              height="800px"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              title="HTML"
                              className="w-full h-full object-contain block group"
                            >
                              <path
                                d="M6 28L4 3H28L26 28L16 31L6 28Z"
                                fill="#E44D26"
                                className="group-hover:fill-[#E44D26] fill-color-logo-bg transition-all duration-500"
                              />
                              <path
                                d="M26 5H16V29.5L24 27L26 5Z"
                                fill="#F16529"
                                className="group-hover:fill-[#F16529] fill-color-logo-bg transition-all duration-500"
                              />
                              <path
                                d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
                                fill="white"
                                className="group-hover:fill-[#ffffff] fill-color-logo-inner transition-all duration-500"
                              />
                            </svg>
                          </div>

                          <div
                            key={5}
                            className="absolute inset-0"
                            style={{
                              "--position": "5",
                              transform: `rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(550px)`,
                            }}
                          >
                            <svg
                              width="800px"
                              height="800px"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              title="Javascript"
                              className="w-full h-full object-contain block group"
                            >
                              <rect
                                x="2"
                                y="2"
                                width="28"
                                height="28"
                                fill="#FFCA28"
                                className="group-hover:fill-[#FFCA28] fill-color-logo-bg transition-all duration-500"
                              />
                              <path
                                d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z"
                                fill="#3E3E3E"
                                className="group-hover:fill-[#3E3E3E] fill-color-logo-inner transition-all duration-500"
                              />
                              <path
                                d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z"
                                fill="#3E3E3E"
                                className="group-hover:fill-[#3E3E3E] fill-color-logo-inner transition-all duration-500"
                              />
                            </svg>
                          </div>

                          <div
                            key={6}
                            className="absolute inset-0"
                            style={{
                              "--position": "6",
                              transform: `rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(550px)`,
                            }}
                          >
                            <svg
                              height="800px"
                              width="800px"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-label="CSS3"
                              role="img"
                              viewBox="0 0 512 512"
                              title="CSS"
                              className="w-full h-full object-contain block group"
                            >
                              <path
                                fill="#264de4"
                                d="M72 460L30 0h451l-41 460-184 52"
                                className="group-hover:fill-[#264de4] fill-color-logo-bg transition-all duration-500"
                              />
                              <path
                                fill="#2965f1"
                                d="M256 37V472l149-41 35-394"
                                className="group-hover:fill-[#2965f1] fill-color-logo-bg transition-all duration-500"
                              />
                              <path
                                fill="#ebebeb"
                                d="m114 94h142v56H119m5 58h132v57H129m3 28h56l4 45 64 17v59L139 382"
                                className="group-hover:fill-[#ebebeb] fill-color-logo-inner transition-all duration-500"
                              />
                              <path
                                fill="#ffffff"
                                d="m256 208v57h69l-7 73-62 17v59l115-32 26-288H256v56h80l-5.5 58Z"
                                className="group-hover:fill-[#ffffff] fill-color-logo-inner transition-all duration-500"
                              />
                            </svg>
                          </div>

                          <div
                            key={7}
                            className="absolute inset-0 group"
                            style={{
                              "--position": "7",
                              transform: `rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(550px)`,
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 150 150"
                              width="800px"
                              height="800px"
                              title="Kentico"
                              className="w-full h-full object-contain block group"
                            >
                              <g id="KenticoLogo" data-name="KenticoLogo">
                                <circle
                                  cx="75"
                                  cy="75"
                                  r="75"
                                  fill="#f05a22"
                                  className="group-hover:fill-[#f05a22] fill-color-logo-bg transition-all duration-500"
                                ></circle>
                                <path
                                  fill="#fff"
                                  d="M75,65a10.07,10.07,0,1,1-7.1,3A10,10,0,0,1,75,65"
                                  className="group-hover:fill-[#ffffff] fill-color-logo-inner transition-all duration-500"
                                ></path>
                                <path
                                  fill="#fff"
                                  d="M100.82,68.1h21.6a.86.86,0,0,1,.53.19.77.77,0,0,1,.28.48c.53,2.72,1.91,13.13-6.84,13.13H101c-8.5,0-8.69-13.8-.1-13.8"
                                  className="group-hover:fill-[#ffffff] fill-color-logo-inner transition-all duration-500"
                                ></path>
                                <path
                                  fill="#fff"
                                  d="M49.18,81.9H27.58a.86.86,0,0,1-.53-.19.87.87,0,0,1-.28-.48c-.53-2.72-1.92-13.13,6.84-13.13H49.08c8.5,0,8.69,13.8.1,13.8"
                                  className="group-hover:fill-[#ffffff] fill-color-logo-inner transition-all duration-500"
                                ></path>
                                <path
                                  fill="#fff"
                                  d="M88.38,51.86l15.28-15.28a.86.86,0,0,1,.5-.23.8.8,0,0,1,.54.14c2.32,1.57,10.64,7.92,4.44,14.12L98.21,61.54c-6,6-15.9-3.63-9.83-9.68"
                                  className="group-hover:fill-[#ffffff] fill-color-logo-inner transition-all duration-500"
                                ></path>
                                <path
                                  fill="#fff"
                                  d="M61.62,98.14,46.34,113.41a.79.79,0,0,1-.5.24.8.8,0,0,1-.54-.14c-2.32-1.58-10.64-7.93-4.44-14.12L51.79,88.45C57.81,82.44,67.69,92.08,61.62,98.14Z"
                                  className="group-hover:fill-[#ffffff] fill-color-logo-inner transition-all duration-500"
                                ></path>
                                <path
                                  fill="#fff"
                                  d="M68.1,49.18V27.57a.83.83,0,0,1,.19-.52.77.77,0,0,1,.48-.28c2.72-.52,13.13-1.92,13.13,6.85V49c0,8.5-13.8,8.69-13.8.1"
                                  className="group-hover:fill-[#ffffff] fill-color-logo-inner transition-all duration-500"
                                ></path>
                                <path
                                  fill="#fff"
                                  d="M81.9,100.82v21.61a.83.83,0,0,1-.19.52.87.87,0,0,1-.48.28c-2.72.52-13.13,1.91-13.13-6.85V100.91C68.1,92.42,81.9,92.22,81.9,100.82Z"
                                  className="group-hover:fill-[#ffffff] fill-color-logo-inner transition-all duration-500"
                                ></path>
                                <path
                                  fill="#fff"
                                  d="M51.87,61.62,36.59,46.34a.81.81,0,0,1-.24-.5.8.8,0,0,1,.14-.54c1.58-2.32,7.93-10.63,14.12-4.44L61.55,51.8c6,6-3.63,15.9-9.68,9.82"
                                  className="group-hover:fill-[#ffffff] fill-color-logo-inner transition-all duration-500"
                                ></path>
                                <path
                                  fill="#fff"
                                  d="M98.13,88.38l15.28,15.27a.84.84,0,0,1,.24.51.8.8,0,0,1-.14.54c-1.58,2.32-7.93,10.63-14.13,4.44L88.45,98.2c-6-6,3.63-15.9,9.68-9.82"
                                  className="group-hover:fill-[#ffffff] fill-color-logo-inner transition-all duration-500"
                                ></path>
                              </g>
                            </svg>
                          </div>

                          <div
                            key={8}
                            className="absolute inset-0"
                            style={{
                              "--position": "8",
                              transform: `rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(550px)`,
                            }}
                          >
                            <svg
                              width="800px"
                              height="800px"
                              viewBox="0 0 32 32"
                              xmlns="http://www.w3.org/2000/svg"
                              title="Sass / SCSS"
                              className="w-full h-full object-contain block group"
                            >
                              <title>file_type_scss2</title>
                              <path
                                d="M16,2A14,14,0,1,1,2,16,14,14,0,0,1,16,2Z"
                                fill="#c69"
                                className="group-hover:fill-[#c69] fill-color-logo-bg transition-all duration-500"
                              />
                              <path
                                d="M24.782,7.992c-.634-2.486-4.757-3.3-8.659-1.918A19.605,19.605,0,0,0,9.479,9.885c-2.149,2.01-2.492,3.76-2.351,4.491.5,2.58,4.033,4.266,5.486,5.517V19.9c-.428.211-3.564,1.8-4.3,3.42-.774,1.712.123,2.94.718,3.105A4.4,4.4,0,0,0,13.78,24.5a4.824,4.824,0,0,0,.472-4.288,5.639,5.639,0,0,1,2.143-.123c2.456.287,2.938,1.82,2.846,2.462a1.62,1.62,0,0,1-.779,1.1c-.172.107-.225.143-.21.223.021.115.1.111.247.086a1.915,1.915,0,0,0,1.336-1.707c.059-1.5-1.382-3.186-3.934-3.143a6.736,6.736,0,0,0-2.189.3c-.035-.04-.071-.08-.108-.12-1.578-1.683-4.494-2.874-4.371-5.137.045-.823.331-2.989,5.6-5.617,4.32-2.153,7.778-1.56,8.376-.247.854,1.876-1.848,5.361-6.334,5.864a3.37,3.37,0,0,1-2.833-.718c-.236-.26-.271-.271-.359-.223-.143.079-.052.309,0,.445a2.659,2.659,0,0,0,1.621,1.274,8.592,8.592,0,0,0,5.258-.52C23.283,13.362,25.405,10.437,24.782,7.992ZM13.218,20.663a3.584,3.584,0,0,1-.029,2.092q-.035.106-.077.21t-.091.2a3.911,3.911,0,0,1-.647.943c-.813.887-1.95,1.223-2.437.94-.526-.305-.263-1.556.68-2.553a9.478,9.478,0,0,1,2.474-1.762l0,0Z"
                                fill="#fff"
                                className="group-hover:fill-[#fff] fill-color-logo-inner transition-all duration-500"
                              />
                            </svg>
                          </div>

                          <div
                            key={9}
                            className="absolute inset-0"
                            style={{
                              "--position": "9",
                              transform: `rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(550px)`,
                            }}
                          >
                            <svg
                              width="800px"
                              height="800px"
                              viewBox="0 0 32 32"
                              xmlns="http://www.w3.org/2000/svg"
                              title="Tailwind"
                              className="w-full h-full object-contain block group"
                            >
                              <title>file_type_tailwind</title>
                              <path
                                d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                                fill="#44a8b3"
                                className="group-hover:fill-[#44a8b3] fill-color-logo-inner transition-all duration-500"
                              />
                            </svg>
                          </div>

                          <div
                            key={10}
                            className="absolute inset-0"
                            style={{
                              "--position": "10",
                              transform: `rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(550px)`,
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              id="umbraco"
                              title="Umbraco"
                              className="w-full h-full object-contain block group"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="10"
                                fill="#fff"
                                className="group-hover:fill-[#fff] fill-color-logo-bg transition-all duration-500"
                              ></circle>
                              <path
                                fill="#3442AB"
                                d="M12 .375C5.363.375 0 5.553 0 12c0 6.446 5.363 11.625 12 11.625S24 18.445 24 12C24 5.553 18.637.375 12 .375zm7.063 12.47c-.052 1.269-.265 2.274-.69 3.065-.425.74-1.116 1.321-2.126 1.637-1.008.32-2.387.477-4.14.477h-.213c-1.753 0-3.132-.158-4.142-.477-1.008-.317-1.699-.899-2.124-1.637-.424-.793-.637-1.796-.69-3.065-.053-1.269 0-1.427 0-1.427-.004-.69.05-1.379.159-2.061.106-.581.159-1.003.267-1.479.051-.211.104-.266.104-.369.053-.055.161-.159.266-.159h.052l1.54.211c.107 0 .212.108.212.212v.052l-.105.421c-.107.425-.159.953-.267 1.586-.051.635-.104 1.27-.104 1.956-.053 1.269.105 2.217.371 2.8.318.581.797 1.005 1.541 1.162.637.107 1.592.21 2.76.21v.002h.531c1.168 0 2.123-.053 2.762-.212.744-.157 1.273-.579 1.539-1.162.267-.634.371-1.532.371-2.8 0-.687 0-1.32-.105-1.956-.108-.633-.16-1.16-.266-1.585l-.106-.422v-.052c0-.105.108-.212.213-.212l1.54-.211h.053c.161 0 .266.053.266.159.052.052.052.158.105.369.108.422.161.845.266 1.48.056.631.16 1.32.16 2.059 0 .001.052.159 0 1.428z"
                                className="group-hover:fill-[#3442AB] fill-color-logo-inner transition-all duration-500"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>

                    <Image
                      alt="Marco Hero Image"
                      width={1000}
                      height={2000}
                      src="/images/marcoHero.png"
                      className="-scale-x-100 grayscale-[95%] opacity-75 absolute top-[12vh] lg:top-[20vh] left-1/2 -translate-x-1/2 h-[40vh] border-b-2 border-white sm:h-[70vh] lg:h-[70vh] max-w-full sm:max-w-[70%] xl:max-w-full object-top object-cover xl:object-contain overflow-visible xl:object-bottom z-0 fade-bottom"
                    />
                  </div>
                  <article className="pt-24 xl:absolute h-[70vh] sm:h-[50vh] left-0 bottom-0 xl:h-min xl:bottom-[unset] xl:pt-32 w-full xl:w-1/2 flex flex-col justify-center relative">
                    <H1 chapeau={"Marco Fijan"} className={""} big>
                      een wens, <br />
                      een product. <br />
                    </H1>
                    <P>
                      Hi, ik ben Marco Fijan, een frontend developer met een
                      passie voor pixel-perfect webapplicaties, betrouwbare code
                      en gebruiksvriendelijke ervaringen.{" "}
                    </P>
                    <P
                      className={
                        "hidden lg:block text-white text-md md:text-lg lg:text-xl max-w-paragraph "
                      }
                    >
                      Met een sterke focus op moderne webtechnologieën en
                      gebruikerservaring (UX) design bouw ik schaalbare,
                      toegankelijke en goed geteste interfaces die niet alleen
                      goed werken, maar ook intuïtief aanvoelen.{" "}
                    </P>

                    {/* <P>
                    Hoi! Ik ben een front-end ontwikkelaar met een scherp oog
                    voor UX en de kleinste details. Het bouwen van
                    toegankelijke, intuïtieve en gebruiksvriendelijke websites
                    ongeacht het budget, motiveert mij. Jouw online visie is
                    uniek, en samen zorgen we ervoor dat die tot leven komt!
                  </P> */}
                    <Action>
                      <NextLink
                        className={"block"}
                        type="primary"
                        href="/contact"
                      >
                        Neem contact op!
                      </NextLink>
                      <NextLink
                        className={"block"}
                        type="secondary"
                        href="projects"
                      >
                        Bekijk alle projecten
                      </NextLink>
                    </Action>
                  </article>

                  {/* <article className="relative mt-auto pt-16 mb-32 flex flex-col justify-end z-10 w-full h-full pb-12 ">
                  <H1 className="pb-8 px-16">
                    Van een wens, <br />
                    naar een product. <br />
                    <Strong>Marco Fijan</Strong>
                  </H1>
                  <section className="relative p-16 after:h-screen after:max-h-[50dvh] before:max-h-[50dvh] after:border after:border-white after:rounded-sm after:border-opacity-10 after:w-[calc(100%-2rem)] after:right-0 after:absolute after:z-[-3] after:-bottom-8 before:h-screen before:absolute before:bottom-0 before:w-[calc(100%-2rem)] before:left-0 before:bg-linear-to-tr before:from-colorBgLight/[0.01] before:to-colorBgLight/[0.8] before:z-[-2] before:rounded-lg">
                    <section className="max-w-[60%] flex flex-col gap-8">
                      
                      <NextLink
                        className={"self-start group"}
                        type="primary"
                        arrow
                      >
                        Neem contact op!
                      </NextLink>
                    </section>

                    <Image
                      width={1000}
                      height={1300}
                      src="/images/marcoCrossedArms.png"
                      alt="Marco crossing arms"
                      className="absolute right-16 bottom-0 object-contain w-40% max-w-[50%] max-h-[70dvh] z-[-1]"
                    ></Image>
                  </section>
                </article> */}
                </SectionHome>
                {/* <SectionHome
                amountOfPages={1}
                className={"relative flex flex-col items-center"}
              >
                <ScrollingBarRight></ScrollingBarRight>
                <ScrollingBarLeft></ScrollingBarLeft>
              </SectionHome> */}
                <SectionHome
                  amountOfPages={mobile ? "3" : "2"}
                  className={"flex flex-col relative"}
                >
                  <div className="h-[20000px] max-h-[60vw] xl:max-h-[30vw]">
                    {mobile ? (
                      ""
                    ) : (
                      <>
                        <InfiniteTextBar
                          text="User_Experience - Frontend_Developer - Usability - Design - Testen - "
                          className="md:-top-[6vw] -top-[20vw]"
                        ></InfiniteTextBar>
                        <InfiniteTextBar
                          text="Figma - NextJS - Tailwind - SCSS - Umbraco - Wordpress - Kentico - "
                          className="top-[13vw]"
                          directionLeft
                        ></InfiniteTextBar>
                      </>
                    )}
                  </div>

                  <Article className="h-full">
                    <section className="grid lg:gap-24 grid-cols-1 lg:grid-cols-6 w-full h-full items-stretch box-border pt-24">
                      {/* <Section className="col-span-1 lg:col-span-4 row-span-1 lg:col-start-3">
                      <Focus className="">
                        Merken helpen opvallen in het digitale tijdperk. Samen
                        zetten we de nieuwe norm. Geen poespas, altijd
                        vooruitstrevend.
                      </Focus>
                    </Section> */}
                      <Img
                        alt="Altje"
                        src="/images/general/MarcoBureau.jpg"
                        className="object-right-top grayscale-75 opacity-70 max-w-full"
                        classNameWrapper="col-span-1 lg:col-span-4 row-span-3 aspect-video mb-20"
                      />
                      {/* <Section className="col-span-1 lg:col-span-4 lg:col-start-3"> */}

                      <P
                        className={
                          "text-xl lg:text-2xl xl:text-5xl text-white/40 col-span-1 lg:col-span-4 lg:col-start-3"
                        }
                      >
                        Ik help mensen graag in het digitale tijdperk.
                      </P>
                      <P
                        className={
                          "text-xl lg:text-2xl xl:text-5xl text-white/40 col-span-1 lg:col-span-4 lg:col-start-2"
                        }
                      >
                        In de toekomstige grijze soep van AI, zet ik graag
                        unieke concepten neer die uitblinken
                      </P>
                      <P
                        className={
                          "text-xl lg:text-2xl xl:text-5xl text-white/40 col-span-1 lg:col-span-4 lg:col-start-3"
                        }
                      >
                        Geen poespas, altijd vooruitstrevend.
                      </P>
                      {/* <Focus className="">
                        De combinatie van mijn passie voor design, code en
                        interactie plaatst mij op een unieke plek in de wereld
                        van webdesign.
                      </Focus> */}
                      {/* </Section> */}
                    </section>
                  </Article>
                  {/* <Divider></Divider> */}
                </SectionHome>
                {/* Overview with a couple of projects I am proud of [6 pages] */}
                {/* <PortfolioSection /> */}
                <SectionHome
                  amountOfPages={"1"}
                  className={"flex flex-col justify-center"}
                >
                  <H1 chapeau={"Mijn projecten"}>Uitgelichtte Projecten</H1>
                </SectionHome>

                {/* Contactpage with a form [1.5 page] */}
                {/* <ContactSection homePage={true} /> */}
                <SectionHome amountOfPages={"1"} className={"text-right"}>
                  <H2 chapeau={"Redesign website voor ouderen binnen budget"}>
                    KBO Tilburg Reeshof
                  </H2>
                  <NextLink
                    type="primary"
                    href="/projects/herontwerp-ouderen"
                    alignRight
                  >
                    Bekijk het project
                  </NextLink>
                </SectionHome>
                <SectionHome amountOfPages={"1"}>
                  <H2
                    chapeau={
                      "Dashboard datavisualisatie ontwerp + ontwikkeling"
                    }
                  >
                    Dashboard YoungOnes
                  </H2>
                  <NextLink
                    className={"flex justify-end w-full "}
                    type="primary"
                    href="/projects/yo-dashboard"
                  >
                    Bekijk het project
                  </NextLink>
                </SectionHome>
                <SectionHome amountOfPages={"1"} className={"text-right"}>
                  <H2 chapeau={"Wedstrijd dashboard ontwerp + ontwikkeling"}>
                    GWOTY Award YoungOnes
                  </H2>
                  <NextLink type="primary" href="/projects/yo-gwoty" alignRight>
                    Bekijk het project
                  </NextLink>
                </SectionHome>
                <SectionHome amountOfPages={"1"}>
                  <H2
                    chapeau={
                      "Commercieel Wordpress website ontwerp + ontwikkeling"
                    }
                  >
                    Standaard Aanbouw
                  </H2>
                  <NextLink
                    className={"flex justify-end w-full "}
                    type="primary"
                    href="/projects/standaard-aanbouw"
                  >
                    Bekijk het project
                  </NextLink>
                </SectionHome>
                <SectionHome amountOfPages={"1"} className={"text-end"}>
                  <H2
                    chapeau={
                      "Andere projecten; Unity-engine, Blender, pure CSS"
                    }
                  >
                    Bekijk alle projecten
                  </H2>
                  {/* <H2
                  chapeau={"Andere projecten; Unity-engine, Blender, pure CSS"}
                >
                  Andere projecten
                </H2>*/}
                  <NextLink type="primary" href="/projects" alignRight>
                    Alle projecten
                  </NextLink>
                </SectionHome>
              </Container>
              <section className="mx-4 lg:px-8 pt-20 h-[150vh] max-h-[150vh] overflow-y-auto lg:h-[200vh] lg:max-h-[200vh] box-border w-[100%-1rem] rounded-t-2xl border-b-0 border-white/[0.5] border-1 bg-gradient-to-bl from-color-bg-top via-color-bg-bottom to-color-bg-top ">
                <Container>
                  <H2 chapeau={"Ervaring"}></H2>{" "}
                  <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
                    <H2>New Orange</H2>
                    <div className="lg:mt-4 mt-[-50px] mb-20">
                      <H3 noMarginTop>Frontend Developer</H3>
                      <P className="text-white text-md lg:text-xl mb-3">
                        September 2023 - April 2025
                      </P>
                      <small></small>
                      <ul className="list-disc text-white opacity-70 ml-4">
                        <Li>
                          Ondersteuning en ontwikkeling voor diverse klanten met
                          Kentico of Umbraco CMS
                        </Li>
                        <Li>
                          Gebruik van Tailwind, SCSS Sass, cshtml Razor,
                          Javascript
                        </Li>
                        <Li>
                          Zonnebloem
                          <Li className="ml-4 opacity-65">
                            Ontwikkeling<i> 75jaar.zonnebloem.nl</i>
                          </Li>
                        </Li>
                        <Li>
                          Het Noord Brabants museum
                          <Li className="ml-4 opacity-65">
                            Ontwikkeling en design
                            <i> grootsinbrabant.nl</i>
                          </Li>
                        </Li>
                        <Li>
                          Sectorinstituut Transport en Logistiek
                          <Li className="ml-4 opacity-65">
                            Ontwikkeling Kentico herontwerp<i> stl.nl</i>
                          </Li>
                          <Li className="ml-4 opacity-65">
                            Ontwikkeling Kentico<i> stl.nl/studentengids</i>
                          </Li>
                        </Li>
                        <Li>
                          Groene Hart Ziekenhuis
                          <Li className="ml-4 opacity-65">
                            Frontend ontwikkeling Umbraco
                            <i> werkenbijghz.nl</i>
                          </Li>
                        </Li>
                        <Li>
                          Flevoziekenhuis
                          <Li className="ml-4 opacity-65">
                            Frontend ontwikkeling Umbraco
                            <i> werkenbijflevoziekenhuis.nl</i>
                          </Li>
                        </Li>
                        <Li>
                          Human Digital
                          <Li className="ml-4 opacity-65">
                            Ontwikkeling Kentico componenten
                            <i> humandigital.nl</i>
                          </Li>
                          <Li className="ml-4 opacity-65">
                            Frontend Ontwikkeling Umbraco componenten
                            <i> blikvangersontwerp.nl</i>
                          </Li>
                        </Li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
                    <H2>YoungOnes</H2>
                    <div className="lg:mt-4 mt-[-50px] mb-20">
                      <H3 noMarginTop>Frontend Developer</H3>
                      <P className="text-white text-md lg:text-xl mb-3">
                        September 2022 - Februari 2023
                      </P>
                      <ul className="list-disc text-white opacity-70 ml-4">
                        <Li>Ontwerp GWOTY award website (Figma)</Li>
                        <Li>
                          Ontwikkeling GWOTY award website (NextJS, Api calls en
                          Tailwind)
                        </Li>
                        <Li>Ontwerp opdrachtgevers dashboard (Figma)</Li>
                        <Li>
                          Ontwikkeling opdrachtgevers dashboard (NextJS, Api
                          calls en Tailwind)
                        </Li>
                        <Li>UX testen van diverse ontwerpen</Li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
                    <H2>Silverfish</H2>
                    <div className="lg:mt-4 mt-[-50px] mb-20">
                      <H3 noMarginTop>Wordpress Frontend Developer</H3>
                      <P className="text-white text-md lg:text-xl mb-3">
                        November 2019 - Februari 2020
                      </P>
                      <ul className="list-disc text-white opacity-70 ml-4">
                        <Li>
                          Ontwikkel Wordpress website met een goedgekeurd Adobe
                          Illustrator Design
                        </Li>
                        <Li>
                          Ontwikkeling met Wordpress, Advanced Custom Fields,
                          CSS, Jquery en PHP
                        </Li>
                      </ul>
                    </div>
                  </div>
                  <Divider />
                  <Footer homePage />
                </Container>
              </section>
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
      <LoadingScreen />
    </div>
  );
}
