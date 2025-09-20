import React from 'react';
import HomeHero from './sections/Home_hero'
import MaindomaisSection from './sections/MainDomainSection'
import Startup from './sections/startup'
import TechPartners from './sections/TechPartners';
import Applications from './Components/Applications';
import SPSVerticals from './sections/SPSVerticals';
function App() {
  return (
    <div className="App">
        <HomeHero />
        <MaindomaisSection/>
        <Startup/>
        <Applications/>
        <TechPartners/>
        <SPSVerticals/>
    </div>
  )
}

export default App