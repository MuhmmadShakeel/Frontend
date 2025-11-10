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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#090447] via-[#0a0553] to-[#090447] p-4 sm:p-6 relative overflow-hidden">
         {/* Professional Background Animation */}
         <ProfessionalBackgroundAnimation isDark={true} />

         {/* Background decorative elements */}
         <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-[#FFB900] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#FFB900] opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>

         {/* Logo positioned in top right corner */}
         <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10">
            <img
               src={logo}
               alt="Company Logo"
               className="w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-lg border-2 border-[#FFB900] transform hover:scale-110 transition-transform duration-300"
            />
         </div>

         {/* Logo positioned in top left corner */}
         <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10">
            <img
               src={logo}
               alt="Company Logo"
               className="w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-lg border-2 border-[#FFB900] transform hover:scale-110 transition-transform duration-300"
            />
         </div>

         <div
            className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8 relative z-0"
            data-aos="zoom-in"
         >
            <div className="text-center mb-6 sm:mb-8">
               <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Sign In</h2>
               <p className="text-[#FFB900] text-sm sm:text-base">Access your learning dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
               <div>
                  <input
                     type="email"
                     name="email"
                     placeholder="Email address"
                     value={formData.email}
                     onChange={handleChange}
                     className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                        errors.email ? "border-red-500" : "border-white/20"
                     } text-white placeholder-gray-300 focus:ring-2 focus:ring-[#FFB900] focus:border-transparent outline-none transition text-sm sm:text-base`}
                     required
                  />
                  {errors.email && (
                     <p className="text-red-300 text-xs sm:text-sm mt-1">{errors.email}</p>
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
                     } text-white placeholder-gray-300 focus:ring-2 focus:ring-[#FFB900] focus:border-transparent outline-none transition text-sm sm:text-base`}
                     required
                  />
                  {errors.password && (
                     <p className="text-red-300 text-xs sm:text-sm mt-1">
                        {errors.password}
                     </p>
                  )}
               </div>

               {errors.submit && (
                  <div className="text-red-300 text-xs sm:text-sm text-center">
                     {errors.submit}
                  </div>
               )}

               <button
                  type="submit"
                  disabled={!formData.email || !formData.password || loading}
                  className={`w-full py-3 rounded-xl text-white font-semibold text-base sm:text-lg transition-all duration-300 shadow-md ${
                     loading
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#FFB900] to-[#ffcc44] hover:from-[#ffcc44] hover:to-[#FFB900] text-[#090447] hover:shadow-lg hover:scale-[1.02]"
                  }`}
               >
                  {loading ? (
                     <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#090447] border-t-transparent rounded-full animate-spin"></span>
                        Signing In...
                     </span>
                  ) : (
                     "Sign In"
                  )}
               </button>
            </form>

            <div className="text-center mt-6 sm:mt-8">
               <p className="text-gray-300 text-sm sm:text-base">Don't have an account?</p>
               <Link
                  to="/signup"
                  className="text-[#FFB900] hover:underline font-semibold text-sm sm:text-base transition-colors duration-200"
               >
                  Create an account
               </Link>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20 text-center">
               <a
                  href="/"
                  className="text-gray-300 hover:text-[#FFB900] text-xs sm:text-sm transition-colors duration-200"
               >
                  amnasnetwork.org
               </a>
            </div>
         </div>

         {/* Success Modal */}
         {showSuccessModal && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
               <div
                  className="bg-[#090447] text-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md text-center animate-fadeIn border border-[#FFB900]/40 backdrop-blur-md"
                  data-aos="zoom-in"
               >
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#FFB900] mb-3">
                     Login Successful!
                  </h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                     Welcome back! Redirecting to your dashboard...
                  </p>
                  <button
                     onClick={closeSuccessModal}
                     className="px-6 py-2 bg-gradient-to-r from-[#FFB900] to-[#ffcc44] text-[#090447] rounded-lg font-semibold hover:scale-105 transition duration-300 shadow-md text-sm sm:text-base"
                  >
                     Continue
                  </button>
               </div>
            </div>
         )}

         {/* Error Modal */}
         {showErrorModal && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
               <div
                  className="bg-[#090447] text-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md text-center animate-fadeIn border border-yellow-500/40 backdrop-blur-md"
                  data-aos="zoom-in"
               >
                  <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">
                     Login Failed
                  </h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">{errorMessage}</p>
                  <button
                     onClick={closeErrorModal}
                     className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg font-semibold hover:scale-105 transition duration-300 shadow-md text-sm sm:text-base"
                  >
                     Try Again
                  </button>
               </div>
            </div>
         )}

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

            @keyframes fadeIn {
               from { opacity: 0; transform: scale(0.9); }
               to { opacity: 1; transform: scale(1); }
            }

            .animate-fadeIn {
               animation: fadeIn 0.3s ease-out;
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

export default SignIn;