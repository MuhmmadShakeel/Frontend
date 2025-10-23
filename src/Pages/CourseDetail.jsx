// src/pages/Courses/CourseDetail.jsx
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
      <div className="flex justify-center items-center h-[80vh] bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#00D5BE]"></div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="flex flex-col justify-center items-center h-[80vh] bg-gray-50 text-red-500 font-semibold">
        <p className="mb-4">{error || "Course not found"}</p>
        <button
          onClick={() => navigate("/courses")}
          className="px-6 py-2 bg-[#00D5BE] text-white rounded-full hover:bg-[#0F172A] transition-colors duration-300"
        >
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-16">
   <button
  onClick={() => navigate("/courses")}
  className="mb-6 inline-flex cursor-pointer items-center px-4 py-2 bg-white border border-[#00D5BE] text-[#00D5BE] font-semibold rounded-lg shadow-sm hover:bg-[#00D5BE] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00D5BE] focus:ring-offset-2"
>
  ← Back to Courses
</button>


      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-6">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-wrap gap-2 mb-4">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelBadgeClass(
                  course.level
                )}`}
              >
                {course.level}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800">
                {course.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              {course.title}
            </h1>

            {course.instructor && (
              <p className="text-gray-600 font-medium mb-6">
                <span className="font-semibold">Instructor:</span>{" "}
                {course.instructor}
              </p>
            )}

            <div>
              <h2 className="text-xl font-semibold mb-2">About This Course</h2>
              <p className="text-gray-700 leading-relaxed">{course.description}</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/3 flex-shrink-0">
          <div className="p-6 bg-white rounded-xl shadow-lg sticky top-6 space-y-6">
            <div className="text-3xl font-bold text-[#00D5BE] text-center">
              {formatPrice(course.price)}
            </div>

            <button
              onClick={handleEnroll}
              className="w-full bg-[#00D5BE] cursor-pointer text-white py-3 rounded-full font-semibold hover:bg-[#0F172A] transition-colors duration-300"
            >
              Enroll Now
            </button>

            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-[#00D5BE]">•</span> Self-paced learning
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-[#00D5BE]">•</span> Lifetime access
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-[#00D5BE]">•</span> Mobile friendly
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetail;
