"use client";
import React from "react";
import Image from "next/image";
import { MoveUpRight, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img5 from "@/public/assets/img5.svg";
import img6 from "@/public/assets/img6.svg";
import img7 from "@/public/assets/img7.svg";
import fb from "@/public/assets/Dribble.svg";
import twitter from "@/public/assets/Behance.svg";
import insta from "@/public/assets/Instagram.svg";
import linkedin from "@/public/assets/Linkedin.svg";
export default function Team() {
  const team = [
    {
      img: img6,
      desc: "He is an expert cleaning staff member who provides thorough cleaning with precision,",
    },
    {
      img: img5,
      desc: "He is an expert cleaning staff member who provides thorough cleaning with precision,",
    },
    {
      img: img7,
      desc: "He is an expert cleaning staff member who provides thorough cleaning with precision,",
    },
  ];
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between gap-10 items-start ">
        <div className="font-[beVietnamPro] w-6/12 leading-[1.15] font-[600] text-[#111D15] text-[44px]">
          Effective Cleaning Requires an Expert Cleaning Team
        </div>
        <div className="flex w-4/12 flex-col gap-[10px]">
          <p className="font-[beVietnamPro] font-[600] text-[#111D15] text-[20px]">
            Expert Team
          </p>
          <p className="font-[beVietnamPro] font-[400] text-[#666666] text-[16px]">
            We have professional expert cleaning staff ensuring top-notch
            cleanliness and hygiene for your space.
          </p>
        </div>
      </div>
      <div className="border-t border-[#83A790] w-full my-5" />
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
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
        {team.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col hover:border border-[#83A790] rounded-[20px] pb-[20px]">
              <Image src={item.img} alt="" className="w-full" />
              <div className="flex px-3 py-2 items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-4 h-4 fill-[#FF9800] stroke-[#FF9800]"
                  />
                ))}
              </div>
              <div className="px-3 py-2 font-[beVietnamPro] text-[16px] text-[#666666]">
                {item.desc}
              </div>

              <div className="px-3 py-2 flex items-center gap-2">
                <Image src={fb} alt="" />
                <Image src={twitter} alt="" />
                <Image src={insta} alt="" />
                <Image src={linkedin} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
   
    </div>
  );
}
