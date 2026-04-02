"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const AnimatedNavLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="group relative inline-block overflow-hidden h-5 flex items-center text-sm">
      <div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
        <span className="text-gray-300">{children}</span>
        <span className="text-white">{children}</span>
      </div>
    </a>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState("rounded-full");
  const shapeTimeoutRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll listener for width animation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current);
    }

    if (isOpen) {
      setHeaderShapeClass("rounded-xl");
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass("rounded-full");
      }, 300);
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current);
      }
    };
  }, [isOpen]);

  const navLinksData = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Events", href: "#workshops" },
    { label: "Upcoming", href: "#events" },
  ];

  return (
    <header
      className={`fixed top-4 sm:top-6 left-1/2 z-50
                   flex flex-col items-center
                   pl-4 pr-4 sm:pl-6 sm:pr-6 py-2.5 sm:py-3 backdrop-blur-sm
                   ${headerShapeClass}
                   border border-[#333] bg-[#1f1f1f57]
                   transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]`}
      style={{
        transform: "translateX(-50%)",
        width: isOpen
          ? "calc(100% - 2rem)"
          : undefined,
        maxWidth: isScrolled ? "580px" : "780px",
      }}>
      <div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <Image
            src="/icon-dark.svg"
            alt="ACM DTU Logo"
            width={32}
            height={32}
            className="rounded-md"
          />
          <div
            className={`leading-tight hidden sm:block transition-all duration-500 overflow-hidden ${
              isScrolled ? "w-0 opacity-0" : "w-auto opacity-100"
            }`}>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-300 whitespace-nowrap">
              ACM DTU
            </p>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider whitespace-nowrap">
              Student Chapter
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center space-x-4 sm:space-x-6 text-sm">
          {navLinksData.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="relative group">
            <div className="absolute inset-0 -m-2 rounded-full hidden sm:block bg-blue-400 opacity-30 filter blur-lg pointer-events-none transition-all duration-300 ease-out group-hover:opacity-50 group-hover:blur-xl group-hover:-m-3"></div>
            <a
              href="#contact"
              className="relative z-10 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-br from-[#3182ce] to-[#2563eb] rounded-full hover:from-[#2b6cb0] hover:to-[#1d4ed8] transition-all duration-200">
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}>
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`sm:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                     ${isOpen ? "max-h-[1000px] opacity-100 pt-4" : "max-h-0 opacity-0 pt-0 pointer-events-none"}`}>
        <nav className="flex flex-col items-center space-y-4 text-base w-full">
          {navLinksData.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white transition-colors w-full text-center">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col items-center space-y-4 mt-4 w-full">
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-br from-[#3182ce] to-[#2563eb] rounded-full hover:from-[#2b6cb0] hover:to-[#1d4ed8] transition-all duration-200 w-full text-center">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
