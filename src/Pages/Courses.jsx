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
         <div className="flex justify-center items-center h-[70vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#FFB900]"></div>
         </div>
      );

   return (
      <div className="px-6 md:px-16 py-12 bg-gradient-to-br from-[#090447] via-[#0a0553] to-[#090447] min-h-screen">
         {/* Header */}
         <div className="text-center mb-12" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
               Explore Our Courses
            </h1>
            <p className="text-[#FFB900] text-lg md:text-xl">
               Discover a wide range of courses to enhance your skills and
               knowledge
            </p>
         </div>

         {/* Search & Filters */}
         <div
            className="flex flex-col md:flex-row gap-4 mb-8"
            data-aos="fade-up"
         >
            <input
               type="text"
               placeholder="Search courses..."
               className="flex-1 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFB900] focus:border-transparent transition"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
               className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#FFB900] focus:border-transparent transition"
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
               className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#FFB900] focus:border-transparent transition"
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
               className="bg-red-100 text-red-700 p-3 rounded-xl mb-6 backdrop-blur-md bg-white/10 border border-red-500/20"
               data-aos="fade-up"
            >
               {error}
            </div>
         )}

         {/* Courses Grid */}
         {filteredCourses.length === 0 ? (
            <div className="text-center py-20 text-gray-300" data-aos="fade-up">
               <p className="text-xl mb-4">No courses found</p>
               <button
                  className="px-6 py-2 bg-gradient-to-r from-[#FFB900] to-[#ffcc44] text-[#090447] rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
               {filteredCourses.map((course, index) => (
                  <div
                     key={course._id}
                     className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden transform group border border-white/20 hover:border-[#FFB900]/40 transition-all duration-300 hover:scale-105"
                     data-aos="fade-up"
                     data-aos-delay={index * 100}
                  >
                     {/* Card Body */}
                     <div className="p-6 flex flex-col h-full">
                        {/* Badges */}
                        <div className="flex gap-2 mb-4">
                           <span
                              className={`px-3 py-1 rounded-full text-sm font-semibold ${getLevelBadgeClass(
                                 course.level
                              )}`}
                           >
                              {course.level}
                           </span>
                           <span className="px-3 py-1 rounded-full text-sm font-semibold bg-[#FFB900] text-[#090447] hover:scale-105 transition-transform">
                              {course.category}
                           </span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFB900] transition-colors">
                           {course.title}
                        </h3>
                        <p className="text-gray-300 flex-grow mb-4">
                           {course.description.length > 120
                              ? `${course.description.substring(0, 120)}...`
                              : course.description}
                        </p>
                        {course.instructor && (
                           <p className="text-gray-400 text-sm mb-4">
                              Instructor:{" "}
                              <span className="font-medium text-[#FFB900]">
                                 {course.instructor}
                              </span>
                           </p>
                        )}

                        <div className="flex items-center justify-between mt-auto">
                           <span className="text-[#FFB900] font-bold text-lg">
                              {formatPrice(course.price)}
                           </span>
                           <button
                              onClick={(e) => handleViewDetails(course._id, e)}
                              className="px-4 py-2 bg-gradient-to-r from-[#FFB900] to-[#ffcc44] text-[#090447] rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold cursor-pointer"
                           >
                              View Details
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
};

export default Courses;
