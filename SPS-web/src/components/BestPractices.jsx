import React from 'react';
import data from '../data/bestpracticesdata';

const BestPractices = ({ activeDomain }) => {
    const activeDomainData = data.find(([categoryName]) => categoryName === activeDomain);

    if (!activeDomainData || !activeDomainData[1]) {
        return null;
    }

    const { heading, practices } = activeDomainData[1];

    return (
        <div className="py-12 px-8">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#002EA4] mb-2">{heading}</h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
                {practices.map((practice, index) => (
                    <div
                        key={index}
                        className="flex items-center space-x-4 bg-white rounded-full shadow-lg p-6 min-w-[400px] max-w-[500px]"
                    >
                        <div 
                            className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl"
                            style={{ 
                                background: `linear-gradient(135deg, ${practice.color}, ${practice.color2 || practice.color})`
                            }}
                        >
                            {practice.number}
                        </div>
                        
                        <div className="flex-1">
                            <div className="mb-2">
                                <h3 className="text-lg font-bold text-[#002EA4]">{practice.title}</h3>
                            </div>
                            <p className="text-gray-700 text-sm">{practice.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestPractices;
