// src/pages/Admin/CareerManagement.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import baseUrl from "../../baseUrl";
import "react-toastify/dist/ReactToastify.css";

const CareerManagement = () => {
  const [careers, setCareers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    employmentType: "full-time",
    category: "Technology",
    salary: "",
    description: "",
    applicationLink: "",
    applicationEmail: "",
    deadline: "",
    experienceLevel: "mid",
  });

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    setLoading(true);
    try {
      const token = sessionStorage.getItem("adminToken");
      const response = await fetch(`${baseUrl}/api/careers/getCareers?isActive=true`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        const data = await response.json();
        setCareers(data.data || []);
      } else {
        setError("Failed to fetch job postings");
      }
    } catch (err) {
      setError("Error fetching job postings: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Create Career
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = sessionStorage.getItem("adminToken");
      const response = await fetch(`${baseUrl}/api/careers/createCareer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setCareers([data.data, ...careers]);
        setFormData({
          title: "",
          company: "",
          location: "",
          employmentType: "full-time",
          category: "Technology",
          salary: "",
          description: "",
          applicationLink: "",
          applicationEmail: "",
          deadline: "",
          experienceLevel: "mid",
        });
        setShowForm(false);
        toast.success("🎉 Job Created Successfully!", {
          theme: "dark",
          position: "top-center",
        });
      } else {
        setError(data.message || "Failed to create job posting");
      }
    } catch (err) {
      setError("Error creating job posting: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Confirm Delete Toast
  const confirmDelete = (careerId) => {
    toast(
      ({ closeToast }) => (
        <div className="flex flex-col items-center gap-3 text-center">
          <h3 className="text-lg font-semibold text-[#FFB800]">
             Confirm Deletion
          </h3>
          <p className="text-gray-300 text-sm">
            Are you sure you want to delete this job posting?
          </p>
          <div className="flex gap-3 mt-2 flex-wrap justify-center">
            <button
              onClick={() => {
                handleDelete(careerId);
                closeToast();
              }}
              className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded-md text-white font-semibold transition-all"
            >
              Yes, Delete
            </button>
            <button
              onClick={closeToast}
              className="bg-gray-600 hover:bg-gray-700 px-4 py-1 rounded-md text-white font-semibold transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        theme: "dark",
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
      }
    );
  };

  // ✅ Handle Delete
  const handleDelete = async (careerId) => {
    try {
      const token = sessionStorage.getItem("adminToken");
      const response = await fetch(`${baseUrl}/api/careers/deleteCareer/${careerId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        setCareers((prev) => prev.filter((c) => c._id !== careerId));
        toast.success("🗑️ Job Deleted Successfully!", {
          theme: "dark",
          position: "top-center",
        });
      } else {
        toast.error("❌ Failed to delete job.", {
          theme: "dark",
          position: "top-center",
        });
      }
    } catch (err) {
      toast.error("Error deleting job posting: " + err.message, {
        theme: "dark",
        position: "top-center",
      });
    }
  };

  const handleEdit = (careerId) => {
    toast.info("✏️ Redirecting to edit job...", {
      theme: "dark",
      position: "top-center",
    });
    navigate(`/admin/careers/edit/${careerId}`);
  };

  const handleInputChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const formatDate = (dateString) =>
    dateString ? new Date(dateString).toLocaleDateString() : "Open until filled";

  return (
    <div className="bg-[#0D1529] min-h-screen p-6 text-white transition-all duration-500">
      <ToastContainer />

      {/* Header */}
      <div className="flex flex-wrap justify-between items-center mb-8 border-b border-gray-700 pb-4">
        <div>
          <h2 className="text-3xl font-extrabold text-[#00BFA6] tracking-wide">
            Career Management
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Manage job postings professionally and easily.
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#00BFA6] shadow-lg shadow-[#00BFA6]/30 text-[#0D1529] px-6 py-2 rounded-xl font-semibold hover:scale-105 hover:bg-[#00d8b6] transition-all"
          disabled={loading}
        >
          {loading ? "Loading..." : "+ Add Job"}
        </button>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="bg-red-600 text-white p-3 rounded-lg mb-6 flex justify-between items-center animate-pulse">
          <span>{error}</span>
          <button onClick={() => setError("")}>✕</button>
        </div>
      )}

      {/* Job Form */}
      {showForm && (
        <div className="bg-[#101b35] p-6 rounded-2xl shadow-2xl border border-[#00BFA6]/40 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-[#00BFA6]">
              Add New Job Posting
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
                placeholder="Job Title"
                className="bg-transparent border border-gray-700 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-[#00BFA6] placeholder-gray-400"
              />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                placeholder="Company"
                className="bg-transparent border border-gray-700 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-[#00BFA6] placeholder-gray-400"
              />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Location"
                className="bg-transparent border border-gray-700 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-[#00BFA6] placeholder-gray-400"
              />
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
                placeholder="Salary (e.g. $60k - $80k)"
                className="bg-transparent border border-gray-700 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-[#00BFA6] placeholder-gray-400"
              />
            </div>

            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Job Description..."
              className="bg-transparent border border-gray-700 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-[#00BFA6] placeholder-gray-400"
            />

            <button
              type="submit"
              className="bg-[#00BFA6] text-[#0D1529] px-8 py-2 rounded-lg font-semibold hover:bg-[#00d8b6] shadow-lg shadow-[#00BFA6]/40 transition-transform transform hover:scale-105"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Job"}
            </button>
          </form>
        </div>
      )}

      {/* Job List */}
      <div className="overflow-x-auto bg-[#101b35] rounded-2xl shadow-xl border border-[#00BFA6]/30 transition-all duration-300">
        <table className="min-w-full text-left">
          <thead className="bg-[#00BFA6] text-[#0D1529] font-semibold">
            <tr>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Company</th>
              <th className="px-6 py-3">Location</th>
              <th className="px-6 py-3">Type</th>
              <th className="px-6 py-3">Level</th>
              <th className="px-6 py-3">Deadline</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {careers.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center text-gray-400 py-6 text-lg">
                  No job postings yet. Add your first one!
                </td>
              </tr>
            ) : (
              careers.map((career) => (
                <tr
                  key={career._id}
                  className="border-b border-gray-700 hover:bg-[#16203b]/50 transition-all"
                >
                  <td className="px-6 py-4 font-semibold text-white">{career.title}</td>
                  <td className="px-6 py-4 text-gray-300">{career.company}</td>
                  <td className="px-6 py-4 text-gray-400">{career.location}</td>
                  <td className="px-6 py-4">
                    <span className="bg-[#00BFA6]/20 text-[#00BFA6] px-3 py-1 rounded-lg text-sm">
                      {career.employmentType}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{career.experienceLevel}</td>
                  <td className="px-6 py-4 text-gray-300">
                    {formatDate(career.deadline)}
                  </td>
                  <td className="px-6 py-4 text-right flex gap-2 justify-end flex-nowrap">
                    <button
                      onClick={() => handleEdit(career._id)}
                      className="bg-[#00BFA6]/80 text-[#0D1529] px-3 py-1 rounded-md hover:scale-105 shadow-md hover:bg-[#00BFA6] font-semibold transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => confirmDelete(career._id)}
                      className="bg-red-500/80 text-white px-3 py-1 rounded-md hover:bg-red-600 hover:scale-105 shadow-md transition"
                    >
                      Delete
                    </button>
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

export default CareerManagement;
