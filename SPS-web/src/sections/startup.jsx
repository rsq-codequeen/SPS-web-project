import React from "react";
import StartUp from "../assets/StartUps/StartUp.webp";
import Azalio from "../assets/StartUps/Azalio.png";
import BMS from "../assets/StartUps/BMS.png";
import CSM from "../assets/StartUps/CSM.png";
import MYID from "../assets/StartUps/MYID Self Verify.png";

const startup = () => {
  return (
    <>
      <div className="relative w-full min-h-screen  p-6 md:p-9 bg-[#00123E] ">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row text-left text-white m-4 md:m-10 gap-8 md:gap-16 items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl font-semibold">Our Startups</h1>
            <h2 className="text-xl md:text-2xl font-semibold">
              Digital solutions we have built for ourselves and our customers
            </h2>
            <p className="text-sm md:text-base">
              We develop AI based solutions for corporate & startups. From
              strategy to execution, we guide our clients through their next
              digital transformation leveraging technologies like Data
              Analytics, Natural Language Processing, Computer Vision, Machine
              Learning, Deep Learning & IoT.
            </p>
          </div>
          <figure className="w-full md:w-fit">
            <img src={StartUp} alt="Startup illustration" className="w-56" />
          </figure>
        </div>

        {/* Startups Image Section */}
        <div className="flex flex-wrap md:flex-row justify-between items-end gap-10 mt-16 px-4 md:px-0">
          <figure className="relative flex flex-col justify-center items-center w-full sm:w-[45%] md:w-[22%] -translate-y-12">
            <img src={Azalio} alt="Azalio" className="w-full " />
            <div className="absolute w-full px-12 text-center text-white">
                <h3 className="font-semibold">Azalio</h3>
              <p className="px-6 text-xs md:text-sm mb-2">
                Keep your frontline employees happy, Reward Employees. Track
                employee engagement. Manage workforce operations.
              </p>
              <button className="px-4 py-1 text-xs md:text-sm bg-white text-[#8561D1] font-semibold rounded-full mt-2 md:mt-4">
                View App
              </button>
            </div>
          </figure>

          <figure className="relative flex flex-col justify-center items-center w-full sm:w-[45%] md:w-[22%]">
            <img src={CSM} alt="CSM" className="w-2xl " />
            <div className="absolute w-full px-8 text-center text-white">
                <h3 className="font-semibold">CSM</h3>
              <p className="px-4 text-xs ">
                CSM helps organizations augment security management by standardizing it around NIST. It helps Identify, Protect, Detect, Respond, Recover maturity of People, Processes & Technology of an organization, conduct risk assessment, create System Security Plan (SSP) and update Plan of Actions and Milestones on a quarterly basis.
              </p>
            </div>
          </figure>

          <figure className="relative flex flex-col justify-center items-center w-full sm:w-[45%] md:w-[22%] -translate-y-12">
            <img src={MYID} alt="MYID" className="w-full " />
            <div className="absolute w-full px-2 text-center text-white">
                <h3 className="font-semibold">MYID Self Verify</h3>
              <p className="text-xs  mb-2">
                MYID helps organizations allow their employees to manage their corporate identity through secure and easy-to-use mobile application.
              </p>
              <button className="px-4 py-1 text-xs md:text-sm bg-white text-[#002EA4] font-semibold rounded-full mt-2 md:mt-4">
                View App
              </button>
            </div>
          </figure>

          <figure className="relative flex flex-col justify-center items-center w-full sm:w-[45%] md:w-[22%]">
            <img src={BMS} alt="BMS" className="w-full " />
            <div className="absolute w-full px-2 text-center text-white">
                <h3 className="font-semibold">BMS</h3>
              <p className="text-xs  mb-2">
                Get real-time insights into every aspect of your company’s performance, optimize processes and streamline business with our Business Management System.
              </p>
              
            </div>
          </figure>
        </div>
      </div>
    </>
  );
};

export default startup;
