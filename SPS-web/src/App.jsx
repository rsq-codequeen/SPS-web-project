import React from 'react';
import HomeHero from './sections/Home_hero'
import MaindomaisSection from './sections/MainDomainSection'
import Startup from './sections/startup'
import TechPartners from './sections/TechPartners';
function App() {
  return (
    <div className="App">
    <HomeHero />
    <MaindomaisSection/>
    <Startup/>
    <TechPartners/>
    </div>
  )
}

export default App