import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Career.css';
import baseUrl from '../baseUrl';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Careers = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterEmploymentType, setFilterEmploymentType] = useState('all');
  const [filterExperienceLevel, setFilterExperienceLevel] = useState('all');
  const [filterLocation, setFilterLocation] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-in-out', once: true });
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (searchTerm) params.append('search', searchTerm);
      if (filterCategory !== 'all') params.append('category', filterCategory);
      if (filterEmploymentType !== 'all') params.append('employmentType', filterEmploymentType);
      if (filterExperienceLevel !== 'all') params.append('experienceLevel', filterExperienceLevel);
      if (filterLocation) params.append('location', filterLocation);

      const queryString = params.toString();
      const url = queryString
        ? `${baseUrl}/api/careers/getCareers?${queryString}`
        : `${baseUrl}/api/careers/getCareers`;

      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setCareers(data.data || []);
      } else {
        setError('Failed to fetch job opportunities');
      }
    } catch (err) {
      setError('Error fetching careers: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => fetchCareers(), 500);
    return () => clearTimeout(timeoutId);
  }, [searchTerm, filterCategory, filterEmploymentType, filterExperienceLevel, filterLocation]);

  const categories = ['all', ...new Set(careers.map(c => c.category))];
  const employmentTypes = ['all', 'full-time', 'part-time', 'contract', 'internship', 'remote'];
  const experienceLevels = ['all', 'entry', 'mid', 'senior', 'executive'];

  const handleCareerClick = (careerId) => navigate(`/careers/${careerId}`);
  const formatDate = (dateString) => !dateString ? 'Open until filled' : `Until ${new Date(dateString).toLocaleDateString()}`;

  const getEmploymentTypeBadgeClass = (type) => {
    switch (type) {
      case 'full-time': return 'bg-[#00D5BE] text-white';
      case 'part-time': return 'bg-[#00D5BE]/80 text-white';
      case 'contract': return 'bg-[#00D5BE]/60 text-white';
      case 'internship': return 'bg-[#00D5BE]/40 text-white';
      case 'remote': return 'bg-[#00D5BE]/20 text-gray-800';
      default: return 'bg-[#00D5BE] text-white';
    }
  };

  const getExperienceLevelBadgeClass = (level) => {
    switch (level) {
      case 'entry': return 'bg-gray-200 text-gray-800';
      case 'mid': return 'bg-[#00D5BE]/20 text-gray-900';
      case 'senior': return 'bg-[#00D5BE]/40 text-gray-900';
      case 'executive': return 'bg-[#00D5BE]/60 text-white';
      default: return 'bg-[#00D5BE]/20 text-gray-900';
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setFilterCategory('all');
    setFilterEmploymentType('all');
    setFilterExperienceLevel('all');
    setFilterLocation('');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#00D5BE] mx-auto"></div>
          <p className="mt-3 text-gray-400">Loading career opportunities...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 min-h-screen">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-[#00D5BE] mb-3">Career Opportunities</h1>
          <p className="text-gray-400 text-lg">Join our team and build your future with us</p>
        </div>

        {/* Filters */}
        <div
          className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-6 bg-[#141C33] p-4 rounded-xl shadow-md border border-[#1f2a47]"
          data-aos="fade-up"
        >
          <input
            type="text"
            className="w-full rounded-lg px-4 py-3 bg-[#0D152A] text-gray-200 border border-[#1f2a47] focus:ring-2 focus:ring-[#00D5BE] placeholder-gray-500"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />

          {/* Filter Dropdowns */}
          {[{
            label: "Category",
            value: filterCategory,
            setter: setFilterCategory,
            list: categories
          }, {
            label: "Type",
            value: filterEmploymentType,
            setter: setFilterEmploymentType,
            list: employmentTypes
          }, {
            label: "Level",
            value: filterExperienceLevel,
            setter: setFilterExperienceLevel,
            list: experienceLevels
          }].map(({ label, value, setter, list }) => (
            <div key={label} className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === label ? null : label)}
                className="w-full flex justify-between items-center rounded-lg px-4 py-3 bg-[#0D152A] text-gray-200 border border-[#1f2a47] hover:border-[#00D5BE] focus:ring-2 focus:ring-[#00D5BE]"
              >
                {value === 'all' ? `All ${label}s` : value.charAt(0).toUpperCase() + value.slice(1)}
                <span className="ml-2 text-[#00D5BE]">▼</span>
              </button>
              {openDropdown === label && (
                <div className="absolute left-0 mt-1 w-full bg-[#0D152A] border border-[#1f2a47] rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                  {list.map(i => (
                    <button
                      key={i}
                      onClick={() => { setter(i); setOpenDropdown(null); }}
                      className={`block w-full text-left px-4 py-2 text-gray-300 hover:bg-[#00BFA6] hover:text-white transition-all duration-150 ${
                        value === i ? 'bg-[#00BFA6] text-white' : ''
                      }`}
                    >
                      {i === 'all' ? `All ${label}s` : i.charAt(0).toUpperCase() + i.slice(1)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          <input
            type="text"
            className="rounded-lg px-4 py-3 bg-[#0D152A] text-gray-200 border border-[#1f2a47] focus:ring-2 focus:ring-[#00D5BE] placeholder-gray-500"
            placeholder="Location..."
            value={filterLocation}
            onChange={e => setFilterLocation(e.target.value)}
          />
        </div>

        {/* Active Filters */}
        {(searchTerm || filterCategory !== 'all' || filterEmploymentType !== 'all' || filterExperienceLevel !== 'all' || filterLocation) && (
          <div className="flex flex-wrap gap-2 mb-8" data-aos="fade-up">
            {[{ label: 'Search', value: searchTerm, setter: setSearchTerm },
              { label: 'Category', value: filterCategory, setter: setFilterCategory },
              { label: 'Type', value: filterEmploymentType, setter: setFilterEmploymentType },
              { label: 'Level', value: filterExperienceLevel, setter: setFilterExperienceLevel },
              { label: 'Location', value: filterLocation, setter: setFilterLocation }
            ].map(({ label, value, setter }) =>
              value && value !== 'all' ? (
                <div key={label} className="flex items-center bg-[#00D5BE]/20 text-[#00D5BE] border border-[#00D5BE]/40 px-4 py-2 rounded-full shadow-sm">
                  <span className="mr-2">{label}: {value}</span>
                  <button
                    onClick={() => setter(label === 'Search' || label === 'Location' ? '' : 'all')}
                    className="text-white hover:text-red-400 transition"
                  >×</button>
                </div>
              ) : null
            )}
            <button
              className="bg-[#00D5BE] text-[#0D152A] px-4 py-2 rounded-full font-medium hover:bg-[#00BFA6] transition-all duration-300"
              onClick={clearFilters}
            >
              Clear All
            </button>
          </div>
        )}

        {/* Career Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" data-aos="fade-up">
          {careers.map(career => (
            <div
              key={career._id}
              onClick={() => handleCareerClick(career._id)}
              className="bg-[#141C33] border border-[#1f2a47] hover:border-[#00D5BE] hover:shadow-[0_0_20px_#00D5BE33] rounded-xl p-6 cursor-pointer flex flex-col transition-all duration-300"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                <span className={`px-2 py-1 text-xs rounded ${getEmploymentTypeBadgeClass(career.employmentType)}`}>
                  {career.employmentType.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </span>
                <span className={`px-2 py-1 text-xs rounded ${getExperienceLevelBadgeClass(career.experienceLevel)}`}>
                  {career.experienceLevel.charAt(0).toUpperCase() + career.experienceLevel.slice(1)}
                </span>
                <span className="px-2 py-1 text-xs rounded bg-[#00D5BE]/10 text-[#00D5BE]">{career.category}</span>
              </div>
              <h5 className="text-lg font-semibold text-white mb-1">{career.title}</h5>
              <div className="text-[#00D5BE] mb-1 flex items-center gap-1 font-medium">
                <i className="bi bi-building"></i>{career.company}
              </div>
              <div className="text-gray-400 mb-3 flex items-center gap-1">
                <i className="bi bi-geo-alt"></i>{career.location}
              </div>
              <p className="text-gray-300 mb-3 flex-grow">
                {career.description.length > 120 ? career.description.substring(0, 120) + '...' : career.description}
              </p>
              {career.salary && <p className="text-[#00D5BE] font-semibold mb-2">💰 {career.salary}</p>}
              <div className="flex justify-between items-center text-gray-500 text-sm mt-auto">
                <span>{formatDate(career.deadline)}</span>
                <span>Posted {new Date(career.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
