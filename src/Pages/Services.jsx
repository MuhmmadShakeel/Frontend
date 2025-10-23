// components/Services.js
import React, { useEffect, useState } from 'react';
import '../index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    // Header Carousel Images
    const headerImages = [
        "https://www.shutterstock.com/image-photo/happy-professional-business-man-company-600nw-2424450769.jpg",
        "https://i.pinimg.com/1200x/10/5b/ec/105beccc09e559a4dc9189d6cf3ff8ab.jpg"
    ];
    const [currentHeader, setCurrentHeader] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeader(prev => (prev + 1) % headerImages.length);
        }, 4000); // slower transition
        return () => clearInterval(interval);
    }, []);

    // Services Data
    const services = [
        { id: 1, title: "Account Manager", description: "Professional account management services to handle your business accounts efficiently and accurately.", image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 2, title: "Website Development", description: "Custom website development services to create responsive, user-friendly, and modern websites.", image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 3, title: "SEO Services", description: "Search Engine Optimization to improve your website's visibility and ranking on search engines.", image: "https://images.pexels.com/photos/3861952/pexels-photo-3861952.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 4, title: "Video & Photo Editing", description: "Professional editing services for videos and photos to enhance your visual content.", image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 5, title: "Typing Services", description: "Accurate Urdu and English typing services for documents, content, and various projects.", image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 6, title: "Assignment Maker", description: "Professional assignment writing and preparation services for students and professionals.", image: "https://images.pexels.com/photos/3184320/pexels-photo-3184320.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 7, title: "Presentation Maker", description: "Creative and professional presentation design services for business and academic purposes.", image: "https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 8, title: "Content Writing", description: "Comprehensive content writing services for all types of content including blogs, articles, and more.", image: "https://images.pexels.com/photos/374720/pexels-photo-374720.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 9, title: "Advertising Services", description: "Effective advertising campaigns and strategies to promote your business and products.", image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 10, title: "Graphic Design", description: "Creative graphic design services including logos, banners, and marketing materials.", image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ];

    return (
        <div className="min-h-screen">
            {/* Header Carousel */}
            <div className="relative h-screen flex items-center justify-center overflow-hidden">
                {headerImages.map((img, idx) => (
                    <img 
                        key={idx}
                        src={img} 
                        alt={`Header ${idx + 1}`} 
                        className={`absolute w-full h-full object-cover transition-opacity duration-2000 ease-in-out ${currentHeader === idx ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
                <div className="relative text-center px-4 z-10">
                    <h1 className="text-5xl lg:text-7xl text-[#00BFA6] font-extrabold mb-4 tracking-tight">
                        Our Services
                    </h1>
                    <p className="text-lg lg:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90">
                        Delivering Excellence in Business Consulting and Digital Solutions
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <h1 className="text-3xl font-bold text-center mt-12 mb-8" style={{color: "#00D5BE"}}>Explore All Our Services</h1>
            <div className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div 
                                key={service.id} 
                                className="group relative bg-[#1E2332] rounded-2xl shadow-lg overflow-hidden group w-full"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {/* Service Image */}
                                <div className="h-48 overflow-hidden rounded-t-2xl group-hover:scale-105 transition-transform duration-500">
                                    <img 
                                        src={service.image} 
                                        alt={service.title} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2" style={{color: "#00D5BE"}}>
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Bottom Accent Border */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact & Map Section */}
            <div className="py-16 border-t border-gray-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Contact Info */}
                        <div data-aos="fade-right">
                            <h2 className="text-4xl font-bold mb-8 text-[#00D5BE]">
                                Get In Touch
                            </h2>
                            <div className="space-y-6">
                                {/* Phone */}
                                <div className="flex items-start space-x-4 p-4 rounded-xl bg-[#252C3E] hover:shadow-lg transition-colors">
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#00D5BE] rounded-lg flex items-center justify-center text-white text-lg">
                                        📞
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1 text-white">Phone</h4>
                                        <a 
                                            href="tel:+923227544521" 
                                            className="text-[#00D5BE] hover:text-cyan-400 font-medium transition-colors"
                                        >
                                            +92 322 7544521
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start space-x-4 p-4 rounded-xl bg-[#252C3E] hover:shadow-lg transition-colors">
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#00D5BE] rounded-lg flex items-center justify-center text-white text-lg">
                                        📧
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1 text-white">Email</h4>
                                        <a 
                                            href="mailto:amnasnetwork143@gmail.com" 
                                            className="text-[#00D5BE] hover:text-cyan-400 font-medium transition-colors break-all"
                                        >
                                            amnasnetwork143@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start space-x-4 p-4 rounded-xl bg-[#252C3E] hover:shadow-lg transition-colors">
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#00D5BE] rounded-lg flex items-center justify-center text-white text-lg">
                                        📍
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1 text-white">Address</h4>
                                        <p className="text-gray-200">
                                            Asif Town Rafi Qamar Road Street No 02<br />
                                            Infront Jamia Abdullah
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div data-aos="fade-left">
                            <div className="rounded-2xl p-1 shadow-lg hover:shadow-xl transition-all">
                                <div className="rounded-xl overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.715678779722!2d71.715354275336!3d29.396594475387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b910019112c51%3A0x6da0b8bb6c834a9a!2sAmna's%20Network%20Business%20Consultant%20Software%20House!5e1!3m2!1sen!2s!4v1739279999999!5m2!1sen!2s"
                                        width="100%"
                                        height="400"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Amna's Network Location"
                                        className="rounded-xl"
                                    ></iframe>
                                </div>
                                <div className="p-4 text-center">
                                    <a
                                        href="https://www.google.com/maps/place/Amna's+Network+Business+Consultant+Software+House/@29.3965945,71.7179429,701m/data=!3m2!1e3!4b1!4m6!3m5!1s0x393b910019112c51:0x6da0b8bb6c834a9a!8m2!3d29.3965945!4d71.7179429!16s%2Fg%2F11xlkdg0tx?hl=en&entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3 bg-[#00D5BE] hover:bg-cyan-400 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                                    >
                                        <span>Open in Google Maps</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
