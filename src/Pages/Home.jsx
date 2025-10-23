import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import baseUrl from "../baseUrl";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Importing Lucide icons
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

  // ✅ Fetch courses
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

  // ✅ Fallback courses with unique icons
  const fallbackCourses = [
    {
      title: "Master Web Development",
      description:
        "Become a full-stack developer and build modern web apps with React, Node.js, and MongoDB.",
      images: [
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
      ],
      icon: <Code className="w-12 h-12 text-[#00D5BE]" />,
    },
    {
      title: "Digital Marketing Pro",
      description:
        "Learn SEO, social media strategy, and grow brands online like a pro.",
      images: [
        "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg",
      ],
      icon: <TrendingUp className="w-12 h-12 text-[#00D5BE]" />,
    },
    {
      title: "AI & Machine Learning",
      description:
        "Step into the world of Artificial Intelligence and Data Science with real-world projects.",
      images: [
        "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg",
      ],
      icon: <Brain className="w-12 h-12 text-[#00D5BE]" />,
    },
    {
      title: "UI/UX Design Essentials",
      description:
        "Create stunning user experiences with hands-on Figma and Adobe XD training.",
      images: [
        "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg",
      ],
      icon: <Palette className="w-12 h-12 text-[#00D5BE]" />,
    },
    {
      title: "Data Science Masterclass",
      description:
        "Analyze data, build models, and become a certified data scientist.",
      images: [
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
      ],
      icon: <Database className="w-12 h-12 text-[#00D5BE]" />,
    },
    {
      title: "Cybersecurity Fundamentals",
      description:
        "Learn how to protect systems, networks, and data with practical security skills.",
      images: [
        "https://images.pexels.com/photos/5380643/pexels-photo-5380643.jpeg",
      ],
      icon: <ShieldCheck className="w-12 h-12 text-[#00D5BE]" />,
    },
  ];

  // ✅ Function to assign unique icons to courses
  const getCoursesWithIcons = () => {
    if (courses.length === 0) return fallbackCourses;

    const icons = [
      <Code className="w-12 h-12 text-[#00D5BE]" />,
      <TrendingUp className="w-12 h-12 text-[#00D5BE]" />,
      <Brain className="w-12 h-12 text-[#00D5BE]" />,
      <Palette className="w-12 h-12 text-[#00D5BE]" />,
      <Database className="w-12 h-12 text-[#00D5BE]" />,
      <ShieldCheck className="w-12 h-12 text-[#00D5BE]" />,
      <Users className="w-12 h-12 text-[#00D5BE]" />,
      <Search className="w-12 h-12 text-[#00D5BE]" />,
      <BarChart3 className="w-12 h-12 text-[#00D5BE]" />,
      <Lock className="w-12 h-12 text-[#00D5BE]" />,
      <Server className="w-12 h-12 text-[#00D5BE]" />,
      <GraduationCap className="w-12 h-12 text-[#00D5BE]" />,
    ];

    return courses.map((course, index) => ({
      ...course,
      icon: icons[index % icons.length]
    }));
  };

  const displayCourses = getCoursesWithIcons();

  // ✅ Hero image rotation
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
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-[#00D5BE]"></div>
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
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"
            }`}
          style={{
            backgroundImage: `url(${displayCourses[currentImage]?.images?.[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 bg-[#0D1529]/90"></div>

        <div className="relative z-10 px-6 max-w-4xl">
          <h1
            className="text-4xl md:text-6xl font-bold text-[#00D5BE] mb-6 drop-shadow-md"
            data-aos="zoom-in"
          >
            {displayCourses[currentImage]?.title}
          </h1>
          <p
            className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed"
            data-aos="fade-up"
          >
            {displayCourses[currentImage]?.description}
          </p>
          <button
            onClick={() => navigate("/courses")}
            className="px-8 py-3 cursor-pointer rounded-full text-white font-semibold shadow-lg transition-all duration-300 bg-[#00D5BE] hover:bg-[#0F172A] hover:scale-105"
          >
            Explore Courses
          </button>
        </div>
      </section>

      {/* ✅ FEATURED COURSES (Improved) */}
      <div className="py-20 px-6 md:px-16 bg-[#F9FAFB]" data-aos="fade-up">
        <h2 className="text-center text-3xl md:text-4xl  font-bold mb-6 text-[#0F172A]">
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
              className="group bg-[#111827] rounded-xl p-8 text-center  shadow-xl border border-[#00D5BE]/20"
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              <div className="flex justify-center mb-5 group-hover:scale-150 transition-transform duration-500">
                {course.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#00D5BE] group-hover:text-white transition-colors ">
                {course.title}
              </h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {course.description?.substring(0, 120) + "..."}
              </p>
              <button className="px-5 py-2 cursor-pointer bg-[#00D5BE] text-white rounded-md  transition-all font-medium group-hover:scale-105  duration-500">
                View Course
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ WHY CHOOSE US */}
      <section
        className="bg-[#0F172A] text-white py-20 px-6 md:px-16"
        data-aos="fade-up"
      >
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-[#00D5BE]">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Expert Mentors",
              desc: "Learn from industry professionals with years of hands-on experience.",
              icon: <GraduationCap className="w-12 h-12 text-[#00D5BE]" />,
            },
            {
              title: "Career-Focused Learning",
              desc: "Our courses are designed to make you job-ready with real projects.",
              icon: <Briefcase className="w-12 h-12 text-[#00D5BE]" />,
            },
            {
              title: "Flexible & Affordable",
              desc: "Access premium courses anytime, anywhere, without breaking the bank.",
              icon: <Clock className="w-12 h-12 text-[#00D5BE]" />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-[#111827] rounded-xl p-8 text-center  shadow-xl border border-[#00D5BE]/20"
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              <div className="flex justify-center mb-4 group-hover:scale-105 transition-transform duration-500">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-[#00D5BE] group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ MEET OUR TEAM (Same as before) */}
      <section className="bg-[#F9FAFB] py-20 px-6 md:px-16" data-aos="fade-up">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-[#0F172A]">
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[{ name: "Amna Kousar", role: "Owner of Amna's Network" },
          { name: "Asadullah Jan", role: "Accountant" },
          { name: "Anum Malik", role: "Event Manager" },
          { name: "Mohsin Raza", role: "Content Creator" }]
            .map((member, i) => {
              const initials = member.name
                .split(" ")
                .map((n) => n[0])
                .join("");
              return (
                <div
                  key={i}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden text-center p-10"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  <div className="w-24 h-24 rounded-full bg-[#E6FCF9] flex items-center justify-center mx-auto mb-5">
                    <span className="text-2xl font-bold text-[#00D5BE] group-hover:scale-150 transition-transform duration-500">
                      {initials}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0F172A] group-hover:text-[#00D5BE] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[#00D5BE] font-medium mb-2">
                    {member.role}
                  </p>
                </div>
              );
            })}
        </div>
      </section>
    </section>
  );
};

export default Home;