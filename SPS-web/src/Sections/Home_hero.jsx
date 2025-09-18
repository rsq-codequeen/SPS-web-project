'use client'
import heroimg from '../assets/heroimg.png'
import WhatIf from './WhatIf'

const Home_hero = () => {

  return (
    <>
      <div 
        className="relative w-screen h-[80vh] overflow-hidden"
        style={{
          backgroundImage: `url(${heroimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0"></div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-4xl lg:max-w-6xl xl:max-w-7xl">
            {/* Main Text Box */}
            <div className="bg-black/10 backdrop-blur-sm border border-white/100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white leading-tight">
                  We are an IT Solutions Provider focused on Solving Business Problems leveraging AI, Cloud, Automation & Cybersecurity
                </h1>
      
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <button className="bg-gradient-to-b from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-900 border border-white/20 rounded-full sm:rounded-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 sm:py-3 md:py-4 lg:py-5 text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                How can we help you today?
              </button>
            </div>
          </div>
        </div>
      </div>
      <WhatIf />
    </>
  )
}

export default Home_hero