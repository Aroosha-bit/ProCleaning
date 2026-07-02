"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "@/public/assets/logo.svg";

export default function Header() {
  const [active, setActive] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navlinks = [
    { name: "Home", href: "#home" },
    { name: "About us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number,
    href: string
  ) => {
    e.preventDefault();
    setActive(index);
    const target = document.querySelector(href);
    if (target) {
      // Offset scroll target to account for sticky header height
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleGetQuote = () => {
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md py-3 border-b border-gray-100"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Image src={logo} alt="Logo" className="transition-transform duration-300 hover:scale-[1.05]" />

        <div className="flex items-center gap-8">
          {navlinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => handleNavClick(e, index, item.href)}
              className={`cursor-pointer font-[500] text-[16px] transition-all nav-link-underline ${
                active === index
                  ? "text-[#36B864]"
                  : "text-[#4D4D4D] hover:text-[#36B864]"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          onClick={handleGetQuote}
          className="bg-[#36B864] cursor-pointer text-white font-[500] text-[16px] rounded-[8px] px-[32px] py-[12px] hover:bg-[#2ea055] transition-all duration-300 hover:scale-[1.05] hover:shadow-md active:scale-[0.98]"
        >
          Get a quote
        </button>
      </div>
    </div>
  );
}