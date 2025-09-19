import React from 'react';
import data from '../data/domainsdata';

const DomainsInfo = ({ activeDomain }) => {
   const activeDomainData = data.find(([categoryName]) => categoryName === activeDomain);

    const cutCornerStyle = {
        clipPath: 'polygon(70% 0%, 100% 38%, 100% 100%, 0 100%, 0 0)',
    };


    return (
        <div className="flex flex-wrap justify-center gap-8 p-8">
            {activeDomainData && activeDomainData.slice(1).map((service, serviceIndex) => (
                <div
                    key={serviceIndex}
                    className="w-76 h-76 bg-white shadow-lg p-4 flex flex-col justify-between"
                    style={cutCornerStyle}
                >
                    <div>
                        <div className="flex items-center space-x-2 mb-2">
                            <img src={service.imgsrc} alt={service.title} className="size-14" />
                            <p className="text-[#002EA4] font-bold">{service.title}</p>
                        </div>
                        <div className="pl-6">
                            <ul className="list-disc text-md font-semibold text-gray-700">
                                {service.li.map((listItem, liIndex) => (
                                    <li key={liIndex}>{listItem}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='flex items-center space-x-2 mt-auto text-[#002EA4] font-semibold'>
                        <p>Read More.....</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DomainsInfo;