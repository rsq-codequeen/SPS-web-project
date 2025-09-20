import React from 'react';
import { applicationsData } from '../data/ApplicationsData';

const Applications = () => {
    return (
        <div className="py-8 px-4 bg-blue-50 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-full mx-4">
                {applicationsData.map((application) => (
                    <div key={application.id} className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 min-h-[250px] flex flex-col">
                        <div className="flex justify-between items-start gap-4 flex-1">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">{application.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-6 text-sm text-justify">{application.description}</p>
                                <div className="text-blue-600 font-medium cursor-pointer hover:text-blue-800 transition-colors duration-200">
                                    <span>{application.learnMore}</span>
                                </div>
                            </div>
                            <div className="w-30 h-30 flex-shrink-0">
                                <img 
                                    src={application.logo} 
                                    alt={application.logoAlt}
                                    className="w-full h-full object-contain rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Applications;
