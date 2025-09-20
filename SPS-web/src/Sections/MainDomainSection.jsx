import { useState } from 'react';
import DomainsInfo from '../components/domainsInfo'; // The content component
import BestPractices from '../components/BestPractices'; // The best practices component
import ButtonsBg from './buttonsbg'; // The buttons component
import data from '../data/domainsdata';

const MainDomainSection = () => {
    const [activeDomain, setActiveDomain] = useState('Cyber Security');

    // 2. This function updates the central state
    const handleDomainClick = (domainName) => {
        setActiveDomain(domainName);
    };

    return (
         <div>
            {/* 3. Pass the data and the click handler to the button component */}
            <ButtonsBg 
                data={data} 
                activeDomain={activeDomain} 
                onDomainClick={handleDomainClick} 
            />
            
            {/* 4. Pass the active state to the content component */}
            <DomainsInfo 
                data={data} 
                activeDomain={activeDomain} 
            />
            
            {/* 5. Pass the active state to the best practices component */}
            <BestPractices 
                activeDomain={activeDomain} 
            />
        </div>
    );
};

export default MainDomainSection;