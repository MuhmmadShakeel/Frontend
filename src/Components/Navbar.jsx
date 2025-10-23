import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "./Images/logo.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
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
    <header className="w-full bg-gradient-to-r from-[#0A1128] via-[#0F172A] to-[#1E293B] shadow-lg sticky top-0 z-50 border-b border-[#00D5BE]/30">
      <nav className="flex items-center justify-between px-5 py-3 md:px-10 max-w-7xl mx-auto border border-b-amber-50">
        {/* ✅ Logo Section */}
        <div
          className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-all"
          onClick={() => handleNavigation("/")}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 md:w-14 md:h-14 object-cover rounded-full border-2 border-[#00D5BE] shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-[#F8FAFC] text-xl md:text-2xl font-extrabold tracking-wide select-none">
            Amna's&nbsp;<span className="text-[#00D5BE]">Network</span>
          </h1>
        </div>

        {/* ✅ Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 border border-[#00D5BE] rounded-md hover:bg-[#00D5BE]/10 transition-all duration-300 cursor-pointer relative z-50"
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
          } absolute lg:static left-0 top-16 w-full lg:w-auto bg-[#0A1128] lg:bg-transparent flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8 px-6 py-6 lg:py-0 transition-all duration-500 ease-in-out backdrop-blur-md lg:backdrop-blur-0 shadow-lg lg:shadow-none`}
        >
          <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-8 text-[#E2E8F0] font-medium text-lg">
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
                className={`relative cursor-pointer transition-all duration-300 hover:text-[#00D5BE]`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* ✅ Auth Buttons */}
          <div className="flex flex-col lg:flex-row items-center gap-4 mt-5 lg:mt-0">
            {isLoggedIn ? (
              <>
                <button
                  onClick={handleDashboard}
                  className="bg-[#00D5BE] hover:bg-[#00BFA6] transition-all duration-300 text-white font-semibold px-5 py-2 rounded-md shadow-md cursor-pointer"
                >
                  Dashboard
                </button>
                <button
                  onClick={handleLogout}
                  className="border-2 border-[#00D5BE] text-[#00D5BE] hover:bg-[#00D5BE] hover:text-white transition-all duration-300 font-semibold px-5 py-2 rounded-md cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleNavigation("/login")}
                  className="bg-[#00D5BE] hover:bg-[#00BFA6] transition-all duration-300 text-white font-semibold px-5 py-2 rounded-md shadow-md cursor-pointer"
                >
                  Sign In
                </button>
                <button
                  onClick={() => handleNavigation("/signup")}
                  className="border-2 border-[#00D5BE] text-[#00D5BE] hover:bg-[#00D5BE] hover:text-white transition-all duration-300 font-semibold px-5 py-2 rounded-md cursor-pointer"
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
