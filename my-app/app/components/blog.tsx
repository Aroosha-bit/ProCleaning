"use client";
import React from "react";
import { MoveUpRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      date: "June 25, 2026",
      category: "Cleaning Tips",
      title: "Top 10 Eco-Friendly Cleaning Products for Your Home",
      description:
        "Discover the best eco-friendly cleaning products that keep your home spotless while being gentle on the environment.",
      color: "#36B864",
    },
    {
      date: "June 18, 2026",
      category: "Home Care",
      title: "How to Deep Clean Your Kitchen Like a Pro",
      description:
        "Learn professional kitchen deep cleaning techniques that will make your cooking space shine and stay hygienic.",
      color: "#FF9800",
    },
    {
      date: "June 10, 2026",
      category: "Service News",
      title: "ProCleaning Expands Services to Commercial Properties",
      description:
        "We're excited to announce our expansion into commercial cleaning services, bringing the same quality to your workplace.",
      color: "#2196F3",
    },
  ];

  return (
    <div className="container mx-auto py-20">
      {/* Header */}
      <div className="flex justify-between items-end mb-12">
        <div className="flex flex-col gap-3 max-w-[600px]">
          <p className="text-[#36B864] font-[400] text-[16px]">Our Blog</p>
          <h2 className="text-[#111D15] font-[600] text-[44px] leading-tight">
            Stay Updated with Our Tips & Service News!
          </h2>
        </div>
        <a
          href="#"
          className="flex items-center gap-2 text-[#36B864] font-[500] text-[16px] hover:underline"
        >
          See More
          <MoveUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="group rounded-[20px] overflow-hidden border border-[#e8efe8] hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            {/* Card Image Area */}
            <div
              className="h-[200px] relative"
              style={{
                background: `linear-gradient(135deg, ${post.color}22 0%, ${post.color}11 100%)`,
              }}
            >
              <div className="absolute top-4 left-4">
                <span
                  className="text-[12px] font-[500] px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: post.color }}
                >
                  {post.category}
                </span>
              </div>
              <div className="w-full h-full flex items-center justify-center">
                <div
                  className="w-20 h-20 rounded-full opacity-20"
                  style={{ backgroundColor: post.color }}
                />
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col gap-3">
              <p className="text-[#999] font-[400] text-[13px]">{post.date}</p>
              <h3 className="text-[#111D15] font-[600] text-[20px] leading-snug group-hover:text-[#36B864] transition-colors">
                {post.title}
              </h3>
              <p className="text-[#666] font-[400] text-[14px] leading-relaxed">
                {post.description}
              </p>
              <a
                href="#"
                className="flex items-center gap-2 text-[#36B864] font-[500] text-[14px] mt-2 hover:underline"
              >
                Read More
                <MoveUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
