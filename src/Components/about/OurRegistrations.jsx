import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import certificate from "../Images/certificate.jpeg";
import Certificate from "../Images/certificate1.jpeg"; // Note: It's good practice to rename imported components to distinguish them if they have similar names.

const OurRegistrations = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, // اینیمیشن کی مدت کو تھوڑا کم کیا
      once: true,
      easing: "ease-in-out",
      disable: "mobile", // موبائل پر AOS کو غیر فعال کیا تاکہ کارکردگی بہتر ہو اور اوور فلو نہ ہو
    });
  }, []);

  const certificates = [
    { src: certificate, title: "Official Business Registration" },
    { src: Certificate, title: "Professional Accreditation" },
  ];

  return (
    // overflow-x-hidden کلاس شامل کی گئی تاکہ اینیمیشن اوور فلو سے بچا جا سکے
    <section className="bg-[#090447] text-white py-14 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto text-center space-y-20">
        
        {/* Section Heading */}
        <div data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFB900] mb-4">
            Our Official Registrations
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Amna’s Network is **officially registered and recognized** by relevant 
            authorities. Our verified credentials ensure trust and a commitment 
            to the highest professional standards.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12">
          {certificates.map((item, idx) => (
            <div
              key={idx}
              // اینیمیشن کو تھوڑا مختلف کیا
              data-aos={idx % 2 === 0 ? "flip-left" : "flip-right"}
              data-aos-delay={idx * 100}
              className="relative bg-[#0D0A63] rounded-3xl shadow-2xl transition-all duration-700 
                         group overflow-hidden border-4 border-[#FFB900]/20"
            >
                {/* Image Container with Zoom Effect */}
              <div className="w-full h-auto max-h-[500px] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-3xl transform group-hover:scale-[1.05] transition-transform duration-700"
                />
              </div>

              {/* Title Overlay / Footer (More visible and professional) */}
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-left"
              >
                <h3 className="text-white text-2xl font-bold mb-1">
                  {item.title}
                </h3>
                <p className="text-[#FFB900] text-sm font-medium">
                    Verified Credibility
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="mt-16 bg-[#FFB900] text-[#090447] rounded-xl shadow-3xl py-10 px-5 md:px-16 max-w-4xl mx-auto border-4 border-white/40"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold mb-3">Certified & Trusted</h3>
          <p className="text-lg leading-relaxed font-medium">
            Our certifications reflect our dedication to maintaining **strict professional 
            standards** and delivering the highest quality of services to every client.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurRegistrations;