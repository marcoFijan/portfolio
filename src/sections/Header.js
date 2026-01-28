import { useState, useEffect } from "react";
import NextLink from "@/elements/NextLink";
import Container from "../sections/Container.js";
import Logo from "@/elements/Logo.js";
import Divider from "@/elements/Divider.js";

// 1. Data extracted to keep component body clean
const NAV_LINKS = [
  {
    name: "Home",
    url: "/",
    svg: '<svg viewBox="0 0 100 100" fill="currentColor" class="shrink-0 w-6 h-6"><path d="M97.7,44.8l-45.5-37c-1.3-1-3.1-1-4.4,0l-45.5,37c-1.1,0.9-1.6,2.5-1.1,3.9C1.7,50.1,3,51,4.5,51h12.8v38.5 c0,1.9,1.6,3.5,3.5,3.5H37c1.9,0,3.5-1.6,3.5-3.5V68h19v21.5c0,1.9,1.6,3.5,3.5,3.5h16.2c1.9,0,3.5-1.6,3.5-3.5V51h12.8 c1.5,0,2.8-0.9,3.3-2.3C99.3,47.3,98.9,45.7,97.7,44.8z" /></svg>',
  },
  {
    name: "Projecten",
    url: "/projects",
    svg: '<svg viewBox="0 0 100 100" fill="currentColor" class="shrink-0 w-6 h-6"><path d="M26.72,33.66H13.44A39.7,39.7,0,0,0,10,47.89H25.05A75.7,75.7,0,0,1,26.72,33.66Z" /><path d="M47.89,33.66H31.12a70.09,70.09,0,0,0-1.86,14.23H47.89Z" /><path d="M31.12,66.34H47.89V52.11H29.26A70.09,70.09,0,0,0,31.12,66.34Z" /><path d="M47.89,29.44V10.16C41.36,11.5,35.61,19,32.28,29.44Z" /><path d="M47.89,70.56H32.28C35.61,81,41.36,88.5,47.89,89.84Z" /><path d="M68.88,33.66H52.11V47.89H70.74A70.09,70.09,0,0,0,68.88,33.66Z" /><path d="M26.72,66.34a75.7,75.7,0,0,1-1.67-14.23H10a39.7,39.7,0,0,0,3.44,14.23Z" /><path d="M52.11,10.16V29.44H67.72C64.39,19,58.64,11.5,52.11,10.16Z" /><path d="M75,52.11a75.7,75.7,0,0,1-1.67,14.23H86.56A39.7,39.7,0,0,0,90,52.11Z" /><path d="M15.64,70.56a40.22,40.22,0,0,0,21.2,17.26c-3.85-4.15-7-10.11-9.05-17.26Z" /><path d="M72.21,70.56c-2.07,7.15-5.2,13.11-9,17.26a40.22,40.22,0,0,0,21.2-17.26Z" /><path d="M36.84,12.18a40.22,40.22,0,0,0-21.2,17.26H27.79C29.86,22.29,33,16.33,36.84,12.18Z" /><path d="M84.36,29.44a40.22,40.22,0,0,0-21.2-17.26c3.85,4.15,7,10.11,9,17.26Z" /><path d="M70.74,52.11H52.11V66.34H68.88A70.09,70.09,0,0,0,70.74,52.11Z" /><path d="M67.72,70.56H52.11V89.84C58.64,88.5,64.39,81,67.72,70.56Z" /><path d="M75,47.89H90a39.7,39.7,0,0,0-3.44-14.23H73.28A75.7,75.7,0,0,1,75,47.89Z" /></svg>',
  },
  {
    name: "Contact",
    url: "/contact",
    svg: '<svg viewBox="0 0 90 90" fill="currentColor" class="shrink-0 w-6 h-6"><path d="m 16,976.36217 c -0.78597,0 -1.53205,0.1651 -2.21875,0.4375 l 33.9375,29.65633 c 1.46699,1.2816 3.02954,1.2825 4.5,0 l 34,-29.65633 c -0.6867,-0.2724 -1.43278,-0.4375 -2.21875,-0.4375 l -68,0 z m -5.9375,5.1562 C 10.02467,981.79177 10,982.07807 10,982.36217 l 0,40.00003 c 0,3.3239 2.67606,6 6,6 l 68,0 c 3.32394,0 6,-2.6761 6,-6 l 0,-40.00003 c 0,-0.2841 -0.0247,-0.5704 -0.0625,-0.8438 l -33.78125,29.46883 c -3.52452,3.0741 -8.85071,3.079 -12.375,0 L 10.0625,981.51837 z" transform="translate(0,-952.36218)"/></svg>',
  },
];

