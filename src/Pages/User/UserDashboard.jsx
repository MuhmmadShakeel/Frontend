import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const UserDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 1, name: 'Dashboard', path: '/user/dashboard', icon: '📊' },
    { id: 2, name: 'Profile Update', path: '/user/profile/update', icon: '👤' },
    { id: 3, name: 'Logout', path: '/logout', icon: '🚪' }
  ];

  const handleNavigation = (path) => {
    if (path === '/logout') {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      navigate('/');
    } else {
      navigate(path);
      setSidebarOpen(false);
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex min-h-screen bg-[#141C33] text-white">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#141C33] transform transition-transform duration-300 ease-in-out 
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#00D5BE]/50">
          <h2 className="text-xl font-bold text-[#00D5BE]">Dashboard</h2>
          <button onClick={() => setSidebarOpen(false)} className="text-2xl md:hidden">✕</button>
        </div>
        <nav className="mt-6 flex flex-col gap-2 px-4">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.path)}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#00D5BE]/20 transition-colors ${
                isActive(item.path) ? 'bg-[#00D5BE]/30' : ''
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black/50 z-40 md:hidden" />}

      {/* Main content */}
      <div className="flex-1 flex flex-col ml-0 md:ml-64 transition-all duration-300">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-[#141C33] border-b border-[#00D5BE]/50 shadow-md">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-2xl md:hidden"
          >
            ☰
          </button>
          <h1 className="text-2xl font-semibold text-[#00D5BE]">Welcome to Your Dashboard</h1>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 p-6 md:p-10 bg-[#141C33]">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#141C33] border border-[#00D5BE]/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-[#00D5BE] mb-2">Browse Courses</h3>
              <p className="text-gray-300 mb-4">Explore our wide range of courses and enhance your skills</p>
              <button
                className="px-4 py-2 bg-[#00D5BE] text-[#141C33] font-semibold rounded-lg hover:bg-[#00bfa6] transition-all"
                onClick={() => navigate('/courses')}
              >
                View All Courses
              </button>
            </div>

            <div className="bg-[#141C33] border border-[#00D5BE]/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-[#00D5BE] mb-2">Career Opportunities</h3>
              <p className="text-gray-300 mb-4">Discover exciting career paths and job opportunities</p>
              <button
                className="px-4 py-2 bg-[#00D5BE] text-[#141C33] font-semibold rounded-lg hover:bg-[#00bfa6] transition-all"
                onClick={() => navigate('/careers')}
              >
                Explore Careers
              </button>
            </div>
          </div>

          {/* Nested routes */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
