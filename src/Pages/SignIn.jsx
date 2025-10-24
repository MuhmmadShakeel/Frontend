import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../Components/Images/logo.jpg';
import '../style.css';
import baseUrl from '../baseUrl';

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      const res = await axios.post(`${baseUrl}/api/users/login`, formData);

      if (res.data.success) {
        alert('Login successful!');
        sessionStorage.setItem('token', res.data.data.token);
        sessionStorage.setItem('user', JSON.stringify(res.data.data));
        window.location.href = '/dashboard';
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'Login failed. Please try again.';
      setErrors({ submit: errorMessage });
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6">
      <div
        className="flex flex-col md:flex-row shadow-2xl rounded-3xl overflow-hidden bg-white max-w-5xl w-full"
        data-aos="zoom-in"
      >
        {/* Left Section */}
        <div
          className="md:w-1/2 flex flex-col justify-center items-center bg-gradient-to-r from-[#0D152A] to-[#00BFA6] text-white p-8"
          data-aos="fade-right"
        >
          <img
            src={logo}
            alt="Company Logo"
            className="w-32 h-32 rounded-full shadow-lg mb-6"
          />
          <h1 className="text-3xl font-bold mb-3">Welcome Back!</h1>
          <p className="text-center text-blue-100 mb-6">
            Access your personalized learning dashboard and resources.
          </p>
          <div className="flex flex-col space-y-3 text-center">
            <a href="/plans" className="hover:underline text-blue-100">
              Learn More About Our Plans
            </a>
            <a href="/" className="hover:underline text-blue-100">
              amnasnetwork.org
            </a>
            <a href="/community" className="hover:underline text-blue-100">
              Amna's Network Community
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center" data-aos="fade-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Sign In</h2>
          <p className="text-gray-500 mb-8">Access your learning dashboard</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-blue-500 outline-none transition`}
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-blue-500 outline-none transition`}
                required
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {errors.submit && <div className="text-red-500 text-sm">{errors.submit}</div>}

            <button
              type="submit"
              disabled={!formData.email || !formData.password || loading}
              className={`w-full py-3 rounded-xl text-white font-semibold text-lg transition transform hover:scale-105 shadow-md ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#102040] hover:opacity-90'
              }`}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="text-center mt-8">
            <p className="text-gray-600">Don't have an account?</p>
            <Link
              to="/signup"
              className="text-[#102040] hover:underline font-semibold"
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
