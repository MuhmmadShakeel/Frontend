import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import baseUrl from "../../baseUrl";

const EditCourse = () => {
  const [course, setCourse] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    instructor: "",
    category: "General",
    level: "beginner",
    price: "",
    thumbnail: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const courseId = id;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (courseId && courseId !== "undefined") {
      fetchCourse();
    } else {
      setError("Invalid course ID");
    }
  }, [courseId]);

  const fetchCourse = async () => {
    setLoading(true);
    setError("");

    try {
      const token = sessionStorage.getItem("adminToken");
      const response = await fetch(`${baseUrl}/api/courses/getCourse/${courseId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (response.ok) {
        setCourse(data.data);
        setFormData({
          title: data.data.title || "",
          description: data.data.description || "",
          instructor: data.data.instructor || "",
          category: data.data.category || "General",
          level: data.data.level || "beginner",
          price: data.data.price || "",
          thumbnail: data.data.thumbnail || "",
        });
      } else {
        setError(data.message || "Failed to fetch course details");
      }
    } catch (err) {
      setError(err.message || "Error fetching course: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = sessionStorage.getItem("adminToken");
      const response = await fetch(`${baseUrl}/api/courses/updateCourse/${courseId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/admin/courses");
      } else {
        setError(data.message || "Failed to update course");
      }
    } catch (err) {
      setError("Error updating course: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    navigate("/admin/courses");
  };

  if (loading && !course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#060145] text-white">
        <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
        <p className="mt-4">Loading course details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#060145] via-[#090978] to-[#1a1a2e] flex items-center justify-center py-16 px-4" data-aos="fade-up">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl w-full max-w-4xl p-8 md:p-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Edit Course</h2>
          <p className="text-gray-300 mt-2">Modify your course information</p>
        </div>

        {error && (
          <div className="bg-red-500/80 text-white px-4 py-3 rounded-lg mb-6 flex justify-between items-center">
            <p>{error}</p>
            <button
              onClick={() => setError("")}
              className="font-bold text-xl leading-none hover:text-gray-200"
            >
              ×
            </button>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 text-white"
          data-aos="fade-up"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-gray-300">Course Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full bg-white/10 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-300">Instructor</label>
              <input
                type="text"
                name="instructor"
                value={formData.instructor}
                onChange={handleInputChange}
                className="w-full bg-white/10 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block mb-1 text-gray-300">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full bg-white/10 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option>General</option>
                <option>Web Development</option>
                <option>Data Science</option>
                <option>Mobile Development</option>
                <option>Design</option>
                <option>Business</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-gray-300">Level</label>
              <select
                name="level"
                value={formData.level}
                onChange={handleInputChange}
                className="w-full bg-white/10 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-gray-300">Price ($)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full bg-white/10 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Description *</label>
            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleInputChange}
              required
              className="w-full bg-white/10 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Thumbnail URL</label>
            <input
              type="url"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleInputChange}
              placeholder="https://example.com/image.jpg"
              className="w-full bg-white/10 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formData.thumbnail && (
              <img
                src={formData.thumbnail}
                alt="Thumbnail Preview"
                className="mt-4 rounded-lg shadow-lg w-full max-h-60 object-cover border border-white/20"
              />
            )}
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition-all duration-300"
            >
              {loading ? "Updating..." : "Update Course"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition-all duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
