import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../Images/logo.jpg";

const Hero = () => {
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

  return (
    <section className="bg-[#090447] text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden relative">
      {/* Professional Background Animation */}
      <BackgroundAnimation />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16 md:gap-24 relative z-10">
        {/* Left Side - Text Section */}
        <div data-aos="fade-right" data-aos-duration="1200">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
            About <span className="text-[#FFB900]">Amna's Network</span>
          </h1>
          {/* Divider Line */}
          <div className="w-28 h-1 bg-[#FFB900] mb-8 rounded-full"></div>
          
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
            We combine expert **business consultancy** with cutting-edge **digital solutions**
            to help your business grow efficiently and strategically. We are committed to your success.
          </p>
          
          <button
            data-aos="zoom-in"
            data-aos-delay="500"
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
          className="relative w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl transition duration-500 hover:shadow-xl"
        >
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
              Amna's Network
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

export default Hero;