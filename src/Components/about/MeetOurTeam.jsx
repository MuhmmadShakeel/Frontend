import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import logo from "../Images/logo.jpg"; // اگر آپ ٹیم ممبر کی تصاویر استعمال کر رہے ہیں تو اسے فعال کریں

const MeetOurTeam = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // اینیمیشن کی مدت کو تھوڑا کم کیا
      once: true,
      easing: "ease-in-out",
      disable: "mobile", // موبائل پر AOS کو غیر فعال کیا تاکہ کارکردگی بہتر ہو اور اوور فلو نہ ہو
    });
  }, []);

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
    {
      name: "Mohsin Raza",
      role: "Senior Content Strategist",
      desc: "Develops engaging, high-quality content that resonates with our audience and significantly enhances our brand presence.",
    },
  ];

  // ٹیم ممبرز کے لیے امیج کے مقامات/URLs (اگر دستیاب ہوں)
  const memberImages = {
    "Amna Kousar": "", // یہاں امیج پاتھ شامل کریں
    "Asadullah Jan": "",
    "Anum Malik": "",
    "Mohsin Raza": "",
  };

  return (
    // overflow-x-hidden کلاس شامل کی گئی تاکہ اینیمیشن اوور فلو سے بچا جا سکے
    <section className="bg-[#090447] text-white py-14 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Heading */}
        <div data-aos="fade-down" className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFB900] mb-4">
            Meet Our Exceptional Team 
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Our dedicated professionals bring expertise, innovation, and passion 
            to every project. **Together, we drive Amna’s Network towards success.**
          </p>
        </div>

        {/* Team Members Grid/List */}
        <div className="space-y-16">
          {team.map((member, idx) => {
            const initials = member.name
              .split(" ")
              .map((n) => n[0])
              .join("");

            // اگر امیج دستیاب ہو تو استعمال کریں، ورنہ انیشیلز
            const imageSrc = memberImages[member.name];

            return (
              <div
                key={idx}
                // دائیں اور بائیں کی اینیمیشن کا استعمال کیا
                data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-offset="150"
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 p-4 md:p-6 border-b border-[#FFB900]/20 ${
                  idx % 2 !== 0 ? "lg:flex-row-reverse" : "" // بدیل لے آؤٹ
                }`}
              >
                
                {/* Avatar / Image Section */}
                <div
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  className="flex-shrink-0 w-full lg:w-96 max-w-xs md:max-w-sm rounded-xl overflow-hidden shadow-2xl transition duration-700 hover:scale-[1.03] hover:shadow-[#FFB900]/50"
                >
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt={member.name}
                      className="w-full h-auto object-cover"
                    />
                  ) : (
                    // Initial Placeholder
                    <div className="w-full h-64 bg-[#FFB900] flex items-center justify-center text-[#090447] text-6xl font-extrabold p-4">
                      {initials}
                    </div>
                  )}
                </div>

                {/* Member Details Card */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="flex-1 lg:max-w-xl p-6 md:p-8 bg-[#0D0A63] rounded-2xl shadow-xl transition-shadow duration-500 hover:shadow-2xl hover:shadow-[#FFB900]/30"
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
          })}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;