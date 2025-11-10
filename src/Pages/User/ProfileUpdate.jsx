// src/pages/User/ProfileUpdate.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileUpdate = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

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

  useEffect(() => {
    loadUserProfile();
  }, []);

  const loadUserProfile = async () => {
    try {
      const token = sessionStorage.getItem('token');
      const userData = JSON.parse(sessionStorage.getItem('user'));

      if (userData) {
        setFormData(prev => ({
          ...prev,
          fullName: userData.fullName || '',
          email: userData.email || '',
          phone: userData.phone || ''
        }));
      }

      // Fetch latest profile
      const response = await fetch(`${baseUrl}/api/users/profile`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.ok) {
        const data = await response.json();
        setFormData(prev => ({
          ...prev,
          fullName: data.data?.fullName || data.user?.fullName || data.fullName || '',
          email: data.data?.email || data.user?.email || data.email || '',
          phone: data.data?.phone || data.user?.phone || data.phone || ''
        }));
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';

    if (formData.newPassword) {
      if (!formData.currentPassword) newErrors.currentPassword = 'Current password is required';
      if (formData.newPassword.length < 8) newErrors.newPassword = 'Password must be at least 8 characters';
      if (formData.newPassword !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!validateForm()) return;

    setLoading(true);
    try {
      const token = sessionStorage.getItem('token');
      const updateData = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim()
      };

      if (formData.newPassword) {
        updateData.currentPassword = formData.currentPassword;
        updateData.newPassword = formData.newPassword;
      }

      const response = await fetch(`${baseUrl}/api/users/profile`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(updateData)
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setMessage('Profile updated successfully!');
        const currentUser = JSON.parse(sessionStorage.getItem('user'));
        sessionStorage.setItem('user', JSON.stringify({
          ...currentUser,
          fullName: data.data?.fullName || data.user?.fullName || data.fullName,
          email: data.data?.email || data.user?.email || data.email,
          phone: data.data?.phone || data.user?.phone || data.phone
        }));
        setFormData(prev => ({ ...prev, currentPassword: '', newPassword: '', confirmPassword: '' }));
        setErrors({});
        setTimeout(() => navigate('/user/dashboard'), 1500);
      } else {
        setMessage(data.message || 'Failed to update profile');
      }
    } catch (error) {
      setMessage('Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Logo and Brand */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-200 md:hidden"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#00D5BE] to-[#00A3B5] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00D5BE] to-[#00A3B5] bg-clip-text text-transparent">
                  Profile
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
                    window.location.pathname === item.path
                      ? 'bg-gradient-to-r bg-gradient-to-r from-[#00D5BE] to-[#00A3B5] border border-blue-200'
                      : 'text-gray-600 hover:text-[#00D5BE]  hover:bg-gray-50'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                  
                  {/* Active indicator */}
                  {window.location.pathname === item.path && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-[#00D5BE] to-[#00A3B5] rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Right side - User info */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl px-4 py-2 border border-blue-200">
                <div className="w-8 h-8 bg-gradient-to-r from-[#00D5BE] to-[#00A3B5] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">U</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Profile Settings</span>
              </div>
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
        <div className="relative w-80 h-full bg-white border-r border-gray-200 shadow-2xl">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#00D5BE] to-[#00A3B5] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Menu</h2>
              </div>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      window.location.pathname === item.path
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500'
                        : 'hover:bg-gray-50 border-l-4 border-transparent'
                    }`}
                  >
                    <span className={`text-2xl transition-transform duration-200 group-hover:scale-110 ${
                      window.location.pathname === item.path ? 'text-blue-600' : 'text-gray-600'
                    }`}>
                      {item.icon}
                    </span>
                    <span className={`text-lg font-medium ${
                      window.location.pathname === item.path ? 'text-blue-600' : 'text-gray-700'
                    }`}>
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r bg-gradient-to-r from-[#00D5BE] to-[#00A3B5] mb-4">
            Update Your Profile
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Keep your information up to date and manage your account settings
          </p>
        </div>

        {/* Profile Update Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-[#00D5BE] to-[#00A3B5] px-8 py-6">
                <h2 className="text-2xl font-bold text-white">Profile Information</h2>
                <p className="text-blue-100 mt-2">Update your personal details and password</p>
              </div>

              <div className="p-8">
                {message && (
                  <div className={`mb-6 px-4 py-3 rounded-xl border ${
                    message.includes('successfully') 
                      ? 'bg-green-50 border-green-200 text-green-700' 
                      : 'bg-red-50 border-red-200 text-red-700'
                  }`}>
                    <div className="flex items-center">
                      <span className="text-lg mr-2">
                        {message.includes('successfully') ? '✅' : '⚠️'}
                      </span>
                      {message}
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information Section */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                      Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                            errors.fullName 
                              ? 'border-red-300 ring-2 ring-red-100 bg-red-50' 
                              : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                          }`}
                          placeholder="Enter your full name"
                          required
                        />
                        {errors.fullName && (
                          <p className="text-red-600 text-sm mt-2 flex items-center">
                            <span className="mr-1">⚠️</span>
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                            errors.email 
                              ? 'border-red-300 ring-2 ring-red-100 bg-red-50' 
                              : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                          }`}
                          placeholder="your.email@example.com"
                          required
                        />
                        {errors.email && (
                          <p className="text-red-600 text-sm mt-2 flex items-center">
                            <span className="mr-1">⚠️</span>
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Password Change Section */}
                  <div className="space-y-6 pt-6 border-t border-gray-200">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Change Password
                      </h3>
                      <p className="text-gray-500 text-sm">
                        Leave these fields blank if you don't want to change your password
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Password
                        </label>
                        <input
                          type="password"
                          name="currentPassword"
                          value={formData.currentPassword}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                            errors.currentPassword 
                              ? 'border-red-300 ring-2 ring-red-100 bg-red-50' 
                              : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                          }`}
                          placeholder="Enter current password"
                        />
                        {errors.currentPassword && (
                          <p className="text-red-600 text-sm mt-2 flex items-center">
                            <span className="mr-1">⚠️</span>
                            {errors.currentPassword}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            New Password
                          </label>
                          <input
                            type="password"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                              errors.newPassword 
                                ? 'border-red-300 ring-2 ring-red-100 bg-red-50' 
                                : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                            }`}
                            placeholder="Enter new password"
                          />
                          {errors.newPassword && (
                            <p className="text-red-600 text-sm mt-2 flex items-center">
                              <span className="mr-1">⚠️</span>
                              {errors.newPassword}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                              errors.confirmPassword 
                                ? 'border-red-300 ring-2 ring-red-100 bg-red-50' 
                                : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                            }`}
                            placeholder="Confirm new password"
                          />
                          {errors.confirmPassword && (
                            <p className="text-red-600 text-sm mt-2 flex items-center">
                              <span className="mr-1">⚠️</span>
                              {errors.confirmPassword}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-[#00D5BE] to-[#00A3B5] text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Updating Profile...</span>
                      </div>
                    ) : (
                      <span className="flex items-center justify-center space-x-2">
                        <span>Update Profile</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Side - Info Cards */}
          <div className="space-y-6">
            {/* Profile Completion */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-4">Profile Strength</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Basic Info</span>
                  <span className="text-green-600 font-medium">Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full w-3/4"></div>
                </div>
                <p className="text-xs text-gray-500">Your profile is 75% complete</p>
              </div>
            </div>

            {/* Security Tips */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="font-semibold text-gray-800 mb-3">Security Tips</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Use a strong, unique password</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Enable two-factor authentication</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Keep your contact info updated</span>
                </li>
              </ul>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => navigate('/user/dashboard')}
                  className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <span className="text-blue-600 font-medium">Back to Dashboard</span>
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors">
                  <span className="text-purple-600 font-medium">Privacy Settings</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileUpdate;