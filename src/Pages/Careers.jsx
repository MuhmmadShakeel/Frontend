// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../Career.css';
// import baseUrl from '../baseUrl';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Careers = () => {
//   const [careers, setCareers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterCategory, setFilterCategory] = useState('all');
//   const [filterEmploymentType, setFilterEmploymentType] = useState('all');
//   const [filterExperienceLevel, setFilterExperienceLevel] = useState('all');
//   const [filterLocation, setFilterLocation] = useState('');
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({ duration: 700, easing: 'ease-in-out', once: true });
//     fetchCareers();
//   }, []);

//   const fetchCareers = async () => {
//     setLoading(true);
//     try {
//       const params = new URLSearchParams();
//       if (searchTerm) params.append('search', searchTerm);
//       if (filterCategory !== 'all') params.append('category', filterCategory);
//       if (filterEmploymentType !== 'all') params.append('employmentType', filterEmploymentType);
//       if (filterExperienceLevel !== 'all') params.append('experienceLevel', filterExperienceLevel);
//       if (filterLocation) params.append('location', filterLocation);

//       const queryString = params.toString();
//       const url = queryString
//         ? `${baseUrl}/api/careers/getCareers?${queryString}`
//         : `${baseUrl}/api/careers/getCareers`;

//       const response = await fetch(url);
//       if (response.ok) {
//         const data = await response.json();
//         setCareers(data.data || []);
//       } else {
//         setError('Failed to fetch job opportunities');
//       }
//     } catch (err) {
//       setError('Error fetching careers: ' + err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const timeoutId = setTimeout(() => fetchCareers(), 500);
//     return () => clearTimeout(timeoutId);
//   }, [searchTerm, filterCategory, filterEmploymentType, filterExperienceLevel, filterLocation]);

//   const categories = ['all', ...new Set(careers.map(c => c.category))];
//   const employmentTypes = ['all', 'full-time', 'part-time', 'contract', 'internship', 'remote'];
//   const experienceLevels = ['all', 'entry', 'mid', 'senior', 'executive'];

//   const handleCareerClick = (careerId) => navigate(`/careers/${careerId}`);
//   const formatDate = (dateString) => !dateString ? 'Open until filled' : `Until ${new Date(dateString).toLocaleDateString()}`;

//   const getEmploymentTypeBadgeClass = (type) => {
//     switch (type) {
//       case 'full-time': return 'bg-[#00D5BE] text-white';
//       case 'part-time': return 'bg-[#00D5BE]/80 text-white';
//       case 'contract': return 'bg-[#00D5BE]/60 text-white';
//       case 'internship': return 'bg-[#00D5BE]/40 text-white';
//       case 'remote': return 'bg-[#00D5BE]/20 text-gray-800';
//       default: return 'bg-[#00D5BE] text-white';
//     }
//   };

//   const getExperienceLevelBadgeClass = (level) => {
//     switch (level) {
//       case 'entry': return 'bg-gray-200 text-gray-800';
//       case 'mid': return 'bg-[#00D5BE]/20 text-gray-900';
//       case 'senior': return 'bg-[#00D5BE]/40 text-gray-900';
//       case 'executive': return 'bg-[#00D5BE]/60 text-white';
//       default: return 'bg-[#00D5BE]/20 text-gray-900';
//     }
//   };

//   const clearFilters = () => {
//     setSearchTerm('');
//     setFilterCategory('all');
//     setFilterEmploymentType('all');
//     setFilterExperienceLevel('all');
//     setFilterLocation('');
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-[60vh]">
//         <div className="text-center text-white">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#00D5BE] mx-auto"></div>
//           <p className="mt-3 text-gray-400">Loading career opportunities...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="py-12 min-h-screen">
//       <div className="container mx-auto px-4">

//         {/* Header */}
//         <div className="text-center mb-12" data-aos="fade-up">
//           <h1 className="text-4xl font-bold text-[#00D5BE] mb-3">Career Opportunities</h1>
//           <p className="text-gray-400 text-lg">Join our team and build your future with us</p>
//         </div>

