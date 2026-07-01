"use client";
import React, { useState } from "react";
import { CircleCheck } from "lucide-react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic Plan",
      monthlyPrice: 99,
      yearlyPrice: 949,
      description: "Perfect for small homes and apartments",
      features: [
        "Weekly Cleaning",
        "Basic Dusting & Mopping",
        "Kitchen Cleaning",
        "Bathroom Sanitization",
        "Trash Removal",
      ],
      highlighted: false,
    },
    {
      name: "Standard Plan",
      monthlyPrice: 149,
      yearlyPrice: 1429,
      description: "Best for families and medium spaces",
      features: [
        "Bi-Weekly Deep Clean",
        "All Basic Plan Features",
        "Window Cleaning",
        "Carpet Vacuuming",
        "Appliance Cleaning",
        "Laundry Folding",
      ],
      highlighted: true,
    },
    {
      name: "Premium Plan",
      monthlyPrice: 199,
      yearlyPrice: 1909,
      description: "Complete care for large homes or offices",
      features: [
        "Daily Cleaning Service",
        "All Standard Plan Features",
        "Upholstery Cleaning",
        "Organizing & Decluttering",
        "Eco-Friendly Products",
        "Priority Scheduling",
      ],
      highlighted: false,
    },
  ];

  const scrollToContact = () => {
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="pricing"
      className="mt-10 w-full py-20"
      style={{
        background: "linear-gradient(135deg, #111D15 0%, #1a3020 50%, #111D15 100%)",
      }}
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-10">
          <p className="text-[#36B864] font-[400] text-[16px]">Our Pricing</p>
          <p className="text-white font-[600] text-[44px] max-w-[600px] leading-tight">
            Choose From Our Lowest Plans and Prices
          </p>
        </div>

        {/* Monthly/Yearly Toggle */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-6 py-2 rounded-full text-[14px] font-[500] transition-all cursor-pointer ${
              !isYearly
                ? "bg-[#36B864] text-white"
                : "bg-transparent border border-[#4D6B55] text-[#999]"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2 rounded-full text-[14px] font-[500] transition-all cursor-pointer ${
              isYearly
                ? "bg-[#36B864] text-white"
                : "bg-transparent border border-[#4D6B55] text-[#999]"
            }`}
          >
            Yearly
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-[20px] p-8 flex flex-col gap-6 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-[#36B864] text-white scale-[1.03]"
                  : "bg-[#1a2e20] text-white border border-[#2a4a33]"
              }`}
            >
              <div>
                <p
                  className={`text-[18px] font-[600] mb-1 ${
                    plan.highlighted ? "text-white" : "text-[#36B864]"
                  }`}
                >
                  {plan.name}
                </p>
                <p
                  className={`text-[14px] ${
                    plan.highlighted ? "text-white/80" : "text-[#999]"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="flex items-end gap-1">
                <span className="text-[48px] font-[700] leading-none">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span
                  className={`text-[16px] mb-1 ${
                    plan.highlighted ? "text-white/70" : "text-[#999]"
                  }`}
                >
                  /{isYearly ? "year" : "month"}
                </span>
              </div>

              <div
                className={`border-t ${
                  plan.highlighted ? "border-white/30" : "border-[#2a4a33]"
                }`}
              />

              <div className="flex flex-col gap-4">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-3">
                    <CircleCheck
                      className={`w-5 h-5 flex-shrink-0 ${
                        plan.highlighted
                          ? "fill-white stroke-[#36B864]"
                          : "fill-[#36B864] stroke-[#1a2e20]"
                      }`}
                    />
                    <span
                      className={`text-[15px] ${
                        plan.highlighted ? "text-white" : "text-[#ccc]"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={scrollToContact}
                className={`mt-auto w-full py-3 rounded-[10px] font-[500] text-[16px] cursor-pointer transition-all ${
                  plan.highlighted
                    ? "bg-white text-[#111D15] hover:bg-gray-100"
                    : "bg-[#36B864] text-white hover:bg-[#2ea055]"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
