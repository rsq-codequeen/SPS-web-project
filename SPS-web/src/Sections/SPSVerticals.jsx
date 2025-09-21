import { useState, useRef, useEffect } from 'react';
import SpsVerticalsdata from '../components/SPSVerticalsdata';
import SPSVerticalCard from '../components/SPSVerticalCard';

const SPSVerticals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3;
  const cardContainerRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SpsVerticalsdata.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + SpsVerticalsdata.length) % SpsVerticalsdata.length);
  };

  // Adjust container width to show all cards in a row
  useEffect(() => {
    if (cardContainerRef.current) {
      cardContainerRef.current.style.width = `${SpsVerticalsdata.length * 100 / cardsPerView}%`;
    }
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-8 w-full overflow-hidden relative">
      <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">SPS Verticals</h2>

      <div className="relative w-full max-w-6xl">
        <div 
          ref={cardContainerRef}
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${(currentIndex / SpsVerticalsdata.length) * 100}%)` }}
        >
          {SpsVerticalsdata.map((card, index) => (
            <div key={index} className="flex-shrink-0" style={{ width: `${100 / SpsVerticalsdata.length}%` }}>
              <SPSVerticalCard {...card} />
            </div>
          ))}
        </div>

        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white py-10 rounded-lg border-2 border-blue-800  shadow-md hover:bg-gray-100 focus:outline-none z-10"
          aria-label="Previous cards"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-gray-700">
            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
          </svg>
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white py-10 rounded-lg border-2 border-blue-800  shadow-md hover:bg-gray-100 focus:outline-none z-10"
          aria-label="Next cards"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-gray-700">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      <div className="flex mt-10">
        {SpsVerticalsdata.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`mx-2 w-3 h-3 rounded-full ${currentIndex === index ? 'bg-gray-700' : 'bg-gray-300'}`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default SPSVerticals;