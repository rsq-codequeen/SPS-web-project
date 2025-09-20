import React from 'react';
import Startup from './Sections/startup';
import HomeHero from './Sections/Home_hero'
import WhatIf from './Sections/WhatIf';
import Buttonsbg from './Sections/buttonsbg';
import DomainsInfo from './Components/domainsInfo'  
import MaindomaisSection from './Sections/MainDomainSection';
function App() {
  return (
    <div className="App">
      <HomeHero />
     <MaindomaisSection/>
      <Startup/>

    </div>
  )
}

export default App
