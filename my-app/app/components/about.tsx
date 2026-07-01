"use client";
import Image from "next/image";
import React from "react";
import about from "@/public/assets/about.svg";
import { CircleCheck } from "lucide-react";

const About = () => {
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
    <div id="about" className="container mx-auto">
      <div className="flex mt-30 justify-between items-center">
        <div>
          <Image src={about} alt="About ProCleaning" />
        </div>
        <div className="flex w-5/12 flex-col gap-8">
          <p className="text-[#111D15] font-[600] text-[44px] leading-tight">
            Welcome To Our Pro-cleaning Company!
          </p>

          <p className="text-[#666666] font-[400] text-[16px]">
            We make your space shine! Professional and reliable cleaning service
            company providing top-notch solutions for homes and businesses.
            Satisfaction guaranteed!&quot;
          </p>
          <div className="flex gap-20 flex-wrap">
            <div className="flex flex-col gap-10">
              {firstItem.map((item, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <CircleCheck className="fill-[#36B864] stroke-white" />
                  <p className="font-[600] text-[16px] text-[#111D15]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-10">
              {secondItem.map((item, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <CircleCheck className="fill-[#36B864] stroke-white" />
                  <p className="font-[600] text-[16px] text-[#111D15]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToContact}
              className="bg-[#36B864] cursor-pointer text-white font-[500] text-[16px] rounded-[8px] px-[32px] py-[12px] hover:bg-[#2ea055] transition-colors"
            >
              Book Now
            </button>
            <button
              onClick={scrollToServices}
              className="border cursor-pointer border-[#666666] text-[#111D15] font-[500] text-[16px] rounded-[8px] px-[32px] py-[12px] hover:border-[#36B864] hover:text-[#36B864] transition-colors"
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
