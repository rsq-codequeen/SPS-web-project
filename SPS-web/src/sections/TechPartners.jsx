import styles from "../styles/techPartners.module.css";
import IBM from "../assets/TechnologyPartners/IBM.webp";
import Lenovo from "../assets/TechnologyPartners/Lenovo.webp";
import SAP from "../assets/TechnologyPartners/SAP.webp";
import RedHat from "../assets/TechnologyPartners/RedHat.webp";
import Microsoft from "../assets/TechnologyPartners/Microsoft.webp";
import Google from "../assets/TechnologyPartners/Google.webp";
import Juniper from "../assets/TechnologyPartners/Juniper.webp";
import Nutanix from "../assets/TechnologyPartners/Nutanix.webp";
import Sophos from "../assets/TechnologyPartners/Sophos.webp";
import Keysight from "../assets/TechnologyPartners/Keysight.webp";
import Okta from "../assets/TechnologyPartners/okta.webp";
import Fortinet from "../assets/TechnologyPartners/fortinet.webp";
import SchneiderElectric from "../assets/TechnologyPartners/SchneiderElectric.webp";
import Cybergrx from "../assets/TechnologyPartners/cybergrx.webp";
import Timestream from "../assets/TechnologyPartners/timestream.webp";
import Knowbe4 from "../assets/TechnologyPartners/knowbe4.webp";
import Tenable from "../assets/TechnologyPartners/tenable.webp";
import FishcerIdentity from "../assets/TechnologyPartners/fishcerIdentity.webp";

const TechPartners = () => {
  const TechPartnersBg = {
    clipPath: " polygon(100% 0, 100% 72%, 60% 100%, 0 100%, 0 0)",
    width: "300px",
    height: "200px",
    backgroundColor: "white",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    fontWeight: "bold",
  };
  return (
    <div className="flex">
    {" "}
      <div style={TechPartnersBg}>
        {" "}
        <h3 className="font-semibold p-7 text-2xl text-black text-center">
          Our Technology Partners
        </h3>
        {" "}
      </div>
      {" "}
      <div className="w-full bg-white h-36 relative overflow-hidden">
      
        <div className={`${styles.marqueeContent} absolute inset-0`}>
           <img src={IBM} alt="1" className={styles.image} />
            <img src={Lenovo} alt="2" className={styles.image} />
            <img src={SAP} alt="" className={styles.image} />
            <img src={RedHat} alt="" className={styles.image} />
            <img src={Microsoft} alt="" className={styles.image} />
            <img src={Google} alt="" className={styles.image} />
            <img src={Juniper} alt="" className={styles.image} />
            <img src={Nutanix} alt="" className={styles.image} />
            <img src={Sophos} alt="" className={styles.image} />
            <img src={Keysight} alt="" className={styles.image} />
            <img src={Okta} alt="" className={styles.image} />
            <img src={Fortinet} alt="" className={styles.image} />
           { " "}
          <img src={SchneiderElectric} alt="" className={styles.image} />
           <img src={Cybergrx} alt="" className={styles.image} />
           <img src={Timestream} alt="" className={styles.image} />
           <img src={Knowbe4} alt="" className={styles.image} />
           <img src={Tenable} alt="" className={styles.image} />
          {" "}
          <img src={FishcerIdentity} alt="" className={styles.image} />
        </div>
        {" "}
      </div>
    {" "}
    </div>
  );
};

export default TechPartners;