//         {/* Filters */}
//         <div
//           className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-6 bg-[#141C33] p-4 rounded-xl shadow-md border border-[#1f2a47]"
//           data-aos="fade-up"
//         >
//           <input
//             type="text"
//             className="w-full rounded-lg px-4 py-3 bg-[#0D152A] text-gray-200 border border-[#1f2a47] focus:ring-2 focus:ring-[#00D5BE] placeholder-gray-500"
//             placeholder="Search jobs..."
//             value={searchTerm}
//             onChange={e => setSearchTerm(e.target.value)}
//           />

//           {/* Filter Dropdowns */}
//           {[{
//             label: "Category",
//             value: filterCategory,
//             setter: setFilterCategory,
//             list: categories
//           }, {
//             label: "Type",
//             value: filterEmploymentType,
//             setter: setFilterEmploymentType,
//             list: employmentTypes
//           }, {
//             label: "Level",
//             value: filterExperienceLevel,
//             setter: setFilterExperienceLevel,
//             list: experienceLevels
//           }].map(({ label, value, setter, list }) => (
//             <div key={label} className="relative">
//               <button
//                 onClick={() => setOpenDropdown(openDropdown === label ? null : label)}
//                 className="w-full flex justify-between items-center rounded-lg px-4 py-3 bg-[#0D152A] text-gray-200 border border-[#1f2a47] hover:border-[#00D5BE] focus:ring-2 focus:ring-[#00D5BE]"
//               >
//                 {value === 'all' ? `All ${label}s` : value.charAt(0).toUpperCase() + value.slice(1)}
//                 <span className="ml-2 text-[#00D5BE]">▼</span>
//               </button>
//               {openDropdown === label && (
//                 <div className="absolute left-0 mt-1 w-full bg-[#0D152A] border border-[#1f2a47] rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
//                   {list.map(i => (
//                     <button
//                       key={i}
//                       onClick={() => { setter(i); setOpenDropdown(null); }}
//                       className={`block w-full text-left px-4 py-2 text-gray-300 hover:bg-[#00BFA6] hover:text-white transition-all duration-150 ${
//                         value === i ? 'bg-[#00BFA6] text-white' : ''
//                       }`}
//                     >
//                       {i === 'all' ? `All ${label}s` : i.charAt(0).toUpperCase() + i.slice(1)}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}

//           <input
//             type="text"
//             className="rounded-lg px-4 py-3 bg-[#0D152A] text-gray-200 border border-[#1f2a47] focus:ring-2 focus:ring-[#00D5BE] placeholder-gray-500"
//             placeholder="Location..."
//             value={filterLocation}
//             onChange={e => setFilterLocation(e.target.value)}
//           />
//         </div>

//         {/* Active Filters */}
//         {(searchTerm || filterCategory !== 'all' || filterEmploymentType !== 'all' || filterExperienceLevel !== 'all' || filterLocation) && (
//           <div className="flex flex-wrap gap-2 mb-8" data-aos="fade-up">
//             {[{ label: 'Search', value: searchTerm, setter: setSearchTerm },
//               { label: 'Category', value: filterCategory, setter: setFilterCategory },
//               { label: 'Type', value: filterEmploymentType, setter: setFilterEmploymentType },
//               { label: 'Level', value: filterExperienceLevel, setter: setFilterExperienceLevel },
//               { label: 'Location', value: filterLocation, setter: setFilterLocation }
//             ].map(({ label, value, setter }) =>
//               value && value !== 'all' ? (
//                 <div key={label} className="flex items-center bg-[#00D5BE]/20 text-[#00D5BE] border border-[#00D5BE]/40 px-4 py-2 rounded-full shadow-sm">
//                   <span className="mr-2">{label}: {value}</span>
//                   <button
//                     onClick={() => setter(label === 'Search' || label === 'Location' ? '' : 'all')}
//                     className="text-white hover:text-red-400 transition"
//                   >×</button>
//                 </div>
//               ) : null
//             )}
//             <button
//               className="bg-[#00D5BE] text-[#0D152A] px-4 py-2 rounded-full font-medium hover:bg-[#00BFA6] transition-all duration-300"
//               onClick={clearFilters}
//             >
//               Clear All
//             </button>
//           </div>
//         )}

