// components/Services.js
import React, { useEffect, useState } from 'react';
import '../index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    useEffect(() => {
        AOS.init({ 
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic'
        });
    }, []);

    const [selectedService, setSelectedService] = useState(null);

    // Service Modal Data
    const serviceDetails = {
        1: {
            title: "Account Manager",
            description: "Professional account management services to handle your business accounts efficiently and accurately.",
            features: ["Financial Reporting", "Account Reconciliation", "Budget Management", "Tax Preparation"],
            pricing: "Custom Quote",
            duration: "Ongoing",
            icon: "💼"
        },
        2: {
            title: "Website Development",
            description: "Custom website development services to create responsive, user-friendly, and modern websites.",
            features: ["Responsive Design", "CMS Integration", "E-commerce Solutions", "SEO Optimization"],
            pricing: "Starting at $999",
            duration: "2-4 Weeks",
            icon: "🌐"
        },
        3: {
            title: "SEO Services",
            description: "Search Engine Optimization to improve your website's visibility and ranking on search engines.",
            features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Performance Analytics"],
            pricing: "Starting at $499/month",
            duration: "Ongoing",
            icon: "🔍"
        },
        4: {
            title: "Video & Photo Editing",
            description: "Professional editing services for videos and photos to enhance your visual content.",
            features: ["Color Correction", "Motion Graphics", "Audio Enhancement", "Multi-Format Export"],
            pricing: "Starting at $49/hour",
            duration: "Project Basis",
            icon: "🎬"
        },
        5: {
            title: "Typing Services",
            description: "Accurate Urdu and English typing services for documents, content, and various projects.",
            features: ["Document Formatting", "Data Entry", "Transcription Services", "Proofreading"],
            pricing: "Starting at $0.05/word",
            duration: "48-72 Hours",
            icon: "⌨️"
        },
        6: {
            title: "Assignment Maker",
            description: "Professional assignment writing and preparation services for students and professionals.",
            features: ["Research & Analysis", "Academic Writing", "Citation Formatting", "Plagiarism Check"],
            pricing: "Starting at $15/page",
            duration: "3-7 Days",
            icon: "📚"
        },
        7: {
            title: "Presentation Maker",
            description: "Creative and professional presentation design services for business and academic purposes.",
            features: ["Slide Design", "Infographic Creation", "Animation Effects", "Brand Alignment"],
            pricing: "Starting at $29/slide",
            duration: "3-5 Days",
            icon: "📊"
        },
        8: {
            title: "Content Writing",
            description: "Comprehensive content writing services for all types of content including blogs, articles, and more.",
            features: ["SEO Content", "Blog Writing", "Copywriting", "Content Strategy"],
            pricing: "Starting at $0.10/word",
            duration: "2-5 Days",
            icon: "✍️"
        },
        9: {
            title: "Advertising Services",
            description: "Effective advertising campaigns and strategies to promote your business and products.",
            features: ["Campaign Strategy", "Ad Creation", "Performance Tracking", "A/B Testing"],
            pricing: "Starting at $299/month",
            duration: "Ongoing",
            icon: "📢"
        },
        10: {
            title: "Graphic Design",
            description: "Creative graphic design services including logos, banners, and marketing materials.",
            features: ["Logo Design", "Brand Identity", "Print Materials", "Digital Graphics"],
            pricing: "Starting at $199/project",
            duration: "5-10 Days",
            icon: "🎨"
        }
    };

    // Featured Services (Left Image Right Content)
    const featuredServices = [
        { 
            id: 1, 
            title: "Website Development", 
            description: "We create stunning, responsive websites that drive results. Our development team builds custom solutions tailored to your business needs with cutting-edge technologies and optimized performance.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            features: ["Responsive Design", "E-commerce Solutions", "CMS Development", "API Integration"]
        },
        { 
            id: 2, 
            title: "Digital Marketing", 
            description: "Comprehensive digital marketing strategies to boost your online presence. We combine SEO, social media, and content marketing to drive targeted traffic and increase conversions.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            features: ["SEO Optimization", "Social Media Management", "PPC Campaigns", "Analytics & Reporting"]
        },
        { 
            id: 3, 
            title: "Graphic Design", 
            description: "Creative visual solutions that make your brand stand out. From logos to complete brand identity systems, we design compelling visuals that communicate your message effectively.",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            features: ["Brand Identity", "UI/UX Design", "Print Design", "Motion Graphics"]
        }
    ];

    // All Services Data
    const services = [
        { id: 1, title: "Account Manager", description: "Professional account management services to handle your business accounts efficiently.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
        { id: 2, title: "Website Development", description: "Custom website development services to create responsive and modern websites.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
        { id: 3, title: "SEO Services", description: "Search Engine Optimization to improve your website's visibility and ranking.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
        { id: 4, title: "Video & Photo Editing", description: "Professional editing services for videos and photos to enhance visual content.", image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
        { id: 5, title: "Typing Services", description: "Accurate Urdu and English typing services for documents and content.", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
        { id: 6, title: "Assignment Maker", description: "Professional assignment writing services for students and professionals.", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
        { id: 7, title: "Presentation Maker", description: "Creative presentation design for business and academic purposes.", image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
        { id: 8, title: "Content Writing", description: "Comprehensive content writing for blogs, articles, and marketing.", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
        { id: 9, title: "Advertising Services", description: "Effective advertising campaigns to promote your business.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
        { id: 10, title: "Graphic Design", description: "Creative design services for logos and marketing materials.", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" }
    ];

    // Enhanced Background Animation Component - Mobile Optimized
    const BackgroundAnimation = ({ isDark = false }) => {
        return (
            <div className={`absolute inset-0 overflow-hidden ${isDark ? 'opacity-25' : 'opacity-20'}`}>
                {/* Main Grid System - Mobile Optimized */}
                <div className="absolute inset-0">
                    {/* Horizontal Lines - Reduced on mobile */}
                    {Array.from({ length: 25 }).map((_, i) => (
                        <div
                            key={`h-${i}`}
                            className={`absolute left-0 w-full h-0.5 ${
                                isDark 
                                    ? 'bg-gradient-to-r from-transparent via-white to-transparent' 
                                    : 'bg-gradient-to-r from-transparent via-[#090447] to-transparent'
                            } opacity-30`}
                            style={{ top: `${(i * 4)}%` }}
                        />
                    ))}
                    
                    {/* Vertical Lines - Reduced on mobile */}
                    {Array.from({ length: 25 }).map((_, i) => (
                        <div
                            key={`v-${i}`}
                            className={`absolute top-0 h-full w-0.5 ${
                                isDark 
                                    ? 'bg-gradient-to-b from-transparent via-white to-transparent' 
                                    : 'bg-gradient-to-b from-transparent via-[#090447] to-transparent'
                            } opacity-30`}
                            style={{ left: `${(i * 4)}%` }}
                        />
                    ))}
                </div>

                {/* Diagonal Lines - Mobile Optimized */}
                <div className="absolute inset-0">
                    {/* 45 Degree Lines - Reduced complexity on mobile */}
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div
                            key={`d45-${i}`}
                            className={`absolute w-[200%] h-0.5 transform rotate-45 ${
                                isDark 
                                    ? 'bg-gradient-to-r from-transparent via-white to-transparent' 
                                    : 'bg-gradient-to-r from-transparent via-[#FFB900] to-transparent'
                            } opacity-25`}
                            style={{ 
                                top: `${(i * 8) - 40}%`,
                                left: `${(i * 6) - 40}%`,
                                animation: `moveDiagonal 20s linear infinite`,
                                animationDelay: `${i * 1}s`
                            }}
                        />
                    ))}
                    
                    {/* -45 Degree Lines - Reduced complexity on mobile */}
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div
                            key={`d-45-${i}`}
                            className={`absolute w-[200%] h-0.5 transform -rotate-45 ${
                                isDark 
                                    ? 'bg-gradient-to-r from-transparent via-[#FFB900] to-transparent' 
                                    : 'bg-gradient-to-r from-transparent via-white to-transparent'
                            } opacity-25`}
                            style={{ 
                                top: `${(i * 8) - 40}%`,
                                right: `${(i * 6) - 40}%`,
                                animation: `moveDiagonalReverse 18s linear infinite`,
                                animationDelay: `${i * 1.2}s`
                            }}
                        />
                    ))}
                </div>

                {/* Moving Progress Bars - Mobile Optimized */}
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

                {/* Scanning Lines - Mobile Optimized */}
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
                        const size = Math.random() * 4 + 1; // Smaller on mobile
                        const left = Math.random() * 100;
                        const delay = Math.random() * 15;
                        const duration = Math.random() * 20 + 15;
                        const opacity = Math.random() * 0.3 + 0.1; // Lower opacity on mobile
                        
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

                {/* Corner Connectors - Mobile Optimized */}
                <div className="absolute top-0 left-0 w-16 md:w-24 h-[1px] bg-gradient-to-r from-[#FFB900] to-transparent animate-pulse"></div>
                <div className="absolute top-0 left-0 w-[1px] h-16 md:h-24 bg-gradient-to-b from-[#FFB900] to-transparent animate-pulse"></div>
                <div className="absolute top-0 right-0 w-16 md:w-24 h-[1px] bg-gradient-to-l from-white/40 to-transparent animate-pulse"></div>
                <div className="absolute top-0 right-0 w-[1px] h-16 md:h-24 bg-gradient-to-b from-white/40 to-transparent animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-16 md:w-24 h-[1px] bg-gradient-to-r from-white/40 to-transparent animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[1px] h-16 md:h-24 bg-gradient-to-t from-white/40 to-transparent animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-16 md:w-24 h-[1px] bg-gradient-to-l from-[#FFB900] to-transparent animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-[1px] h-16 md:h-24 bg-gradient-to-t from-[#FFB900] to-transparent animate-pulse"></div>

                {/* Floating Shapes - Mobile Optimized */}
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

                {/* Additional Mobile Optimizations */}
                <div className="absolute inset-0">
                    {/* Moving Balls - Reduced on mobile */}
                    {Array.from({ length: 15 }).map((_, i) => (
                        <div
                            key={`ball-${i}`}
                            className={`absolute w-2 h-2 rounded-full ${
                                isDark ? 'bg-[#FFB900]' : 'bg-[#090447]'
                            } shadow-lg animate-ball-move`}
                            style={{
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: `${8 + (i % 6)}s`,
                                top: `${10 + (i * 6)}%`,
                                left: `${(i * 8) % 100}%`
                            }}
                        />
                    ))}
                </div>

                {/* Pulsing Nodes - Reduced on mobile */}
                <div className="absolute inset-0">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div
                            key={`node-${i}`}
                            className={`absolute w-3 h-3 rounded-full ${
                                isDark ? 'bg-[#FFB900]' : 'bg-[#090447]'
                            } opacity-60 animate-pulse`}
                            style={{
                                animationDelay: `${i * 0.3}s`,
                                animationDuration: `${3 + (i % 4)}s`,
                                top: `${15 + (i * 8) % 80}%`,
                                left: `${10 + (i * 9) % 85}%`
                            }}
                        />
                    ))}
                </div>
            </div>
        );
    };

    // Service Modal Component
    const ServiceModal = ({ service, onClose }) => {
        if (!service) return null;

        const details = serviceDetails[service.id];

        return (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-2xl max-w-md w-full mx-auto shadow-2xl transform transition-all border border-[#FFB900]">
                    {/* Header */}
                    <div className="bg-[#090447] p-6 rounded-t-2xl">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-3">
                                <span className="text-2xl">{details.icon}</span>
                                <h3 className="text-2xl font-bold text-white">{details.title}</h3>
                            </div>
                            <button 
                                onClick={onClose}
                                className="text-white hover:text-[#FFB900] transition-colors text-2xl font-bold"
                            >
                                ×
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {details.description}
                        </p>

                        {/* Features */}
                        <div className="mb-6">
                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                <span className="w-2 h-2 bg-[#FFB900] rounded-full mr-2"></span>
                                Key Features
                            </h4>
                            <div className="space-y-2">
                                {details.features.map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-[#090447] rounded-full"></div>
                                        <span className="text-gray-700 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pricing & Duration */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                                <p className="text-xs text-gray-500">Starting Price</p>
                                <p className="font-semibold text-gray-800">{details.pricing}</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                                <p className="text-xs text-gray-500">Duration</p>
                                <p className="font-semibold text-gray-800">{details.duration}</p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3">
                            <button 
                                onClick={onClose}
                                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-lg transition-all transform hover:scale-105"
                            >
                                Close
                            </button>
                            <button className="flex-1 bg-[#FFB900] hover:bg-[#e6a700] text-white font-medium py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
            {/* Background Animation for entire page */}
            <BackgroundAnimation />

            {/* Services Header Section */}
            <div className="relative py-16 lg:py-28 bg-gradient-to-br from-[#090447] via-[#0d0a5c] to-[#090447] overflow-hidden">
                {/* Additional Background Animation for Header */}
                <div className="absolute inset-0">
                    <BackgroundAnimation isDark={true} />
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center" data-aos="fade-up">
                        <h1 className="text-4xl lg:text-7xl font-bold mb-6 tracking-tight text-white">
                            Our <span className="text-[#FFB900]">Services</span>
                        </h1>
                        <p className="text-lg lg:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-200 mb-8 px-4">
                            Professional solutions for your digital transformation journey
                        </p>
                        <div className="mt-12" data-aos="fade-up" data-aos-delay="200">
                            <button className="bg-[#FFB900] hover:bg-[#e6a700] text-[#090447] font-bold py-3 lg:py-4 px-8 lg:px-12 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-base lg:text-lg">
                                Explore All Services
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Services Section */}
            <div className="py-12 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative">
                <BackgroundAnimation />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
                        <h2 className="text-3xl lg:text-6xl font-bold mb-6 text-gray-900">
                            Featured <span className="text-[#090447]">Solutions</span>
                        </h2>
                        <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                            Premium services designed to elevate your business to new heights with cutting-edge solutions
                        </p>
                    </div>

                    {featuredServices.map((service, index) => (
                        <div 
                            key={service.id} 
                            className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-16 lg:mb-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Image Side */}
                            <div className="lg:w-1/2 w-full" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                                <div className="relative group">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                        <img 
                                            src={service.image} 
                                            alt={service.title} 
                                            className="w-full h-64 lg:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 bg-[#FFB900] text-[#090447] px-4 py-2 rounded-xl font-bold text-base lg:text-lg">
                                            Featured
                                        </div>
                                    </div>
                                    <div className="absolute -inset-4 bg-gradient-to-r from-[#FFB900] to-[#090447] rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="lg:w-1/2 w-full" data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                                <div className="bg-gradient-to-br from-[#090447] to-[#0d0a5c] p-6 lg:p-10 rounded-3xl shadow-2xl border border-[#FFB900]/20 relative overflow-hidden">
                                    {/* Background Pattern */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB900]/10 rounded-full -translate-y-16 translate-x-16"></div>
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FFB900]/10 rounded-full translate-y-12 -translate-x-12"></div>
                                    
                                    {/* Corner Accent */}
                                    <div className="absolute top-0 right-0 w-6 h-6 bg-[#FFB900] rounded-bl-2xl"></div>
                                    
                                    <h3 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6 text-white relative">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-200 mb-6 lg:mb-8 leading-relaxed text-base lg:text-lg relative">
                                        {service.description}
                                    </p>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mb-6 lg:mb-8 relative">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center space-x-3">
                                                <div className="w-2 h-2 bg-[#FFB900] rounded-full flex-shrink-0"></div>
                                                <span className="text-white text-sm lg:text-base">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 relative">
                                        <button 
                                            onClick={() => setSelectedService(service)}
                                            className="bg-[#FFB900] hover:bg-[#e6a700] text-[#090447] font-bold py-3 lg:py-4 px-6 lg:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-base lg:text-lg flex-1"
                                        >
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* All Services Grid */}
            <div className="py-12 lg:py-24 bg-gradient-to-br from-[#090447] to-[#0d0a5c] relative overflow-hidden">
                {/* Background Elements */}
                <BackgroundAnimation isDark={true} />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
                        <h2 className="text-3xl lg:text-6xl font-bold mb-6 text-white">
                            All <span className="text-[#FFB900]">Services</span>
                        </h2>
                        <p className="text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
                            Comprehensive suite of professional solutions tailored to your business needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {services.map((service, index) => (
                            <div 
                                key={service.id} 
                                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl hover:shadow-3xl border border-gray-200 hover:border-[#FFB900] transition-all duration-500 overflow-hidden transform hover:-translate-y-2 lg:hover:-translate-y-3"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                {/* Service Image */}
                                <div className="h-48 overflow-hidden relative">
                                    <img 
                                        src={service.image} 
                                        alt={service.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                    <div className="absolute top-4 right-4 w-10 h-10 lg:w-12 lg:h-12 bg-[#090447] backdrop-blur-sm rounded-xl flex items-center justify-center text-white text-lg lg:text-xl shadow-lg">
                                        {serviceDetails[service.id]?.icon}
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className="bg-[#FFB900] text-[#090447] px-3 py-1 rounded-lg font-bold text-xs lg:text-sm">
                                            Popular
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 lg:p-8 bg-gradient-to-br from-[#090447] to-[#0d0a5c] h-48 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg lg:text-xl font-bold text-white mb-3 group-hover:text-[#FFB900] transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-200 leading-relaxed text-sm lg:text-base">
                                            {service.description}
                                        </p>
                                    </div>
                                    <button 
                                        onClick={() => setSelectedService(service)}
                                        className="w-full bg-[#FFB900] hover:bg-[#e6a700] text-[#090447] font-semibold py-2 lg:py-3 px-4 lg:px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 group/btn mt-4 text-sm lg:text-base"
                                    >
                                        <span>View Details</span>
                                        <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                                    </button>
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-[#FFB900] to-[#090447] bg-clip-padding opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-2xl">
                                    <div className="rounded-2xl bg-gradient-to-br from-[#090447] to-[#0d0a5c] w-full h-full m-[2px]"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact & Map Section */}
            <div className="py-12 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative">
                <BackgroundAnimation />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Contact Info */}
                        <div data-aos="fade-right">
                            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 lg:mb-12">
                                Get In <span className="text-[#090447]">Touch</span>
                            </h2>
                            <div className="space-y-4 lg:space-y-6">
                                {/* Phone */}
                                <div className="group flex items-start space-x-4 lg:space-x-6 p-4 lg:p-6 rounded-2xl bg-white hover:bg-gradient-to-r hover:from-[#090447] hover:to-[#0d0a5c] border border-gray-200 hover:border-[#FFB900] transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                                    <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-[#090447] group-hover:bg-[#FFB900] rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 transition-all duration-300 shadow-2xl">
                                        <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-2 text-gray-900 group-hover:text-white text-base lg:text-lg">Phone</h4>
                                        <a 
                                            href="tel:+923227544521" 
                                            className="text-[#090447] group-hover:text-[#FFB900] font-bold transition-colors text-lg lg:text-xl"
                                        >
                                            +92 322 7544521
                                        </a>
                                        <p className="text-gray-600 group-hover:text-gray-200 text-xs lg:text-sm mt-2">Available 24/7 for your queries</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="group flex items-start space-x-4 lg:space-x-6 p-4 lg:p-6 rounded-2xl bg-white hover:bg-gradient-to-r hover:from-[#090447] hover:to-[#0d0a5c] border border-gray-200 hover:border-[#FFB900] transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                                    <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-[#090447] group-hover:bg-[#FFB900] rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 transition-all duration-300 shadow-2xl">
                                        <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-2 text-gray-900 group-hover:text-white text-base lg:text-lg">Email</h4>
                                        <a 
                                            href="mailto:amnasnetwork143@gmail.com" 
                                            className="text-[#090447] group-hover:text-[#FFB900] font-bold transition-colors text-sm lg:text-lg break-all"
                                        >
                                            amnasnetwork143@gmail.com
                                        </a>
                                        <p className="text-gray-600 group-hover:text-gray-200 text-xs lg:text-sm mt-2">We'll respond within 24 hours</p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="group flex items-start space-x-4 lg:space-x-6 p-4 lg:p-6 rounded-2xl bg-white hover:bg-gradient-to-r hover:from-[#090447] hover:to-[#0d0a5c] border border-gray-200 hover:border-[#FFB900] transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                                    <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-[#090447] group-hover:bg-[#FFB900] rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 transition-all duration-300 shadow-2xl">
                                        <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-2 text-gray-900 group-hover:text-white text-base lg:text-lg">Address</h4>
                                        <p className="text-gray-700 group-hover:text-white text-sm lg:text-lg leading-relaxed">
                                            Asif Town Rafi Qamar Road Street No 02<br />
                                            Infront Jamia Abdullah
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div data-aos="fade-left" data-aos-delay="200">
                            <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border-4 border-white">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.715678779722!2d71.715354275336!3d29.396594475387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b910019112c51%3A0x6da0b8bb6c834a9a!2sAmna's%20Network%20Business%20Consultant%20Software%20House!5e1!3m2!1sen!2s!4v1739279999999!5m2!1sen!2s"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Amna's Network Location"
                                    className="rounded-2xl"
                                ></iframe>
                            </div>
                            <div className="mt-6 lg:mt-8 text-center">
                                <a
                                    href="https://www.google.com/maps/place/Amna's+Network+Business+Consultant+Software+House/@29.3965945,71.7179429,701m/data=!3m2!1e3!4b1!4m6!3m5!1s0x393b910019112c51:0x6da0b8bb6c834a9a!8m2!3d29.3965945!4d71.7179429!16s%2Fg%2F11xlkdg0tx?hl=en&entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 lg:space-x-3 px-6 lg:px-8 py-3 lg:py-4 bg-[#090447] hover:bg-[#070336] text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 text-base lg:text-lg"
                                >
                                    <span>Open in Google Maps</span>
                                    <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

                @keyframes ball-move {
                    0% { transform: translateX(-100px) translateY(0); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateX(100vw) translateY(100px); opacity: 0; }
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

                /* Performance optimizations for mobile */
                @media (max-width: 640px) {
                    .absolute.inset-0.pointer-events-none > div:nth-child(3),
                    .absolute.inset-0.pointer-events-none > div:nth-child(4) {
                        opacity: 0.2;
                    }
                }
            `}</style>

            {/* Service Modal */}
            <ServiceModal 
                service={selectedService} 
                onClose={() => setSelectedService(null)} 
            />
        </div>
    );
};

export default Services;