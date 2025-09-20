const data = [
    ['Cyber Security', {
        heading: 'Cybersecurity team has the following practices',
        practices: [
            {
                number: 1,
                title: 'Digital Trust',
                description: 'User Security, Data Security, Mobile Device Management',
                color: 'rgb(46, 126, 231)', //blue
                color2: 'rgb(6, 57, 173)', // Darker blue
            },
            {
                number: 2,
                title: 'Threat Management',
                description: 'Cybersecurity Program, SIEM systems, Application Security, Network Security',
                color: 'rgb(243, 239, 66)',  // yello
                color2: 'rgb(160, 154, 26)' 
            },
            {
                number: 3,
                title: 'Keysight - Professional Services',
                description: 'Help Desk Services, Security Operations, SAP Security',
                color: '#EF4444', // Red
                color2: 'rgb(145, 13, 13)' // Darker Red
            }
        ]
    }],
    
    ['Cloud', {
        heading: 'Cloud team has the following practices',
        practices: [
            {
                number: 1,
                title: 'Cloud Infrastructure',
                description: 'Infrastructure as a Service, Platform as a Service, Software as a Service',
 // You can replace with appropriate cloud images
                color: 'rgb(46, 126, 231)', // blue
                color2: 'rgb(6, 57, 173)' // Darker blue
            },
            {
                number: 2,
                title: 'DevOps & CI/CD',
                description: 'Continuous Integration, Continuous Deployment, Automation Pipeline',
                color: 'rgb(243, 239, 66)', // yellow
                color2: 'rgb(160, 154, 26)' // Darker yellow
            }
        ]
    }],
    
    ['AI & Automation', {
        heading: 'AI & Automation team has the following practices',
        practices: [
            {
                number: 1,
                title: 'Machine Learning',
                description: 'Data Processing, Model Training, Predictive Analytics',
                color: 'rgb(46, 126, 231)', // blue
                color2: 'rgb(6, 57, 173)' // Darker blue
            },
            {
                number: 2,
                title: 'Process Automation',
                description: 'Workflow Automation, RPA Implementation, Business Process Optimization',
                color: 'rgb(243, 239, 66)', // yellow
                color2: 'rgb(160, 154, 26)' // Darker yellow
            }
        ]
    }],
    
    ['Collaboration', {
        heading: 'Collaboration team has the following practices',
        practices: [
            {
                number: 1,
                title: 'Learning & Development',
                description: 'Training Programs, Skill Development, Knowledge Management',
                color: 'rgb(46, 126, 231)', // blue
                color2: 'rgb(6, 57, 173)' // Darker blue
            },
            {
                number: 2,
                title: 'Event Management',
                description: 'Virtual Events, Conference Services, Platform Training',
                color: 'rgb(243, 239, 66)', // yellow
                color2: 'rgb(160, 154, 26)' // Darker yellow
            }
        ]
    }]
];

export default data;