//         {/* Career Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" data-aos="fade-up">
//           {careers.map(career => (
//             <div
//               key={career._id}
//               onClick={() => handleCareerClick(career._id)}
//               className="bg-[#141C33] border border-[#1f2a47] hover:border-[#00D5BE] hover:shadow-[0_0_20px_#00D5BE33] rounded-xl p-6 cursor-pointer flex flex-col transition-all duration-300"
//             >
//               <div className="flex flex-wrap gap-2 mb-3">
//                 <span className={`px-2 py-1 text-xs rounded ${getEmploymentTypeBadgeClass(career.employmentType)}`}>
//                   {career.employmentType.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
//                 </span>
//                 <span className={`px-2 py-1 text-xs rounded ${getExperienceLevelBadgeClass(career.experienceLevel)}`}>
//                   {career.experienceLevel.charAt(0).toUpperCase() + career.experienceLevel.slice(1)}
//                 </span>
//                 <span className="px-2 py-1 text-xs rounded bg-[#00D5BE]/10 text-[#00D5BE]">{career.category}</span>
//               </div>
//               <h5 className="text-lg font-semibold text-white mb-1">{career.title}</h5>
//               <div className="text-[#00D5BE] mb-1 flex items-center gap-1 font-medium">
//                 <i className="bi bi-building"></i>{career.company}
//               </div>
//               <div className="text-gray-400 mb-3 flex items-center gap-1">
//                 <i className="bi bi-geo-alt"></i>{career.location}
//               </div>
//               <p className="text-gray-300 mb-3 flex-grow">
//                 {career.description.length > 120 ? career.description.substring(0, 120) + '...' : career.description}
//               </p>
//               {career.salary && <p className="text-[#00D5BE] font-semibold mb-2">💰 {career.salary}</p>}
//               <div className="flex justify-between items-center text-gray-500 text-sm mt-auto">
//                 <span>{formatDate(career.deadline)}</span>
//                 <span>Posted {new Date(career.createdAt).toLocaleDateString()}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Careers;


// // src/pages/Courses/Courses.jsx
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import baseUrl from "../baseUrl";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Courses = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterCategory, setFilterCategory] = useState("all");
//   const [filterLevel, setFilterLevel] = useState("all");
//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`${baseUrl}/api/courses/getCourses`);
//       if (response.ok) {
//         const data = await response.json();
//         setCourses(data.data || []);
//       } else {
//         setError("Failed to fetch courses");
//       }
//     } catch (err) {
//       setError("Error fetching courses: " + err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const categories = ["all", ...new Set(courses.map((course) => course.category))];
//   const levels = ["all", "beginner", "intermediate", "advanced"];

//   const filteredCourses = courses.filter((course) => {
//     const matchesSearch =
//       course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       course.instructor?.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = filterCategory === "all" || course.category === filterCategory;
//     const matchesLevel = filterLevel === "all" || course.level === filterLevel;
//     return matchesSearch && matchesCategory && matchesLevel;
//   });

//   const handleCourseClick = (courseId) => navigate(`/courses/${courseId}`);

//   const formatPrice = (price) => (price === 0 ? "Free" : `Rs ${price}`);

//   const getLevelBadgeClass = (level) => {
//     switch (level) {
//       case "beginner":
//         return "bg-green-200 text-green-800";
//       case "intermediate":
//         return "bg-yellow-200 text-yellow-800";
//       case "advanced":
//         return "bg-red-200 text-red-800";
//       default:
//         return "bg-gray-200 text-gray-800";
//     }
//   };

//   if (loading)
//     return (
//       <div className="flex justify-center items-center h-[70vh]">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#00D5BE]"></div>
//       </div>
//     );

