import React from 'react'

const section2 = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#2563EB] to-[#1E40AF] text-white pt-20 pb-80 overflow-hidden">
      {/* Content Above the Wave */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Explore Our Solutions
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
            
          <a
            href="#cybersecurity"
            className=" flex flex-row bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>

            Cybersecurity
          </a>
          <a
            href="#cloud"
            className="flex flex-row bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
</svg>

            Cloud
          </a>
          <a
            href="#ai-automation"
            className="flex flex-row bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>

            AI & Automation
          </a>
          <a
            href="#collaboration"
            className="flex flex-row bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
</svg>

            Collaboration
          </a>
        </div>
      </div>

      {/* Wavy Bottom SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-56"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 200"
        >
          <path
            d="M0,100 C300,200 900,0 1200,100 L1200,200 L0,200 Z"
            fill="#fff"
          />
        </svg>
      </div>
    </section>
  )
}

export default section2