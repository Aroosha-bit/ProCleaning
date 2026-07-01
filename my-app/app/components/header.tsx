"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/assets/logo.svg";

export default function Header() {
  const [active, setActive] = useState(0);

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
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetQuote = () => {
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto py-5 flex justify-between items-center">
      <Image src={logo} alt="Logo" />

      <div className="flex items-center gap-8">
        {navlinks.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={(e) => handleNavClick(e, index, item.href)}
            className={`cursor-pointer font-[500] text-[16px] transition-colors ${
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
        className="bg-[#36B864] cursor-pointer text-white font-[500] text-[16px] rounded-[8px] px-[32px] py-[12px] hover:bg-[#2ea055] transition-colors"
      >
        Get a quote
      </button>
    </div>
  );
}