//   return (
//     <div className="px-6 md:px-16 py-12 bg-gray-50 min-h-screen">
//       {/* Header */}
//       <div className="text-center mb-12" data-aos="fade-up">
//         <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-3">
//           Explore Our Courses
//         </h1>
//         <p className="text-gray-600 text-lg md:text-xl">
//           Discover a wide range of courses to enhance your skills and knowledge
//         </p>
//       </div>

//       {/* Search & Filters */}
//       <div className="flex flex-col md:flex-row gap-4 mb-8" data-aos="fade-up">
//         <input
//           type="text"
//           placeholder="Search courses..."
//           className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00D5BE]"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <select
//           className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00D5BE]"
//           value={filterCategory}
//           onChange={(e) => setFilterCategory(e.target.value)}
//         >
//           {categories.map((cat) => (
//             <option key={cat} value={cat}>
//               {cat === "all" ? "All Categories" : cat}
//             </option>
//           ))}
//         </select>
//         <select
//           className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00D5BE]"
//           value={filterLevel}
//           onChange={(e) => setFilterLevel(e.target.value)}
//         >
//           {levels.map((lvl) => (
//             <option key={lvl} value={lvl}>
//               {lvl === "all" ? "All Levels" : lvl.charAt(0).toUpperCase() + lvl.slice(1)}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Error Message */}
//       {error && (
//         <div className="bg-red-100 text-red-700 p-3 rounded mb-6">{error}</div>
//       )}

//       {/* Courses Grid */}
//       {filteredCourses.length === 0 ? (
//         <div className="text-center py-20 text-gray-500" data-aos="fade-up">
//           <p className="text-xl mb-4">No courses found</p>
//           <button
//             className="px-6 py-2 bg-[#00D5BE] text-white rounded-lg hover:bg-[#0F172A] transition"
//             onClick={() => {
//               setSearchTerm("");
//               setFilterCategory("all");
//               setFilterLevel("all");
//             }}
//           >
//             Clear Filters
//           </button>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredCourses.map((course, index) => (
//             <div
//               key={course._id}
//               className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform group"
//               onClick={() => handleCourseClick(course._id)}
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//             >
//               {/* Card Body */}
//               <div className="p-6 flex flex-col h-full">
//                 {/* Badges */}
//                 <div className="flex gap-2 mb-4">
//                   <span
//                     className={`px-3 py-1 rounded-full text-sm font-semibold ${getLevelBadgeClass(
//                       course.level
//                     )}`}
//                   >
//                     {course.level}
//                   </span>
//                   <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-200 text-gray-800 hover:-translate-y-2">
//                     {course.category}
//                   </span>
//                 </div>

//                 <h3 className="text-xl font-bold text-[#0F172A] mb-3">{course.title}</h3>
//                 <p className="text-gray-600 flex-grow mb-4">
//                   {course.description.length > 120
//                     ? `${course.description.substring(0, 120)}...`
//                     : course.description}
//                 </p>
//                 {course.instructor && (
//                   <p className="text-gray-400 text-sm mb-4">
//                     Instructor: <span className="font-medium">{course.instructor}</span>
//                   </p>
//                 )}

