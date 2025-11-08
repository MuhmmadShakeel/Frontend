import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../Components/Images/logo.jpg";
import "../style.css";
import baseUrl from "../baseUrl";

const SignIn = () => {
   const [formData, setFormData] = useState({ email: "", password: "" });
   const [errors, setErrors] = useState({});
   const [loading, setLoading] = useState(false);
   const [showSuccessModal, setShowSuccessModal] = useState(false);
   const [showErrorModal, setShowErrorModal] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");

   useEffect(() => {
      AOS.init({ duration: 1000, once: true });
   }, []);

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setErrors({});
      setLoading(true);

      try {
         const res = await axios.post(`${baseUrl}/api/users/login`, formData);

         if (res.data.success) {
            setShowSuccessModal(true);
            sessionStorage.setItem("token", res.data.data.token);
            sessionStorage.setItem("user", JSON.stringify(res.data.data));
            // Redirect after success modal
            setTimeout(() => {
               window.location.href = "/dashboard";
            }, 2000);
         }
      } catch (error) {
         const errorMessage =
            error.response?.data?.message || "Login failed. Please try again.";
         setErrorMessage(errorMessage);
         setShowErrorModal(true);
      } finally {
         setLoading(false);
      }
   };

   const closeSuccessModal = () => {
      setShowSuccessModal(false);
      window.location.href = "/dashboard";
   };

   const closeErrorModal = () => {
      setShowErrorModal(false);
   };

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
               <h2 className="text-3xl font-bold text-white mb-2">Sign In</h2>
               <p className="text-[#FFB900]">Access your learning dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
               <div>
                  <input
                     type="email"
                     name="email"
                     placeholder="Email address"
                     value={formData.email}
                     onChange={handleChange}
                     className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                        errors.email ? "border-red-500" : "border-white/20"
                     } text-white placeholder-gray-300 focus:ring-2 focus:ring-[#FFB900] focus:border-transparent outline-none transition`}
                     required
                  />
                  {errors.email && (
                     <p className="text-red-300 text-sm mt-1">{errors.email}</p>
                  )}
               </div>

               <div>
                  <input
                     type="password"
                     name="password"
                     placeholder="Password"
                     value={formData.password}
                     onChange={handleChange}
                     className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                        errors.password ? "border-red-500" : "border-white/20"
                     } text-white placeholder-gray-300 focus:ring-2 focus:ring-[#FFB900] focus:border-transparent outline-none transition`}
                     required
                  />
                  {errors.password && (
                     <p className="text-red-300 text-sm mt-1">
                        {errors.password}
                     </p>
                  )}
               </div>

               {errors.submit && (
                  <div className="text-red-300 text-sm text-center">
                     {errors.submit}
                  </div>
               )}

               <button
                  type="submit"
                  disabled={!formData.email || !formData.password || loading}
                  className={`w-full py-3 rounded-xl text-white font-semibold text-lg transition-all duration-300 shadow-md ${
                     loading
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#FFB900] to-[#ffcc44] hover:from-[#ffcc44] hover:to-[#FFB900] text-[#090447] hover:shadow-lg hover:scale-[1.02]"
                  }`}
               >
                  {loading ? "Signing In..." : "Sign In"}
               </button>
            </form>

            <div className="text-center mt-8">
               <p className="text-gray-300">Don't have an account?</p>
               <Link
                  to="/signup"
                  className="text-[#FFB900] hover:underline font-semibold"
               >
                  Create an account
               </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 text-center">
               <a
                  href="/"
                  className="text-gray-300 hover:text-[#FFB900] text-sm transition"
               >
                  amnasnetwork.org
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
                     Login Successful!
                  </h3>
                  <p className="text-gray-300 mb-6">
                     Welcome back! Redirecting to your dashboard...
                  </p>
                  <button
                     onClick={closeSuccessModal}
                     className="px-6 py-2 bg-gradient-to-r from-[#FFB900] to-[#ffcc44] text-[#090447] rounded-lg font-semibold hover:scale-105 transition duration-300 shadow-md"
                  >
                     Continue
                  </button>
               </div>
            </div>
         )}

         {/* Error Modal */}
         {showErrorModal && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
               <div
                  className="bg-[#090447] text-white rounded-2xl shadow-2xl p-8 w-96 text-center animate-fadeIn border border-yellow-500/40 backdrop-blur-md"
                  data-aos="zoom-in"
               >
                  <h3 className="text-2xl font-semibold text-yellow-400 mb-3">
                     Login Failed
                  </h3>
                  <p className="text-gray-300 mb-6">{errorMessage}</p>
                  <button
                     onClick={closeErrorModal}
                     className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg font-semibold hover:scale-105 transition duration-300 shadow-md"
                  >
                     Try Again
                  </button>
               </div>
            </div>
         )}
      </div>
   );
};

export default SignIn;
