import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61562132672245&mibextid=ZbWKwL",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: "hover:text-blue-500"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/amnasnetwork?igsh=eG56MWt0emduYnVp",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.988.012 6.756.06 5.526.107 4.704.278 3.995.525c-.789.27-1.459.622-2.129 1.291-.67.67-1.022 1.34-1.292 2.129-.247.709-.418 1.531-.465 2.761C.012 7.988 0 8.396 0 12.017c0 3.62.012 4.028.06 5.26.047 1.23.218 2.052.465 2.761.27.789.622 1.459 1.291 2.129.67.67 1.34 1.022 2.129 1.292.709.247 1.531.418 2.761.465 1.232.048 1.64.06 5.26.06 3.62 0 4.028-.012 5.26-.06 1.23-.047 2.052-.218 2.761-.465.789-.27 1.459-.622 2.129-1.291.67-.67 1.022-1.34 1.292-2.129.247-.709.418-1.531.465-2.761.048-1.232.06-1.64.06-5.26 0-3.62-.012-4.028-.06-5.26-.047-1.23-.218-2.052-.465-2.761-.27-.789-.622-1.459-1.291-2.129-.67-.67-1.34-1.022-2.129-1.292-.709-.247-1.531-.418-2.761-.465C16.045.012 15.637 0 12.017 0zm0 2.158c3.504 0 3.882.009 5.098.056.976.024 1.505.115 1.857.191.467.101.8.22 1.15.418.35.199.699.467.995.763.296.296.564.645.763.995.198.35.317.683.418 1.15.076.352.167.881.191 1.857.047 1.216.056 1.594.056 5.098 0 3.504-.009 3.882-.056 5.098-.024.976-.115 1.505-.191 1.857-.101.467-.22.8-.418 1.15-.199.35-.467.699-.763.995-.296.296-.645.564-.995.763-.35.198-.683.317-1.15.418-.352.076-.881.167-1.857.191-1.216.047-1.594.056-5.098.056-3.504 0-3.882-.009-5.098-.056-.976-.024-1.505-.115-1.857-.191-.467-.101-.8-.22-1.15-.418-.35-.199-.699-.467-.995-.763-.296-.296-.564-.645-.763-.995-.198-.35-.317-.683-.418-1.15-.076-.352-.167-.881-.191-1.857C2.167 15.9 2.158 15.522 2.158 12.017c0-3.504.009-3.882.056-5.098.024-.976.115-1.505.191-1.857.101-.467.22-.8.418-1.15.199-.35.467-.699.763-.995.296-.296.645-.564.995-.763.35-.198.683-.317 1.15-.418.352-.076.881-.167 1.857-.191 1.216-.047 1.594-.056 5.098-.056z"/>
          <path d="M12.017 5.838a6.179 6.179 0 1 0 0 12.358 6.179 6.179 0 0 0 0-12.358zm0 10.177a3.998 3.998 0 1 1 0-7.996 3.998 3.998 0 0 1 0 7.996z"/>
          <circle cx="18.406" cy="5.595" r="1.441"/>
        </svg>
      ),
      color: "hover:text-pink-500"
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@amnas.network?_r=1&_d=ek266e7e29c704&sec_uid=MS4wLjABAAAAwpis6e7uGzZwgPEhnwAeAZjX-Oz7D19RlCyOmBWHR5LmLZp4POks4fRaE0FI9pYz&share_author_id=7336779699157238789&sharer_language=en&source=h5_m&u_code=eci3b607g6l960&timestamp=1753422705&user_id=7336779699157238789&sec_user_id=MS4wLjABAAAAwpis6e7uGzZwgPEhnwAeAZjX-Oz7D19RlCyOmBWHR5LmLZp4POks4fRaE0FI9pYz&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7526449760452003602&share_link_id=e8eb9bb4-b993-4251-8f9f-a5f535270b96&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      color: "hover:text-black"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/amna-s-network-1b992434b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter/X",
      href: "https://x.com/AmnaNetwork?t=te-rjS1wEzFxyJ0ki6fnyg&s=09",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: "hover:text-gray-800"
    },
    {
      name: "Google Business",
      href: "https://g.co/kgs/rAJkai4",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 11.5h8.5c-.2 1.1-.6 2.1-1.2 3-.7.9-1.6 1.6-2.6 2.1-1 .5-2.1.8-3.2.8-1.3 0-2.6-.4-3.6-1.1-1-.7-1.8-1.7-2.2-2.9-.4-1.2-.4-2.5 0-3.7.4-1.2 1.2-2.2 2.2-2.9 1-.7 2.3-1.1 3.6-1.1 1.7 0 3.2.7 4.3 1.8l-1.7 1.7c-.7-.7-1.6-1.1-2.6-1.1-1.1 0-2.1.5-2.8 1.3-.7.8-1.1 1.8-1.1 2.9 0 1.1.4 2.1 1.1 2.9.7.8 1.7 1.3 2.8 1.3.8 0 1.5-.2 2.1-.6.6-.4 1-1 1.2-1.7H12v-2.5z"/>
          <path d="M3.5 12c0-1.1.4-2.1 1.1-2.9.7-.8 1.7-1.3 2.8-1.3 1.1 0 2.1.5 2.8 1.3l1.7-1.7C10.3 6.7 8.8 6 7.4 6c-1.7 0-3.2.7-4.3 1.8C2 8.9 1.5 10.4 1.5 12s.5 3.1 1.6 4.2c1.1 1.1 2.6 1.8 4.3 1.8 1.4 0 2.9-.7 3.9-1.8l-1.7-1.7c-.7.7-1.6 1.1-2.6 1.1-1.1 0-2.1-.5-2.8-1.3C3.9 14.1 3.5 13.1 3.5 12z"/>
        </svg>
      ),
      color: "hover:text-red-500"
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#100a65] via-[#0a0a3f] to-[#050321] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#FFB900]/30">
          {/* Helpful Links */}
          <div data-aos="fade-up">
            <h3 className="text-xl font-bold text-[#FFB900] mb-6 flex items-center">
              <span className="w-2 h-6 bg-[#FFB900] rounded-full mr-3"></span>
              Helpful Links
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Certifications", path: "/certifications" },
                { label: "Instructors", path: "/instructors" },
                { label: "Careers", path: "/careers", isButton: true }
              ].map((link) => (
                <li key={link.label}>
                  {link.isButton ? (
                    <button
                      onClick={() => navigate(link.path)}
                      className="group flex items-center text-gray-300 hover:text-[#FFB900] transition-all duration-300 transform hover:translate-x-2"
                    >
                      <span className="w-2 h-2 bg-[#FFB900] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.path}
                      className="group flex items-center text-gray-300 hover:text-[#FFB900] transition-all duration-300 transform hover:translate-x-2"
                    >
                      <span className="w-2 h-2 bg-[#FFB900] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Plans */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-bold text-[#FFB900] mb-6 flex items-center">
              <span className="w-2 h-6 bg-[#FFB900] rounded-full mr-3"></span>
              Plans
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Plans & Pricing", path: "/pricing" },
                { label: "Business Solutions", path: "/business" },
                { label: "Enterprise Plans", path: "/enterprise" }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    className="group flex items-center text-gray-300 hover:text-[#FFB900] transition-all duration-300 transform hover:translate-x-2"
                  >
                    <span className="w-2 h-2 bg-[#FFB900] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold text-[#FFB900] mb-6 flex items-center">
              <span className="w-2 h-6 bg-[#FFB900] rounded-full mr-3"></span>
              Support
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Releases", path: "/releases" },
                { label: "Help Center", path: "/help" },
                { label: "Contact Us", path: "/contactus", isButton: true }
              ].map((link) => (
                <li key={link.label}>
                  {link.isButton ? (
                    <button
                      onClick={() => navigate(link.path)}
                      className="group flex items-center text-gray-300 hover:text-[#FFB900] transition-all duration-300 transform hover:translate-x-2"
                    >
                      <span className="w-2 h-2 bg-[#FFB900] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.path}
                      className="group flex items-center text-gray-300 hover:text-[#FFB900] transition-all duration-300 transform hover:translate-x-2"
                    >
                      <span className="w-2 h-2 bg-[#FFB900] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-bold text-[#FFB900] mb-6 flex items-center">
              <span className="w-2 h-6 bg-[#FFB900] rounded-full mr-3"></span>
              Join Our Community
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Connect with instructors, learners, and tech experts in Amna's Network Community! 
              Stay updated with the latest courses and career opportunities.
            </p>
            <a
              href="https://www.linkedin.com/in/amna-s-network-1b992434b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-[#FFB900] to-[#ffd75e] text-[#090447] px-6 py-3 rounded-xl font-bold hover:scale-105 hover:shadow-2xl hover:shadow-[#FFB900]/40 transition-all duration-300 transform"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Join on LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center lg:text-left" data-aos="fade-right">
            <p className="text-gray-400">
              © 2025 <span className="text-[#FFB900] font-bold">Amna's Network</span>. 
              All Rights Reserved.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center lg:items-end gap-4" data-aos="fade-left">
            <p className="text-sm text-gray-400 font-medium">Follow us on social media</p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 text-gray-300 transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${social.color}`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Policies */}
        <div className="mt-8 pt-6 border-t border-white/10" data-aos="fade-up">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <a
              href="/terms"
              className="text-gray-400 hover:text-[#FFB900] transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/5"
            >
              Terms of Service
            </a>
            <a
              href="/privacy"
              className="text-gray-400 hover:text-[#FFB900] transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/5"
            >
              Privacy Policy
            </a>
            <a
              href="/cookies"
              className="text-gray-400 hover:text-[#FFB900] transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/5"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;