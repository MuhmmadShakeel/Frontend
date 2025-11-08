
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
    <section className="bg-white text-gray-900">
      {/* ✅ HERO SECTION */}
      <section
        className="relative py-20 sm:py-32 md:py-40 h-auto sm:h-[80vh] md:h-[90vh] flex items-center justify-center text-center overflow-hidden"
        data-aos="fade-zoom-in"
      >
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFB900] mb-6 drop-shadow-md leading-tight"
            data-aos="zoom-in"
          >
            {displayCourses[currentImage]?.title}
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 leading-relaxed px-2 sm:px-0"
            data-aos="fade-up"
          >
            {displayCourses[currentImage]?.description}
          </p>
          <button
            onClick={() => navigate("/courses")}
            data-aos="flip-up"
            className="px-8 py-3 cursor-pointer rounded-full text-white font-semibold shadow-lg transition-all duration-300 bg-[#FFB900] hover:bg-[#090447] hover:scale-105"
          >
            Explore Courses
          </button>
        </div>
      </section>

      {/* ✅ FEATURED COURSES */}
      <div className="py-20 px-6 md:px-16 bg-[#F9FAFB]" data-aos="fade-up">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-6 text-[#090447]">
          Featured Courses
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Explore our most popular and industry-ready learning experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {displayCourses.map((course, i) => (
            <div
              key={i}
              onClick={() => handleCourseClick(course._id)}
              className="group bg-[#090447] rounded-xl p-8 text-center shadow-xl border border-[#FFB900]/30 hover:translate-y-1 transition-all duration-400"
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              <div className="flex justify-center mb-5 group-hover:scale-150 transition-transform duration-500">
                {course.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#FFB900] group-hover:text-white transition-colors">
                {course.title}
              </h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {course.description?.substring(0, 120) + "..."}
              </p>
              <button className="px-5 py-2 cursor-pointer bg-[#FFB900] text-[#090447] rounded-md font-medium group-hover:scale-105 duration-500">
                View Course
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ WHY CHOOSE US */}
      <section
        className="bg-[#090447] text-white py-20 px-6 md:px-16"
        data-aos="fade-up"
      >
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-[#FFB900]">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Expert Mentors",
              desc: "Learn from industry professionals with years of hands-on experience.",
              icon: <GraduationCap className="w-12 h-12 text-[#FFB900]" />,
            },
            {
              title: "Career-Focused Learning",
              desc: "Our courses are designed to make you job-ready with real projects.",
              icon: <Briefcase className="w-12 h-12 text-[#FFB900]" />,
            },
            {
              title: "Flexible & Affordable",
              desc: "Access premium courses anytime, anywhere, without breaking the bank.",
              icon: <Clock className="w-12 h-12 text-[#FFB900]" />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-[#0E0A57] rounded-xl p-8 text-center shadow-xl border border-[#FFB900]/30 hover:translate-y-1 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              <div className="flex justify-center mb-4 group-hover:scale-105 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#FFB900] group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

     {/* ✅ OUR ACHIEVEMENTS */}
<section className="bg-[#0b0b48] py-20 px-6 md:px-16" data-aos="fade-up">
  <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-amber-500">
    Our Achievements
  </h2>
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
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
        className="group bg-white rounded-xl shadow-lg overflow-hidden text-center p-10"
        data-aos="zoom-in"
        data-aos-delay={i * 100}
      >
        <div className="w-24 h-24 rounded-full bg-[#FFF2CC] flex items-center justify-center mx-auto mb-5">
          <span className="text-2xl font-bold text-amber-500 group-hover:scale-150 transition-transform duration-500">
            {item.value}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-[#090447] group-hover:text-[#FFB900] transition-colors">
          {item.label}
        </h3>
      </div>
    ))}
  </div>
</section>

    </section>
  );
};

export default Home;
