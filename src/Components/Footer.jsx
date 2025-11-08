import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    
    <footer className="bg-gradient-to-b from-[#100a65] via-[#0a0a3f] to-[#050321] text-gray-300 pt-14">
      <div
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-[#FFB900]/30 pb-12"
        data-aos="fade-up"
      >
        {/* Helpful Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#FFB900] mb-4">
            Helpful Links
          </h3>
          <ul className="space-y-3">
            {[
              { label: "Certifications", path: "/" },
              { label: "Instructors", path: "/" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.path}
                  className="relative group hover:text-[#FFB900] transition-all duration-300"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFB900] transition-all duration-500 group-hover:w-full"></span>
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => navigate("/careers")}
                className="relative group hover:text-[#FFB900] transition-all duration-300"
              >
                Careers
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFB900] transition-all duration-500 group-hover:w-full"></span>
              </button>
            </li>
          </ul>
        </div>

        {/* Plans */}
        <div data-aos="fade-up" data-aos-delay="150">
          <h3 className="text-lg font-semibold text-[#FFB900] mb-4">Plans</h3>
          <ul className="space-y-3">
            {[
              { label: "Plans & Pricing", path: "/" },
              { label: "Business Solutions", path: "/" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.path}
                  className="relative group hover:text-[#FFB900] transition-all duration-300"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFB900] transition-all duration-500 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-lg font-semibold text-[#FFB900] mb-4">Support</h3>
          <ul className="space-y-3">
            {[
              { label: "Releases", path: "/" },
              { label: "Help Center", path: "/" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.path}
                  className="relative group hover:text-[#FFB900] transition-all duration-300"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFB900] transition-all duration-500 group-hover:w-full"></span>
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => navigate("/contactus")}
                className="relative group hover:text-[#FFB900] transition-all duration-300"
              >
                Contact
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFB900] transition-all duration-500 group-hover:w-full"></span>
              </button>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div data-aos="fade-up" data-aos-delay="450">
          <h3 className="text-lg font-semibold text-[#FFB900] mb-4">
            Join the Community
          </h3>
          <p className="text-sm leading-relaxed mb-5 text-gray-400">
            Connect with instructors, learners, and tech experts in Amna’s Network
            Community!
          </p>
          <a
            href="https://www.linkedin.com/in/amna-s-network-1b992434b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#FFB900] to-[#ffd75e] text-[#090447] px-5 py-2 rounded-lg font-semibold hover:scale-105 hover:shadow-lg hover:shadow-[#FFB900]/40 transition-transform duration-300"
          >
            Join on LinkedIn
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className="max-w-7xl mx-auto px-6 mt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <div className="text-center md:text-left">
          © 2025{" "}
          <span className="text-[#FFB900] font-medium">Amna’s Network</span>.
          All Rights Reserved.
        </div>

        {/* Policies */}
        <div className="flex flex-wrap justify-center md:justify-end gap-5">
          <a
            href="/"
            className="relative group hover:text-[#FFB900] transition-all duration-300"
          >
            Terms of Service
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFB900] transition-all duration-500 group-hover:w-full"></span>
          </a>
          <a
            href="/"
            className="relative group hover:text-[#FFB900] transition-all duration-300"
          >
            Privacy Policy
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFB900] transition-all duration-500 group-hover:w-full"></span>
          </a>
        </div>
      </div>

      {/* Social Icons */}
      <div
        className="max-w-7xl mx-auto px-6 mt-6 flex justify-center md:justify-end gap-6"
        data-aos="zoom-in"
        data-aos-delay="800"
      >
        {[
          {
            href: "https://www.facebook.com/profile.php?id=61562132672245",
            icon: (
              <svg
                width="20"
                height="20"
                fill="#fff"
                viewBox="0 0 17 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.5 8c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 4 2.9 7.3 6.7 7.9v-5.6h-2V8h2V6.2c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V8h2.2l-.4 2.3H9.6V16c4-.6 6.9-4 6.9-8z" />
              </svg>
            ),
          },
          {
            href: "https://x.com/AmnaNetwork",
            icon: (
              <svg
                width="20"
                height="20"
                fill="#fff"
                viewBox="0 0 17 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.5 2c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-2.1 0-3.7 2-3.2 4-2.7-.1-5.1-1.4-6.8-3.4-.9 1.5-.4 3.4 1 4.4-.5 0-1-.2-1.5-.4C1 6.6 2.1 8 3.6 8.4c-.5.1-1 .2-1.5.1.4 1.3 1.6 2.3 3.1 2.3-1.2.9-3 1.4-4.7 1.2 1.5.9 3.2 1.5 5 1.5 6.1 0 9.5-5.1 9.3-9.8.7-.4 1.3-1 1.7-1.7z" />
              </svg>
            ),
          },
          {
            href: "https://www.instagram.com/amnasnetwork",
            icon: (
              <svg
                width="20"
                height="20"
                fill="#fff"
                viewBox="0 0 17 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.5 2.2h3.4c.8 0 1.2.2 1.5.3.4.2.7.3 1 .6.3.3.5.6.6 1 .1.3.2.7.3 1.5v6.8c0 .8-.2 1.2-.3 1.5-.2.4-.3.7-.6 1-.3.3-.6.5-1 .6-.3.1-.7.2-1.5.3H5.1c-.8 0-1.2-.2-1.5-.3-.4-.2-.7-.3-1-.6-.3-.3-.5-.6-.6-1-.1-.3-.2-.7-.3-1.5V9 5.6c0-.8.2-1.2.3-1.5.2-.4.3-.7.6-1 .3-.3.6-.5 1-.6.3-.1.7-.2 1.5-.3h3.4z" />
                <path d="M8.5 4.7C6.1 4.7 4.2 6.6 4.2 9s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3-1.9-4.3-4.3-4.3zm0 7.1C7 11.8 5.7 10.6 5.7 9c0-1.5 1.2-2.8 2.8-2.8 1.5 0 2.8 1.2 2.8 2.8 0 1.5-1.3 2.8-2.8 2.8zM12.9 5.6a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
            ),
          },
        ].map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:scale-125 hover:shadow-[0_0_10px_#FFB900] transition-transform duration-300"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
