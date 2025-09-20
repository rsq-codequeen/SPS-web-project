import React, { useState } from 'react';
import SPSLogo from '../assets/SPSLogo.webp';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeSubDropdown, setActiveSubDropdown] = useState(null);

    const menuData = [
        {
            name: "Home",
            url: "/",
            hasDropdown: false
        },
        {
            name: "Products",
            hasDropdown: true,
            subMenus: [
                {
                    name: "SPS",
                    hasSubMenu: true,
                    items: [
                        { name: "My Id Self Verify", url: "/products/sps/my-id-self-verify" },
                        { name: "Azalio", url: "/products/sps/azalio" },
                        { name: "Fabrico", url: "/products/sps/fabrico" },
                        { name: "BMS", url: "/products/sps/bms" },
                        { name: "CSM", url: "/products/sps/csm" }
                    ]
                },
                {
                    name: "IBM",
                    hasSubMenu: true,
                    items: [
                        { name: "Automation", url: "/products/ibm/automation" },
                        { name: "Data and AI", url: "/products/ibm/data-ai" },
                        { name: "Security", url: "/products/ibm/security" },
                        { name: "Sustainability", url: "/products/ibm/sustainability" }
                    ]
                },
                {
                    name: "Others",
                    url: "/products/others"
                }
            ]
        },
        {
            name: "Services",
            hasDropdown: true,
            subMenus: [
                {
                    name: "Cyber Security",
                    hasSubMenu: true,
                    items: [
                        { name: "Network Security", url: "/services/cyber/network" },
                        { name: "SMAAS", url: "/services/cyber/smaas" },
                        { name: "GRC", url: "/services/cyber/grc" },
                        { name: "Identity and Access", url: "/services/cyber/identity" },
                        { name: "Threat Management", url: "/services/cyber/threat" }
                    ]
                },
                {
                    name: "Cloud",
                    hasSubMenu: true,
                    items: [
                        { name: "Devops", url: "/services/cloud/devops" },
                        { name: "Migration Services", url: "/services/cloud/migration" }
                    ]
                },
                {
                    name: "AI and Automation",
                    hasSubMenu: true,
                    items: [
                        { name: "Data Science", url: "/services/ai/data-science" },
                        { name: "Automation", url: "/services/ai/automation" }
                    ]
                },
                {
                    name: "Collaboration",
                    hasSubMenu: true,
                    items: [
                        { name: "Training", url: "/services/collaboration/training" },
                        { name: "Events", url: "/services/collaboration/events" }
                    ]
                },
                {
                    name: "Training",
                    hasSubMenu: true,
                    items: [
                        { name: "SPS Oil and Gas", url: "/services/training/sps-oil-gas" },
                        { name: "IBM", url: "/services/training/ibm" },
                        { name: "Google", url: "/services/training/google" },
                        { name: "AWS", url: "/services/training/aws" },
                        { name: "See More", url: "/services/training/more" }
                    ]
                }
            ]
        },
        {
            name: "Verticals",
            hasDropdown: true,
            subMenus: [
                {
                    name: "Public Sector",
                    hasSubMenu: true,
                    items: [
                        { name: "Country Government", url: "/verticals/public/country-gov" },
                        { name: "Healthcare", url: "/verticals/public/healthcare" },
                        { name: "Government", url: "/verticals/public/government" },
                        { name: "Public Safety", url: "/verticals/public/safety" },
                        { name: "Education", url: "/verticals/public/education" }
                    ]
                },
                {
                    name: "Industrials",
                    hasSubMenu: true,
                    items: [
                        { name: "Manufacturing", url: "/verticals/industrials/manufacturing" },
                        { name: "Textile", url: "/verticals/industrials/textile" },
                        { name: "Utilities", url: "/verticals/industrials/utilities" }
                    ]
                },
                {
                    name: "Health Care",
                    hasSubMenu: true,
                    items: [
                        { name: "Compliance Requirements", url: "/verticals/healthcare/compliance" },
                        { name: "Health Systems Interoperability", url: "/verticals/healthcare/interoperability" },
                        { name: "Multi Clinic Consolidation", url: "/verticals/healthcare/consolidation" },
                        { name: "Patient Experience", url: "/verticals/healthcare/patient-experience" },
                        { name: "Retail", url: "/verticals/healthcare/retail" },
                        { name: "Telehealth & Remote Patient Monitoring", url: "/verticals/healthcare/telehealth" }
                    ]
                },
                {
                    name: "Retail",
                    hasSubMenu: true,
                    items: [
                        { name: "Convenience Store", url: "/verticals/retail/convenience" },
                        { name: "Marketing/Merchandising", url: "/verticals/retail/marketing" },
                        { name: "Omni-Channel Operations", url: "/verticals/retail/omnichannel" },
                        { name: "Personalization and Localization", url: "/verticals/retail/personalization" },
                        { name: "Supply Chain", url: "/verticals/retail/supply-chain" }
                    ]
                },
                {
                    name: "Energy",
                    hasSubMenu: true,
                    items: [
                        { name: "Electric", url: "/verticals/energy/electric" },
                        { name: "Oil and Gas", url: "/verticals/energy/oil-gas" }
                    ]
                },
                {
                    name: "Financial",
                    hasSubMenu: true,
                    items: [
                        { name: "Banking", url: "/verticals/financial/banking" },
                        { name: "Insurance", url: "/verticals/financial/insurance" }
                    ]
                },
                {
                    name: "Telecommunications",
                    hasSubMenu: true,
                    items: [
                        { name: "Telcos", url: "/verticals/telecom/telcos" }
                    ]
                }
            ]
        },
        {
            name: "SpinLabs",
            hasDropdown: true,
            subMenus: [
                { name: "Overview", url: "/spinlabs/overview" },
                { name: "Academia", url: "/spinlabs/academia" },
                { name: "Industry", url: "/spinlabs/industry" },
                { name: "Centers of Expertise", url: "/spinlabs/centers" },
                { name: "Startups", url: "/spinlabs/startups" }
            ]
        },
        {
            name: "Activities",
            hasDropdown: true,
            subMenus: [
                { name: "Internship Program 2025", url: "/activities/internship-2025" },
                { name: "Webinars", url: "/activities/webinars" },
                { name: "Workshops", url: "/activities/workshops" },
                { name: "Special Interest Groups", url: "/activities/special-interest" },
                { name: "Training", url: "/activities/training" }
            ]
        },
        {
            name: "About Us",
            hasDropdown: true,
            subMenus: [
                { name: "Our Story", url: "/about/our-story" },
                { name: "Careers", url: "/about/careers" }
            ]
        },
        {
            name: "Contacts",
            hasDropdown: true,
            subMenus: [
                {
                    name: "Vita",
                    hasSubMenu: true,
                    items: [
                        { name: "Pricing", url: "/contacts/vita/pricing" }
                    ]
                }
            ]
        },
        {
            name: "Contact Us",
            url: "/contact-us",
            hasDropdown: false
        }
    ];

    const handleMouseEnter = (index) => {
        setActiveDropdown(index);
        setActiveSubDropdown(null);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
    };

    const handleSubMenuEnter = (subIndex) => {
        setActiveSubDropdown(subIndex);
    };

    const handleSubMenuLeave = () => {
        setActiveSubDropdown(null);
    };

    return (
        <nav className="bg-white text-gray-900 relative z-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center h-16">
                    {/* Logo - Extreme Left */}
                    <div className="flex-shrink-0">
                        <img 
                            src={SPSLogo} 
                            alt="SPS Logo" 
                            className="h-8 w-auto"
                        />
                    </div>

                    {/* Navigation Links - Center */}
                    <div className="hidden lg:flex items-center justify-center flex-1 space-x-4">
                        {menuData.map((item, index) => (
                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={() => item.hasDropdown && handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <a
                                    href={item.url || "/"}
                                    className={`flex items-center space-x-1 hover:text-blue-500 transition-colors px-1 py-1 whitespace-nowrap text-sm ${
                                        item.name === "Home" ? "text-blue-500 border-b-2 border-blue-500" : ""
                                    }`}
                                >
                                    <span>{item.name}</span>
                                    {item.hasDropdown && (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </a>

                                {/* Dropdown Menu */}
                                {item.hasDropdown && activeDropdown === index && (
                                    <div 
                                        className="absolute top-full left-0 mt-1 w-64 bg-white text-blue-600 rounded-lg shadow-xl border border-gray-200"
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div className="py-2">
                                            {item.subMenus.map((subMenu, subIndex) => (
                                                <div
                                                    key={subIndex}
                                                    className="relative"
                                                    onMouseEnter={() => subMenu.hasSubMenu && handleSubMenuEnter(subIndex)}
                                                    onMouseLeave={() => !subMenu.hasSubMenu && handleSubMenuLeave()}
                                                >
                                                    <a
                                                        href={subMenu.url || "/"}
                                                        className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 transition-colors text-blue-600"
                                                    >
                                                        <span>{subMenu.name}</span>
                                                        {subMenu.hasSubMenu && (
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        )}
                                                    </a>

                                                    {/* Sub-dropdown Menu */}
                                                    {subMenu.hasSubMenu && activeSubDropdown === subIndex && (
                                                        <div 
                                                            className="absolute top-0 left-full w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-10"
                                                            onMouseEnter={() => handleSubMenuEnter(subIndex)}
                                                            onMouseLeave={handleSubMenuLeave}
                                                        >
                                                            <div className="py-2">
                                                                {subMenu.items.map((subItem, itemIndex) => (
                                                                    <a
                                                                        key={itemIndex}
                                                                        href="/"
                                                                        className="block px-4 py-2 hover:bg-gray-100 transition-colors text-blue-600"
                                                                    >
                                                                        {subItem.name}
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Internship Button - Right */}
                    <div className="flex items-center flex-shrink-0">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors">
                            Internship
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
