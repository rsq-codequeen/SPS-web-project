import React from "react";
import ButtonsBgImg from "../assets/buttonsbg/buttonsbg.png";

const ButtonsBg = ({ data, activeDomain, onDomainClick }) => {
    return (
        <div className="flex flex-row items-center justify-center relative">
            <img src={ButtonsBgImg} alt="background" className="w-full" />
            
            <div className="absolute flex flex-row gap-4">
                {data.map(([categoryName]) => (
                    <button
                        key={categoryName}
                        // This is the key part: when clicked, it calls the function from the parent
                        onClick={() => onDomainClick(categoryName)} 
                        className={`
                            px-12 py-2 flex rounded-lg font-semibold transition-colors duration-300
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