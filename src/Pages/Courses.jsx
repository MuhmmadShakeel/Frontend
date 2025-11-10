// src/pages/Courses/Courses.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import baseUrl from "../baseUrl";
import AOS from "aos";
import "aos/dist/aos.css";

const Courses = () => {
   const [courses, setCourses] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState("");
   const [searchTerm, setSearchTerm] = useState("");
   const [filterCategory, setFilterCategory] = useState("all");
   const [filterLevel, setFilterLevel] = useState("all");
   const navigate = useNavigate();

   useEffect(() => {
      AOS.init({ duration: 1000, once: true });
      fetchCourses();
   }, []);

   // Professional Background Animation Component - Mobile Optimized
   const ProfessionalBackgroundAnimation = () => {
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

            {/* Diagonal Lines - 45 degrees (Reduced on mobile) */}
            <div className="absolute inset-0">
               {Array.from({ length: 20 }).map((_, i) => (
                  <div
                     key={`d1-${i}`}
                     className="absolute w-[200%] h-[0.5px] bg-gradient-to-r from-transparent via-[#FFB900]/30 to-transparent transform rotate-45 hidden md:block"
                     style={{ 
                        top: `${(i * 8) - 40}%`,
                        left: `${(i * 6) - 40}%`,
                        animation: `moveDiagonal 20s linear infinite`,
                        animationDelay: `${i * 1}s`
                     }}
                  />
               ))}
            </div>

            {/* Diagonal Lines - -45 degrees (Reduced on mobile) */}
            <div className="absolute inset-0">
               {Array.from({ length: 20 }).map((_, i) => (
                  <div
                     key={`d2-${i}`}
                     className="absolute w-[200%] h-[0.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent transform -rotate-45 hidden md:block"
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
               {Array.from({ length: 80 }).map((_, i) => {
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
               {Array.from({ length: 15 }).map((_, i) => (
                  <div
                     key={`mobile-dot-${i}`}
                     className="absolute w-2 h-2 bg-[#FFB900] rounded-full opacity-30 animate-pulse"
                     style={{
                        top: `${10 + (i * 6)}%`,
                        left: `${5 + (i * 7) % 90}%`,
                        animationDelay: `${i * 0.5}s`
                     }}
                  />
               ))}
               
               {/* Simple moving lines for mobile */}
               {Array.from({ length: 8 }).map((_, i) => (
                  <div
                     key={`mobile-line-${i}`}
                     className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFB900]/20 to-transparent"
                     style={{
                        top: `${15 + (i * 12)}%`,
                        animation: `moveHorizontal 15s linear infinite`,
                        animationDelay: `${i * 1}s`
                     }}
                  />
               ))}
            </div>
         </div>
      );
   };

   const fetchCourses = async () => {
      setLoading(true);
      try {
         const response = await fetch(`${baseUrl}/api/courses/getCourses`);
         if (response.ok) {
            const data = await response.json();
            setCourses(data.data || []);
         } else {
            setError("Failed to fetch courses");
         }
      } catch (err) {
         setError("Error fetching courses: " + err.message);
      } finally {
         setLoading(false);
      }
   };

   const categories = [
      "all",
      ...new Set(courses.map((course) => course.category)),
   ];
   const levels = ["all", "beginner", "intermediate", "advanced"];

   const filteredCourses = courses.filter((course) => {
      const matchesSearch =
         course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
         course.instructor?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
         filterCategory === "all" || course.category === filterCategory;
      const matchesLevel =
         filterLevel === "all" || course.level === filterLevel;
      return matchesSearch && matchesCategory && matchesLevel;
   });

   const handleViewDetails = (courseId, e) => {
      e.stopPropagation(); // Prevent event bubbling
      navigate(`/courses/${courseId}`);
   };

   const formatPrice = (price) => (price === 0 ? "Free" : `Rs ${price}`);

   const getLevelBadgeClass = (level) => {
      switch (level) {
         case "beginner":
            return "bg-green-200 text-green-800";
         case "intermediate":
            return "bg-yellow-200 text-yellow-800";
         case "advanced":
            return "bg-red-200 text-red-800";
         default:
            return "bg-gray-200 text-gray-800";
      }
   };

   if (loading)
      return (
         <div className="flex justify-center items-center h-[70vh] bg-gradient-to-br from-[#090447] via-[#0a0553] to-[#090447]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#FFB900]"></div>
         </div>
      );

   return (
      <div className="px-4 sm:px-6 md:px-16 py-8 sm:py-12 bg-gradient-to-br from-[#090447] via-[#0a0553] to-[#090447] min-h-screen relative">
         {/* Professional Background Animation - Mobile Optimized */}
         <ProfessionalBackgroundAnimation />

         {/* Header */}
         <div className="text-center mb-8 sm:mb-12 relative z-10" data-aos="fade-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
               Explore Our Courses
            </h1>
            <p className="text-[#FFB900] text-base sm:text-lg md:text-xl px-4">
               Discover a wide range of courses to enhance your skills and
               knowledge
            </p>
         </div>

         {/* Search & Filters - Mobile Optimized */}
         <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 relative z-10"
            data-aos="fade-up"
         >
            <input
               type="text"
               placeholder="Search courses..."
               className="flex-1 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFB900] focus:border-transparent transition text-sm sm:text-base"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
               className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#FFB900] focus:border-transparent transition text-sm sm:text-base"
               value={filterCategory}
               onChange={(e) => setFilterCategory(e.target.value)}
            >
               {categories.map((cat) => (
                  <option key={cat} value={cat} className="bg-[#090447]">
                     {cat === "all" ? "All Categories" : cat}
                  </option>
               ))}
            </select>
            <select
               className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#FFB900] focus:border-transparent transition text-sm sm:text-base"
               value={filterLevel}
               onChange={(e) => setFilterLevel(e.target.value)}
            >
               {levels.map((lvl) => (
                  <option key={lvl} value={lvl} className="bg-[#090447]">
                     {lvl === "all"
                        ? "All Levels"
                        : lvl.charAt(0).toUpperCase() + lvl.slice(1)}
                  </option>
               ))}
            </select>
         </div>

         {/* Error Message */}
         {error && (
            <div
               className="bg-red-100 text-red-700 p-3 rounded-xl mb-6 backdrop-blur-md bg-white/10 border border-red-500/20 relative z-10 text-sm sm:text-base"
               data-aos="fade-up"
            >
               {error}
            </div>
         )}

         {/* Courses Grid - Mobile Optimized */}
         {filteredCourses.length === 0 ? (
            <div className="text-center py-16 sm:py-20 text-gray-300 relative z-10" data-aos="fade-up">
               <p className="text-lg sm:text-xl mb-4">No courses found</p>
               <button
                  className="px-6 py-2 bg-gradient-to-r from-[#FFB900] to-[#ffcc44] text-[#090447] rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-sm sm:text-base"
                  onClick={() => {
                     setSearchTerm("");
                     setFilterCategory("all");
                     setFilterLevel("all");
                  }}
               >
                  Clear Filters
               </button>
            </div>
         ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative z-10">
               {filteredCourses.map((course, index) => (
                  <div
                     key={course._id}
                     className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden transform group border border-white/20 hover:border-[#FFB900]/40 transition-all duration-300 hover:scale-105"
                     data-aos="fade-up"
                     data-aos-delay={index * 100}
                  >
                     {/* Card Body */}
                     <div className="p-4 sm:p-6 flex flex-col h-full">
                        {/* Badges */}
                        <div className="flex gap-2 mb-3 sm:mb-4 flex-wrap">
                           <span
                              className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${getLevelBadgeClass(
                                 course.level
                              )}`}
                           >
                              {course.level}
                           </span>
                           <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-[#FFB900] text-[#090447] hover:scale-105 transition-transform">
                              {course.category}
                           </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#FFB900] transition-colors">
                           {course.title}
                        </h3>
                        <p className="text-gray-300 flex-grow mb-3 sm:mb-4 text-sm sm:text-base">
                           {course.description.length > 100
                              ? `${course.description.substring(0, 100)}...`
                              : course.description}
                        </p>
                        {course.instructor && (
                           <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                              Instructor:{" "}
                              <span className="font-medium text-[#FFB900]">
                                 {course.instructor}
                              </span>
                           </p>
                        )}

                        <div className="flex items-center justify-between mt-auto">
                           <span className="text-[#FFB900] font-bold text-base sm:text-lg">
                              {formatPrice(course.price)}
                           </span>
                           <button
                              onClick={(e) => handleViewDetails(course._id, e)}
                              className="px-3 sm:px-4 py-2 bg-gradient-to-r from-[#FFB900] to-[#ffcc44] text-[#090447] rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold cursor-pointer text-sm sm:text-base"
                           >
                              View Details
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         )}

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
      </div>
   );
};

export default Courses;