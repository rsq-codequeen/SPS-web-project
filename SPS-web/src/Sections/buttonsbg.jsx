import React from "react";
import ButtonsBgImg from "../assets/buttonsbg/buttonsbg.webp";

const ButtonsBg = ({ data, activeDomain, onDomainClick }) => {
    return (
        <div className="relative">
            {/* Image adjusted for mobile height and cropping */}
            {/* On small screens (sm and below), h-64 (or h-80/h-96 if you prefer taller) will be applied. */}
            {/* For larger screens (md and up), it will revert to h-auto or a specified height like lg:h-[450px]. */}
            {/* object-cover ensures the image fills the container, cropping parts if its aspect ratio doesn't match */}
            <img 
                src={ButtonsBgImg} 
                alt="background" 
                className="w-full h-64 sm:h-auto md:h-auto object-cover object-center" 
            />
            
            <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-4 py-8 sm:p-0">
                {data.map(([categoryName]) => (
                    <button
                        key={categoryName}
                        onClick={() => onDomainClick(categoryName)} 
                        className={`
                            px-6 py-2 sm:px-12 sm:py-2 flex justify-center rounded-lg font-semibold transition-colors duration-300 w-full sm:w-auto text-sm sm:text-base
                            ${activeDomain === categoryName
                                ? 'bg-gradient-to-r from-[#2F80E8] via-[#2F80E8] to-white text-white'
                                : 'bg-gray-200 text-gray-800'
                            }
                        `}
                    >
                        {categoryName}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ButtonsBg;