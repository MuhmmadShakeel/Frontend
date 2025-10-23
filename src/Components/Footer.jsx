// components/Footer.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-b from-[#0e1a36] via-[#102040] to-[#071020] text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-[#00BFA6]/30 pb-10">
        {/* Helpful Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#00BFA6] mb-4">
            Helpful Links
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="/" className="hover:text-[#00BFA6] transition duration-300">
                Certifications
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-[#00BFA6] transition duration-300">
                Instructors
              </a>
            </li>
            <li>
              <button
                onClick={() => navigate("/careers")}
                className="hover:text-[#00BFA6] transition duration-300"
              >
                Careers
              </button>
            </li>
          </ul>
        </div>

        {/* Plans */}
        <div>
          <h3 className="text-lg font-semibold text-[#00BFA6] mb-4">Plans</h3>
          <ul className="space-y-3">
            <li>
              <a href="/" className="hover:text-[#00BFA6] transition duration-300">
                Plans & Pricing
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-[#00BFA6] transition duration-300">
                Business Solutions
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-[#00BFA6] mb-4">Support</h3>
          <ul className="space-y-3">
            <li>
              <a href="/" className="hover:text-[#00BFA6] transition duration-300">
                Releases
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-[#00BFA6] transition duration-300">
                Help Center
              </a>
            </li>
            <li>
              <button
                onClick={() => navigate("/contactus")}
                className="hover:text-[#00BFA6] transition duration-300"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-lg font-semibold text-[#00BFA6] mb-4">
            Join the Community
          </h3>
          <p className="text-sm leading-relaxed mb-4">
            Interact with instructors, students, and IT experts in the Amna's
            Network Community!
          </p>
          <a
            href="https://www.linkedin.com/in/amna-s-network-1b992434b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#00BFA6] to-[#13e2ba] text-[#0e1a36] px-5 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#00BFA6]/20"
          >
            Amna's Network Community
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">
        <div className="text-center md:text-left">
          © 2025{" "}
          <span className="text-[#00BFA6] font-medium">Amna's Network</span>. All Rights
          Reserved. Logos, trademarks, and registered trademarks are the
          property of their respective owners.
        </div>

        {/* Policies */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          <a href="/" className="hover:text-[#00BFA6] transition duration-300">
            Terms of Service
          </a>
          <a href="/" className="hover:text-[#00BFA6] transition duration-300">
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="max-w-7xl mx-auto px-6 mt-6 flex justify-center md:justify-end gap-5">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=61562132672245&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 17 16"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.5 8c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 4 2.9 7.3 6.7 7.9v-5.6h-2V8h2V6.2c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V8h2.2l-.4 2.3H9.6V16c4-.6 6.9-4 6.9-8z" />
          </svg>
        </a>

        {/* Twitter */}
        <a
          href="https://x.com/AmnaNetwork?t=te-rjS1wEzFxyJ0ki6fnyg&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 17 14"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.5 2c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-2.1 0-3.7 2-3.2 4-2.7-.1-5.1-1.4-6.8-3.4-.9 1.5-.4 3.4 1 4.4-.5 0-1-.2-1.5-.4C1 6.6 2.1 8 3.6 8.4c-.5.1-1 .2-1.5.1.4 1.3 1.6 2.3 3.1 2.3-1.2.9-3 1.4-4.7 1.2 1.5.9 3.2 1.5 5 1.5 6.1 0 9.5-5.1 9.3-9.8.7-.4 1.3-1 1.7-1.7z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/amna-s-network-1b992434b"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 17 16"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.1 16H.7V5.3h3.4V16zM2.4 3.8C1.3 3.8.5 3 .5 1.9.5.8 1.4 0 2.4 0c1.1 0 1.9.8 1.9 1.9 0 1.1-.8 1.9-1.9 1.9zM16.5 16h-3.4v-5.8c0-1.7-.7-2.2-1.7-2.2s-2 .8-2 2.3V16H6V5.3h3.2v1.5c.3-.7 1.5-1.8 3.2-1.8 1.9 0 3.9 1.1 3.9 4.4V16h.2z" />
          </svg>
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@amnas.network"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
          >
            <path d="M224 80.6a48.2 48.2 0 0 1-28.8-9.6 47.8 47.8 0 0 1-19.2-38V28a12 12 0 0 0-12-12h-28a12 12 0 0 0-12 12v124a28 28 0 1 1-20.4-27A12 12 0 0 0 116 113V84a12 12 0 0 0-14.7-11.7A72 72 0 1 0 164 140V112a72.6 72.6 0 0 0 28 5.7 12 12 0 0 0 12-12V92a12 12 0 0 0-12-11.4z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/amnasnetwork"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 17 18"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.5 2.2h3.4c.8 0 1.2.2 1.5.3.4.2.7.3 1 .6.3.3.5.6.6 1 .1.3.2.7.3 1.5v6.8c0 .8-.2 1.2-.3 1.5-.2.4-.3.7-.6 1-.3.3-.6.5-1 .6-.3.1-.7.2-1.5.3H5.1c-.8 0-1.2-.2-1.5-.3-.4-.2-.7-.3-1-.6-.3-.3-.5-.6-.6-1-.1-.3-.2-.7-.3-1.5V9 5.6c0-.8.2-1.2.3-1.5.2-.4.3-.7.6-1 .3-.3.6-.5 1-.6.3-.1.7-.2 1.5-.3h3.4z" />
            <path d="M8.5 4.7C6.1 4.7 4.2 6.6 4.2 9s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3-1.9-4.3-4.3-4.3zm0 7.1C7 11.8 5.7 10.6 5.7 9c0-1.5 1.2-2.8 2.8-2.8 1.5 0 2.8 1.2 2.8 2.8 0 1.5-1.3 2.8-2.8 2.8zM12.9 5.6a1 1 0 100-2 1 1 0 000 2z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
