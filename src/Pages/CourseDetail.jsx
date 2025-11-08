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
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#FFB900]"></div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="flex flex-col justify-center items-center h-[80vh] bg-gray-50 text-red-500 font-semibold text-center px-4">
        <p className="mb-4">{error || "Course not found"}</p>
        <button
          onClick={() => navigate("/courses")}
          className="px-6 py-2 bg-[#FFB900] text-[#090447] rounded-full hover:bg-[#090447] hover:text-white transition-all duration-300"
        >
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-10 px-4 sm:px-6 md:px-10 lg:px-16">
      {/* ✅ BACK BUTTON */}
      <button
        onClick={() => navigate("/courses")}
        className="mb-6 inline-flex items-center cursor-pointer px-4 py-2 bg-[#090447] border border-[#FFB900] text-[#FFB900] font-semibold rounded-lg shadow-sm hover:bg-[#FFB900] hover:text-[#090447] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FFB900] focus:ring-offset-2"
      >
        ← Back to Courses
      </button>

      {/* ✅ MAIN CONTENT */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-6 order-2 lg:order-1">
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

            <h1 className="text-3xl md:text-4xl font-bold text-[#090447] mb-4">
              {course.title}
            </h1>

            {course.instructor && (
              <p className="text-gray-600 font-medium mb-6">
                <span className="font-semibold text-[#090447]">
                  Instructor:
                </span>{" "}
                {course.instructor}
              </p>
            )}

            <div>
              <h2 className="text-xl font-semibold mb-2 text-[#090447]">
                About This Course
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                {course.description}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/3 flex-shrink-0 order-1 lg:order-2">
          <div className="p-6 bg-white rounded-xl shadow-lg sticky lg:top-6 space-y-6">
            <div className="text-3xl font-bold text-center text-[#090447]">
              {formatPrice(course.price)}
            </div>

            <button
              onClick={handleEnroll}
              className="w-full bg-[#FFB900] text-[#090447] py-3 rounded-full font-semibold cursor-pointer hover:bg-[#090447] hover:text-white transition-all duration-300"
            >
              Enroll Now
            </button>

            <div className="space-y-3 mt-4 text-sm sm:text-base">
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-[#FFB900]">•</span> Self-paced learning
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-[#FFB900]">•</span> Lifetime access
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-[#FFB900]">•</span> Mobile friendly
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetail;
