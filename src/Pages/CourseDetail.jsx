import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import baseUrl from "../baseUrl";

const CourseDetail = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourse();
  }, [id]);

  // Professional Background Animation Component - Mobile Optimized
  const ProfessionalBackgroundAnimation = ({ isDark = false }) => {
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

        {/* Floating Bubbles - Mobile Optimized */}
        <div className="absolute inset-0">
          {Array.from({ length: 80 }).map((_, i) => {
            const size = Math.random() * 4 + 1;
            const left = Math.random() * 100;
            const delay = Math.random() * 15;
            const duration = Math.random() * 20 + 15;
            const opacity = Math.random() * 0.3 + 0.1;
            
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

        {/* Corner Connectors */}
        <div className="absolute top-0 left-0 w-16 md:w-24 h-[1px] bg-gradient-to-r from-[#FFB900] to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-[1px] h-16 md:h-24 bg-gradient-to-b from-[#FFB900] to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-0 w-16 md:w-24 h-[1px] bg-gradient-to-l from-white/40 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-0 w-[1px] h-16 md:h-24 bg-gradient-to-b from-white/40 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-16 md:w-24 h-[1px] bg-gradient-to-r from-white/40 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[1px] h-16 md:h-24 bg-gradient-to-t from-white/40 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-16 md:w-24 h-[1px] bg-gradient-to-l from-[#FFB900] to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[1px] h-16 md:h-24 bg-gradient-to-t from-[#FFB900] to-transparent animate-pulse"></div>

        {/* Floating Shapes */}
        <div className="absolute top-1/4 left-4 md:left-10 w-3 h-3 md:w-4 md:h-4 bg-[#FFB900] rounded-full opacity-20 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-1/3 right-8 md:right-20 w-4 h-4 md:w-6 md:h-6 bg-white rounded-lg opacity-15 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 md:w-5 md:h-5 bg-[#FFB900] rounded-full opacity-20 animate-bounce" style={{animationDuration: '5s', animationDelay: '2s'}}></div>

        {/* Mobile-Only Simple Animations */}
        <div className="md:hidden absolute inset-0">
          {/* Simple pulse dots for mobile */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`mobile-dot-${i}`}
              className="absolute w-1.5 h-1.5 bg-[#FFB900] rounded-full opacity-30 animate-pulse"
              style={{
                top: `${10 + (i * 6)}%`,
                left: `${5 + (i * 7) % 90}%`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
          
          {/* Simple moving lines for mobile */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`mobile-line-${i}`}
              className="absolute w-full h-[0.5px] bg-gradient-to-r from-transparent via-[#FFB900]/20 to-transparent"
              style={{
                top: `${15 + (i * 12)}%`,
                animation: `moveHorizontal 12s linear infinite`,
                animationDelay: `${i * 0.8}s`
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  const fetchCourse = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/api/courses/getCourse/${id}`);
      if (response.ok) {
        const data = await response.json();
        setCourse(data.data);
      } else {
        setError("Failed to fetch course details");
      }
    } catch (err) {
      setError("Error fetching course: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEnroll = () => {
    navigate(`/courses/${id}/payment`, { state: { course } });
  };

  const formatPrice = (price) => (price === 0 ? "Free" : `Rs ${price}`);

  const getLevelBadgeClass = (level) => {
    switch (level) {
      case "beginner":
        return "bg-green-500 text-white";
      case "intermediate":
        return "bg-yellow-400 text-black";
      case "advanced":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh] bg-[#090447] relative">
        <ProfessionalBackgroundAnimation isDark={true} />
        <div className="text-center relative z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#FFB900] mx-auto"></div>
          <p className="mt-3 text-gray-300">Loading course details...</p>
        </div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="flex flex-col justify-center items-center h-[80vh] bg-[#090447] text-white relative px-4">
        <ProfessionalBackgroundAnimation isDark={true} />
        <div className="text-center relative z-10">
          <p className="mb-4 text-lg">{error || "Course not found"}</p>
          <button
            onClick={() => navigate("/courses")}
            className="px-6 py-3 bg-[#FFB900] text-[#090447] rounded-full hover:bg-[#090447] hover:text-white border border-[#FFB900] transition-all duration-300 font-semibold"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#090447] py-8 px-4 sm:px-6 md:px-10 lg:px-16 relative overflow-hidden">
      {/* Professional Background Animation */}
      <ProfessionalBackgroundAnimation isDark={true} />

      <div className="relative z-10">
        {/* ✅ BACK BUTTON */}
        <button
          onClick={() => navigate("/courses")}
          className="mb-6 inline-flex items-center cursor-pointer px-4 py-2 bg-[#090447] border border-[#FFB900] text-[#FFB900] font-semibold rounded-lg shadow-lg hover:bg-[#FFB900] hover:text-[#090447] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FFB900] focus:ring-offset-2"
        >
          ← Back to Courses
        </button>

        {/* ✅ MAIN CONTENT */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* LEFT CONTENT */}
          <div className="flex-1 space-y-6 order-2 lg:order-1">
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20">
              <div className="flex flex-wrap gap-2 mb-4">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${getLevelBadgeClass(
                    course.level
                  )} shadow-lg`}
                >
                  {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-[#FFB900]/20 text-[#FFB900] border border-[#FFB900]/30">
                  {course.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {course.title}
              </h1>

              {course.instructor && (
                <div className="flex items-center gap-2 mb-6 p-3 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-[#FFB900] font-semibold">Instructor:</span>
                  <span className="text-white font-medium">{course.instructor}</span>
                </div>
              )}

              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h2 className="text-xl font-semibold mb-3 text-[#FFB900]">
                  About This Course
                </h2>
                <p className="text-gray-200 leading-relaxed text-justify text-base md:text-lg">
                  {course.description}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT - ENROLLMENT CARD */}
          <div className="w-full lg:w-1/3 flex-shrink-0 order-1 lg:order-2">
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl sticky lg:top-6 space-y-6 border border-white/20 hover:border-[#FFB900]/40 transition-all duration-500">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FFB900] mb-2">
                  {formatPrice(course.price)}
                </div>
                {course.price === 0 && (
                  <p className="text-green-400 font-semibold">Lifetime Access</p>
                )}
              </div>

              <button
                onClick={handleEnroll}
                className="w-full bg-gradient-to-r from-[#FFB900] to-[#ffcc44] text-[#090447] py-4 rounded-xl font-bold text-lg cursor-pointer hover:from-[#ffcc44] hover:to-[#FFB900] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Enroll Now
              </button>

              <div className="space-y-4 mt-4">
                <h3 className="text-white font-semibold text-lg text-center">What's Included</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-200 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-[#FFB900]/30 transition-colors duration-300">
                    <div className="w-2 h-2 bg-[#FFB900] rounded-full flex-shrink-0"></div>
                    <span>Self-paced learning</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-200 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-[#FFB900]/30 transition-colors duration-300">
                    <div className="w-2 h-2 bg-[#FFB900] rounded-full flex-shrink-0"></div>
                    <span>Lifetime access</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-200 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-[#FFB900]/30 transition-colors duration-300">
                    <div className="w-2 h-2 bg-[#FFB900] rounded-full flex-shrink-0"></div>
                    <span>Mobile friendly</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-200 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-[#FFB900]/30 transition-colors duration-300">
                    <div className="w-2 h-2 bg-[#FFB900] rounded-full flex-shrink-0"></div>
                    <span>Certificate of completion</span>
                  </div>
                </div>
              </div>

              {course.duration && (
                <div className="text-center p-3 bg-[#FFB900]/10 rounded-lg border border-[#FFB900]/20">
                  <p className="text-[#FFB900] font-semibold">Course Duration</p>
                  <p className="text-white">{course.duration}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

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
      `}</style>
    </section>
  );
};

export default CourseDetail;