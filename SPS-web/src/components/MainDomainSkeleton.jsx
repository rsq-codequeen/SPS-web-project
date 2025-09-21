const MainDomainSkeleton = () => {
  return (
    <div className="flex">
    <div className="w-full lg:w-[25%] flex justify-center ml-2 sm:ml-3 md:ml-4 lg:ml-6 xl:ml-8">
      {/* This inner div mimics the size and rounded corners of the main container */}
      <div className="bg-gray-200 animate-pulse rounded-xl sm:rounded-2xl md:rounded-3xl p-4 w-full h-64 sm:h-68 md:h-72 flex flex-col items-center justify-center">
        {/* Container for the text placeholders to maintain centering */}
        <div className="text-center">
          {/* Placeholder for the large "?" character */}
          <div className="bg-gray-400 rounded-full h-16 w-16 mb-4 sm:mb-6 md:mb-8 mx-auto"></div>
          {/* Placeholder for the "What if" text */}
          <div className="bg-gray-400 h-6 w-24 mx-auto"></div>
        </div>
      </div>
    </div>
     <div className="w-full lg:w-[75%] flex justify-center mr-2 sm:mr-3 md:mr-4 lg:mr-6 xl:mr-8">
      {/* This inner div mimics the size, padding, and rounded corners of the main container */}
      <div className="bg-gray-200 animate-pulse rounded-xl sm:rounded-2xl md:rounded-3xl p-4 w-full h-64 sm:h-68 md:h-72">
        {/* The list container to simulate the spacing of the list items */}
        <ul className="space-y-1 sm:space-y-2 md:space-y-2 lg:space-y-3">
          {/* A generic list item to simulate each bullet point and line of text */}
          <li className="flex items-start">
            {/* Placeholder for the blue bullet point */}
            <span className="bg-gray-400 h-2 w-2 rounded-full mt-2 mr-3"></span>
            {/* Placeholder for the line of text. The width is slightly reduced to make it look more realistic. */}
            <div className="h-4 bg-gray-400 rounded-md w-11/12"></div>
          </li>
          <li className="flex items-start">
            <span className="bg-gray-400 h-2 w-2 rounded-full mt-2 mr-3"></span>
            <div className="h-4 bg-gray-400 rounded-md w-10/12"></div>
          </li>
          <li className="flex items-start">
            <span className="bg-gray-400 h-2 w-2 rounded-full mt-2 mr-3"></span>
            <div className="h-4 bg-gray-400 rounded-md w-9/12"></div>
          </li>
          <li className="flex items-start">
            <span className="bg-gray-400 h-2 w-2 rounded-full mt-2 mr-3"></span>
            <div className="h-4 bg-gray-400 rounded-md w-11/12"></div>
          </li>
          <li className="flex items-start">
            <span className="bg-gray-400 h-2 w-2 rounded-full mt-2 mr-3"></span>
            <div className="h-4 bg-gray-400 rounded-md w-full"></div>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default MainDomainSkeleton