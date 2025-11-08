import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Importing professional icons
import { FaBriefcase, FaCogs, FaHandshake, FaRocket } from "react-icons/fa";

const WhyChoose = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100, // prevents overflow triggering
      easing: "ease-in-out",
    });
  }, []);

  const features = [
    {
      icon: <FaBriefcase />,
      title: "Expert Consultancy",
      desc: "Our experienced consultants guide your business with smart strategies and actionable insights.",
    },
    {
      icon: <FaCogs />,
      title: "Innovative Solutions",
      desc: "We blend technology and creativity to deliver scalable, efficient, and modern solutions.",
    },
    {
      icon: <FaHandshake />,
      title: "Client-First Approach",
      desc: "Your success is our mission. We work closely with you to achieve measurable outcomes.",
    },
    {
      icon: <FaRocket />,
      title: "Growth & Performance",
      desc: "Helping your business reach new heights with strategic direction and continuous innovation.",
    },
  ];

  return (
    <section className="relative bg-[#090447] text-white py-14 md:py-20 px-5 md:px-12 overflow-hidden">
      {/* Background gradients for glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A074E] via-[#090447] to-[#060335] opacity-95"></div>


      <div className="relative max-w-6xl mx-auto text-center space-y-16">
        {/* Heading */}
        <div data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFB900] mb-4 tracking-wide">
            Why Choose Amna’s Network?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Amna’s Network combines expert business consultancy with
            cutting-edge software solutions, helping you grow, innovate, and
            achieve long-term success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="relative bg-[#0D0A63]/70 rounded-3xl p-6 shadow-lg border border-[#FFB900]/30 
                         hover:shadow-[#FFB900]/40 hover:-translate-y-2 transition-all duration-500 
                         backdrop-blur-md overflow-hidden"
            >
              {/* Icon Container */}
              <div
                className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full 
                           bg-gradient-to-br from-[#FFB900] to-[#f8d250] text-[#090447] text-4xl shadow-md"
                data-aos="zoom-in"
              >
                {item.icon}
              </div>

              <h3
                data-aos="fade-right"
                className="text-2xl font-semibold text-[#FFB900] mb-3"
              >
                {item.title}
              </h3>
              <p
                data-aos="fade-up"
                className="text-gray-200 leading-relaxed text-base"
              >
                {item.desc}
              </p>

              {/* Glow Overlay */}
              <div className="absolute inset-0 opacity-0 hover:opacity-10 bg-[#FFB900] transition-opacity duration-700 rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight Box */}
        <div
          data-aos="fade-up"
          className="relative mt-20 bg-gradient-to-r from-[#FFB900] to-[#f8d250] text-[#090447] 
                     rounded-3xl shadow-2xl py-8 md:py-12 px-5 md:px-16 max-w-4xl mx-auto overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#090447]/10 rounded-full blur-3xl"></div>
          <h3 className="text-3xl font-bold mb-4">Empowering Your Business</h3>
          <p className="text-lg leading-relaxed font-medium">
            Partner with Amna’s Network to experience innovative strategies,
            seamless execution, and measurable growth. Together, we turn your
            vision into success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