//                 <div className="flex items-center justify-between mt-auto">
//                   <span className="text-[#00D5BE] font-bold text-lg">
//                     {formatPrice(course.price)}
//                   </span>
//                   <button className="px-4 py-2 bg-[#00D5BE] text-white rounded-lg hover:bg-[#0F172A] cursor-pointer group-hover:shadow-2xl transition-all duration-500">
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Courses;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../baseUrl';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Careers = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterEmploymentType, setFilterEmploymentType] = useState('all');
  const [filterExperienceLevel, setFilterExperienceLevel] = useState('all');
  const [filterLocation, setFilterLocation] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-in-out', once: true });
    fetchCareers();
  }, []);

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

  const fetchCareers = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (searchTerm) params.append('search', searchTerm);
      if (filterCategory !== 'all') params.append('category', filterCategory);
      if (filterEmploymentType !== 'all') params.append('employmentType', filterEmploymentType);
      if (filterExperienceLevel !== 'all') params.append('experienceLevel', filterExperienceLevel);
      if (filterLocation) params.append('location', filterLocation);

      const url = `${baseUrl}/api/careers/getCareers?${params.toString()}`;
      const res = await fetch(url);
      const data = await res.json();
      setCareers(data.data || []);
    } catch (err) {
      console.error('Error fetching careers:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => fetchCareers(), 500);
    return () => clearTimeout(timeout);
  }, [searchTerm, filterCategory, filterEmploymentType, filterExperienceLevel, filterLocation]);

  const categories = ['all', ...new Set(careers.map(c => c.category))];
  const employmentTypes = ['all', 'full-time', 'part-time', 'contract', 'internship', 'remote'];
  const experienceLevels = ['all', 'entry', 'mid', 'senior', 'executive'];

  const handleCareerClick = id => navigate(`/careers/${id}`);
  const clearFilters = () => {
    setSearchTerm('');
    setFilterCategory('all');
    setFilterEmploymentType('all');
    setFilterExperienceLevel('all');
    setFilterLocation('');
  };

  const badgeClass = (type) => {
    switch(type) {
      case 'full-time': return 'bg-[#FFB900] text-[#090447]';
      case 'part-time': return 'bg-[#FFB900]/80 text-[#090447]';
      case 'contract': return 'bg-[#FFB900]/60 text-[#090447]';
      case 'internship': return 'bg-[#FFB900]/40 text-[#090447]';
      case 'remote': return 'bg-[#FFB900]/20 text-white';
      default: return 'bg-[#FFB900] text-[#090447]';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh] bg-[#090447] relative">
        <ProfessionalBackgroundAnimation isDark={true} />
        <div className="text-center relative z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#FFB900] mx-auto"></div>
          <p className="mt-3 text-gray-400">Loading career opportunities...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-[#090447] relative overflow-hidden">
      {/* Professional Background Animation */}
      <ProfessionalBackgroundAnimation isDark={true} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 lg:mb-6">
            Career <span className="text-[#FFB900]">Opportunities</span>
          </h1>
          <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto">
            Join our team and build your future with us. Discover exciting roles that match your skills and ambitions.
          </p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8" data-aos="fade-up">
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="px-4 py-3 rounded-xl bg-[#141C33] text-gray-200 border border-[#FFB900]/30 focus:ring-2 focus:ring-[#FFB900] placeholder-gray-400 transition-all duration-300"
          />
          
          {[{
            label: 'Category', value: filterCategory, setter: setFilterCategory, list: categories
          }, {
            label: 'Type', value: filterEmploymentType, setter: setFilterEmploymentType, list: employmentTypes
          }, {
            label: 'Level', value: filterExperienceLevel, setter: setFilterExperienceLevel, list: experienceLevels
          }].map(({ label, value, setter, list }) => (
            <div key={label} className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === label ? null : label)}
                className="w-full flex justify-between items-center px-4 py-3 bg-[#141C33] text-gray-200 border border-[#FFB900]/30 rounded-xl hover:ring-2 hover:ring-[#FFB900] transition-all duration-300"
              >
                <span className="truncate">
                  {value === 'all' ? `All ${label}s` : value.charAt(0).toUpperCase() + value.slice(1)}
                </span>
                <span className="ml-2 text-[#FFB900] transform transition-transform">▼</span>
              </button>
              {openDropdown === label && (
                <div className="absolute left-0 mt-1 w-full bg-[#141C33] border border-[#FFB900]/30 rounded-xl shadow-2xl z-20 max-h-48 overflow-y-auto">
                  {list.map(i => (
                    <button
                      key={i}
                      onClick={() => { setter(i); setOpenDropdown(null); }}
                      className={`block w-full text-left px-4 py-3 text-gray-300 hover:bg-[#FFB900]/20 hover:text-white transition-all duration-200 ${
                        value === i ? 'bg-[#FFB900]/20 text-white' : ''
                      }`}
                    >
                      {i === 'all' ? `All ${label}s` : i.charAt(0).toUpperCase() + i.slice(1)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <input
            type="text"
            placeholder="Location..."
            value={filterLocation}
            onChange={e => setFilterLocation(e.target.value)}
            className="px-4 py-3 rounded-xl bg-[#141C33] text-gray-200 border border-[#FFB900]/30 focus:ring-2 focus:ring-[#FFB900] placeholder-gray-400 transition-all duration-300"
          />
        </div>

        {/* Active Filters */}
        {(searchTerm || filterCategory !== 'all' || filterEmploymentType !== 'all' || filterExperienceLevel !== 'all' || filterLocation) && (
          <div className="flex flex-wrap gap-3 mb-8" data-aos="fade-up">
            {[{ label: 'Search', value: searchTerm, setter: setSearchTerm },
              { label: 'Category', value: filterCategory, setter: setFilterCategory },
              { label: 'Type', value: filterEmploymentType, setter: setFilterEmploymentType },
              { label: 'Level', value: filterExperienceLevel, setter: setFilterExperienceLevel },
              { label: 'Location', value: filterLocation, setter: setFilterLocation }
            ].map(({ label, value, setter }) =>
              value && value !== 'all' ? (
                <div key={label} className="flex items-center bg-[#FFB900]/20 text-[#FFB900] px-4 py-2 rounded-full shadow-lg border border-[#FFB900]/30">
                  <span className="mr-2 text-sm font-medium">{label}: {value}</span>
                  <button
                    onClick={() => setter(label === 'Search' || label === 'Location' ? '' : 'all')}
                    className="text-white hover:text-red-400 transition-colors duration-200 text-lg font-bold"
                  >×</button>
                </div>
              ) : null
            )}
            <button
              onClick={clearFilters}
              className="bg-[#FFB900] hover:bg-[#e6a800] text-[#090447] px-5 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Clear All
            </button>
          </div>
        )}

        {/* Career Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {careers.map((c, index) => (
            <div
              key={c._id}
              onClick={() => handleCareerClick(c._id)}
              className="group bg-[#141C33] rounded-2xl p-6 lg:p-8 cursor-pointer flex flex-col border border-[#FFB900]/20 hover:border-[#FFB900] hover:shadow-2xl hover:shadow-[#FFB900]/20 transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFB900]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                <span className={`px-3 py-1.5 text-xs font-semibold rounded-full ${badgeClass(c.employmentType)} shadow-lg`}>
                  {c.employmentType.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </span>
                <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-[#FFB900]/20 text-[#FFB900] border border-[#FFB900]/30">
                  {c.experienceLevel.charAt(0).toUpperCase() + c.experienceLevel.slice(1)}
                </span>
                <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-[#FFB900]/10 text-[#FFB900] border border-[#FFB900]/20">
                  {c.category}
                </span>
              </div>

              {/* Job Title */}
              <h5 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-[#FFB900] transition-colors duration-300 relative z-10">
                {c.title}
              </h5>

              {/* Company & Location */}
              <div className="space-y-2 mb-4 relative z-10">
                <div className="text-[#FFB900] font-semibold flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                  {c.company}
                </div>
                <div className="text-gray-300 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {c.location}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4 flex-grow leading-relaxed relative z-10">
                {c.description.length > 120 ? c.description.substring(0, 120) + '...' : c.description}
              </p>

              {/* Salary */}
              {c.salary && (
                <p className="text-[#FFB900] font-bold text-lg mb-4 relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  {c.salary}
                </p>
              )}

              {/* Footer */}
              <div className="flex justify-between items-center text-gray-400 text-sm mt-4 pt-4 border-t border-[#FFB900]/20 relative z-10">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {c.deadline ? `Until ${new Date(c.deadline).toLocaleDateString()}` : 'Open until filled'}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Posted {new Date(c.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {careers.length === 0 && !loading && (
          <div className="text-center py-16" data-aos="fade-up">
            <div className="text-gray-400 text-lg mb-4">No career opportunities found matching your criteria.</div>
            <button
              onClick={clearFilters}
              className="bg-[#FFB900] hover:bg-[#e6a800] text-[#090447] px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Clear Filters
            </button>
          </div>
        )}
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
    </div>
  );
};

export default Careers;