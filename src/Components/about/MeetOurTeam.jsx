import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import logo from "../Images/logo.jpg"; // اگر آپ ٹیم ممبر کی تصاویر استعمال کر رہے ہیں تو اسے فعال کریں

const MeetOurTeam = () => {
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

  const team = [
    {
      name: "Amna Kousar",
      role: "Founder & CEO",
      desc: "With visionary leadership and entrepreneurial spirit, Amna strategically guides the network towards excellence and innovative growth.",
    },
    {
      name: "Asadullah Jan",
      role: "Chief Financial Officer",
      desc: "Manages the company's financial health, ensuring precision, compliance, and strategic fiscal planning.",
    },
    {
      name: "Anum Malik",
      role: "Lead Event Manager",
      desc: "Orchestrates seamless and memorable professional events and seminars with high-level creativity and logistical precision.",
    },
 
  ];

  // Marketing Team
  const marketingTeam = [
    {
      name: "Mohsin",
      role: "Marketing Team",
      desc: "Leads strategic marketing initiatives and campaigns to expand brand reach and drive business growth through innovative marketing solutions.",
    },
    {
      name: "Farhan Khan and team",
      role: "Social Media Management",
      desc: "Specializes in Social Media strategies, and online campaign management to maximize brand visibility and engagement.",
    }
  ];

  // Social Media Management Team
  const socialMediaTeam = [
    {
      name: "Social Media Management Team",
      role: "Social Media Experts",
      desc: "Our dedicated social media professionals create compelling content, manage online presence, and engage with our community across all platforms to build strong brand relationships.",
    }
  ];

  // ٹیم ممبرز کے لیے امیج کے مقامات/URLs (اگر دستیاب ہوں)
  const memberImages = {
    "Amna Kousar": "", // یہاں امیج پاتھ شامل کریں
    "Asadullah Jan": "",
    "Anum Malik": "",
    "Mohsin Raza": "",
    "Mohsin": "",
    "Farhan Khan": "",
    "Social Media Management Team": "",
  };

  // Team Member Card Component
  const TeamMemberCard = ({ member, idx, isSocialMediaTeam = false }) => {
    const initials = member.name
      .split(" ")
      .map((n) => n[0])
      .join("");

    const imageSrc = memberImages[member.name];

    return (
      <div
        key={idx}
        data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
        data-aos-offset="150"
        className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 p-4 md:p-6 border-b border-[#FFB900]/20 ${
          idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
        } ${isSocialMediaTeam ? 'justify-center' : ''}`}
      >
        
        {/* Avatar / Image Section */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex-shrink-0 w-full lg:w-96 max-w-xs md:max-w-sm rounded-xl overflow-hidden shadow-2xl transition duration-700 hover:scale-[1.03] hover:shadow-[#FFB900]/50 relative group"
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={member.name}
              className="w-full h-auto object-cover transform transition duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-64 bg-gradient-to-br from-[#FFB900] to-[#FFD700] flex items-center justify-center text-[#090447] text-6xl font-extrabold p-4 transform transition duration-700 group-hover:scale-105">
              {initials}
            </div>
          )}
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-[#090447]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">View Profile</span>
          </div>
        </div>

        {/* Member Details Card */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex-1 lg:max-w-xl p-6 md:p-8 bg-[#0D0A63] rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#FFB900]/30 hover:scale-105 border border-[#FFB900]/20"
        >
          <p className="text-[#FFB900] font-semibold text-xl mb-1 uppercase tracking-wider">
            {member.role}
          </p>
          <h3 className="text-4xl font-extrabold text-white mb-4 border-b border-[#FFB900]/30 pb-2">
            {member.name}
          </h3>
          <p className="text-gray-200 text-lg leading-relaxed">
            {member.desc}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-[#090447] text-white py-14 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden relative">
      {/* Professional Background Animation */}
      <BackgroundAnimation />
      
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Section Heading */}
        <div data-aos="fade-down" className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFB900] mb-4">
            Meet Our Exceptional Team 
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Our dedicated professionals bring expertise, innovation, and passion 
            to every project. **Together, we drive Amna's Network towards success.**
          </p>
        </div>

        {/* Core Team Members */}
        <div className="space-y-16">
          {team.map((member, idx) => (
            <TeamMemberCard key={idx} member={member} idx={idx} />
          ))}
        </div>

        {/* Marketing Team Section */}
        <div data-aos="fade-up" className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-[#FFB900] mb-8">
            Marketing Team
          </h3>
          <div className="space-y-16">
            {marketingTeam.map((member, idx) => (
              <TeamMemberCard key={idx} member={member} idx={idx} />
            ))}
          </div>
        </div>

        {/* Social Media Management Team Section */}
        <div data-aos="fade-up" className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-[#FFB900] mb-8">
            Social Media Management Team
          </h3>
          <div className="space-y-16">
            {socialMediaTeam.map((member, idx) => (
              <TeamMemberCard key={idx} member={member} idx={idx} isSocialMediaTeam={true} />
            ))}
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

export default MeetOurTeam;