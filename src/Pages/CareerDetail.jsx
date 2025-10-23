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
    <div className="flex justify-center py-20">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
    </div>
  );

  if (error || !career) return (
    <div className="flex flex-col items-center justify-center py-20">
      <p className="text-red-600 text-lg mb-4">{error || 'Job not found'}</p>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={() => navigate('/careers')}
      >
        Back to Careers
      </button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-10">
      <button
        className="mb-6 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
        onClick={() => navigate('/careers')}
      >
        ← Back to Careers
      </button>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="lg:w-2/3 space-y-6">
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${badgeClasses.employment[career.employmentType] || 'bg-gray-300 text-gray-800'}`}>
                {career.employmentType.replace(/-/g, ' ').toUpperCase()}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${badgeClasses.level[career.experienceLevel] || 'bg-gray-300 text-gray-800'}`}>
                {career.experienceLevel.toUpperCase()}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-200 text-gray-800">
                {career.category}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-[#060145] mb-2">{career.title}</h1>
            <h3 className="text-xl text-blue-700 font-semibold mb-4">{career.company}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 mb-4">
              <div><strong>Location:</strong> {career.location}</div>
              {career.salary && <div><strong>Salary:</strong> <span className="text-green-600">{career.salary}</span></div>}
              <div><strong>Application Deadline:</strong> {formatDate(career.deadline)}</div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#060145] mb-2">Job Description</h4>
              <p className="text-gray-700">{career.description}</p>
            </div>

            {career.responsibilities?.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-[#060145] mb-2">Key Responsibilities</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {career.responsibilities.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </div>
            )}

            {career.requirements?.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-[#060145] mb-2">Requirements</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {career.requirements.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </div>
            )}

            {career.benefits?.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-[#060145] mb-2">Benefits & Perks</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                  {career.benefits.map((b, idx) => (
                    <div key={idx}>⭐ {b}</div>
                  ))}
                </div>
              </div>
            )}

            {career.tags?.length > 0 && (
              <div>
                <h5 className="text-sm font-semibold mb-2">Tags</h5>
                <div className="flex flex-wrap gap-2">
                  {career.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-200 rounded-full text-sm text-[#060145]">{tag}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="lg:w-1/3 flex-shrink-0">
          <div className="sticky top-6 space-y-6">
            <div className="p-6 bg-gradient-to-br from-[#060145] to-[#0b0560] text-white rounded-xl text-center">
              <h4 className="text-xl font-bold mb-3">Ready to Apply?</h4>
              <button
                className="w-full px-4 py-2 bg-yellow-400 text-[#060145] font-semibold rounded hover:bg-yellow-500 transition mb-2"
                onClick={handleApply}
              >
                Apply Now
              </button>
              <p className="text-gray-100 text-sm">Fill out the application form to submit your candidacy</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md space-y-3">
              <div className="flex items-center"><i className="bi bi-calendar me-2 text-[#060145]"></i><span><strong>Posted:</strong> {new Date(career.createdAt).toLocaleDateString()}</span></div>
              <div className="flex items-center"><i className="bi bi-briefcase me-2 text-[#060145]"></i><span><strong>Type:</strong> {career.employmentType}</span></div>
              <div className="flex items-center"><i className="bi bi-person-badge me-2 text-[#060145]"></i><span><strong>Level:</strong> {career.experienceLevel}</span></div>
              <div className="flex items-center"><i className="bi bi-tags me-2 text-[#060145]"></i><span><strong>Category:</strong> {career.category}</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {showApplicationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-20 z-50">
          <div className="bg-white rounded-xl w-full max-w-3xl p-6 shadow-lg animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-[#060145] font-bold text-lg">Apply for {career.title}</h5>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setShowApplicationModal(false)}
                disabled={applicationLoading}
              >
                ✕
              </button>
            </div>

            {applicationSuccess ? (
              <div className="text-center py-8">
                <div className="text-green-600 text-4xl mb-3">✔</div>
                <h4 className="text-lg font-bold mb-2">Application Submitted!</h4>
                <p className="text-gray-700">We'll review your application and get back to you soon.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={submitApplication}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name *" className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#060145]" name="fullName" value={applicationData.fullName} onChange={handleInputChange} required/>
                  <input type="email" placeholder="Email *" className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#060145]" name="email" value={applicationData.email} onChange={handleInputChange} required/>
                  <input type="tel" placeholder="Phone *" className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#060145]" name="phone" value={applicationData.phone} onChange={handleInputChange} required/>
                  <input type="text" placeholder="Expected Salary" className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#060145]" name="expectedSalary" value={applicationData.expectedSalary} onChange={handleInputChange}/>
                </div>

                <textarea placeholder="Cover Letter *" className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#060145]" rows={4} name="coverLetter" value={applicationData.coverLetter} onChange={handleInputChange} required></textarea>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="url" placeholder="Portfolio URL" className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#060145]" name="portfolio" value={applicationData.portfolio} onChange={handleInputChange}/>
                  <input type="url" placeholder="LinkedIn Profile" className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#060145]" name="linkedin" value={applicationData.linkedin} onChange={handleInputChange}/>
                  <select className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#060145]" name="noticePeriod" value={applicationData.noticePeriod} onChange={handleInputChange}>
                    <option value="">Notice Period</option>
                    <option value="immediately">Immediately</option>
                    <option value="1 week">1 week</option>
                    <option value="2 weeks">2 weeks</option>
                    <option value="1 month">1 month</option>
                    <option value="2 months">2 months</option>
                    <option value="3 months">3 months</option>
                  </select>
                  <select className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#060145]" name="source" value={applicationData.source} onChange={handleInputChange}>
                    <option value="">How did you hear about us?</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="indeed">Indeed</option>
                    <option value="glassdoor">Glassdoor</option>
                    <option value="company_website">Company Website</option>
                    <option value="referral">Referral</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex justify-end gap-2 mt-4">
                  <button type="button" className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition" onClick={() => setShowApplicationModal(false)} disabled={applicationLoading}>Cancel</button>
                  <button type="submit" className={`px-4 py-2 bg-[#060145] text-white rounded hover:bg-[#0b0560] transition`} disabled={applicationLoading}>
                    {applicationLoading ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerDetail;
