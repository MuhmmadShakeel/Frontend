import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import baseUrl from "../baseUrl";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  GraduationCap,
  Briefcase,
  Clock,
  Code,
  Brain,
  Palette,
  BarChart3,
  ShieldCheck,
  Database,
  Users,
  Search,
  TrendingUp,
  Lock,
  Server,
} from "lucide-react";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${baseUrl}/api/courses/getCourses`);
        if (response.data && response.data.data) {
          setCourses(response.data.data);
        }
      } catch {
        setError("Failed to load featured courses");
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  // Professional Background Animation Component for Dark Blue Sections - Mobile Optimized
  const ProfessionalBackgroundAnimation = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Lines - Horizontal (Visible on all screens) */}
        <div className="absolute inset-0">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
              style={{ top: `${i * 4}%` }}
            />
          ))}
        </div>

        {/* Grid Lines - Vertical (Visible on all screens) */}
        <div className="absolute inset-0">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute top-0 h-full w-[0.5px] bg-gradient-to-b from-transparent via-white/20 to-transparent"
              style={{ left: `${i * 4}%` }}
            />
          ))}
        </div>

        {/* Diagonal Lines - 45 degrees (Reduced complexity on mobile) */}
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

        {/* Diagonal Lines - -45 degrees (Reduced complexity on mobile) */}
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

        {/* Moving Progress Bars (Visible on all screens) */}
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

        {/* Scanning Lines (Visible on all screens) */}
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

        {/* Floating Bubbles - Mobile Optimized */}
        <div className="absolute inset-0">
          {Array.from({ length: 120 }).map((_, i) => {
            const size = Math.random() * 4 + 1; // Smaller on mobile
            const left = Math.random() * 100;
            const delay = Math.random() * 15;
            const duration = Math.random() * 20 + 15;
            const opacity = Math.random() * 0.3 + 0.1; // Lower opacity on mobile
            
            return (
              <div
                key={`bubble-${i}`}
                className="absolute rounded-full bg-white/20"
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

        {/* Corner Connectors (Visible on all screens) */}
        <div className="absolute top-0 left-0 w-16 md:w-24 h-[1px] bg-gradient-to-r from-[#FFB900] to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-[1px] h-16 md:h-24 bg-gradient-to-b from-[#FFB900] to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-0 w-16 md:w-24 h-[1px] bg-gradient-to-l from-white/40 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-0 w-[1px] h-16 md:h-24 bg-gradient-to-b from-white/40 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-16 md:w-24 h-[1px] bg-gradient-to-r from-white/40 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[1px] h-16 md:h-24 bg-gradient-to-t from-white/40 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-16 md:w-24 h-[1px] bg-gradient-to-l from-[#FFB900] to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[1px] h-16 md:h-24 bg-gradient-to-t from-[#FFB900] to-transparent animate-pulse"></div>

        {/* Floating Shapes (Visible on all screens) */}
        <div className="absolute top-1/4 left-4 md:left-10 w-3 h-3 md:w-4 md:h-4 bg-[#FFB900] rounded-full opacity-20 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-1/3 right-8 md:right-20 w-4 h-4 md:w-6 md:h-6 bg-white rounded-lg opacity-15 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 md:w-5 md:h-5 bg-[#FFB900] rounded-full opacity-20 animate-bounce" style={{animationDuration: '5s', animationDelay: '2s'}}></div>

        {/* Mobile-Only Simple Animations */}
        <div className="md:hidden absolute inset-0">
          {/* Simple pulse dots for mobile */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`mobile-dot-${i}`}
              className="absolute w-1.5 h-1.5 bg-[#FFB900] rounded-full opacity-30 animate-pulse"
              style={{
                top: `${10 + (i * 5)}%`,
                left: `${5 + (i * 5) % 90}%`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
          
          {/* Simple moving lines for mobile */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={`mobile-line-${i}`}
              className="absolute w-full h-[0.5px] bg-gradient-to-r from-transparent via-[#FFB900]/20 to-transparent"
              style={{
                top: `${15 + (i * 10)}%`,
                animation: `moveHorizontal 12s linear infinite`,
                animationDelay: `${i * 0.8}s`
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  const fallbackCourses = [
    {
      title: "Master Web Development",
      description:
        "Become a full-stack developer and build modern web apps with React, Node.js, and MongoDB.",
      images: [
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
      ],
      icon: <Code className="w-12 h-12 text-[#FFB900]" />,
    },
    {
      title: "Digital Marketing Pro",
      description:
        "Learn SEO, social media strategy, and grow brands online like a pro.",
      images: [
        "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg",
      ],
      icon: <TrendingUp className="w-12 h-12 text-[#FFB900]" />,
    },
    {
      title: "AI & Machine Learning",
      description:
        "Step into the world of Artificial Intelligence and Data Science with real-world projects.",
      images: [
        "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg",
      ],
      icon: <Brain className="w-12 h-12 text-[#FFB900]" />,
    },
    {
      title: "UI/UX Design Essentials",
      description:
        "Create stunning user experiences with hands-on Figma and Adobe XD training.",
      images: [
        "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg",
      ],
      icon: <Palette className="w-12 h-12 text-[#FFB900]" />,
    },
    {
      title: "Data Science Masterclass",
      description:
        "Analyze data, build models, and become a certified data scientist.",
      images: [
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
      ],
      icon: <Database className="w-12 h-12 text-[#FFB900]" />,
    },
    {
      title: "Cybersecurity Fundamentals",
      description:
        "Learn how to protect systems, networks, and data with practical security skills.",
      images: [
        "https://images.pexels.com/photos/5380643/pexels-photo-5380643.jpeg",
      ],
      icon: <ShieldCheck className="w-12 h-12 text-[#FFB900]" />,
    },
  ];

  const getCoursesWithIcons = () => {
    if (courses.length === 0) return fallbackCourses;

    const icons = [
      <Code className="w-12 h-12 text-[#FFB900]" />,
      <TrendingUp className="w-12 h-12 text-[#FFB900]" />,
      <Brain className="w-12 h-12 text-[#FFB900]" />,
      <Palette className="w-12 h-12 text-[#FFB900]" />,
      <Database className="w-12 h-12 text-[#FFB900]" />,
      <ShieldCheck className="w-12 h-12 text-[#FFB900]" />,
      <Users className="w-12 h-12 text-[#FFB900]" />,
      <Search className="w-12 h-12 text-[#FFB900]" />,
      <BarChart3 className="w-12 h-12 text-[#FFB900]" />,
      <Lock className="w-12 h-12 text-[#FFB900]" />,
      <Server className="w-12 h-12 text-[#FFB900]" />,
      <GraduationCap className="w-12 h-12 text-[#FFB900]" />,
    ];

    return courses.map((course, index) => ({
      ...course,
      icon: icons[index % icons.length],
    }));
  };

  const displayCourses = getCoursesWithIcons();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % displayCourses.length);
        setFade(true);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, [displayCourses.length]);

  const handleCourseClick = (id) => navigate(`/courses/${id}`);

  if (loading)
    return (
      <div className="flex justify-center items-center h-[80vh] bg-white">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-[#FFB900]"></div>
      </div>
    );

  if (error)
    return (
      <div className="text-center py-20 bg-white text-red-500 font-semibold">
        {error}
      </div>
    );

  return (
    <section className="bg-white text-gray-900 relative overflow-hidden">
      {/* ✅ HERO SECTION - Dark Blue with Animation */}
      <section
        className="relative py-16 sm:py-32 md:py-40 h-auto sm:h-[80vh] md:h-[90vh] flex items-center justify-center text-center overflow-hidden bg-[#090447]"
        data-aos="fade-zoom-in"
      >
        {/* Professional Background Animation */}
        <ProfessionalBackgroundAnimation />

        {/* Background Image */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${displayCourses[currentImage]?.images?.[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#090447]/90"></div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 md:px-6 lg:px-6 max-w-4xl">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FFB900] mb-4 sm:mb-6 drop-shadow-md leading-tight"
            data-aos="zoom-in"
          >
            {displayCourses[currentImage]?.title}
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0"
            data-aos="fade-up"
          >
            {displayCourses[currentImage]?.description}
          </p>
          <button
            onClick={() => navigate("/courses")}
            data-aos="flip-up"
            className="px-6 sm:px-8 py-2 sm:py-3 cursor-pointer rounded-full text-white font-semibold shadow-lg transition-all duration-300 bg-[#FFB900] hover:bg-white hover:text-[#090447] hover:scale-105 text-sm sm:text-base"
          >
            Explore Courses
          </button>
        </div>
      </section>

      {/* ✅ FEATURED COURSES - White Background (No Animation) */}
      <div className="py-12 sm:py-20 px-4 sm:px-6 md:px-16 bg-white relative" data-aos="fade-up">
        <div className="relative z-10">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#090447]">
            Featured Courses
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 text-sm sm:text-base px-4">
            Explore our most popular and industry-ready learning experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
            {displayCourses.map((course, i) => (
              <div
                key={i}
                onClick={() => handleCourseClick(course._id)}
                className="group bg-[#090447] rounded-xl p-6 sm:p-8 text-center shadow-xl border border-[#FFB900]/30 hover:translate-y-1 transition-all duration-400 relative z-10"
                data-aos="zoom-in"
                data-aos-delay={i * 150}
              >
                <div className="flex justify-center mb-4 sm:mb-5 group-hover:scale-125 sm:group-hover:scale-150 transition-transform duration-500">
                  {course.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#FFB900] group-hover:text-white transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">
                  {course.description?.substring(0, 100) + "..."}
                </p>
                <button className="px-4 sm:px-5 py-2 cursor-pointer bg-[#FFB900] text-[#090447] rounded-md font-medium group-hover:scale-105 duration-500 text-sm sm:text-base">
                  View Course
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ WHY CHOOSE US - Dark Blue with Animation */}
      <section
        className="bg-[#090447] text-white py-12 sm:py-20 px-4 sm:px-6 md:px-16 relative"
        data-aos="fade-up"
      >
        <ProfessionalBackgroundAnimation />
        <div className="relative z-10">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-[#FFB900]">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
            {[
              {
                title: "Expert Mentors",
                desc: "Learn from industry professionals with years of hands-on experience.",
                icon: <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-[#FFB900]" />,
              },
              {
                title: "Career-Focused Learning",
                desc: "Our courses are designed to make you job-ready with real projects.",
                icon: <Briefcase className="w-10 h-10 sm:w-12 sm:h-12 text-[#FFB900]" />,
              },
              {
                title: "Flexible & Affordable",
                desc: "Access premium courses anytime, anywhere, without breaking the bank.",
                icon: <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-[#FFB900]" />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-[#0E0A57] rounded-xl p-6 sm:p-8 text-center shadow-xl border border-[#FFB900]/30 hover:translate-y-1 transition-all duration-300 relative z-10"
                data-aos="zoom-in"
                data-aos-delay={i * 150}
              >
                <div className="flex justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#FFB900] group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ OUR ACHIEVEMENTS - Dark Blue with Animation */}
      <section className="bg-[#0b0b48] py-12 sm:py-20 px-4 sm:px-6 md:px-16 relative" data-aos="fade-up">
        <ProfessionalBackgroundAnimation />
        <div className="relative z-10">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-amber-500">
            Our Achievements
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
            {[
              { label: "Courses Published", value: "120+" },
              { label: "Students Enrolled", value: "5,000+" },
              { label: "Expert Instructors", value: "25+" },
              { label: "Projects Completed", value: "350+" },
              { label: "Global Reach", value: "10+ Countries" },
              { label: "Awards Won", value: "15+" },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl shadow-lg overflow-hidden text-center p-6 sm:p-8 md:p-10 relative z-10"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#FFF2CC] flex items-center justify-center mx-auto mb-4 sm:mb-5">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-amber-500 group-hover:scale-125 sm:group-hover:scale-150 transition-transform duration-500">
                    {item.value}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#090447] group-hover:text-[#FFB900] transition-colors">
                  {item.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add animation styles */}
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

        /* Mobile-specific optimizations */
        @media (max-width: 768px) {
          .animate-bounce {
            animation-duration: 4s;
          }
          
          .animate-pulse {
            animation-duration: 3s;
          }
        }

        /* Performance optimizations */
        @media (max-width: 640px) {
          .absolute.inset-0.pointer-events-none > div:nth-child(3),
          .absolute.inset-0.pointer-events-none > div:nth-child(4) {
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;