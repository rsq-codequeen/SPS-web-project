import React from 'react'

const section4 = () => {
  return (
    <section className="relative py-16 px-6 lg:px-20">
      <div className="relative max-w-6xl mx-auto">
        {/* Tag Banner */}
        <div className="bg-white border-4 border-blue-600 rounded-r-2xl shadow-lg overflow-hidden">
          {/* Left tag effect */}
          <div className="absolute -left-8 top-0 bottom-0 w-8 bg-blue-600 clip-tag"></div>

          {/* Content */}
          <div className="relative p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
              Our Startups
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
              Digital solutions we have built for ourselves and our customers
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
              We develop AI based solutions for corporate & startups. From
              strategy to execution, we guide our clients through their next
              digital transformation leveraging technologies like{" "}
              <span className="font-medium text-blue-600">
                Data Analytics, Natural Language Processing, Computer Vision,
                Machine Learning, Deep Learning & IoT.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Custom CSS for tag shape */}
      <style>{`
        .clip-tag {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 20% 50%);
        }
      `}</style>
    </section>
  )
}

export default section4