export default function Header({ home = false }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle Resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1200);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle Scroll Lock
  useEffect(() => {
    document.documentElement.classList.toggle(
      "overflow-y-hidden",
      isMenuOpen && isMobile,
    );
  }, [isMenuOpen, isMobile]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`${home ? "absolute" : "fixed"} w-full mt-4 z-40`}>
      <Container className="grid grid-cols-3 justify-between items-center w-full">
        {/* LOGO SECTION */}
        <div className="relative z-50">
          <NextLink
            noBubble
            type="logo"
            href="/"
            className="w-16 h-16 flex items-center justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <Logo />
          </NextLink>
        </div>

        {/* NAVIGATION SECTION */}
        {isMobile ? (
          <MobileNav
            isOpen={isMenuOpen}
            onToggle={toggleMenu}
            onClose={() => setIsMenuOpen(false)}
          />
        ) : (
          <DesktopNav />
        )}

        {/* SOCIALS SECTION (Desktop Only) */}
        {!isMobile && (
          <ul className="flex gap-2 justify-self-end relative z-50">
            <SocialItem
              href="https://linkedin.com/..."
              label="LinkedIn"
              iconPath="M347.445,0H34.555..."
              viewBox="0 0 382 382"
            />
            <SocialItem
              href="https://github.com/..."
              label="Github"
              iconPath="M94,7399..."
              viewBox="0 0 20 20"
            />
          </ul>
        )}
      </Container>
    </header>
  );
}

// --- SUB-COMPONENTS TO REDUCE CLUTTER ---

function DesktopNav() {
  return (
    <nav className="w-max justify-self-center relative z-50">
      <ul className="backdrop-blur-md bg-color-bg-top/30 gap-4 rounded-full flex overflow-hidden">
        {NAV_LINKS.map((link, i) => {
          const isFirst = i === 0;
          const isLast = i === NAV_LINKS.length - 1;
          const isMiddle = !isFirst && !isLast;

          return (
            <li
              key={link.name}
              className={`
            relative cursor-pointer transition-all duration-500 text-white rounded-2xl group
            ${/* Middle items: Radial gradient overlay using ::after */ ""}
            ${isMiddle ? "overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle,rgba(242,242,242,0.1)_0%,transparent_100%)] after:scale-x-0 after:transition-transform after:duration-500 hover:after:scale-x-100" : ""}
            
            ${/* First item: Linear gradient from left */ ""}
            ${isFirst ? "bg-[linear-gradient(270deg,transparent_0%,transparent_50%,rgba(242,242,242,0.1)_100%)] bg-[length:200%_100%] bg-right hover:bg-[position:50%_0%] duration-500" : ""}
            
            ${/* Last item: Linear gradient from right */ ""}
            ${isLast ? "bg-[linear-gradient(90deg,transparent_0%,transparent_50%,rgba(242,242,242,0.1)_100%)] bg-[length:200%_100%] bg-left hover:bg-[position:50%_0%] duration-500" : ""}
          `}
            >
              <NextLink href={link.url} type="nav" noBubble>
                <span
                  className="w-5 h-5 mr-1 fill-white"
                  dangerouslySetInnerHTML={{ __html: link.svg }}
                />
                <span>{link.name}</span>
              </NextLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function MobileNav({ isOpen, onToggle, onClose }) {
  return (
    <div className="flex items-center justify-end z-50">
      <button
        onClick={onToggle}
        className={`fixed right-6 z-[60] h-12 w-12 rounded-full p-3 transition ${isOpen ? "bg-transparent" : "bg-color-accent"}`}
      >
        <div className="relative h-full w-full flex flex-col justify-between">
          <span
            className={`h-1 w-full bg-white rounded-full transition-transform ${isOpen ? "rotate-45 translate-y-[10px]" : ""}`}
          />
          <span
            className={`h-1 w-full bg-white rounded-full transition-opacity ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-1 w-full bg-white rounded-full transition-transform ${isOpen ? "-rotate-45 -translate-y-[10px]" : ""}`}
          />
        </div>
      </button>

      <div
        className={`fixed inset-0 z-50 transition-transform duration-500 bg-gradient-to-bl from-color-bg-top to-color-bg-bottom ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <Container className="flex flex-col pt-24 h-full">
          <nav className="w-full">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="w-full">
                <NextLink
                  href={link.url}
                  type="nav"
                  noBubble
                  className="py-6 border-b border-white/10"
                  onClick={onClose}
                >
                  <span
                    className="w-8 h-8 mr-4 fill-white"
                    dangerouslySetInnerHTML={{ __html: link.svg }}
                  />
                  <span className="text-3xl">{link.name}</span>
                </NextLink>
                <Divider noMargin />
              </div>
            ))}
          </nav>
        </Container>
      </div>
    </div>
  );
}

function SocialItem({ href, label, iconPath, viewBox }) {
  return (
    <li>
      <NextLink href={href} type="navSocial" arrow className="group">
        <svg className="fill-inherit w-7 h-7 p-1" viewBox={viewBox}>
          <path d={iconPath} fill="currentColor" />
        </svg>
        <span>{label}</span>
      </NextLink>
    </li>
  );
}
