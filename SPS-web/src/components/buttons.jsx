import React from 'react'

const Buttons = ({ children, categoryName, activeCategory, onClick }) => {
  // Determine if this button is the active one by comparing the passed props
  const isActive = categoryName === activeCategory;

  // Use a template literal to conditionally apply a class for the active state
  const buttonClasses = `
    px-12 py-2
    bg-gradient-to-r
    flex rounded-lg
    font-semibold
    transition-colors duration-300
    cursor-pointer
    ${isActive 
      ? 'from-[#2F80E8] via-[#2F80E8] to-white text-white' 
      : 'from-gray-300 to-gray-400 text-gray-800'
    }
  `;

  return (
    <button className={buttonClasses} onClick={() => onClick(categoryName)}>
      {children}
    </button>
  )
}

export default Buttons;