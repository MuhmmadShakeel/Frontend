// src/pages/Admin/AdminDashboard.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AdminDashboard = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const getAdminUser = () => {
    try {
      const storedUser = sessionStorage.getItem("adminUser");
      if (!storedUser || storedUser === "undefined" || storedUser === "null") return {};
      return JSON.parse(storedUser);
    } catch {
      return {};
    }
  };

  const adminUser = getAdminUser();

  const handleLogout = () => {
    sessionStorage.removeItem("adminToken");
    sessionStorage.removeItem("adminUser");
    navigate("/admin");
  };

  const menuItems = [
    { path: "/admin/dashboard", label: "Dashboard", icon: "📊" },
    { path: "/admin/users", label: "User Management", icon: "👥" },
    { path: "/admin/courses", label: "Course Management", icon: "📚" },
    { path: "/admin/careers", label: "Career Management", icon: "💼" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex min-h-screen bg-[#0D1529] text-white font-poppins">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 w-64 bg-[#101c39] border-r border-[#00BFA6]/30 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 z-50`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#00BFA6]/40">
          <h2 className="text-2xl font-bold text-[#00BFA6]">Amna’s Admin</h2>
          <button
            className="lg:hidden text-gray-300 hover:text-[#00BFA6]"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-2 px-4 py-6">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setSidebarOpen(false);
              }}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-left transition-all ${
                isActive(item.path)
                  ? "bg-[#00BFA6]/20 text-[#00BFA6] font-semibold"
                  : "text-gray-300 hover:bg-[#00BFA6]/10 hover:text-[#00BFA6]"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm md:text-base">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-auto border-t border-[#00BFA6]/30 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#00BFA6] text-xl">👤</span>
            <p className="text-gray-300 text-sm">{adminUser.name || "Admin"}</p>
          </div>
          <button
            onClick={handleLogout}
            className="text-red-400 hover:text-red-500 text-sm transition"
          >
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between bg-[#101c39] border-b border-[#00BFA6]/30 px-6 py-4 shadow-md">
          <button
            className="lg:hidden text-2xl text-[#00BFA6]"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
          <h1 className="text-xl md:text-2xl font-bold text-[#00BFA6]">
            {menuItems.find((i) => i.path === location.pathname)?.label ||
              "Admin Dashboard"}
          </h1>
          <span className="hidden md:block text-gray-300 text-sm">
            Welcome, <span className="text-[#00BFA6] font-semibold">{adminUser.name || "Admin"}</span>!
          </span>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 md:p-10 bg-gradient-to-b from-[#0D1529] to-[#0b1838]">
          {children || (
            <div className="text-center py-20 bg-[#101c39]/40 rounded-2xl border border-[#00BFA6]/30 shadow-2xl backdrop-blur-md" data-aos="zoom-in">
              <h3 className="text-3xl font-bold text-[#00BFA6] mb-3">Welcome to the Admin Panel</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Select an option from the sidebar to manage your website.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
