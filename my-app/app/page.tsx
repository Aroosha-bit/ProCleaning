"use client";
import Header from "./components/header";
import Services from "./components/services";
import Team from "./components/team";
import About from "./components/about";
import Pricing from "./components/pricing";
import Testimonials from "./components/testimonials";
import Blog from "./components/blog";
import Footer from "./components/footer";

export default function Home() {
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
        className="bg-[url('/assets/hero.png')] bg-cover w-full h-[585px] "
      >
        <div className="container ml-30 py-16 flex flex-col items-start gap-4 w-4/12">
          <div className="font-[beVietnamPro] font-normal text-[#111D15] text-[20px]">
            Quality cleaning at a fair price.
          </div>
          <div className="font-[beVietnamPro] leading-[1.15] font-[700] text-[#111D15] text-[52px]">
            Specialized, efficient, and thorough cleaning services
          </div>
          <p className="font-[beVietnamPro] font-normal text-[#666666] text-[18px]">
            We provide Performing cleaning tasks using the least amount of time,
            energy, and money.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToContact}
              className="bg-[#36B864] cursor-pointer text-white font-[500] text-[16px] rounded-[8px] px-[32px] py-[12px] hover:bg-[#2ea055] transition-colors"
            >
              Get Start Now
            </button>
            <button
              onClick={scrollToServices}
              className="border cursor-pointer border-[#666666] text-[#111D15] font-[500] text-[16px] rounded-[8px] px-[32px] py-[12px] hover:border-[#36B864] hover:text-[#36B864] transition-colors"
            >
              View all Services
            </button>
          </div>
        </div>
      </section>

      <Services />
      <Team />
      <About />
      <Pricing  />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
}
