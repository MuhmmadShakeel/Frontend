import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// React Icons کو امپورٹ کریں
import { FaDownload } from 'react-icons/fa6'; 

import certificate from "../Images/certificate.jpeg";
import Certificate from "../Images/certificate1.jpeg";

const OurRegistrations = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      easing: "ease-in-out",
      disable: "mobile", 
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

  const certificates = [
    { src: certificate, title: "Official Business Registration", filename: "Amna_Business_Registration.jpeg" },
    { src: Certificate, title: "Professional Accreditation", filename: "Amna_Professional_Accreditation.jpeg" },
  ];

  return (
    <section className="bg-[#090447] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-x-hidden relative">
      {/* Professional Background Animation */}
      <BackgroundAnimation />
      
      <div className="max-w-7xl mx-auto text-center space-y-20 relative z-10">
        
        {/* Section Heading */}
        <div data-aos="fade-down" className="space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFB900] mb-4">
            Our Official Registrations
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Amna's Network is **officially registered and recognized** by relevant 
            authorities. Our verified credentials ensure trust and a commitment 
            to the highest professional standards.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12">
          {certificates.map((item, idx) => (
            <div
              key={idx}
              data-aos={idx % 2 === 0 ? "flip-left" : "flip-right"}
              data-aos-delay={idx * 100}
              className="relative bg-gradient-to-br from-[#0D0A63] to-[#15126D] rounded-3xl shadow-2xl transition-all duration-700 
                         group overflow-hidden border-2 border-[#FFB900]/30 backdrop-blur-sm hover:shadow-lg hover:shadow-[#FFB900]/30 hover:-translate-y-2"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFB900]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

              {/* Image Container with Enhanced Zoom Effect */}
              <div className="w-full h-auto max-h-[500px] overflow-hidden relative">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Enhanced Title Overlay / Footer */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6 pt-10 bg-gradient-to-t from-black/90 to-transparent text-left flex justify-between items-end"
              >
                <div className="transform transition-transform duration-500 group-hover:translate-y-1">
                  <h3 className="text-white text-2xl font-bold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#FFB900] text-sm font-medium">
                    Verified Credibility
                  </p>
                </div>

                {/* Enhanced DOWNLOAD BADGE */}
                <a 
                  href={item.src} 
                  download={item.filename} 
                  className="bg-gradient-to-br from-[#FFB900] to-[#FFD700] text-[#090447] p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-110 hover:rotate-12 group/download"
                  aria-label={`Download ${item.title}`}
                  title={`Download ${item.title}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaDownload className="text-xl transform transition-transform duration-300 group-hover/download:scale-125" />
                </a>
                {/* END DOWNLOAD BADGE */}
              </div>

              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFB900] to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom Highlight */}
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="mt-16 bg-gradient-to-r from-[#FFB900] to-[#FFD700] text-[#090447] rounded-2xl shadow-2xl py-10 px-8 md:px-16 max-w-4xl mx-auto border-2 border-white/40 transform transition-all duration-500 hover:shadow-lg hover:shadow-[#FFB900]/50 hover:scale-105 group/highlight relative overflow-hidden"
        >
          {/* Background animation elements */}
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#090447]/10 rounded-full blur-xl group-hover/highlight:scale-150 transition-transform duration-1000"></div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#090447]/10 rounded-full blur-xl group-hover/highlight:scale-150 transition-transform duration-1000"></div>
          
          <h3 className="text-3xl md:text-4xl font-extrabold mb-3 relative z-10">Certified & Trusted</h3>
          <p className="text-lg leading-relaxed font-medium relative z-10">
            Our certifications reflect our dedication to maintaining **strict professional 
            standards** and delivering the highest quality of services to every client.
          </p>

          {/* Floating elements */}
          <div className="absolute top-4 right-6 w-3 h-3 bg-[#090447] rounded-full opacity-40 animate-bounce"></div>
          <div className="absolute bottom-4 left-6 w-2 h-2 bg-[#090447] rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
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

export default OurRegistrations;