import React from "react";
import "../Aboutus.css";
import logo from "../Components/Images/logo.jpg";
import certificate from '../Components/Images/certificate.jpeg';
import Certificate from '../Components/Images/certificate1.jpeg';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

        {/* Left Side - Main Content */}
        <div className="lg:col-span-3 flex flex-col space-y-14">

          {/* Header Section */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
              About <span className="text-[#00D5BE]">Amna's Network</span>
            </h1>
            <div className="w-20 h-1 bg-[#00D5BE] mb-6 rounded-full"></div>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              We combine expert business consultancy with cutting-edge solutions to help your business grow efficiently and strategically.
            </p>
          </div>

          {/* How We Work Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How We Work</h2>
            <div className="space-y-10">
              {[{
                num: 1,
                title: "Understand the Vision & Mission",
                desc: "Amna's Network focuses on comprehensive business consulting, helping businesses grow, manage, and operate effectively through innovative solutions."
              },{
                num: 2,
                title: "Choose Your Role",
                desc: (
                  <>
                    <p className="text-gray-700 mb-2">We offer diverse opportunities in various areas:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li><strong>Business Consultant:</strong> Improve strategies, marketing, management, or operations</li>
                      <li><strong>Trainer/Educator:</strong> Conduct IT, digital marketing, or professional development courses</li>
                    </ul>
                  </>
                )
              },{
                num: 3,
                title: "Daily Tasks & Responsibilities",
                desc: (
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Meeting clients and analyzing their business needs</li>
                    <li>Creating comprehensive business reports and proposals</li>
                    <li>Managing digital marketing campaigns</li>
                    <li>Teaching and mentoring students in training sessions</li>
                  </ul>
                )
              },{
                num: 4,
                title: "Skills We Value",
                desc: (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                    {["Communication & Teamwork","Problem-solving","Technical Tools (WordPress, Canvas)","Marketing Knowledge","Business Planning","Strategic Thinking"].map((skill,i)=>(
                      <span key={i} className="px-4 py-2 bg-[#E0F7F5] text-[#00D5BE] rounded-full font-medium border border-[#00D5BE]/30 text-sm text-center">{skill}</span>
                    ))}
                  </div>
                )
              },{
                num: 5,
                title: "Grow With the Network",
                desc: (
                  <>
                    <p className="text-gray-700 mb-2">We invest in our team's growth through:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Regular workshops and training programs</li>
                      <li>Professional development opportunities</li>
                      <li>Continuous learning and skill enhancement</li>
                    </ul>
                  </>
                )
              }].map((step, idx)=>(
                <div key={idx} className="flex items-start gap-5">
                  <div className="bg-[#00D5BE] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg shadow-md flex-shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <div className="text-gray-700 leading-relaxed">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white border border-gray-100 shadow-md rounded-2xl p-8 hover:shadow-xl transition-all">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Amna's Network?</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Amna's Network combines expert business consultancy with cutting-edge software solutions, tailored to drive growth and innovation. With a client-first approach, we ensure reliable support, smart strategies, and measurable success for every project.
            </p>
          </div>

          {/* Team Section */}
          <div className="space-y-10">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team Members</h2>
            {[
              { name: "Amna Kousar", role: "Owner", desc: "With visionary leadership and entrepreneurial spirit, Amna guides the company towards excellence." },
              { name: "Asadullah Jan", role: "Accountant", desc: "Manages the company's financial health with precision and analytical skills." },
              { name: "Anum Malik", role: "Event Manager", desc: "Orchestrates seamless and memorable events with creativity and precision." },
              { name: "Mohsin Raza", role: "Content Creator", desc: "Develops engaging content that resonates with the audience and enhances brand presence." }
            ].map((member, idx)=>(
              <div key={idx} className={`flex flex-col lg:flex-row items-center gap-6 ${idx%2!==0?'lg:flex-row-reverse':''}`}>
                <div className="flex-1 bg-white p-8 rounded-3xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#00D5BE] font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-700 leading-relaxed">{member.desc}</p>
                </div>
                <div className="flex-shrink-0 w-full lg:w-1/3 h-64 bg-gradient-to-br from-[#00D5BE] to-gray-900 flex items-center justify-center text-white text-6xl font-extrabold rounded-3xl shadow-lg">
                  {member.name.split(" ").map(n=>n[0]).join("")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Logo & Certification */}
        <div className="lg:col-span-2 flex flex-col gap-16">

          {/* Logo Section */}
          <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl group mx-auto">
            <img src={logo} alt="Logo" className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-6 py-8">
              <h2 className="text-white text-3xl font-bold mb-2">Amna's Network</h2>
              <div className="w-16 h-1 bg-[#00D5BE] mb-4 rounded"></div>
              <p className="text-white text-lg font-light">Driving Business Excellence</p>
            </div>
          </div>

          {/* Certification Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-[#00D5BE] mb-6 text-center">Our Registrations</h2>
            <div className="grid gap-6">
              <img src={certificate} alt="Certificate" className="rounded-2xl shadow-md hover:shadow-lg transition-all" />
              <img src={Certificate} alt="Certificate 1" className="rounded-2xl shadow-md hover:shadow-lg transition-all" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
