// src/pages/ContactUs.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../Components/Images/logo.jpg";
import "../style.css";
import baseUrl from "../baseUrl";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      const response = await axios.post(`${baseUrl}/api/quote/quotes`, formData);
      if (response.data.success) {
        setShowSuccessModal(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Error: " + response.data.error);
      }
    } catch (err) {
      alert("Failed to submit form. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => setShowSuccessModal(false);

  return (
    <div className="min-h-screen flex items-center justify-center text-white px-4 py-10">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-6 rounded-3xl overflow-hidden backdrop-blur-xl">
        {/* Left Side */}
        <div
          className="lg:w-1/2 bg-gradient-to-b from-[#102040] to-[#00BFA6] p-10 flex flex-col justify-between"
          data-aos="fade-right"
        >
          <div>
            <img
              src={logo}
              alt="Amna's Network logo"
              className="w-28 h-28 rounded-full mb-6 shadow-lg border-2 border-cyan-400/30"
            />
            <h3 className="text-3xl font-semibold text-cyan-400 mb-4">
              Get In Touch
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Have questions about our courses or need guidance? We're here to
              help you start your learning journey.
            </p>

            <div className="space-y-4 border-t border-gray-700/50 pt-6">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <p>
                  <strong>Email:</strong> amnasnetwork143@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <p>
                  <strong>Phone:</strong> +92 322 7544521
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <p>
                  <strong>Hours:</strong> Mon–Sat 9AM–6PM
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 space-y-2">
            
            <a
              href="https://www.linkedin.com/in/amna-s-network-1b992434b"
              target="_blank"
              rel="noopener"
              className="block text-[#102040] hover:text-white transition duration-300"
            >
              Amna's Network Community →
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div
          className="lg:w-1/2 bg-[#111a33] p-10 flex flex-col justify-between"
          data-aos="fade-left"
        >
          <div>
            <h1 className="text-3xl font-bold mb-2 text-cyan-400">
              Contact Us
            </h1>
            <p className="text-gray-400 mb-8">
              We'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-[#1a2444] text-white border ${
                    errors.name ? "border-red-500" : "border-gray-600"
                  } focus:outline-none focus:ring-2 focus:ring-cyan-500 transition`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-[#1a2444] text-white border ${
                    errors.email ? "border-red-500" : "border-gray-600"
                  } focus:outline-none focus:ring-2 focus:ring-cyan-500 transition`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-[#1a2444] text-white border ${
                    errors.phone ? "border-red-500" : "border-gray-600"
                  } focus:outline-none focus:ring-2 focus:ring-cyan-500 transition`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message (Optional)"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-[#1a2444] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold shadow-md hover:shadow-cyan-400/20 hover:scale-[1.02] transition-all duration-300 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          <div className="mt-10 text-center border-t border-gray-700/50 pt-6">
            <p className="text-gray-400 mb-2">Looking for something else?</p>
            <div className="flex justify-center gap-6">
              <a
                href="/courses"
                className="text-cyan-400 hover:text-white transition"
              >
                Browse Courses
              </a>
              <a
                href="/about"
                className="text-cyan-400 hover:text-white transition"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div
            className="bg-[#1a2444] text-white rounded-2xl shadow-2xl p-8 w-96 text-center animate-fadeIn border border-cyan-500/40"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
              Message Sent Successfully!
            </h3>
            <p className="text-gray-300 mb-6">
              Thank you for contacting us. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={closeModal}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:scale-105 transition duration-300 shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
