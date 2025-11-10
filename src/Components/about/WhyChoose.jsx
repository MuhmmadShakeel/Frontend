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
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  // Professional Background Animation Component
  const BackgroundAnimation = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Lines - Horizontal */}
        <div className="absolute inset-0">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
              style={{ top: `${i * 4}%` }}
            />
          ))}
        </div>

        {/* Grid Lines - Vertical */}
        <div className="absolute inset-0">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute top-0 h-full w-[0.5px] bg-gradient-to-b from-transparent via-white/20 to-transparent"
              style={{ left: `${i * 4}%` }}
            />
          ))}
        </div>

        {/* Diagonal Lines - 45 degrees */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`d1-${i}`}
              className="absolute w-[200%] h-[0.5px] bg-gradient-to-r from-transparent via-[#FFB900]/30 to-transparent transform rotate-45"
              style={{ 
                top: `${(i * 8) - 40}%`,
                left: `${(i * 6) - 40}%`,
                animation: `moveDiagonal 20s linear infinite`,
                animationDelay: `${i * 1}s`
              }}
            />
          ))}
        </div>

        {/* Diagonal Lines - -45 degrees */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`d2-${i}`}
              className="absolute w-[200%] h-[0.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent transform -rotate-45"
              style={{ 
                top: `${(i * 8) - 40}%`,
                right: `${(i * 6) - 40}%`,
                animation: `moveDiagonalReverse 18s linear infinite`,
                animationDelay: `${i * 1.2}s`
              }}
            />
          ))}
        </div>

        {/* Moving Progress Bars */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`pb-${i}`}
              className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFB900]/40 to-transparent"
              style={{
                top: `${5 + (i * 8)}%`,
                animation: `moveHorizontal 10s linear infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>

        {/* Scanning Lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`scan-${i}`}
              className="absolute w-full h-[2px] bg-gradient-to-b from-[#FFB900]/50 to-transparent"
              style={{
                animation: `scanVertical 8s linear infinite`,
                animationDelay: `${i * 1}s`
              }}
            />
          ))}
        </div>

        {/* Floating Bubbles - 200 bubbles */}
        <div className="absolute inset-0">
          {Array.from({ length: 200 }).map((_, i) => {
            const size = Math.random() * 6 + 2;
            const left = Math.random() * 100;
            const delay = Math.random() * 15;
            const duration = Math.random() * 20 + 15;
            const opacity = Math.random() * 0.4 + 0.1;
            
            return (
              <div
                key={`bubble-${i}`}
                className="absolute rounded-full bg-white/25"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${left}%`,
                  bottom: `-${size}px`,
                  animation: `floatUp ${duration}s linear infinite`,
                  animationDelay: `${delay}s`,
                  opacity: opacity,
                  filter: 'blur(0.5px)',
                }}
              />
            );
          })}
        </div>

        {/* Corner Connectors */}
        <div className="absolute top-0 left-0 w-24 h-[1px] bg-gradient-to-r from-[#FFB900] to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-[1px] h-24 bg-gradient-to-b from-[#FFB900] to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-0 w-24 h-[1px] bg-gradient-to-l from-white/40 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-0 w-[1px] h-24 bg-gradient-to-b from-white/40 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-24 h-[1px] bg-gradient-to-r from-white/40 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[1px] h-24 bg-gradient-to-t from-white/40 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-24 h-[1px] bg-gradient-to-l from-[#FFB900] to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[1px] h-24 bg-gradient-to-t from-[#FFB900] to-transparent animate-pulse"></div>

        {/* Floating Shapes */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-[#FFB900] rounded-full opacity-20 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-1/3 right-20 w-6 h-6 bg-white rounded-lg opacity-15 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-[#FFB900] rounded-full opacity-20 animate-bounce" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
      </div>
    );
  };

  const features = [
    {
      icon: <FaBriefcase className="text-3xl" />,
      title: "Expert Consultancy",
      desc: "Our experienced consultants guide your business with smart strategies and actionable insights.",
    },
    {
      icon: <FaCogs className="text-3xl" />,
      title: "Innovative Solutions",
      desc: "We blend technology and creativity to deliver scalable, efficient, and modern solutions.",
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Client-First Approach",
      desc: "Your success is our mission. We work closely with you to achieve measurable outcomes.",
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Growth & Performance",
      desc: "Helping your business reach new heights with strategic direction and continuous innovation.",
    },
  ];

  return (
    <section className="relative bg-[#090447] text-white py-14 md:py-20 px-5 md:px-12 overflow-hidden">
      {/* Background gradients for glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A074E] via-[#090447] to-[#060335] opacity-95"></div>

      {/* Professional Background Animation */}
      <BackgroundAnimation />

      <div className="relative max-w-6xl mx-auto text-center space-y-16 z-10">
        {/* Heading */}
        <div data-aos="fade-up" className="space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFB900] mb-4 tracking-wide">
            Why Choose Amna's Network?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Amna's Network combines expert business consultancy with
            cutting-edge software solutions, helping you grow, innovate, and
            achieve long-term success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="relative bg-[#0D0A63]/70 rounded-3xl p-8 shadow-2xl border-2 border-[#FFB900]/30 
                         hover:shadow-[#FFB900]/40 hover:-translate-y-3 transition-all duration-500 
                         backdrop-blur-lg overflow-hidden group"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFB900]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FFB900] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              {/* Icon Container */}
              <div
                className="relative flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl 
                           bg-gradient-to-br from-[#FFB900] to-[#f8d250] text-[#090447] shadow-2xl
                           transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                data-aos="zoom-in"
                data-aos-delay={idx * 150 + 200}
              >
                {item.icon}
                {/* Icon Glow */}
                <div className="absolute inset-0 rounded-2xl bg-[#FFB900] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>

              <h3
                data-aos="fade-right"
                data-aos-delay={idx * 150 + 100}
                className="text-2xl font-bold text-[#FFB900] mb-4 group-hover:text-white transition-colors duration-300"
              >
                {item.title}
              </h3>
              <p
                data-aos="fade-up"
                data-aos-delay={idx * 150 + 150}
                className="text-gray-200 leading-relaxed text-base group-hover:text-gray-100 transition-colors duration-300"
              >
                {item.desc}
              </p>

              {/* Hover Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#FFB900] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight Box */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="relative mt-20 bg-gradient-to-r from-[#FFB900] to-[#f8d250] text-[#090447] 
                     rounded-3xl shadow-2xl py-10 md:py-14 px-6 md:px-16 max-w-4xl mx-auto overflow-hidden
                     transform transition-all duration-500 hover:scale-105 hover:shadow-3xl group"
        >
          {/* Background Animation Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#090447]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#090447]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
          
          <h3 className="text-3xl font-bold mb-4 relative z-10">Empowering Your Business</h3>
          <p className="text-lg leading-relaxed font-medium relative z-10">
            Partner with Amna's Network to experience innovative strategies,
            seamless execution, and measurable growth. Together, we turn your
            vision into success.
          </p>

          {/* Floating Elements */}
          <div className="absolute top-4 right-6 w-4 h-4 bg-[#090447] rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute bottom-4 left-6 w-3 h-3 bg-[#090447] rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      {/* Add animation styles directly in style tag */}
      <style jsx>{`
        @keyframes moveDiagonal {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); opacity: 0; }
        }
        
        @keyframes moveDiagonalReverse {
          0% { transform: translateX(100%) translateY(-100%) rotate(-45deg); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateX(-100%) translateY(100%) rotate(-45deg); opacity: 0; }
        }
        
        @keyframes moveHorizontal {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes scanVertical {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes floatUp {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.1; }
          100% { transform: translateY(-100vh) translateX(15px) scale(1.1); opacity: 0; }
        }

        .hover\:shadow-3xl:hover {
          box-shadow: 0 25px 50px -12px rgba(255, 185, 0, 0.4);
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .absolute.inset-0.pointer-events-none > div:nth-child(n+4) {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChoose;