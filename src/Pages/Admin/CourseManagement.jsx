// src/pages/Admin/CourseManagement.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import baseUrl from "../../baseUrl";

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    instructor: "",
    category: "General",
    level: "beginner",
    price: "",
    thumbnail: "",
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  // 🟩 Fetch all courses
  const fetchCourses = async () => {
    setLoading(true);
    try {
      const token = sessionStorage.getItem("adminToken");
      const response = await fetch(`${baseUrl}/api/courses/getCourses`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        setCourses(data.data || []);
      } else {
        toast.error("⚠️ Failed to fetch courses", { theme: "dark" });
      }
    } catch (err) {
      toast.error("Error fetching courses: " + err.message, { theme: "dark" });
    } finally {
      setLoading(false);
    }
  };

  // 🟩 Create Course
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = sessionStorage.getItem("adminToken");
      const response = await fetch(`${baseUrl}/api/courses/createCourse`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setCourses([data.data, ...courses]);
        setFormData({
          title: "",
          description: "",
          instructor: "",
          category: "General",
          level: "beginner",
          price: "",
          thumbnail: "",
        });
        setShowForm(false);
        toast.success("🎉 Course Created Successfully!", {
          position: "top-center",
          theme: "colored",
        });
      } else {
        toast.error(data.message || "❌ Failed to create course", {
          position: "top-center",
        });
      }
    } catch (err) {
      toast.error("Error creating course: " + err.message, {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  // 🟩 Delete Course (Logic from working version)
  const handleDelete = async (courseId) => {
    if (!window.confirm("Are you sure you want to delete this course?")) {
      return;
    }

    try {
      const token = sessionStorage.getItem("adminToken");
      const response = await fetch(`${baseUrl}/api/courses/deleteCourse/${courseId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setCourses((prev) => prev.filter((course) => course._id !== courseId));
        toast.success("🗑️ Course deleted successfully!", {
          theme: "colored",
          position: "top-center",
        });
      } else {
        toast.error("❌ Failed to delete course!", { theme: "colored" });
      }
    } catch (err) {
      toast.error("Error deleting course: " + err.message, { theme: "colored" });
    }
  };

  // 🟩 Edit Course
  const handleEdit = (courseId) => {
    toast.info("✏️ Redirecting to edit course...", { position: "top-center" });
    navigate(`/admin/courses/edit/${courseId}`);
  };

  // 🟩 Input handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#0D1529] min-h-screen p-6 text-white transition-all duration-500 font-poppins">
      {/* 🟩 Header */}
      <div className="flex flex-wrap justify-between items-center mb-8 border-b border-gray-700 pb-4">
        <div>
          <h2 className="text-3xl font-extrabold text-[#00BFA6] tracking-wide">
            🎓 Course Management
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Manage all your courses professionally and easily.
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#00BFA6] shadow-lg shadow-[#00BFA6]/40 text-[#0D1529] px-6 py-2 rounded-xl font-semibold hover:scale-105 hover:bg-[#00d8b6] transition-all"
          disabled={loading}
        >
          {loading ? "Loading..." : "+ Add Course"}
        </button>
      </div>

      {/* 🟩 Add Course Form */}
      {showForm && (
        <div className="bg-[#101b35] p-6 rounded-2xl shadow-2xl border border-[#00BFA6]/40 mb-8 animate-fadeIn">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-[#00BFA6]">
              ➕ Add New Course
            </h3>
            <button
              onClick={() => setShowForm(false)}
              className="text-gray-400 hover:text-[#00BFA6] text-lg"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                placeholder="Course Title"
                className="bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[#00BFA6] placeholder-gray-400"
              />
              <input
                type="text"
                name="instructor"
                value={formData.instructor}
                onChange={handleInputChange}
                placeholder="Instructor Name"
                className="bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[#00BFA6] placeholder-gray-400"
              />
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Price (Rs)"
                className="bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[#00BFA6] placeholder-gray-400"
              />
              <input
                type="url"
                name="thumbnail"
                value={formData.thumbnail}
                onChange={handleInputChange}
                placeholder="Thumbnail URL"
                className="bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[#00BFA6] placeholder-gray-400"
              />
            </div>

            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Course Description..."
              className="bg-transparent border border-gray-700 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-[#00BFA6] placeholder-gray-400"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[#00BFA6]"
              >
                <option>General</option>
                <option>Web Development</option>
                <option>Data Science</option>
                <option>Design</option>
                <option>Business</option>
              </select>

              <select
                name="level"
                value={formData.level}
                onChange={handleInputChange}
                className="bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[#00BFA6]"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-[#00BFA6] text-[#0D1529] px-8 py-2 rounded-lg font-semibold hover:bg-[#00d8b6] shadow-lg shadow-[#00BFA6]/40 transition-transform transform hover:scale-105"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Course"}
            </button>
          </form>
        </div>
      )}

      {/* 🟩 Course List */}
      <div className="overflow-x-auto bg-[#101b35] rounded-2xl shadow-xl border border-[#00BFA6]/30 animate-fadeIn">
        <table className="min-w-full text-left">
          <thead className="bg-[#00BFA6] text-[#0D1529] font-semibold">
            <tr>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Level</th>
              <th className="px-6 py-3">Instructor</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center text-gray-400 py-6 text-lg">
                  No courses found. Create your first one!
                </td>
              </tr>
            ) : (
              courses.map((course) => (
                <tr
                  key={course._id}
                  className="border-b border-gray-700 hover:bg-[#16203b]/50 transition-all"
                >
                  <td className="px-6 py-4 flex items-center gap-3">
                    {course.thumbnail && (
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-white">{course.title}</p>
                      <p className="text-gray-400 text-sm">
                        {course.description?.substring(0, 40)}...
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{course.category}</td>
                  <td className="px-6 py-4 text-gray-300">{course.level}</td>
                  <td className="px-6 py-4 text-gray-300">
                    {course.instructor || "Not specified"}
                  </td>
                  <td className="px-6 py-4 text-[#00BFA6] font-semibold">
                    Rs {course.price || 0}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end items-center gap-3 flex-nowrap">
                      <button
                        onClick={() => handleEdit(course._id)}
                        className="bg-[#00BFA6]/80 text-[#0D1529] px-4 py-1 rounded-md hover:bg-[#00BFA6] hover:scale-105 font-semibold transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(course._id)}
                        className="bg-red-500/80 text-white px-4 py-1 rounded-md hover:bg-red-600 hover:scale-105 font-semibold transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseManagement;
