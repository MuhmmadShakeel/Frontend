import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../Images/logo.jpg";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // اینیمیشن کی مدت کو تھوڑا کم کیا
      once: true,
      easing: "ease-in-out", // ہموار اینیمیشن کے لیے
      disable: "mobile", // موبائل پر AOS کو غیر فعال کیا تاکہ کارکردگی بہتر ہو اور اوور فلو نہ ہو
    });
  }, []);

  return (
    // overflow-x-hidden کلاس کو شامل کیا تاکہ افقی اوور فلو کو روکا جا سکے
    <section className="bg-[#090447] text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16 md:gap-24">
        {/* Left Side - Text Section */}
        <div data-aos="fade-right" data-aos-duration="1200">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
            About <span className="text-[#FFB900]">Amna’s Network</span>
          </h1>
          {/* Divider Line */}
          <div className="w-28 h-1 bg-[#FFB900] mb-8 rounded-full"></div>
          
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
            We combine expert **business consultancy** with cutting-edge **digital solutions**
            to help your business grow efficiently and strategically. We are committed to your success.
          </p>
          
          <button
            data-aos="zoom-in"
            data-aos-delay="500" // بٹن کو تھوڑا تاخیر سے ظاہر کیا
            className="bg-[#FFB900] text-[#090447] font-bold text-lg px-8 py-3 rounded-lg shadow-xl 
                       hover:bg-[#e0a800] hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            aria-label="Learn more about Amna's Network"
          >
            Learn More
          </button>
        </div>

        {/* Right Side - Image / Logo Section */}
        <div
          data-aos="fade-left"
          data-aos-duration="1200"
          className="relative w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl transition duration-500 hover:shadow-glow-xl"
        >
            {/* Image Glow Effect کے لیے CSS کے ذریعے شیڈو کو ہٹایا یا ہلکا کیا جا سکتا ہے */}
          <img
            src={logo}
            alt="Amna's Network Logo - Driving Business Excellence"
            className="w-full h-auto object-cover transform transition duration-700 ease-in-out hover:scale-[1.03]"
          />
          {/* Overlay to improve text visibility */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-8">
            <h2
              data-aos="fade-down"
              data-aos-delay="200"
              className="text-3xl sm:text-4xl font-extrabold mb-3 text-[#FFB900] tracking-wider"
            >
              Amna’s Network
            </h2>
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="w-20 h-1 bg-[#FFB900] mb-4 rounded-full"
            ></div>
            <p 
              data-aos="fade-up" 
              data-aos-delay="600"
              className="text-white text-xl font-medium"
            >
              Driving Business Excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;