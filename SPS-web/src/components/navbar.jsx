import React, { useState } from 'react';
import SPSlogo from '../assets/SPSLogo.webp'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({
        products: false,
        services: false,
        verticals: false,
        spinnlabs: false,
        activities: false,
        aboutUs: false,
        contracts: false,
        contactUs: false,
    });

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMouseEnter = (menuName) => {
        setDropdownOpen(prevState => ({ ...prevState, [menuName]: true }));
    };

    const handleMouseLeave = (menuName) => {
        setDropdownOpen(prevState => ({ ...prevState, [menuName]: false }));
    };

    const navItems = [
        { name: 'Home', href: '#home', dropdown: null },
        { name: 'Products', href: '#products', dropdown: ['Product A', 'Product B', 'Product C'] },
        { name: 'Services', href: '#services', dropdown: ['Service 1', 'Service 2', 'Service 3'] },
        { name: 'Verticals', href: '#verticals', dropdown: ['Vertical X', 'Vertical Y', 'Vertical Z'] },
        { name: 'SpinnLabs', href: '#spinnlabs', dropdown: ['Innovation', 'R&D'] },
        { name: 'Activities', href: '#activities', dropdown: ['Events', 'Workshops', 'Team Building'] },
        { name: 'About Us', href: '#about-us', dropdown: ['Our Story', 'Team', 'Careers'] },
        { name: 'Contracts', href: '#contracts', dropdown: ['Terms of Service', 'Privacy Policy'] },
        { name: 'Contact Us', href: '#contact-us', dropdown: ['Support', 'Sales', 'General Inquiry'] },
    ];

    const DropdownMenu = ({ name, items, isOpen, onMouseEnter, onMouseLeave }) => (
        <div
            className="relative"
            onMouseEnter={() => onMouseEnter(name.toLowerCase().replace(/\s/g, ''))}
            onMouseLeave={() => onMouseLeave(name.toLowerCase().replace(/\s/g, ''))}
        >
            <button className="text-gray-700 px-3 py-2 rounded-md hover:text-blue-600 focus:outline-none focus:text-blue-600 flex items-center transition-colors">
                {name}
                <svg
                    className={`h-5 w-5 ml-1 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    {items.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className="block px-4 py-2 text-gray-800 hover:text-blue-600 transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );

    return (
        <div className="font-sans antialiased text-gray-900 bg-white">
            <nav className="bg-white shadow-lg">
                <div className="max-w-7xl mx-auto ">
                    <div className="flex justify-between h-16 items-center">
                        {/* Logo on the left with added right margin for spacing */}
                        <div className="flex-shrink-0"> 
                            <a href="#" className="flex">
                                <img src={SPSlogo} alt="Company Logo" className='h-10 w-auto' />
                            </a>
                        </div>
                        
                        {/* Container for all right-aligned items */}
                        <div className="flex items-center ">
                            {/* Desktop Navigation */}
                            <div className="hidden md:flex md:items-center ">
                                {navItems.map((item, index) => (
                                    item.dropdown ? (
                                        <DropdownMenu
                                            key={index}
                                            name={item.name}
                                            items={item.dropdown}
                                            isOpen={dropdownOpen[item.name.toLowerCase().replace(/\s/g, '')]}
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        />
                                    ) : (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className="text-gray-700 px-3 py-2 rounded-md hover:text-blue-600 transition-colors"
                                        >
                                            {item.name}
                                        </a>
                                    )
                                ))}
                                {/* Internship Portal Button */}
                                <a
                                    href="#internship-portal"
                                    className="bg-blue-600 text-white w-36 py-2 px-1  rounded-3xl hover:bg-blue-700 transition-colors"
                                >
                                    Internship Portal
                                </a>
                            </div>

                            {/* Mobile menu button */}
                            <div className="-mr-2 flex items-center md:hidden">
                                <button
                                    onClick={toggleMobileMenu}
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300"
                                >
                                    <svg
                                        className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                    <svg
                                        className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item, index) => (
                            item.dropdown ? (
                                <div key={index}>
                                    <button
                                        onClick={() => setDropdownOpen(prevState => ({ ...prevState, [item.name.toLowerCase().replace(/\s/g, '')]: !prevState[item.name.toLowerCase().replace(/\s/g, '')] }))}
                                        className="w-full text-left text-gray-700 px-3 py-2 rounded-md hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors"
                                    >
                                        {item.name}
                                    </button>
                                    {dropdownOpen[item.name.toLowerCase().replace(/\s/g, '')] && (
                                        <div className="pl-4 mt-1 space-y-1">
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <a
                                                    key={subIndex}
                                                    href="#"
                                                    className="block px-3 py-2 text-gray-600 rounded-md hover:text-blue-600 transition-colors"
                                                >
                                                    {subItem}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="block px-3 py-2 text-gray-700 rounded-md hover:text-blue-600 transition-colors"
                                >
                                    {item.name}
                                </a>
                            )
                        ))}
                        {/* Internship Portal Button for Mobile */}
                        <a
                            href="#internship-portal"
                            className="block px-3 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors mt-2"
                        >
                            Internship Portal
                        </a>
                    </div>
                </div>
            </nav>
            
        </div>
    );
};

export default Navbar;