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
         const response = await axios.post(
            `${baseUrl}/api/quote/quotes`,
            formData
         );
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#090447] via-[#0a0553] to-[#090447] p-6 relative overflow-hidden">
         {/* Background decorative elements */}
         <div className="absolute top-0 left-0 w-72 h-72 bg-[#FFB900] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFB900] opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>

         {/* Logo positioned in top right corner */}
         <div className="absolute top-6 right-6 z-10">
            <img
               src={logo}
               alt="Company Logo"
               className="w-16 h-16 rounded-full shadow-lg border-2 border-[#FFB900]"
            />
         </div>

         {/* Logo positioned in top left corner */}
         <div className="absolute top-6 left-6 z-10">
            <img
               src={logo}
               alt="Company Logo"
               className="w-16 h-16 rounded-full shadow-lg border-2 border-[#FFB900]"
            />
         </div>

         <div
            className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8 relative z-0"
            data-aos="zoom-in"
         >
            <div className="text-center mb-8">
               <h2 className="text-3xl font-bold text-white mb-2">
                  Contact Us
               </h2>
               <p className="text-[#FFB900]">
                  We'll get back to you within 24 hours
               </p>
            </div>

            {/* Contact Information - Moved to Top */}
            <div className="mb-8 space-y-4 bg-white/5 rounded-xl p-6 border border-white/10">
               <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFB900] rounded-full"></span>
                  <p className="text-gray-300">
                     <strong className="text-white">Email:</strong>{" "}
                     amnasnetwork143@gmail.com
                  </p>
               </div>
               <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFB900] rounded-full"></span>
                  <p className="text-gray-300">
                     <strong className="text-white">Phone:</strong> +92 322
                     7544521
                  </p>
               </div>
               <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFB900] rounded-full"></span>
                  <p className="text-gray-300">
                     <strong className="text-white">Hours:</strong> Mon–Sat
                     9AM–6PM
                  </p>
               </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
               <div>
                  <input
                     type="text"
                     name="name"
                     placeholder="Full Name *"
                     value={formData.name}
                     onChange={handleChange}
                     className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                        errors.name ? "border-red-500" : "border-white/20"
                     } text-white placeholder-gray-300 focus:ring-2 focus:ring-[#FFB900] focus:border-transparent outline-none transition`}
                  />
                  {errors.name && (
                     <p className="text-red-300 text-sm mt-1">{errors.name}</p>
                  )}
               </div>

               <div>
                  <input
                     type="email"
                     name="email"
                     placeholder="Email Address *"
                     value={formData.email}
                     onChange={handleChange}
                     className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                        errors.email ? "border-red-500" : "border-white/20"
                     } text-white placeholder-gray-300 focus:ring-2 focus:ring-[#FFB900] focus:border-transparent outline-none transition`}
                  />
                  {errors.email && (
                     <p className="text-red-300 text-sm mt-1">{errors.email}</p>
                  )}
               </div>

               <div>
                  <input
                     type="tel"
                     name="phone"
                     placeholder="Phone Number *"
                     value={formData.phone}
                     onChange={handleChange}
                     className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                        errors.phone ? "border-red-500" : "border-white/20"
                     } text-white placeholder-gray-300 focus:ring-2 focus:ring-[#FFB900] focus:border-transparent outline-none transition`}
                  />
                  {errors.phone && (
                     <p className="text-red-300 text-sm mt-1">{errors.phone}</p>
                  )}
               </div>

               <div>
                  <textarea
                     name="message"
                     placeholder="Your Message (Optional)"
                     value={formData.message}
                     onChange={handleChange}
                     rows="4"
                     className="w-full px-4 py-3 rounded-xl bg-white/5 text-white border border-white/20 placeholder-gray-300 focus:ring-2 focus:ring-[#FFB900] focus:border-transparent outline-none transition"
                  />
               </div>

               <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 rounded-xl text-white font-semibold text-lg transition-all duration-300 shadow-md ${
                     loading
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#FFB900] to-[#ffcc44] hover:from-[#ffcc44] hover:to-[#FFB900] text-[#090447] hover:shadow-lg hover:scale-[1.02]"
                  }`}
               >
                  {loading ? (
                     <span className="flex items-center justify-center gap-2">
                        <span className="w-5 h-5 border-2 border-[#090447] border-t-transparent rounded-full animate-spin"></span>
                        Sending...
                     </span>
                  ) : (
                     "Send Message"
                  )}
               </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/20 text-center">
               <p className="text-gray-300 mb-4">Looking for something else?</p>
               <div className="flex justify-center gap-6">
                  <a
                     href="/courses"
                     className="text-[#FFB900] hover:text-white transition text-sm"
                  >
                     Browse Courses
                  </a>
                  <a
                     href="/about"
                     className="text-[#FFB900] hover:text-white transition text-sm"
                  >
                     About Us
                  </a>
               </div>
            </div>

            <div className="mt-6 text-center">
               <a
                  href="https://www.linkedin.com/in/amna-s-network-1b992434b"
                  target="_blank"
                  rel="noopener"
                  className="text-gray-300 hover:text-[#FFB900] text-sm transition"
               >
                  Amna's Network Community
               </a>
            </div>
         </div>

         {/* Success Modal */}
         {showSuccessModal && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
               <div
                  className="bg-[#090447] text-white rounded-2xl shadow-2xl p-8 w-96 text-center animate-fadeIn border border-[#FFB900]/40 backdrop-blur-md"
                  data-aos="zoom-in"
               >
                  <h3 className="text-2xl font-semibold text-[#FFB900] mb-3">
                     Message Sent Successfully!
                  </h3>
                  <p className="text-gray-300 mb-6">
                     Thank you for contacting us. We'll get back to you within
                     24 hours.
                  </p>
                  <button
                     onClick={closeModal}
                     className="px-6 py-2 bg-gradient-to-r from-[#FFB900] to-[#ffcc44] text-[#090447] rounded-lg font-semibold hover:scale-105 transition duration-300 shadow-md"
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
