import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import logo from "../Images/logo.jpg"; // یہ لائن پہلے ہی کمنٹ آؤٹ ہے

const WeWork = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // اینیمیشن کی مدت کو تھوڑا کم کیا
      once: true,
      easing: "ease-in-out",
      disable: "mobile", // موبائل پر AOS کو غیر فعال کیا تاکہ کارکردگی بہتر ہو اور اوور فلو نہ ہو
    });
  }, []);

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
              data-aos="flip-up" // اینیمیشن کو تھوڑا تبدیل کیا
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
    // overflow-x-hidden کلاس شامل کی گئی تاکہ اینیمیشن اوور فلو سے بچا جا سکے
    <section className="bg-gradient-to-b from-[#0C0860] via-[#090447] to-[#060335] text-white py-16 lg:py-20 px-3 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* --- How We Work Header --- */}
        <div className="text-center">
          <h2
            data-aos="fade-down"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFB900] mb-4"
          >
            Our Methodology
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto">
            A structured approach for excellence in consulting and training.
          </p>
        </div>
        
        {/* --- Work Steps/Timeline --- */}
        <div className="relative">
            {/* Vertical Line for Timeline Effect */}
            <div className="hidden md:block absolute left-6 top-0 bottom-0 w-1 bg-[#FFB900]/20 rounded-full"></div>

            <div className="space-y-12 md:space-y-16">
                {steps.map((step, idx) => (
                    <div
                        key={idx}
                        data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"} // دائیں اور بائیں کی اینیمیشن کا استعمال کیا
                        data-aos-offset="150"
                        className="relative flex items-start md:items-center gap-6 md:gap-12"
                    >
                        {/* Step Number Circle */}
                        <div className="relative z-10 bg-[#FFB900] text-[#090447] font-extrabold rounded-full w-12 h-12 flex items-center justify-center text-xl shadow-lg flex-shrink-0 border-4 border-[#090447] transition-all hover:scale-110">
                            {step.icon}
                        </div>
                        
                        {/* Content Card */}
                        <div className="flex-1 bg-[#0D0A63] p-4 md:p-6 rounded-xl shadow-2xl border border-[#FFB900]/20 transform transition duration-500 hover:shadow-glow-md">
                            <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#FFB900]">
                                {step.num}. {step.title}
                            </h3>
                            <div className="text-gray-200 leading-relaxed text-base">
                                {step.desc}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* --- Why Choose Us Callout --- */}
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="bg-[#1C184D] border-t-4 border-[#FFB900] shadow-2xl rounded-xl p-5 md:p-10 text-center mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Why Partner with Amna's Network?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
            **Amna's Network** delivers powerful synergy: expert business consultancy integrated with
            cutting-edge digital solutions. We offer a client-centric, reliable, and results-driven
            partnership that ensures measurable growth and continuous innovation for your business.
          </p>
        </div>
   
      </div>
    </section>
  );
};

export default WeWork;