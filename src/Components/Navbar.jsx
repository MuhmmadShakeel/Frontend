import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "./Images/logo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    checkAuthStatus();
  }, [location]);

  const checkAuthStatus = () => {
    const userToken = sessionStorage.getItem("token");
    const userData = sessionStorage.getItem("user");
    setIsLoggedIn(!!(userToken && userData));
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    setIsLoggedIn(false);
    setIsOpen(false);
    navigate("/");
  };

  const handleDashboard = () => {
    navigate("/user/dashboard");
    setIsOpen(false);
  };

  return (
    <header
      data-aos="fade-down"
      className="w-full bg-[#090447] shadow-lg sticky top-0 z-50 border-b border-[#FFB900]/30 backdrop-blur-sm"
    >
      <nav className="flex items-center justify-between px-5 py-3 md:px-10 max-w-7xl mx-auto">
        {/* ✅ Logo Section */}
        <div
          className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-all duration-300"
          onClick={() => handleNavigation("/")}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 md:w-14 md:h-14 object-cover rounded-full border-2 border-[#FFB900] shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-white text-xl md:text-2xl font-extrabold tracking-wide select-none">
            Amna's&nbsp;<span className="text-[#FFB900]">Network</span>
          </h1>
        </div>

        {/* ✅ Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 border border-[#FFB900] rounded-md hover:bg-[#FFB900]/10 transition-all duration-300 cursor-pointer relative z-50"
        >
          <span
            className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        {/* ✅ Navigation Links */}
        <div
          className={`${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10 pointer-events-none lg:pointer-events-auto lg:opacity-100 lg:translate-y-0"
          } absolute lg:static left-0 top-16 w-full lg:w-auto bg-[#090447] lg:bg-transparent flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8 px-6 py-6 lg:py-0 transition-all duration-500 ease-in-out backdrop-blur-md lg:backdrop-blur-0 shadow-lg lg:shadow-none`}
        >
          <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-8 text-white font-medium text-lg">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Courses", path: "/courses" },
              { label: "Services", path: "/services" },
              { label: "Careers", path: "/careers" },
              { label: "Contact", path: "/contactus" },
            ].map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className="relative cursor-pointer transition-all duration-300 group"
              >
                <span className="relative text-white group-hover:text-[#FFB900] transition-colors duration-300">
                  {item.label}
                </span>
                {/* ✨ Animated underline using before/after */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFB900] transition-all duration-500 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* ✅ Auth Buttons */}
          <div
            className="flex flex-col lg:flex-row items-center gap-4 mt-5 lg:mt-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            {isLoggedIn ? (
              <>
                <button
                  onClick={handleDashboard}
                  className="bg-[#FFB900] hover:bg-[#e6a800] transition-all duration-300 text-[#090447] font-semibold px-5 py-2 rounded-md shadow-md cursor-pointer"
                >
                  Dashboard
                </button>
                <button
                  onClick={handleLogout}
                  className="border-2 border-[#FFB900] text-[#FFB900] hover:bg-[#FFB900] hover:text-[#090447] transition-all duration-300 font-semibold px-5 py-2 rounded-md cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleNavigation("/login")}
                  className="bg-[#FFB900] hover:bg-[#e6a800] transition-all duration-300 text-[#090447] font-semibold px-5 py-2 rounded-md shadow-md cursor-pointer"
                >
                  Sign In
                </button>
                <button
                  onClick={() => handleNavigation("/signup")}
                  className="border-2 border-[#FFB900] text-[#FFB900] hover:bg-[#FFB900] hover:text-[#090447] transition-all duration-300 font-semibold px-5 py-2 rounded-md cursor-pointer"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
