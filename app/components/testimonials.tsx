"use client";
import React from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const leftContentRef = useScrollAnimation<HTMLDivElement>();
  const rightContentRef = useScrollAnimation<HTMLDivElement>();

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
    <div className="container mx-auto py-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Content */}
        <div ref={leftContentRef} className="lg:w-6/12 flex flex-col gap-6 scroll-reveal-left">
          <h2 className="text-[#111D15] font-[800] text-[44px] leading-tight">
            Feedback About Their Experience With Us
          </h2>
          <p className="text-[#666666] font-[400] text-[16px]">
            Read testimonials from our satisfied clients. See how our cleaning
            services have made a difference in their lives and homes
          </p>

          {/* Navigation Arrows */}
          <div className="flex gap-3 mt-4">
            <button className="testimonial-prev w-[56px] h-[56px] rounded-[16px] border-2 border-[#36B864] flex items-center justify-center cursor-pointer bg-white hover:bg-[#36B864] transition-all duration-300 hover:scale-[1.05] active:scale-[0.95] group">
              <ChevronLeft className="w-5 h-5 text-[#36B864] group-hover:text-white" />
            </button>
            <button className="testimonial-next w-[56px] h-[56px] rounded-[16px] bg-[#36B864] flex items-center justify-center cursor-pointer hover:bg-[#2ea055] hover:scale-[1.05] active:scale-[0.95] transition-all duration-300">
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Right - Testimonial Carousel */}
        <div ref={rightContentRef} className="lg:w-6/12 w-full scroll-reveal-right delay-200">
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
                <div className="relative rounded-[28px] border-r-[10px] border-t-[10px] border-[#36B864] p-3 transition-transform duration-300 hover:translate-y-[-2px] group/card">
                  <div className="bg-white rounded-[22px] p-6 flex gap-6 items-start shadow-sm border border-gray-100/50">
                    {/* Photo */}
                    <div className="w-[170px] h-[220px] flex-shrink-0 rounded-[18px] overflow-hidden bg-[#e8efe8] relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/card:scale-1.05"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-2 flex-1">
                      <h4 className="text-[#111D15] font-[700] text-[22px]">
                        {item.name}
                      </h4>
                      <p className="text-[#66px] font-[400] text-[15px] text-[#666666]">
                        {item.role}
                      </p>

                      {/* Stars */}
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 transition-transform duration-300 group-hover/card:scale-1.1`}
                            style={{ 
                              transitionDelay: `${i * 40}ms`,
                              fill: i < item.rating ? "#FF9800" : "#ddd",
                              stroke: i < item.rating ? "#FF9800" : "#ddd"
                            }}
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
                  <div className="absolute top-6 right-6 w-[48px] h-[48px] rounded-[12px] bg-[#36B864] flex items-center justify-center transition-transform duration-300 group-hover/card:rotate-[15deg]">
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
