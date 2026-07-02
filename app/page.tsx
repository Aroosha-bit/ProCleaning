"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Header from "./components/header";
import Services from "./components/services";
import Team from "./components/team";
import About from "./components/about";
import Pricing from "./components/pricing";
import Testimonials from "./components/testimonials";
import Blog from "./components/blog";
import Footer from "./components/footer";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial state set for GSAP animation to avoid flash
    gsap.set([subtitleRef.current, titleRef.current, descRef.current, btnsRef.current], {
      opacity: 0,
      y: 30,
    });

    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } });
    tl.to(subtitleRef.current, { opacity: 1, y: 0, delay: 0.2 })
      .to(titleRef.current, { opacity: 1, y: 0 }, "-=0.7")
      .to(descRef.current, { opacity: 1, y: 0 }, "-=0.7")
      .to(btnsRef.current, { opacity: 1, y: 0 }, "-=0.7");
  }, []);

  const scrollToServices = () => {
    const target = document.querySelector("#services");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="bg-[url('/assets/hero.png')] bg-cover w-full h-[585px] relative overflow-hidden"
      >
        <div className="container ml-30 py-16 flex flex-col items-start gap-4 w-4/12 relative z-10">
          <div
            ref={subtitleRef}
            className="font-[beVietnamPro] font-normal text-[#111D15] text-[20px]"
          >
            Quality cleaning at a fair price.
          </div>
          <div
            ref={titleRef}
            className="font-[beVietnamPro] leading-[1.15] font-[700] text-[#111D15] text-[52px]"
          >
            Specialized, efficient, and thorough cleaning services
          </div>
          <p
            ref={descRef}
            className="font-[beVietnamPro] font-normal text-[#666666] text-[18px]"
          >
            We provide Performing cleaning tasks using the least amount of time,
            energy, and money.
          </p>
          <div ref={btnsRef} className="flex items-center gap-6">
            <button
              onClick={scrollToContact}
              className="bg-[#36B864] cursor-pointer text-white font-[500] text-[16px] rounded-[8px] px-[32px] py-[12px] hover:bg-[#2ea055] transition-all duration-300 hover:scale-[1.05] hover:shadow-lg active:scale-[0.98]"
            >
              Get Start Now
            </button>
            <button
              onClick={scrollToServices}
              className="border cursor-pointer border-[#666666] text-[#111D15] font-[500] text-[16px] rounded-[8px] px-[32px] py-[12px] hover:border-[#36B864] hover:text-[#36B864] transition-all duration-300 hover:scale-[1.05]"
            >
              View all Services
            </button>
          </div>
        </div>
      </section>

      <Services />
      <Team />
      <About />
      <Pricing />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
}
