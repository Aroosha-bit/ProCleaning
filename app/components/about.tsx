"use client";
import Image from "next/image";
import React from "react";
import about from "@/public/assets/about.svg";
import { CircleCheck } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About = () => {
  const imageRef = useScrollAnimation<HTMLDivElement>();
  const textRef = useScrollAnimation<HTMLDivElement>();

  const aboutItem = [
    "Vetted professionals",
    "Affordable Prices",
    "Next day availability",
    "Best Quality",
    "Standard cleaning tasks",
    "Eco-Friendly Products",
  ];
  const firstItem = aboutItem.slice(0, 3);
  const secondItem = aboutItem.slice(3, 6);

  const scrollToContact = () => {
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const target = document.querySelector("#services");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="about" className="container mx-auto overflow-hidden">
      <div className="flex mt-30 justify-between items-center flex-col lg:flex-row gap-10">
        <div 
          ref={imageRef} 
          className="scroll-reveal-left transition-transform duration-500 hover:scale-[1.02]"
        >
          <Image src={about} alt="About ProCleaning" />
        </div>
        <div ref={textRef} className="flex w-full lg:w-5/12 flex-col gap-8 scroll-reveal-right delay-200">
          <p className="text-[#111D15] font-[600] text-[44px] leading-tight">
            Welcome To Our Pro-cleaning Company!
          </p>

          <p className="text-[#666666] font-[400] text-[16px]">
            We make your space shine! Professional and reliable cleaning service
            company providing top-notch solutions for homes and businesses.
            Satisfaction guaranteed!&quot;
          </p>
          <div className="flex gap-10 sm:gap-20 flex-wrap">
            <div className="flex flex-col gap-5">
              {firstItem.map((item, index) => (
                <div key={index} className="flex gap-3 items-center group cursor-default">
                  <CircleCheck className="fill-[#36B864] stroke-white transition-transform duration-300 group-hover:scale-1.1" />
                  <p className="font-[600] text-[16px] text-[#111D15] transition-colors duration-300 group-hover:text-[#36B864]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              {secondItem.map((item, index) => (
                <div key={index} className="flex gap-3 items-center group cursor-default">
                  <CircleCheck className="fill-[#36B864] stroke-white transition-transform duration-300 group-hover:scale-1.1" />
                  <p className="font-[600] text-[16px] text-[#111D15] transition-colors duration-300 group-hover:text-[#36B864]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToContact}
              className="bg-[#36B864] cursor-pointer text-white font-[500] text-[16px] rounded-[8px] px-[32px] py-[12px] hover:bg-[#2ea055] transition-all duration-300 hover:scale-[1.05] hover:shadow-lg active:scale-[0.98]"
            >
              Book Now
            </button>
            <button
              onClick={scrollToServices}
              className="border cursor-pointer border-[#666666] text-[#111D15] font-[500] text-[16px] rounded-[8px] px-[32px] py-[12px] hover:border-[#36B864] hover:text-[#36B864] transition-all duration-300 hover:scale-[1.05]"
            >
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
