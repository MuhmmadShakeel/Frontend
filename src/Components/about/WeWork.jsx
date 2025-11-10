import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WeWork = () => {
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

  const steps = [
    {
      num: 1,
      title: "Vision & Mission Alignment",
      desc: "Our journey begins by clearly understanding the client's comprehensive vision and aligning their mission with effective business strategies and innovative solutions.",
      icon: "💡",
    },
    {
      num: 2,
      title: "Strategic Role Selection",
      desc: (
        <>
          <p className="mb-2 font-semibold text-[#FFB900]">
            We offer two primary collaboration paths:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>
              **Business Consultant:** Focusing on improving strategy, management, marketing, and operational efficiency.
            </li>
            <li>
              **Trainer/Educator:** Leading specialized IT, digital marketing, or professional development training courses.
            </li>
          </ul>
        </>
      ),
      icon: "🤝",
    },
    {
      num: 3,
      title: "Core Responsibilities & Execution",
      desc: (
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Conducting in-depth client needs analysis and stakeholder meetings.</li>
          <li>Developing strategic business reports, comprehensive proposals, and measurable action plans.</li>
          <li>Managing and optimizing high-impact digital marketing campaigns.</li>
          <li>Delivering focused training and mentorship sessions to students/professionals.</li>
        </ul>
      ),
      icon: "⚙️",
    },
    {
      num: 4,
      title: "Key Competencies We Seek",
      desc: (
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            "Strategic Thinking",
            "Effective Communication",
            "Technical Proficiency (WordPress, Canva, etc.)",
            "Problem-solving",
            "Digital Marketing Acumen",
            "Teamwork & Leadership",
          ].map((skill, i) => (
            <span
              key={i}
              data-aos="flip-up"
              data-aos-delay={i * 50}
              className="px-3 py-1 bg-[#FFB900]/15 text-[#FFB900] rounded-full font-medium text-xs md:text-sm border border-[#FFB900]/40 transition-all hover:bg-[#FFB900] hover:text-[#090447] cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      ),
      icon: "🌟",
    },
    {
      num: 5,
      title: "Continuous Growth & Investment",
      desc: (
        <>
          <p className="mb-2">
            We prioritize the professional advancement of our team through:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Structured professional development workshops and seminars.</li>
            <li>Opportunities for advanced certification and specialized training.</li>
            <li>A culture of continuous learning and skill enhancement.</li>
          </ul>
        </>
      ),
      icon: "📈",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#0C0860] via-[#090447] to-[#060335] text-white py-16 lg:py-20 px-3 sm:px-6 lg:px-8 overflow-x-hidden relative">
      {/* Professional Background Animation */}
      <BackgroundAnimation />

      <div className="max-w-6xl mx-auto space-y-24 relative z-10">

        {/* --- How We Work Header --- */}
        <div className="text-center relative">
          <h2
            data-aos="fade-down"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFB900] mb-4 relative"
          >
            Our Methodology
            {/* Underline accent */}
            <div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#FFB900] to-transparent"
              data-aos="zoom-in"
              data-aos-delay="300"
            ></div>
          </h2>
          <p 
            data-aos="fade-up" 
            data-aos-delay="200" 
            className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto relative"
          >
            A structured approach for excellence in consulting and training.
          </p>
        </div>
        
        {/* --- Work Steps/Timeline --- */}
        <div className="relative">
          {/* Enhanced Vertical Timeline Line with Gradient */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FFB900] via-[#FFB900]/40 to-[#FFB900]/20 rounded-full"></div>

          {/* Enhanced Connection Lines */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            {steps.slice(0, -1).map((_, idx) => (
              <div
                key={idx}
                className="absolute left-6 bg-gradient-to-b from-[#FFB900]/40 to-transparent"
                style={{
                  top: `${120 + (idx * 120)}px`,
                  height: '80px',
                  width: '1px',
                  animation: `pulseLine 2s ease-in-out infinite`,
                  animationDelay: `${idx * 0.5}s`
                }}
              />
            ))}
          </div>

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, idx) => (
              <div
                key={idx}
                data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-offset="150"
                className="relative flex items-start md:items-center gap-6 md:gap-12 group"
              >
                {/* Enhanced Step Number Circle with Glow Effect */}
                <div 
                  className="relative z-10 bg-gradient-to-br from-[#FFB900] to-[#FF6B00] text-[#090447] font-extrabold rounded-full w-14 h-14 flex items-center justify-center text-xl shadow-2xl flex-shrink-0 border-4 border-[#090447] transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-[#FFB900]/50"
                  data-aos="zoom-in"
                  data-aos-delay={idx * 100}
                >
                  {step.icon}
                  {/* Pulse animation */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#FFB900] animate-ping opacity-75"></div>
                </div>
                
                {/* Enhanced Content Card with Glass Effect */}
                <div 
                  className="flex-1 bg-gradient-to-br from-[#0D0A63] to-[#15126D] p-6 md:p-8 rounded-2xl shadow-2xl border border-[#FFB900]/30 transform transition-all duration-500 hover:shadow-lg hover:shadow-[#FFB900]/30 hover:-translate-y-1 backdrop-blur-sm relative overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100 + 200}
                >
                  {/* Card accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFB900] to-transparent"></div>
                  
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFB900]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#FFB900] relative z-10">
                    {step.num}. {step.title}
                    {/* Subtle underline */}
                    <div className="absolute -bottom-1 left-0 w-16 h-0.5 bg-[#FFB900]/50 rounded-full"></div>
                  </h3>
                  <div className="text-gray-200 leading-relaxed text-base relative z-10">
                    {step.desc}
                  </div>
                </div>

                {/* Connection Dot */}
                <div className="hidden md:block absolute left-6 top-7 w-3 h-3 bg-[#FFB900] rounded-full z-20 shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Enhanced Why Choose Us Callout --- */}
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="relative bg-gradient-to-br from-[#1C184D] to-[#25206B] border-l-4 border-[#FFB900] shadow-2xl rounded-2xl p-6 md:p-10 text-center mt-20 transform transition-all duration-500 hover:shadow-lg hover:shadow-[#FFB900]/30 hover:-translate-y-1 overflow-hidden group"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-4 right-4 w-8 h-8 border-2 border-[#FFB900] rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border border-[#FFB900] rotate-45"></div>
            <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#FFB900] rounded-full"></div>
          </div>

          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFB900]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 relative z-10">
            Why Partner with Amna's Network?
            <div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-[#FFB900] to-transparent"
              data-aos="zoom-in"
              data-aos-delay="700"
            ></div>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto relative z-10">
            **Amna's Network** delivers powerful synergy: expert business consultancy integrated with
            cutting-edge digital solutions. We offer a client-centric, reliable, and results-driven
            partnership that ensures measurable growth and continuous innovation for your business.
          </p>
          
          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFB900] to-transparent opacity-50"></div>

          {/* Floating elements */}
          <div className="absolute top-4 right-6 w-3 h-3 bg-[#FFB900] rounded-full opacity-60 animate-bounce"></div>
          <div className="absolute bottom-4 left-6 w-2 h-2 bg-white rounded-full opacity-40 animate-bounce" style={{animationDelay: '1s'}}></div>
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

        @keyframes pulseLine {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
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

export default WeWork;