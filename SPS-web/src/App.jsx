import React from 'react';
import Startup from './sections/startup';
import HomeHero from './sections/Home_hero'
import WhatIf from './sections/WhatIf';
import Buttonsbg from './sections/buttonsbg';
import DomainsInfo from './components/domainsInfo'
import MaindomaisSection from './sections/MainDomainSection';
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
