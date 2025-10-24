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
      alert("Passwords don't match!");
      return;
    }

    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }

    try {
      const res = await axios.post(`${baseUrl}/api/users/register`, {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
        agreeToTerms: formData.agreeToTerms,
      });

      if (res.status === 201 || res.status === 200) {
        alert("Account created successfully!");
        console.log("User registered:", res.data);
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Error during registration:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Registration failed. Please try again.";
      alert(errorMessage);
      setErrors({ submit: errorMessage });
    }
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
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-10 text-white">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl border border-[#00BFA6]/20 bg-[#0e1a36]/90 backdrop-blur-md gap-2">
        {/* Left Section */}
        <div className="lg:w-1/2 bg-gradient-to-b from-[#102040] to-[#00BFA6] p-10 flex flex-col justify-between text-center lg:text-left gap-6">
          <div>
            <img
              src={logo}
              alt="Company logo"
              className="w-28 h-28 rounded-full mx-auto lg:mx-0 mb-6 border-2 border-white/50 shadow-lg shadow-[#00BFA6]/40"
            />
            <h1 className="text-3xl font-bold text-white mb-3">
              Welcome to Amna's Network
            </h1>
            <p className="text-white/80 leading-relaxed text-sm md:text-base">
              Join our learning community and start your journey toward
              professional growth today.
            </p>
          </div>

          <div className="mt-6 border-t border-white/40 pt-6 space-y-2 text-sm">
         
            <a
              href="https://www.linkedin.com/in/amna-s-network-1b992434b"
              target="_blank"
              rel="noopener"
              className="block text-white hover:text-gray-200 transition duration-300"
            >
              Amna's Network Community →
            </a>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="lg:w-1/2 p-10 flex gap-6 flex-col justify-center bg-transparent">
          <div className="max-w-md w-full mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-[#00BFA6]">
                Create Your Account
              </h1>
              <p className="text-gray-400 mt-2 text-sm md:text-base">
                Start your learning journey with us.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#14254b]/70 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00BFA6] transition duration-300 placeholder-gray-400"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#14254b]/70 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00BFA6] transition duration-300 placeholder-gray-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#14254b]/70 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00BFA6] transition duration-300 placeholder-gray-400"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="6"
                className="w-full px-4 py-3 rounded-lg bg-[#14254b]/70 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00BFA6] transition duration-300 placeholder-gray-400"
              />

              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg bg-[#14254b]/70 text-white border ${
                    formData.confirmPassword && !passwordsMatch
                      ? "border-red-500"
                      : "border-gray-700"
                  } focus:outline-none focus:ring-2 focus:ring-[#00BFA6] transition duration-300 placeholder-gray-400`}
                />
                {formData.confirmPassword && !passwordsMatch && (
                  <p className="text-red-500 text-sm mt-1">
                    Passwords don't match
                  </p>
                )}
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                  className="w-4 h-4 accent-[#00BFA6] rounded"
                />
                <label className="text-gray-300 text-sm">
                  I agree to the
                  <a
                    href="/terms"
                    className="text-[#00BFA6] hover:underline ml-1"
                  >
                    Terms of Service
                  </a>{" "}
                  and
                  <a
                    href="/privacy"
                    className="text-[#00BFA6] hover:underline ml-1"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              {errors.submit && (
                <p className="text-red-500 text-sm text-center">
                  {errors.submit}
                </p>
              )}

              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-3 font-semibold rounded-lg transition-all duration-300 ${
                  isFormValid
                    ? "bg-gradient-to-r from-[#00BFA6] to-[#13e2ba] hover:scale-[1.02] shadow-lg shadow-[#00BFA6]/30"
                    : "bg-gray-600 cursor-not-allowed opacity-60"
                }`}
              >
                Create Account
              </button>
            </form>

            <div className="text-center mt-8">
              <p className="text-gray-400 text-sm md:text-base">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-[#00BFA6] hover:underline font-semibold"
                >
                  Sign In
                </Link>
              </p>
            </div>

            <div className="mt-10 border-t border-gray-700/40 pt-4 text-center text-sm space-x-4">
              
              <a
                href="https://www.linkedin.com/in/amna-s-network-1b992434b"
                target="_blank"
                rel="noopener"
                className="text-[#00BFA6] hover:text-white transition"
              >
                Amna's Network Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
