import NetworkSecurity from '../assets/cybersecurity/networksecurity.webp'
import SMaas from '../assets/cybersecurity/SMaas.webp'
import GRC from '../assets/cybersecurity/GRC.webp'
import IdentityAccess from '../assets/cybersecurity/Identity and acess.webp'
import  ThreatManagement from '../assets/cybersecurity/Threat Management.webp'
import Devops from '../assets/Cloud/DevOps.webp'
import Migration from '../assets/Cloud/Migration Services.webp'
import DataScience from '../assets/AIandAutomation/DataScience.webp'
import Automation from '../assets/AIandAutomation/Automation.webp'
import Learning from '../assets/Collaboration/learning.webp'
import Events from '../assets/Collaboration/Events.webp'

const data=[
    ['Cyber Security',
    {
        imgsrc:NetworkSecurity,
        title:'Network Security',
        li:['Network Visibility Operations Services',
            'Network Visibility Design & Implementation Services',
            'Keysight IxNetwork Training'
        ]
        
    },{
        imgsrc:SMaas,
        title:'SMaas',
        li:['Network Visibility Operations Services',
            'Network Visibility Design & Implementation Services',
            'Keysight IxNetwork Training'
        ]
    },
    {
        imgsrc:GRC,
        title:'GRC',
        li:['ISO 27001',
            'SOC 2'
        ]
    },
    {
        imgsrc:IdentityAccess,
        title:'Identity Access',
        li:['Priviliged Access Management System',
            'Identity and Access Management'
        ]
    }

],
   ['Cloud',
    {
        imgsrc:Devops,
        title:'Devops',
        li:['Cloud Application Development',
            'IT Ops and Support'
        ]
        
    },{
        imgsrc:Migration,
        title:'Migration',
        li:['Migrate VMware Workload to Cloud',
            'Migrate MS Exchange to office 365',
            'Migrate IBM Power to Cloud'
        ]
    }
],
    [
        'AI & Automation',
    {
        imgsrc:DataScience,
        title:'Data Science',
        li:['Generative AI',
            'Internet of Things',
            'Data Analytics'
        ]
        
    },{
        imgsrc:Automation,
        title:'Automation',
        li:['Business Process Modeling Using ARIS',
            'Business Process Automation using web methods',
            'Code Application Development Using Appi'
        ]
    }
    ],
     [
        'Collaboration',
    {
        imgsrc:Learning,
        title:'Learning',
        li:[
        ]
        
    },{
        imgsrc:Events,
        title:'Events',
        li:['Events Services',
            'Virtual Platform Training',
            'Recording & Editing'
        ]
    }
    ]

]
export default data