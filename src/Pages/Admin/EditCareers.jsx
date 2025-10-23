// src/pages/Admin/EditCareer.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import baseUrl from "../../baseUrl";

const EditCareers = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    employmentType: "full-time",
    category: "Technology",
    salary: "",
    description: "",
    requirements: [""],
    responsibilities: [""],
    benefits: [""],
    applicationLink: "",
    applicationEmail: "",
    deadline: "",
    experienceLevel: "mid",
    tags: [""],
    isActive: true,
  });
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCareer();
  }, [id]);

  const fetchCareer = async () => {
    setFetchLoading(true);
    try {
      const token = sessionStorage.getItem("adminToken");
      const response = await fetch(`${baseUrl}/api/careers/getCareer/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        setFormData(data.data);
      } else setError("Failed to load job details");
    } catch (err) {
      setError("Error fetching data: " + err.message);
    } finally {
      setFetchLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = sessionStorage.getItem("adminToken");
      const response = await fetch(`${baseUrl}/api/careers/updateCareer/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Career updated successfully!");
        navigate("/admin/careers");
      } else {
        const data = await response.json();
        setError(data.message || "Failed to update job posting");
      }
    } catch (err) {
      setError("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  if (fetchLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh] bg-[#0D1529] text-[#00BFA6] text-lg">
        Loading job details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D1529] py-12 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-[#00BFA6] tracking-wide">
              Edit Career Post
            </h1>
            <p className="text-gray-400 mt-2">
              Update your job posting with accurate details.
            </p>
          </div>
          <button
            onClick={() => navigate("/admin/careers")}
            className="border border-[#00BFA6] text-[#00BFA6] hover:bg-[#00BFA6] hover:text-[#0D1529] px-6 py-2 rounded-xl transition-all font-semibold shadow-md"
          >
            ← Back
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-400 p-4 rounded-lg mb-6 shadow-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Basic Information */}
          <section className="bg-[#101B3C]/80 backdrop-blur-md p-8 rounded-2xl border border-[#00BFA6]/30 shadow-xl">
            <h2 className="text-2xl font-semibold text-[#00BFA6] mb-6 border-b border-[#00BFA6]/40 pb-2">
              Basic Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm mb-2 block">Job Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Full Stack Developer"
                  required
                  className="w-full p-4 rounded-xl border border-[#00BFA6]/40 bg-[#121D3C]/90 text-white focus:outline-none focus:ring-2 focus:ring-[#00BFA6] transition"
                />
              </div>
              <div>
                <label className="text-sm mb-2 block">Company *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Amna Technologies"
                  required
                  className="w-full p-4 rounded-xl border border-[#00BFA6]/40 bg-[#121D3C]/90 text-white focus:outline-none focus:ring-2 focus:ring-[#00BFA6] transition"
                />
              </div>
            </div>
          </section>

          {/* Job Details */}
          <section className="bg-[#101B3C]/80 backdrop-blur-md p-8 rounded-2xl border border-[#00BFA6]/30 shadow-xl">
            <h2 className="text-2xl font-semibold text-[#00BFA6] mb-6 border-b border-[#00BFA6]/40 pb-2">
              Job Details
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="text-sm mb-2 block">Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="New York, NY"
                  className="w-full p-4 rounded-xl border border-[#00BFA6]/40 bg-[#121D3C]/90 text-white focus:outline-none focus:ring-2 focus:ring-[#00BFA6] transition"
                />
              </div>
              <div>
                <label className="text-sm mb-2 block">Employment Type</label>
                <select
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-xl border border-[#00BFA6]/40 bg-[#121D3C]/90 text-white focus:outline-none focus:ring-2 focus:ring-[#00BFA6] transition"
                >
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="remote">Remote</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
              <div>
                <label className="text-sm mb-2 block">Experience Level</label>
                <select
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-xl border border-[#00BFA6]/40 bg-[#121D3C]/90 text-white focus:outline-none focus:ring-2 focus:ring-[#00BFA6] transition"
                >
                  <option value="entry">Entry</option>
                  <option value="mid">Mid</option>
                  <option value="senior">Senior</option>
                </select>
              </div>
            </div>
          </section>

          {/* Description */}
          <section className="bg-[#101B3C]/80 backdrop-blur-md p-8 rounded-2xl border border-[#00BFA6]/30 shadow-xl">
            <h2 className="text-2xl font-semibold text-[#00BFA6] mb-6 border-b border-[#00BFA6]/40 pb-2">
              Job Description
            </h2>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={6}
              placeholder="Describe the job role and expectations..."
              className="w-full p-4 rounded-xl border border-[#00BFA6]/40 bg-[#121D3C]/90 text-white focus:outline-none focus:ring-2 focus:ring-[#00BFA6] transition"
            />
          </section>

          {/* Salary & Deadline */}
          <section className="bg-[#101B3C]/80 backdrop-blur-md p-8 rounded-2xl border border-[#00BFA6]/30 shadow-xl grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm mb-2 block">Salary</label>
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
                placeholder="$90,000 - $120,000"
                className="w-full p-4 rounded-xl border border-[#00BFA6]/40 bg-[#121D3C]/90 text-white focus:outline-none focus:ring-2 focus:ring-[#00BFA6] transition"
              />
            </div>
            <div>
              <label className="text-sm mb-2 block">Application Deadline</label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleInputChange}
                className="w-full p-4 rounded-xl border border-[#00BFA6]/40 bg-[#121D3C]/90 text-white focus:outline-none focus:ring-2 focus:ring-[#00BFA6] transition"
              />
            </div>
          </section>

          {/* Active Status */}
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive}
              onChange={handleInputChange}
              className="w-6 h-6 accent-[#00BFA6]"
            />
            <span className="text-white text-lg">
              {formData.isActive ? "Active" : "Inactive"}
            </span>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end gap-6 pt-6 border-t border-[#00BFA6]/30">
            <button
              type="button"
              onClick={() => navigate("/admin/careers")}
              className="px-6 py-3 rounded-xl border border-[#00BFA6]/50 text-[#00BFA6] hover:bg-[#00BFA6] hover:text-[#0D1529] font-semibold shadow-md transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-[#00BFA6] text-[#0D1529] font-semibold rounded-xl hover:bg-[#00DDB7] shadow-lg transition-all"
            >
              {loading ? "Updating..." : "Update Career"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCareers;
