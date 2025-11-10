// src/pages/Careers/CareerDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import baseUrl from '../baseUrl';
import 'aos/dist/aos.css';

const CareerDetail = () => {
  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [applicationLoading, setApplicationLoading] = useState(false);
  const [applicationSuccess, setApplicationSuccess] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    portfolio: '',
    linkedin: '',
    expectedSalary: '',
    noticePeriod: '',
    source: ''
  });

  useEffect(() => {
    fetchCareer();
  }, [id]);

  // Professional Background Animation Component - Mobile Optimized
  const ProfessionalBackgroundAnimation = ({ isDark = false }) => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Lines - Horizontal */}
        <div className="absolute inset-0">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
              style={{ top: `${i * 4}%` }}
            />
          ))}
        </div>

        {/* Grid Lines - Vertical */}
        <div className="absolute inset-0">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute top-0 h-full w-[0.5px] bg-gradient-to-b from-transparent via-white/20 to-transparent"
              style={{ left: `${i * 4}%` }}
            />
          ))}
        </div>

        {/* Diagonal Lines - 45 degrees */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`d1-${i}`}
              className="absolute w-[200%] h-[0.5px] bg-gradient-to-r from-transparent via-[#FFB900]/30 to-transparent transform rotate-45"
              style={{ 
                top: `${(i * 8) - 40}%`,
                left: `${(i * 6) - 40}%`,
                animation: `moveDiagonal 20s linear infinite`,
                animationDelay: `${i * 1}s`
              }}
            />
          ))}
        </div>

        {/* Diagonal Lines - -45 degrees */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`d2-${i}`}
              className="absolute w-[200%] h-[0.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent transform -rotate-45"
              style={{ 
                top: `${(i * 8) - 40}%`,
                right: `${(i * 6) - 40}%`,
                animation: `moveDiagonalReverse 18s linear infinite`,
                animationDelay: `${i * 1.2}s`
              }}
            />
          ))}
        </div>

        {/* Moving Progress Bars */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`pb-${i}`}
              className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFB900]/40 to-transparent"
              style={{
                top: `${5 + (i * 8)}%`,
                animation: `moveHorizontal 10s linear infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>

        {/* Scanning Lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`scan-${i}`}
              className="absolute w-full h-[2px] bg-gradient-to-b from-[#FFB900]/50 to-transparent"
              style={{
                animation: `scanVertical 8s linear infinite`,
                animationDelay: `${i * 1}s`
              }}
            />
          ))}
        </div>

        {/* Floating Bubbles - Mobile Optimized */}
        <div className="absolute inset-0">
          {Array.from({ length: 80 }).map((_, i) => {
            const size = Math.random() * 4 + 1;
            const left = Math.random() * 100;
            const delay = Math.random() * 15;
            const duration = Math.random() * 20 + 15;
            const opacity = Math.random() * 0.3 + 0.1;
            
            return (
              <div
                key={`bubble-${i}`}
                className="absolute rounded-full bg-white/20"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${left}%`,
                  bottom: `-${size}px`,
                  animation: `floatUp ${duration}s linear infinite`,
                  animationDelay: `${delay}s`,
                  opacity: opacity,
                  filter: 'blur(0.5px)',
                }}
              />
            );
          })}
        </div>

        {/* Corner Connectors */}
        <div className="absolute top-0 left-0 w-16 md:w-24 h-[1px] bg-gradient-to-r from-[#FFB900] to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-[1px] h-16 md:h-24 bg-gradient-to-b from-[#FFB900] to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-0 w-16 md:w-24 h-[1px] bg-gradient-to-l from-white/40 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-0 w-[1px] h-16 md:h-24 bg-gradient-to-b from-white/40 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-16 md:w-24 h-[1px] bg-gradient-to-r from-white/40 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[1px] h-16 md:h-24 bg-gradient-to-t from-white/40 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-16 md:w-24 h-[1px] bg-gradient-to-l from-[#FFB900] to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[1px] h-16 md:h-24 bg-gradient-to-t from-[#FFB900] to-transparent animate-pulse"></div>

        {/* Floating Shapes */}
        <div className="absolute top-1/4 left-4 md:left-10 w-3 h-3 md:w-4 md:h-4 bg-[#FFB900] rounded-full opacity-20 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-1/3 right-8 md:right-20 w-4 h-4 md:w-6 md:h-6 bg-white rounded-lg opacity-15 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 md:w-5 md:h-5 bg-[#FFB900] rounded-full opacity-20 animate-bounce" style={{animationDuration: '5s', animationDelay: '2s'}}></div>

        {/* Mobile-Only Simple Animations */}
        <div className="md:hidden absolute inset-0">
          {/* Simple pulse dots for mobile */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`mobile-dot-${i}`}
              className="absolute w-1.5 h-1.5 bg-[#FFB900] rounded-full opacity-30 animate-pulse"
              style={{
                top: `${10 + (i * 6)}%`,
                left: `${5 + (i * 7) % 90}%`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
          
          {/* Simple moving lines for mobile */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`mobile-line-${i}`}
              className="absolute w-full h-[0.5px] bg-gradient-to-r from-transparent via-[#FFB900]/20 to-transparent"
              style={{
                top: `${15 + (i * 12)}%`,
                animation: `moveHorizontal 12s linear infinite`,
                animationDelay: `${i * 0.8}s`
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  const fetchCareer = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/api/careers/getCareer/${id}`);
      if (response.ok) {
        const data = await response.json();
        setCareer(data.data);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to fetch job details');
      }
    } catch (err) {
      setError('Error fetching job: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({ ...prev, [name]: value }));
  };

  const handleApply = () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      alert('Please login to apply for this job');
      navigate('/login');
      return;
    }
    setShowApplicationModal(true);
  };

  const submitApplication = async (e) => {
    e.preventDefault();
    setApplicationLoading(true);
    try {
      const token = sessionStorage.getItem('token');
      const userData = JSON.parse(sessionStorage.getItem('user'));
      if (userData) {
        setApplicationData(prev => ({
          ...prev,
          fullName: userData.fullName || prev.fullName,
          email: userData.email || prev.email,
          phone: userData.phone || prev.phone
        }));
      }

      const applicationPayload = {
        careerId: id,
        careerTitle: career.title,
        fullName: applicationData.fullName,
        email: applicationData.email,
        phone: applicationData.phone,
        coverLetter: applicationData.coverLetter,
        portfolio: applicationData.portfolio,
        linkedin: applicationData.linkedin,
        expectedSalary: applicationData.expectedSalary,
        noticePeriod: applicationData.noticePeriod,
        source: applicationData.source
      };

      const response = await fetch(`${baseUrl}/api/applications/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(applicationPayload)
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setApplicationSuccess(true);
        setTimeout(() => {
          setShowApplicationModal(false);
          setApplicationSuccess(false);
          setApplicationData({
            fullName: '',
            email: '',
            phone: '',
            coverLetter: '',
            portfolio: '',
            linkedin: '',
            expectedSalary: '',
            noticePeriod: '',
            source: ''
          });
        }, 2000);
      } else {
        alert(result.message || 'Failed to submit application');
      }
    } catch (error) {
      alert('Error submitting application. Please try again.');
    } finally {
      setApplicationLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Open until filled';
    return new Date(dateString).toLocaleDateString();
  };

  const badgeClasses = {
    employment: {
      'full-time': 'bg-green-500 text-white',
      'part-time': 'bg-yellow-400 text-gray-900',
      'contract': 'bg-blue-500 text-white',
      'internship': 'bg-purple-600 text-white',
      'remote': 'bg-orange-500 text-white'
    },
    level: {
      'entry': 'bg-sky-400 text-white',
      'mid': 'bg-indigo-500 text-white',
      'senior': 'bg-purple-700 text-white',
      'executive': 'bg-green-600 text-white'
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center h-[80vh] bg-[#090447] relative">
      <ProfessionalBackgroundAnimation isDark={true} />
      <div className="text-center relative z-10">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#FFB900] mx-auto"></div>
        <p className="mt-3 text-gray-300">Loading job details...</p>
      </div>
    </div>
  );

  if (error || !career) return (
    <div className="flex flex-col justify-center items-center h-[80vh] bg-[#090447] text-white relative px-4">
      <ProfessionalBackgroundAnimation isDark={true} />
      <div className="text-center relative z-10">
        <p className="mb-4 text-lg">{error || 'Job not found'}</p>
        <button
          className="px-6 py-3 bg-[#FFB900] text-[#090447] rounded-full hover:bg-[#090447] hover:text-white border border-[#FFB900] transition-all duration-300 font-semibold"
          onClick={() => navigate('/careers')}
        >
          Back to Careers
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#090447] py-8 px-4 sm:px-6 md:px-10 lg:px-16 relative overflow-hidden">
      {/* Professional Background Animation */}
      <ProfessionalBackgroundAnimation isDark={true} />

      <div className="relative z-10">
        <button
          className="mb-6 inline-flex items-center cursor-pointer px-4 py-2 bg-[#090447] border border-[#FFB900] text-[#FFB900] font-semibold rounded-lg shadow-lg hover:bg-[#FFB900] hover:text-[#090447] transition-all duration-300"
          onClick={() => navigate('/careers')}
        >
          ← Back to Careers
        </button>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="lg:w-2/3 space-y-6">
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${badgeClasses.employment[career.employmentType] || 'bg-gray-300 text-gray-800'} shadow-lg`}>
                  {career.employmentType.replace(/-/g, ' ').toUpperCase()}
                </span>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${badgeClasses.level[career.experienceLevel] || 'bg-gray-300 text-gray-800'} shadow-lg`}>
                  {career.experienceLevel.toUpperCase()}
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-[#FFB900]/20 text-[#FFB900] border border-[#FFB900]/30">
                  {career.category}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-white mb-2">{career.title}</h1>
              <h3 className="text-xl text-[#FFB900] font-semibold mb-4">{career.company}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#FFB900] font-semibold">Location:</span> {career.location}
                </div>
                {career.salary && (
                  <div className="flex items-center gap-2">
                    <span className="text-[#FFB900] font-semibold">Salary:</span> 
                    <span className="text-green-400 font-medium">{career.salary}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <span className="text-[#FFB900] font-semibold">Application Deadline:</span> {formatDate(career.deadline)}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-[#FFB900] mb-3">Job Description</h4>
                <p className="text-gray-200 leading-relaxed">{career.description}</p>
              </div>

              {career.responsibilities?.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-[#FFB900] mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {career.responsibilities.map((r, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-200">
                        <div className="w-2 h-2 bg-[#FFB900] rounded-full mt-2 flex-shrink-0"></div>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {career.requirements?.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-[#FFB900] mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {career.requirements.map((r, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-200">
                        <div className="w-2 h-2 bg-[#FFB900] rounded-full mt-2 flex-shrink-0"></div>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {career.benefits?.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-[#FFB900] mb-3">Benefits & Perks</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-200">
                    {career.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-white/5 rounded-lg border border-white/10">
                        <span className="text-[#FFB900]">⭐</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {career.tags?.length > 0 && (
                <div>
                  <h5 className="text-lg font-semibold text-[#FFB900] mb-3">Skills & Technologies</h5>
                  <div className="flex flex-wrap gap-2">
                    {career.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-2 bg-[#FFB900]/20 text-[#FFB900] rounded-full text-sm border border-[#FFB900]/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:w-1/3 flex-shrink-0">
            <div className="sticky top-6 space-y-6">
              <div className="p-6 bg-gradient-to-br from-[#090447] to-[#0d0a5c] text-white rounded-2xl text-center border border-[#FFB900]/30 shadow-2xl">
                <h4 className="text-xl font-bold mb-3">Ready to Apply?</h4>
                <button
                  className="w-full px-4 py-3 bg-gradient-to-r from-[#FFB900] to-[#ffcc44] text-[#090447] font-bold rounded-xl hover:from-[#ffcc44] hover:to-[#FFB900] hover:scale-105 transition-all duration-300 shadow-lg mb-3"
                  onClick={handleApply}
                >
                  Apply Now
                </button>
                <p className="text-gray-200 text-sm">Fill out the application form to submit your candidacy</p>
              </div>

              <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg space-y-4 border border-white/20">
                <div className="flex items-center gap-3 text-gray-200">
                  <div className="w-2 h-2 bg-[#FFB900] rounded-full flex-shrink-0"></div>
                  <span><strong>Posted:</strong> {new Date(career.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <div className="w-2 h-2 bg-[#FFB900] rounded-full flex-shrink-0"></div>
                  <span><strong>Type:</strong> {career.employmentType}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <div className="w-2 h-2 bg-[#FFB900] rounded-full flex-shrink-0"></div>
                  <span><strong>Level:</strong> {career.experienceLevel}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <div className="w-2 h-2 bg-[#FFB900] rounded-full flex-shrink-0"></div>
                  <span><strong>Category:</strong> {career.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {showApplicationModal && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-start pt-2 sm:pt-20 z-50 p-4">
          <div className="bg-[#090447] backdrop-blur-md rounded-2xl w-full max-w-3xl p-6 shadow-2xl border border-[#FFB900]/30 animate-fadeIn">
            <div className="flex justify-between items-center mb-6">
              <h5 className="text-white font-bold text-xl">Apply for {career.title}</h5>
              <button
                className="text-gray-300 hover:text-white transition-colors text-xl"
                onClick={() => setShowApplicationModal(false)}
                disabled={applicationLoading}
              >
                ✕
              </button>
            </div>

            {applicationSuccess ? (
              <div className="text-center py-8">
                <div className="text-green-400 text-5xl mb-4">✔</div>
                <h4 className="text-2xl font-bold text-white mb-3">Application Submitted!</h4>
                <p className="text-gray-300 text-lg">We'll review your application and get back to you soon.</p>
              </div>
            ) : (
              <form className="mb-10 sm:mb-15" onSubmit={submitApplication}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Full Name *" 
                    className="border border-white/20 rounded-xl px-4 py-3 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB900] transition" 
                    name="fullName" 
                    value={applicationData.fullName} 
                    onChange={handleInputChange} 
                    required
                  />
                  <input 
                    type="email" 
                    placeholder="Email *" 
                    className="border border-white/20 rounded-xl px-4 py-3 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB900] transition" 
                    name="email" 
                    value={applicationData.email} 
                    onChange={handleInputChange} 
                    required
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone *" 
                    className="border border-white/20 rounded-xl px-4 py-3 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB900] transition" 
                    name="phone" 
                    value={applicationData.phone} 
                    onChange={handleInputChange} 
                    required
                  />
                  <input 
                    type="text" 
                    placeholder="Expected Salary" 
                    className="border border-white/20 rounded-xl px-4 py-3 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB900] transition" 
                    name="expectedSalary" 
                    value={applicationData.expectedSalary} 
                    onChange={handleInputChange}
                  />
                </div>

                <textarea 
                  placeholder="Cover Letter *" 
                  className="border border-white/20 rounded-xl px-4 py-3 w-full bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB900] transition resize-none" 
                  rows={4} 
                  name="coverLetter" 
                  value={applicationData.coverLetter} 
                  onChange={handleInputChange} 
                  required
                ></textarea>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="url" 
                    placeholder="Portfolio URL" 
                    className="border border-white/20 rounded-xl px-4 py-3 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB900] transition" 
                    name="portfolio" 
                    value={applicationData.portfolio} 
                    onChange={handleInputChange}
                  />
                  <input 
                    type="url" 
                    placeholder="LinkedIn Profile" 
                    className="border border-white/20 rounded-xl px-4 py-3 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB900] transition" 
                    name="linkedin" 
                    value={applicationData.linkedin} 
                    onChange={handleInputChange}
                  />
                  <select 
                    className="border border-white/20 rounded-xl px-4 py-3 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-[#FFB900] transition" 
                    name="noticePeriod" 
                    value={applicationData.noticePeriod} 
                    onChange={handleInputChange}
                  >
                    <option value="" className="bg-[#090447]">Notice Period</option>
                    <option value="immediately" className="bg-[#090447]">Immediately</option>
                    <option value="1 week" className="bg-[#090447]">1 week</option>
                    <option value="2 weeks" className="bg-[#090447]">2 weeks</option>
                    <option value="1 month" className="bg-[#090447]">1 month</option>
                    <option value="2 months" className="bg-[#090447]">2 months</option>
                    <option value="3 months" className="bg-[#090447]">3 months</option>
                  </select>
                  <select 
                    className="border border-white/20 rounded-xl px-4 py-3 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-[#FFB900] transition" 
                    name="source" 
                    value={applicationData.source} 
                    onChange={handleInputChange}
                  >
                    <option value="" className="bg-[#090447]">How did you hear about us?</option>
                    <option value="linkedin" className="bg-[#090447]">LinkedIn</option>
                    <option value="indeed" className="bg-[#090447]">Indeed</option>
                    <option value="glassdoor" className="bg-[#090447]">Glassdoor</option>
                    <option value="company_website" className="bg-[#090447]">Company Website</option>
                    <option value="referral" className="bg-[#090447]">Referral</option>
                    <option value="other" className="bg-[#090447]">Other</option>
                  </select>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button 
                    type="button" 
                    className="px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition border border-white/20" 
                    onClick={() => setShowApplicationModal(false)} 
                    disabled={applicationLoading}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className={`px-6 py-3 bg-gradient-to-r from-[#FFB900] to-[#ffcc44] text-[#090447] font-semibold rounded-xl hover:from-[#ffcc44] hover:to-[#FFB900] hover:scale-105 transition-all duration-300 ${applicationLoading ? 'opacity-50 cursor-not-allowed' : ''}`} 
                    disabled={applicationLoading}
                  >
                    {applicationLoading ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-[#090447] border-t-transparent rounded-full animate-spin"></div>
                        Submitting...
                      </span>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes moveDiagonal {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); opacity: 0; }
        }
        
        @keyframes moveDiagonalReverse {
          0% { transform: translateX(100%) translateY(-100%) rotate(-45deg); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateX(-100%) translateY(100%) rotate(-45deg); opacity: 0; }
        }
        
        @keyframes moveHorizontal {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes scanVertical {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes floatUp {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.1; }
          100% { transform: translateY(-100vh) translateX(15px) scale(1.1); opacity: 0; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        /* Mobile-specific optimizations */
        @media (max-width: 768px) {
          .animate-bounce {
            animation-duration: 4s;
          }
          
          .animate-pulse {
            animation-duration: 3s;
          }
        }
      `}</style>
    </div>
  );
};

export default CareerDetail;