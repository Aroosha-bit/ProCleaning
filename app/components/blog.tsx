"use client";
import React from "react";
import { MoveUpRight } from "lucide-react";
import blog1 from "@/public/assets/blog1.svg";
import blog2 from "@/public/assets/blog2.svg";
import blog3 from "@/public/assets/blog3.svg";
import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Blog = () => {
  const headerRef = useScrollAnimation<HTMLDivElement>();
  const cardsRef = useScrollAnimation<HTMLDivElement>();

  const posts = [
    {
      img: blog1,
      date: "June 25, 2026",
      category: "Cleaning Tips",
      title: "Top 10 Eco-Friendly Cleaning Products for Your Home",
      description:
        "Discover the best eco-friendly cleaning products that keep your home spotless while being gentle on the environment.",
      color: "#36B864",
      delayClass: "delay-100",
    },
    {
      img: blog2,
      date: "June 18, 2026",
      category: "Home Care",
      title: "How to Deep Clean Your Kitchen Like a Pro",
      description:
        "Learn professional kitchen deep cleaning techniques that will make your cooking space shine and stay hygienic.",
      color: "#FF9800",
      delayClass: "delay-200",
    },
    {
      img: blog3,
      date: "June 10, 2026",
      category: "Service News",
      title: "ProCleaning Expands Services to Commercial Properties",
      description:
        "We're excited to announce our expansion into commercial cleaning services, bringing the same quality to your workplace.",
      color: "#2196F3",
      delayClass: "delay-300",
    },
  ];

  return (
    <div className="container mx-auto py-20 overflow-hidden">
      {/* Header */}
      <div ref={headerRef} className="flex justify-between items-end mb-12 scroll-reveal">
        <div className="flex flex-col gap-3 max-w-[600px]">
          <p className="text-[#36B864] font-[400] text-[16px]">Our Blog</p>
          <h2 className="text-[#111D15] font-[600] text-[44px] leading-tight">
            Stay Updated with Our Tips & Service News!
          </h2>
        </div>
        <a
          href="#"
          className="flex items-center gap-2 text-[#36B864] font-[500] text-[16px] hover:underline transition-all duration-300 hover:scale-[1.05]"
        >
          See More
          <MoveUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Blog Cards */}
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 scroll-reveal delay-200">
        {posts.map((post, index) => (
          <div
            key={index}
            className={`group rounded-[20px] overflow-hidden border border-[#e8efe8] hover-lift bg-white cursor-pointer`}
          >
            {/* Card Image Area */}
            <div
              className="h-[200px] relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${post.color}22 0%, ${post.color}11 100%)`,
              }}
            >
              <div className="absolute top-4 left-4 z-10">
                <span
                  className="text-[12px] font-[500] px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: post.color }}
                >
                  {post.category}
                </span>
              </div>
              <div className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.06]">
                <Image src={post.img} alt="" className="object-contain" />
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col gap-3">
              <p className="text-[#999] font-[400] text-[13px]">{post.date}</p>
              <h3 className="text-[#111D15] font-[600] text-[20px] leading-snug group-hover:text-[#36B864] transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-[#666] font-[400] text-[14px] leading-relaxed">
                {post.description}
              </p>
              <div
                className="flex items-center gap-2 text-[#36B864] font-[500] text-[14px] mt-2 group-hover:underline w-fit"
              >
                <span>Read More</span>
                <MoveUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
