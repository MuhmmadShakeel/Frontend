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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#141C33] to-gray-800 text-white">
      {/* Top Navigation Bar */}
      <nav className="bg-[#141C33]/90 backdrop-blur-lg border-b border-[#00D5BE]/30 sticky top-0 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Logo and Brand */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-lg bg-[#00D5BE]/10 hover:bg-[#00D5BE]/20 transition-all duration-200 md:hidden"
              >
                <svg className="w-6 h-6 text-[#00D5BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#00D5BE] to-[#00A3B5] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00D5BE] to-[#00A3B5] bg-clip-text text-transparent">
                  DashBord
                </h1>
              </div>
            </div>

            {/* Center - Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.path)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 relative group ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-[#00D5BE]/20 to-[#00A3B5]/10 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                  
                  {/* Active indicator */}
                  {isActive(item.path) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-[#00D5BE] to-[#00A3B5] rounded-full" />
                  )}
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00D5BE]/10 to-[#00A3B5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </button>
              ))}
            </div>

            {/* Right side - User info */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-3 bg-white/5 rounded-xl px-4 py-2 border border-white/10">
                <div className="w-8 h-8 bg-gradient-to-br from-[#00D5BE] to-[#00A3B5] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">U</span>
                </div>
                <span className="text-sm font-medium">Welcome, User!</span>
              </div>
              
              {/* Notification bell */}
              <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 relative">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 0 0-6 6v2.25l-2 2v3h6.5" />
                </svg>
                <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
        
        {/* Sidebar Content */}
        <div className="relative w-80 h-full bg-gradient-to-b from-[#141C33] to-gray-900 border-r border-[#00D5BE]/20 shadow-2xl">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#00D5BE]/30">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#00D5BE] to-[#00A3B5] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <h2 className="text-xl font-bold text-white">Menu</h2>
              </div>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-6">
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.path)}
                    className={`w-full flex items-center space-x-4 px-4 py-4 rounded-xl transition-all duration-200 group ${
                      isActive(item.path)
                        ? 'bg-gradient-to-r from-[#00D5BE]/20 to-[#00A3B5]/10 border-l-4 border-[#00D5BE]'
                        : 'hover:bg-white/5 border-l-4 border-transparent'
                    }`}
                  >
                    <span className={`text-2xl transition-transform duration-200 group-hover:scale-110 ${
                      isActive(item.path) ? 'text-[#00D5BE]' : 'text-gray-400'
                    }`}>
                      {item.icon}
                    </span>
                    <span className={`text-lg font-medium ${
                      isActive(item.path) ? 'text-white' : 'text-gray-300'
                    }`}>
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-[#00D5BE]/20">
              <div className="bg-gradient-to-r from-[#00D5BE]/10 to-[#00A3B5]/10 rounded-xl p-4 text-center">
                <p className="text-sm text-gray-400">Welcome back!</p>
                <p className="text-white font-medium mt-1">User Account</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#00D5BE] to-[#00A3B5] bg-clip-text text-transparent mb-4">
            Welcome to Your Dashboard
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Manage your learning journey and explore new opportunities
          </p>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Browse Courses Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D5BE] to-[#00A3B5] rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
            <div className="relative bg-gradient-to-br from-gray-800/50 to-[#141C33]/50 rounded-3xl p-8 border border-[#00D5BE]/30 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:border-[#00D5BE]/50 group-hover:translate-y-[-4px]">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00D5BE] to-[#00A3B5] rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">📚</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Browse Courses</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Explore our comprehensive collection of courses designed to enhance your skills and advance your career. Learn from industry experts and join a community of learners.
                  </p>
                  <button
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#00D5BE] to-[#00A3B5] text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                    onClick={() => navigate('/courses')}
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>View All Courses</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Career Opportunities Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D5BE] to-[#00A3B5] rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
            <div className="relative bg-gradient-to-br from-gray-800/50 to-[#141C33]/50 rounded-3xl p-8 border border-[#00D5BE]/30 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:border-[#00D5BE]/50 group-hover:translate-y-[-4px]">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00D5BE] to-[#00A3B5] rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">💼</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Career Opportunities</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Discover exciting career paths and job opportunities from top companies worldwide. Find your dream job and take the next step in your professional journey.
                  </p>
                  <button
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#00D5BE] to-[#00A3B5] text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                    onClick={() => navigate('/careers')}
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Explore Careers</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nested routes section */}
        <div className="relative">
          <Outlet />
        </div>

        {/* Additional Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-gray-800/50 to-[#141C33]/50 rounded-2xl p-6 border border-[#00D5BE]/20 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#00D5BE] to-[#00A3B5] rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🎯</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Personalized Learning</h4>
            <p className="text-gray-400 text-sm">Customized courses based on your goals and interests</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/50 to-[#141C33]/50 rounded-2xl p-6 border border-[#00D5BE]/20 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#00D5BE] to-[#00A3B5] rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">⚡</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Fast Progress</h4>
            <p className="text-gray-400 text-sm">Track your learning journey and see quick results</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/50 to-[#141C33]/50 rounded-2xl p-6 border border-[#00D5BE]/20 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#00D5BE] to-[#00A3B5] rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🏆</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Get Certified</h4>
            <p className="text-gray-400 text-sm">Earn certificates to showcase your achievements</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;