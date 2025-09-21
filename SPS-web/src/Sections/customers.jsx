import AlliedBank from '../assets/Customers/AlliedBank.webp'
import AskariBank from '../assets/Customers/AskariBank.webp'
import Bakg from '../assets/Customers/Bakg.webp'
import Brytemap from '../assets/Customers/Brytemap.webp'
import ComptrollerOfMaryland from '../assets/Customers/ComptrollerOfMaryland.webp'
import CREYeild from '../assets/Customers//CREYeild.webp'
import DepartmentOfJustics from '../assets/Customers/DepartmentOfJustics.webp'
import DeptOfPublicSafety from '../assets/Customers/DeptOfPublicSafety.webp'
import Doit from '../assets/Customers/Doit.webp'
import AllieFirstMidwestBankdBank from '../assets/Customers/FirstMidwestBank.webp'
import Flouracity from '../assets/Customers/flouracity.webp'
import GatKeyper from '../assets/Customers/GatKeyper.webp'
import Hamdard from '../assets/Customers/Hamdard.webp'
import HighmarkHealth from '../assets/Customers/highmarkHealth.webp'
import Kelectric from '../assets/Customers/Kelectric.webp'
import KuwaitEnergy from '../assets/Customers/KuwaitEnergy.webp'
import LaserShip from '../assets/Customers/LaserShip.webp'
import MarylandDeptOfHumanSciences from '../assets/Customers/MarylandDeptOfHumanSciences.webp'
import RockvileMaryland from '../assets/Customers/RockvileMaryland.webp'
import CustomersImages from '../components/CustomersImages'



const customerLogos = [
  { id: 1, src: AlliedBank, alt: "Allied Bank logo" },
  { id: 2, src: AskariBank, alt: "Askari Bank logo" },
  { id: 3, src: Bakg, alt: "Bakg logo" },
  { id: 4, src: Brytemap, alt: "Brytemap logo" },
  { id: 5, src: ComptrollerOfMaryland, alt: "Comptroller Of Maryland logo" },
  { id: 6, src: CREYeild, alt: "CREYeild logo" },
  { id: 7, src: DepartmentOfJustics, alt: "Department of Justice logo" },
  { id: 8, src: DeptOfPublicSafety, alt: "Department of Public Safety logo" },
  { id: 9, src: Doit, alt: "Doit logo" },
  { id: 10, src: AllieFirstMidwestBankdBank, alt: "First Midwest Bank logo" },
  { id: 11, src: Flouracity, alt: "Flouracity logo" },
  { id: 12, src: GatKeyper, alt: "GatKeyper logo" },
  { id: 13, src: Hamdard, alt: "Hamdard logo" },
  { id: 14, src: HighmarkHealth, alt: "Highmark Health logo" },
  { id: 15, src: Kelectric, alt: "Kelectric logo" },
  { id: 16, src: KuwaitEnergy, alt: "Kuwait Energy logo" },
  { id: 17, src: LaserShip, alt: "LaserShip logo" },
  { id: 18, src: MarylandDeptOfHumanSciences, alt: "Maryland Department of Human Sciences logo" },
  { id: 19, src: RockvileMaryland, alt: "Rockvile Maryland logo" },
];
const customers = () => {
  return (
    <>
    <h5 className='text-blue-900 text-2xl font-bold text-center'>Customers we are proud to work with</h5>
    <p className='text-center'>Our mission is to deliver compelling narratives, remarkable experiences, and outstanding results for our clients.</p>
    <section class="grid grid-cols-4 gap-6 p-8 max-w-3xl mx-auto">
       
       {customerLogos.map((image)=>(
        <CustomersImages
        key={image.id}
        BGimg={image.src}
        altText={image.alt}
        />
       ))}
    </section>
    </>
  )
}

export default customers