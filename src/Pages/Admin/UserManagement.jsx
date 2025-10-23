// src/pages/Admin/UserManagement.jsx
import React, { useState, useEffect } from 'react';
import baseUrl from '../../baseUrl';
import AOS from "aos";
import "aos/dist/aos.css";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out' });
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = sessionStorage.getItem('adminToken');
      const response = await fetch(`${baseUrl}/api/users/getUsers`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.users) setUsers(data.users);
        else if (Array.isArray(data)) setUsers(data);
        else if (data.data) setUsers(data.data);
        else {
          setUsers([]);
          setError('No users found or invalid response format');
        }
      } else setError('Failed to fetch users');
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Error fetching users');
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const token = sessionStorage.getItem('adminToken');
        const response = await fetch(`${baseUrl}/api/users/${userId}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` },
        });

        if (response.ok) {
          setUsers(users.filter(user => user._id !== userId));
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  if (loading)
    return (
      <div className="text-center text-[#00BFA6] text-xl font-semibold py-24 animate-pulse">
        Loading users...
      </div>
    );

  if (error)
    return (
      <div className="text-center text-[#00BFA6] text-lg py-20">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#060145] to-[#0a0860] text-white py-16 px-6 md:px-12 font-poppins">
      {/* Header */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00BFA6]">
          User Management
        </h2>
        <p className="text-gray-300 mt-2 text-sm md:text-base">
          Manage all registered users efficiently and securely
        </p>
      </div>

      {/* Table Card */}
      <div
        className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10"
        data-aos="zoom-in"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#FFDF20]/10 text-[#00BFA6] uppercase text-sm">
              <tr>
                <th className="py-4 px-6 font-semibold">Name</th>
                <th className="py-4 px-6 font-semibold">Email</th>
                <th className="py-4 px-6 font-semibold">Phone</th>
                <th className="py-4 px-6 font-semibold">Role</th>
                <th className="py-4 px-6 font-semibold">Joined</th>
                <th className="py-4 px-6 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {users && users.length > 0 ? (
                users.map((user, i) => (
                  <tr
                    key={user._id || user.id || i}
                    className="border-b border-white/10 hover:bg-white/10 transition"
                  >
                    <td className="py-3 px-6">
                      {user.fullName || user.name || 'N/A'}
                    </td>
                    <td className="py-3 px-6 text-gray-300">
                      {user.email || 'N/A'}
                    </td>
                    <td className="py-3 px-6 text-gray-300">
                      {user.phone || 'N/A'}
                    </td>
                    <td className="py-3 px-6">
                      <span
                        className={`px-3 py-1 text-sm rounded-full ${
                          user.role === 'admin'
                            ? 'bg-red-500/80'
                            : 'bg-blue-500/80'
                        }`}
                      >
                        {user.role || 'user'}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-gray-400">
                      {user.createdAt
                        ? new Date(user.createdAt).toLocaleDateString()
                        : 'N/A'}
                    </td>
                    <td className="py-3 px-6">
                      <button
                        onClick={() => deleteUser(user._id || user.id)}
                        disabled={user.role === 'admin'}
                        className={`${
                          user.role === 'admin'
                            ? 'opacity-40 cursor-not-allowed'
                            : 'hover:bg-red-600'
                        } border border-red-500 text-red-400 px-4 py-1 rounded-lg transition duration-300 text-sm font-semibold`}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center text-gray-300 py-6 italic"
                  >
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
