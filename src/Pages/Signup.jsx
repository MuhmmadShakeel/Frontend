// src/pages/SignUp.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../Components/Images/logo.jpg";
import "../style.css";
import baseUrl from "../baseUrl";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords don't match!");
      setShowErrorModal(true);
      return;
    }

    if (!formData.agreeToTerms) {
      setErrorMessage("Please agree to the terms and conditions");
      setShowErrorModal(true);
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(`${baseUrl}/api/users/register`, {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
        agreeToTerms: formData.agreeToTerms,
      });

      if (res.status === 201 || res.status === 200) {
        setShowSuccessModal(true);
        console.log("User registered:", res.data);
        // Redirect after success modal
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      const errorMsg =
        error.response?.data?.message ||
        "Registration failed. Please try again.";
      setErrorMessage(errorMsg);
      setShowErrorModal(true);
    } finally {
      setLoading(false);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    window.location.href = "/login";
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  const passwordsMatch = formData.password === formData.confirmPassword;
  const isFormValid =
    formData.fullName &&
    formData.phone &&
    formData.email &&
    formData.password &&
    formData.confirmPassword &&
    formData.agreeToTerms &&
    passwordsMatch;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-[#090447] via-[#0a0553] to-[#090447] relative overflow-hidden">
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

      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8 relative z-0">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-[#FFB900]">Start your learning journey with us</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-[#FFB900] focus:border-transparent outline-none transition"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-[#FFB900] focus:border-transparent outline-none transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-[#FFB900] focus:border-transparent outline-none transition"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="6"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-[#FFB900] focus:border-transparent outline-none transition"
          />

          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                formData.confirmPassword && !passwordsMatch
                  ? "border-red-500"
                  : "border-white/20"
              } text-white placeholder-gray-300 focus:ring-2 focus:ring-[#FFB900] focus:border-transparent outline-none transition`}
            />
            {formData.confirmPassword && !passwordsMatch && (
              <p className="text-red-300 text-sm mt-1">Passwords don't match</p>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
              className="w-4 h-4 accent-[#FFB900] rounded"
            />
            <label className="text-gray-300 text-sm">
              I agree to the
              <a
                href="/terms"
                className="text-[#FFB900] hover:underline ml-1"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                href="/privacy"
                className="text-[#FFB900] hover:underline ml-1"
              >
                Privacy Policy
              </a>
            </label>
          </div>

          {errors.submit && (
            <p className="text-red-300 text-sm text-center">
              {errors.submit}
            </p>
          )}

          <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`w-full py-3 font-semibold rounded-xl transition-all duration-300 ${
              isFormValid && !loading
                ? "bg-gradient-to-r from-[#FFB900] to-[#ffcc44] hover:from-[#ffcc44] hover:to-[#FFB900] text-[#090447] hover:shadow-lg hover:scale-[1.02]"
                : "bg-gray-600 cursor-not-allowed opacity-60 text-white"
            }`}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className="text-center mt-8">
          <p className="text-gray-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#FFB900] hover:underline font-semibold"
            >
              Sign In
            </Link>
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-white/20 text-center">
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
              Account Created Successfully!
            </h3>
            <p className="text-gray-300 mb-6">
              Your account has been created. Redirecting to login page...
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
              Registration Failed
            </h3>
            <p className="text-gray-300 mb-6">
              {errorMessage}
            </p>
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

export default SignUp;