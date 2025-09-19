'use client'

const WhatIf = () => {
  return (
    <div className="bg-blue-50 py-4 sm:py-6 md:py-8 lg:py-10">
      <div className="w-full px-0">
        {/* Main Content Boxes */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          
          {/* Left Box - "What if" */}
          <div className="w-full lg:w-[25%] flex justify-center ml-2 sm:ml-3 md:ml-4 lg:ml-6 xl:ml-8">
            <div className="bg-gradient-to-b from-blue-400 to-blue-700 rounded-xl sm:rounded-2xl md:rounded-3xl p-6  w-full h-64 sm:h-72 md:h-80  flex flex-col items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl  font-bold mb-4 sm:mb-6 md:mb-8">
                  ?
                </div>
                <div className="text-xl  xl:text-5xl font-bold">
                  What if
                </div>
              </div>
            </div>
          </div>

          {/* Right Box - Benefits List */}
          <div className="w-full lg:w-[75%] flex justify-center mr-2 sm:mr-3 md:mr-4 lg:mr-6 xl:mr-8">
            <div className="bg-gradient-to-b from-blue-400 to-blue-900 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 w-full h-64 sm:h-72 md:h-80  ">
              <ul className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
                <li className="text-white text-lg  font-medium flex items-start">
                  <span className="text-blue-300 mr-3 mt-1 ">•</span>
                  You could enhance your Identity Management
                </li>
                <li className="text-white text-lg font-medium flex items-start">
                  <span className="text-blue-300 mr-3 mt-1 ">•</span>
                  You could modernize your legacy enterprise information systems
                </li>
                <li className="text-white text-lg font-medium flex items-start">
                  <span className="text-blue-300 mr-3 mt-1 ">•</span>
                  You could have Security Operations Center 24x7
                </li>
                <li className="text-white text-lg font-medium flex items-start">
                  <span className="text-blue-300 mr-3 mt-1 ">•</span>
                  You could have your Cyber Security environment managed for you.
                </li>
                <li className="text-white text-lg font-medium flex items-start">
                  <span className="text-blue-300 mr-3 mt-1 ">•</span>
                  You could have Compliance Artifacts for your Auditors at click of a button
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="flex justify-center">
          <button className="bg-[rgb(218, 240, 255)] border-3 border-blue-900 rounded-full sm:rounded-full md:rounded-full px-6 py-3 sm:py-4 md:py-4 lg:py-4 flex items-center gap-3 sm:gap-4 md:gap-4 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
            {/* Settings Icon */}
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-black" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            <span className="text-black font-semibold text-sm sm:text-base">
              Request Consultation
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default WhatIf
