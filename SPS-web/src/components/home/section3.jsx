import React from 'react'

const section3 = () => {
  return (
     <section className="relative bg-gray-50  px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          Cybersecurity
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 text-justify max-w-4xl mx-auto leading-relaxed mb-16">
          <span className="font-semibold">SPS Cybersecurity team</span> has the following practices:
          <br />
          <br />
          <span className="text-blue-600 font-medium">Digital Trust</span> — User Security, Data Security, Mobile Device Management
          <br />
          <span className="text-blue-600 font-medium">Threat Management</span> — Cybersecurity Program, SIEM systems, Application Security, Network Security
          <br />
          <span className="text-blue-600 font-medium">Keysight</span> — Professional Services, Help Desk Services, Security Operations
          <br />
          <span className="text-blue-600 font-medium">SAP Security</span>
        </p>

        {/* Cards with Staggered Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-blue-600 p-6 rounded-2xl shadow-lg transform md:translate-y-6 hover:bg-blue-700 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3 text-white">Card One</h3>
            <p className="text-blue-100">
              Random text inside card one. It can be service details, feature highlight, or anything else.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-600 p-6 rounded-2xl shadow-lg transform md:-translate-y-6 hover:bg-blue-700 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3 text-white">Card Two</h3>
            <p className="text-blue-100">
              Random text inside card two. It will be aligned differently to create a dynamic layout.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-600 p-6 rounded-2xl shadow-lg transform md:translate-y-6 hover:bg-blue-700 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3 text-white">Card Three</h3>
            <p className="text-blue-100">
              Random text inside card three. This staggered design makes the section visually engaging.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default section3