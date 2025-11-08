
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import baseUrl from '../baseUrl';
import qrcode from '../Components/Images/qrcode.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentDetails = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const courseFromState = location.state?.course;

  const bankDetails = {
    bankName: "Meezan Bank",
    accountTitle: "Amna's Network",
    accountNumber: "22020112476003",
    branch: "Bahwalpur",
  };

  const whatsappNumber = "923227544521";

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    if (courseFromState) {
      setCourse(courseFromState);
      setLoading(false);
    } else fetchCourse();
  }, [id, courseFromState]);

  const fetchCourse = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/api/courses/getCourse/${id}`);
      if (response.ok) {
        const data = await response.json();
        setCourse(data.data);
      } else navigate('/courses');
    } catch {
      navigate('/courses');
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentConfirm = () => {
    toast.success(
      <div>
        <strong>Payment Confirmed!</strong>
        <div>Thank you for your payment. Please send the screenshot to our WhatsApp for confirmation.</div>
      </div>,
      {
        position: "top-right",
        autoClose: 6000,
        theme: "colored",
      }
    );
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Payment Confirmation for ${course?.title} - Amount: Rs ${course?.price}\nTransaction ID: [Provide ID]`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.info("Copied to clipboard!", { autoClose: 3000, theme: "colored" });
  };

  const formatPrice = (price) => (price === 0 ? 'Free' : `Rs ${price}`);

  const getLevelBadgeClass = (level) => {
    switch (level) {
      case 'beginner': return 'bg-green-200 text-green-800';
      case 'intermediate': return 'bg-yellow-200 text-yellow-800';
      case 'advanced': return 'bg-red-200 text-red-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#FFB900]"></div>
      </div>
    );

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-12 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12" data-aos="fade-down">
        <button
          className="mb-3 px-4 py-2 border-2 bg-[#090447] border-[#FFB900] text-[#FFB900] font-semibold rounded-lg cursor-pointer hover:bg-[#FFB900] hover:text-[#090447] transition-all duration-300"
          onClick={() => navigate(`/courses/${id}`)}
        >
          ← Back to Course
        </button>
        <h1 className="text-3xl md:text-5xl font-bold text-[#090447] mb-3">
          Complete Your Enrollment
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Secure your spot by completing the payment
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
        {/* Course Summary */}
        {course && (
          <div className="flex flex-col items-center w-full lg:w-1/2 max-w-md">
            <div
              className="bg-white w-full p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-right"
            >
              <h2 className="text-xl md:text-2xl font-bold text-[#090447] mb-4">
                Course Summary
              </h2>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                  {course.instructor && (
                    <p className="text-gray-500 text-sm">
                      Instructor: {course.instructor}
                    </p>
                  )}
                  <div className="flex gap-2 mt-2 justify-center sm:justify-start flex-wrap">
                    <span
                      className={`px-2 py-1 rounded-full text-xs md:text-sm font-semibold ${getLevelBadgeClass(
                        course.level
                      )}`}
                    >
                      {course.level}
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs md:text-sm font-semibold bg-gray-200 text-gray-800">
                      {course.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-center text-[#FFB900]">
                {formatPrice(course.price)}
              </div>
            </div>

            {/* Payment Image */}
            <img
              src="https://gnindia.dronacharya.info/images/Online-Fee-Payment.jpg"
              alt="Online Payment"
              className="mt-6 w-full rounded-2xl shadow-lg object-cover"
              data-aos="fade-up"
            />
          </div>
        )}

        {/* Payment Section */}
        <div
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl w-full lg:w-1/2 max-w-md"
          data-aos="fade-left"
        >
          <h2 className="text-xl md:text-2xl font-bold text-[#090447] mb-6">
            Payment Options
          </h2>

          {/* Tabs */}
          <div className="flex mb-6 border-b border-gray-200">
            <button
              className={`flex-1 py-2 font-semibold cursor-pointer ${
                paymentMethod === 'bank'
                  ? 'border-b-4 border-[#FFB900] text-[#FFB900]'
                  : 'text-gray-500'
              }`}
              onClick={() => setPaymentMethod('bank')}
            >
              Bank Transfer
            </button>
            <button
              className={`flex-1 py-2 font-semibold cursor-pointer ${
                paymentMethod === 'qr'
                  ? 'border-b-4 border-[#FFB900] text-[#FFB900]'
                  : 'text-gray-500'
              }`}
              onClick={() => setPaymentMethod('qr')}
            >
              QR Code
            </button>
          </div>

          {/* Bank Transfer */}
          {paymentMethod === 'bank' && (
            <div className="space-y-4">
              <p className="text-gray-600 text-sm md:text-base">
                Transfer the fee to the account below and send the screenshot to WhatsApp:
              </p>
              {Object.entries(bankDetails).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all flex-wrap gap-2"
                >
                  <span className="capitalize font-medium">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </span>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold">{value}</span>
                    <button
                      className="text-gray-500 hover:text-[#FFB900]"
                      onClick={() => copyToClipboard(value)}
                    >
                      <i className="bi bi-clipboard"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* QR Code */}
          {paymentMethod === 'qr' && (
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Scan this QR code to pay <strong>{formatPrice(course.price)}</strong>
              </p>
              <img
                src={qrcode}
                alt="QR Code"
                className="mx-auto w-40 md:w-48 h-40 md:h-48 rounded-lg border-2 border-gray-200 shadow-lg"
              />
            </div>
          )}

          {/* WhatsApp Confirmation */}
          <div className="mt-6 text-center bg-green-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <h5 className="text-green-700 font-bold mb-2">
              <i className="bi bi-whatsapp me-2"></i>Send Confirmation
            </h5>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              After payment, send the screenshot to our WhatsApp for enrollment confirmation.
            </p>
            <button
              onClick={openWhatsApp}
              className="bg-green-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-green-700 transition-all"
            >
              <i className="bi bi-whatsapp me-2"></i>Send Screenshot
            </button>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => navigate(`/courses/${id}`)}
              className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-all"
            >
              Back to Course
            </button>
            <button
              onClick={handlePaymentConfirm}
              className="bg-[#FFB900] text-[#090447] px-4 py-2 rounded-lg cursor-pointer hover:bg-[#090447] hover:text-white transition-all"
            >
              I Have Paid
            </button>
          </div>
        </div>
      </div>

      <ToastContainer theme="colored" />
    </div>
  );
};

export default PaymentDetails;
