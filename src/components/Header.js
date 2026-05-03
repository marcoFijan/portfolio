import { useState, useEffect } from "react";
import Button from "@/elements/Button.js";
import Container from "./Container.js";
import Logo from "@/elements/Logo.js";
import Divider from "@/elements/Divider.js";

const navLinks = [
  { name: "Home", url: "/", icon: "home" },
  { name: "Projecten", url: "/projects", icon: "projects" },
  { name: "Contact", url: "/contact", icon: "contact" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/marco-fijan-a0b60b161/",
    icon: "linkedin",
  },
];

export default function Header({ home = false }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1200);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "overflow-y-hidden",
      isMenuOpen && isMobile,
    );
  }, [isMenuOpen, isMobile]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full mt-4 dark z-40 max-w-wrapper mx-auto px-wrapper-mobile md:px-wrapper grid grid-cols-3 justify-between items-center">
      <Button
        type="ghost"
        href="/"
        className="w-16 h-16 flex items-center justify-center p-2 relative z-50 hover:bg-transparent"
        onClick={() => setIsMenuOpen(false)}
      >
        <Logo />
      </Button>

      {isMobile ? (
        <MobileNav
          isOpen={isMenuOpen}
          onToggle={toggleMenu}
          onClose={() => setIsMenuOpen(false)}
        />
      ) : (
        <DesktopNav />
      )}

      {!isMobile && (
        <ul className="flex gap-2 justify-self-end z-50 absolute">
          {socialLinks.map((social) => (
            <li key={social.name}>
              <Button href={social.url} type="ghost" arrow icon={social.icon}>
                {social.name}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function DesktopNav() {
  return (
    <nav className="w-max fixed left-1/2 -translate-x-1/2 top-4 justify-self-center z-50">
      <ul className="backdrop-blur-md bg-color-bg-top/30 gap-4 rounded-full flex overflow-hidden">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Button href={link.url} type="ghost" icon={link.icon}>
              {link.name}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MobileNav({ isOpen, onToggle, onClose }) {
  return (
    <div
      className="flex items-center justify-end z-50 group"
      aria-expanded={isOpen}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="fixed right-6 bottom-18 z-60 h-12 w-12 rounded-full p-3 cursor-pointer transition bg-black aria-expanded:bg-transparent"
      >
        <div className="relative h-full w-full flex flex-col justify-between">
          <span className="h-1 w-full bg-white rounded-full transition-transform group-aria-expanded:bg-color-accent group-aria-expanded:rotate-45 group-aria-expanded:translate-y-2.5" />
          <span className="h-1 w-full bg-white rounded-full transition-opacity group-aria-expanded:opacity-0" />
          <span className="h-1 w-full bg-white rounded-full transition-transform group-aria-expanded:bg-color-accent group-aria-expanded:-rotate-45 group-aria-expanded:-translate-y-2.5" />
        </div>
      </button>

      <div
        id="mobile-menu"
        aria-hidden={!isOpen}
        className="fixed inset-0 z-50 transition-transform duration-500 bg-linear-to-bl from-color-bg-top via-color-bg-top to-color-purple translate-x-full group-aria-expanded:translate-x-0"
      >
        <Container className="flex flex-col justify-between pb-36 pt-8 h-full">
          <div className="w-full max-w-36">
            <Logo />
          </div>

          <nav className="w-full">
            {navLinks.map((link) => (
              <div key={link.name} className="w-full">
                <a
                  href={link.url}
                  className="block w-full py-6 text-left text-xl cursor-pointer transition-colors text-white hover:text-color-accent focus:outline-none focus:text-color-accent border-b border-white/20"
                  onClick={onClose}
                >
                  {link.name}
                </a>
                <Divider noMargin />
              </div>
            ))}
          </nav>
        </Container>
      </div>
    </div>
  );
}
