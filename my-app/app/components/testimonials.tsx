"use client";
import React from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Robert Fox",
      role: "Business Man",
      rating: 5,
      image: "/assets/robert-fox.svg",
      text: "Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service",
    },
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      rating: 5,
      image: "/assets/robert-fox.svg",
      text: "Absolutely amazing service! My house has never looked cleaner. The team was professional, thorough, and incredibly friendly. I've been using their services for over a year now.",
    },
    {
      name: "Michael Chen",
      role: "Office Manager",
      rating: 5,
      image: "/assets/robert-fox.svg",
      text: "We hired ProCleaning for our office space and the results were outstanding. They pay attention to every detail and our workspace feels fresh and inviting every morning.",
    },
    {
      name: "Emily Rodriguez",
      role: "Business Owner",
      rating: 5,
      image: "/assets/robert-fox.svg",
      text: "The best cleaning service I've ever used. Their team is reliable, trustworthy, and delivers consistent results. The pricing is fair and the quality is top-notch. A+ service!",
    },
  ];

  return (
    <div className="container mx-auto py-20">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Content */}
        <div className="lg:w-6/12 flex flex-col gap-6">
          <h2 className="text-[#111D15] font-[800] text-[44px] leading-tight">
            Feedback About Their Experience With Us
          </h2>
          <p className="text-[#666666] font-[400] text-[16px]">
            Read testimonials from our satisfied clients. See how our cleaning
            services have made a difference in their lives and homes
          </p>

          {/* Navigation Arrows */}
          <div className="flex gap-3 mt-4">
            <button className="testimonial-prev w-[56px] h-[56px] rounded-[16px] border-2 border-[#36B864] flex items-center justify-center cursor-pointer bg-white hover:bg-[#36B864] transition-all group">
              <ChevronLeft className="w-5 h-5 text-[#36B864] group-hover:text-white" />
            </button>
            <button className="testimonial-next w-[56px] h-[56px] rounded-[16px] bg-[#36B864] flex items-center justify-center cursor-pointer hover:bg-[#2ea055] transition-all">
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Right - Testimonial Carousel */}
        <div className="lg:w-6/12 w-full">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative rounded-[28px] border-r-[10px] border-t-[10px] border-[#36B864] p-3">
                  <div className="bg-white rounded-[22px] p-6 flex gap-6 items-start">
                    {/* Photo */}
                    <div className="w-[170px] h-[220px] flex-shrink-0 rounded-[18px] overflow-hidden bg-[#e8efe8] relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-2 flex-1">
                      <h4 className="text-[#111D15] font-[700] text-[22px]">
                        {item.name}
                      </h4>
                      <p className="text-[#666] font-[400] text-[15px]">
                        {item.role}
                      </p>

                      {/* Stars */}
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < item.rating
                                ? "fill-[#FF9800] stroke-[#FF9800]"
                                : "fill-[#ddd] stroke-[#ddd]"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-[#444] font-[400] text-[15px] leading-relaxed mt-2">
                        {item.text}
                      </p>
                    </div>
                  </div>

                  {/* Quote Icon Badge */}
                  <div className="absolute top-6 right-6 w-[48px] h-[48px] rounded-[12px] bg-[#36B864] flex items-center justify-center">
                    <Quote className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
