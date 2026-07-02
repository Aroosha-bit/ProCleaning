"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import { Send } from "lucide-react";
import Silk from "../../animations/Silk";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Footer = () => {
  const [email, setEmail] = useState("");
  const contentRef = useScrollAnimation<HTMLDivElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for subscribing!");
    setEmail("");
  };

  const companyLinks = [
    { label: "About Us", href: "#" },
    { label: "Services", href: "#" },
    { label: "Our Team", href: "#" },
  ];

  const knowMoreLinks = [
    { label: "Support", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & conditions", href: "#" },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden pt-20 pb-8">
      <div className="absolute inset-0 z-0">
        <Silk
          speed={5.4}
          scale={0.8}
          color="#36B864"
          noiseIntensity={1.3}
          rotation={0}
        />
      </div>
      <div className="absolute inset-0 bg-[#111D15]/80 z-[1]" />
      <div ref={contentRef} className="relative z-10 container mx-auto px-6 scroll-reveal">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] gap-12">
          {/* Logo + Description */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <Image
                src={logo}
                alt="ProCleaning Logo"
                className="h-10 w-auto brightness-0 invert transition-transform duration-300 hover:scale-105"
              />
            </div>
            <p className="text-[#a3aca6] font-[400] text-[16px] leading-[1.6] max-w-[340px]">
              Stay updated with our latest cleaning tips, service updates, and
              helpful articles on maintaining a spotless home.
            </p>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-[700] text-[22px]">Company</h4>
            <ul className="flex flex-col gap-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#c7cdc9] font-[400] text-[16px] hover:text-[#36B864] transition-colors duration-300 relative nav-link-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Know More Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-[700] text-[22px]">Know More</h4>
            <ul className="flex flex-col gap-4">
              {knowMoreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#c7cdc9] font-[400] text-[16px] hover:text-[#36B864] transition-colors duration-300 relative nav-link-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-[700] text-[22px]">Newsletter</h4>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Goes here"
                className="w-full px-5 py-4 rounded-[10px] bg-transparent border border-[#3a453e] text-white placeholder:text-[#8b948e] text-[15px] outline-none focus:border-[#36B864] focus:ring-1 focus:ring-[#36B864] transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="w-fit bg-[#36B864] text-white font-[600] text-[15px] rounded-[10px] px-8 py-3.5 flex items-center justify-center gap-2 cursor-pointer hover:bg-[#2ea055] hover:scale-[1.05] active:scale-[0.98] transition-all duration-300 shadow-md shadow-[#36B864]/20"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2a352d] mt-16 pt-6">
          <p className="text-center text-[#c7cdc9] text-[16px]">
            2026 &ldquo;ProCleaning&rdquo; All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
