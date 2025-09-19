import NetworkSecurity from '../assets/cybersecurity/networksecurity.webp'
import SMaas from '../assets/cybersecurity/SMaas.webp'
import GRC from '../assets/cybersecurity/GRC.webp'
import IdentityAccess from '../assets/cybersecurity/Identity and acess.png'
import  ThreatManagement from '../assets/cybersecurity/Threat Management.png'
import Devops from '../assets/Cloud/DevOps.png'
import Migration from '../assets/Cloud/Migration Services.png'
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

]
export default data