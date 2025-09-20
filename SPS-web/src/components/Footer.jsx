import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Show scroll-to-top button when user scrolls down
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        const scrollToTopAnimation = () => {
            const currentScroll = window.scrollY;
            const scrollStep = currentScroll / 20; // Divide by 20 for smooth animation
            
            if (currentScroll > 0) {
                window.scrollBy(0, -scrollStep);
                requestAnimationFrame(scrollToTopAnimation);
            }
        };
        
        scrollToTopAnimation();
    };

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Business Groups */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Business Groups</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">AI</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Cloud</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Cybersecurity</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Events & Learning</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Spinnlabs</a></li>
                        </ul>
                    </div>

                    {/* More */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">More</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Our Story</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Events</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Contact Details</h3>
                        <div className="space-y-4">
                            <p className="text-sm leading-relaxed">
                                2400 Research Blvd, Suite 115,<br />
                                Rockville, MD 20850 USA.
                            </p>
                            <p className="text-sm">
                                <span className="font-medium">Call Us :</span> 301-337-2290
                            </p>
                            <p className="text-sm">
                                <span className="font-medium">Email us:</span> support@spsnet.com
                            </p>
                            <p className="text-sm">
                                <span className="font-medium">For Internship Queries:</span><br />
                                internship@spsnet.com or internqueries@spsnet.com
                            </p>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400">
                        © 2025 SPS, All Rights Reserved.
                    </p>
                    
                    {/* Scroll to Top Button */}
                    {showScrollTop && (
                        <button
                            onClick={scrollToTop}
                            className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors mt-4 sm:mt-0"
                            aria-label="Scroll to top"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
