import React from "react";
import Navbar from "../navbar";
import Hero from "../../assets/Hero.webp";
const hero = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          {/* Left Text Content */}
          <div className="flex-1">
            {/* Main Headline */}
            {/* Main Headline */}
            <h1 className="text-3xl  font-bold text-gray-900 leading-snug">
              What if
            </h1>

            <ul className="mt-6 space-y-4 text-lg  text-gray-800 list-disc list-inside text-justify">
              <li>You could enhance your Identity Management</li>
              <li>
                You could modernize your legacy enterprise information systems
              </li>
              <li>You could have Security Operations Center 24x7</li>
              <li>
                You could have your Cyber Security environment managed for you
              </li>
              <li>
                You could have Compliance Artifacts for your Auditors at click
                of a button
              </li>
            </ul>

            {/* Enhanced Subtext */}
            <p className="mt-6 text-gray-700 leading-relaxed max-w-2xl">
              <span className="font-semibold text-blue-600">
                We are an IT Solutions Provider
              </span>{" "}
              dedicated to{" "}
              <span className="font-semibold">
                solving complex business problems
              </span>
              . By leveraging{" "}
              <span className="font-semibold text-blue-600">
                AI, Cloud, Automation, and Cybersecurity
              </span>
              , we empower enterprises to become smarter, faster, and more
              secure in today’s digital era.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                Get Started
              </a>
              <a
                href="#contact"
                className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors text-lg font-medium"
              >
                How can we help you today?
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={Hero}
              alt="Cybersecurity Illustration"
              className="rounded-2xl shadow-lg max-w-md w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default hero;
