"use client";
import React from "react";
import img1 from "@/public/assets/img1.svg";
import img2 from "@/public/assets/img2.svg";
import img3 from "@/public/assets/img3.svg";
import img4 from "@/public/assets/img4.svg";
import sol from "@/public/assets/sol.svg";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Services() {
  const headerRef = useScrollAnimation<HTMLDivElement>();
  const swiperRef = useScrollAnimation<HTMLDivElement>();
  const solutionsRef = useScrollAnimation<HTMLDivElement>();

  const services = [
    {
      img: img1,
      title: "Office Cleaning",
      desc: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
    },
    {
      img: img2,
      title: "Home Cleaning",
      desc: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
    },
    {
      img: img3,
      title: "Industrial Cleaning",
      desc: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
    },
    {
      img: img4,
      title: "Window Cleaning",
      desc: "We provide streak-free window cleaning for homes and offices, brightening your space and enhancing the view.",
    },
  ];

  const scrollToContact = () => {
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="services" className="container mx-auto py-10 overflow-hidden">
      {/* Services Header */}
      <div ref={headerRef} className="flex justify-between gap-10 items-start scroll-reveal">
        <div className="font-[beVietnamPro] w-4/12 leading-[1.15] font-[700] text-[#111D15] text-[52px]">
          We always provide the best service
        </div>
        <div className="flex w-4/12 flex-col gap-[10px]">
          <p className="font-[beVietnamPro] font-[600] text-[#111D15] text-[20px]">
            Services
          </p>
          <p className="font-[beVietnamPro] font-[400] text-[#666666] text-[16px]">
            While we can customize your cleaning plan to suit your needs, most
            clients schedule regular cleaning services:
          </p>
        </div>
      </div>
      <div className="border-t border-[#83A790] w-full my-5" />

      {/* Services Carousel */}
      <div ref={swiperRef} className="scroll-reveal delay-200">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full"
        >
          {services.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-5 rounded-xl p-3 border border-transparent hover:border-[#83A790]/30 hover-lift bg-white group transition-all duration-300">
                <div className="w-full overflow-hidden rounded-lg">
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="w-full hover-zoom-img"
                  />
                </div>

                <div className="font-[beVietnamPro] font-semibold text-[24px] text-[#111D15] transition-colors duration-300 group-hover:text-[#36B864]">
                  {item.title}
                </div>

                <div className="font-[beVietnamPro] text-[16px] text-[#666666]">
                  {item.desc}
                </div>

                <button
                  onClick={scrollToContact}
                  className="cursor-pointer w-fit group flex items-center gap-2 rounded-[8px] border border-[#666666] px-8 py-3 transition-all duration-300 hover:border-[#36B864] hover:bg-[#36B864]"
                >
                  <p className="text-[16px] font-medium text-[#111D15] group-hover:text-white transition-colors duration-300">
                    Book Now
                  </p>

                  <MoveUpRight className="h-5 w-5 stroke-[#9D9D9D] group-hover:stroke-white transition-colors duration-300" />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* High-Quality Section */}
      <div ref={solutionsRef} className="flex mt-30 justify-between items-center scroll-reveal">
        <div className="flex w-5/12 flex-col gap-5">
          <p className="text-[#111D15] font-[400] text-[16px]">
            Affordable cleaning solutions{" "}
          </p>
          <div className="text-[#111D15] font-[600] text-[44px] leading-tight">
            High-Quality and Friendly Services at Fair Prices
          </div>
          <p className="text-[#666666] font-[400] text-[18px]">
            We provide comprehensive cleaning services tailored to your needs.
            From residential cleaning services.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-[#36B864] w-fit mt-2 cursor-pointer text-white font-[500] text-[16px] rounded-[8px] px-[32px] py-[12px] hover:bg-[#2ea055] transition-all duration-300 hover:scale-[1.05] hover:shadow-lg active:scale-[0.98]"
          >
            Get a quote
          </button>
        </div>
        <div className="transition-transform duration-500 hover:scale-[1.03]">
          <Image src={sol} alt="Cleaning solution" />
        </div>
      </div>
    </div>
  );
}
