import React from 'react';
import HomeHero from './sections/Home_hero'
import MaindomaisSection from './sections/MainDomainSection'
import Startup from './sections/startup'
import TechPartners from './sections/TechPartners';
import Applications from './Components/Applications';
import NewsAndBlog from './Components/NewsAndBlog';
import Footer from './Components/Footer';
import SPSVerticals from './sections/SPSVerticals'
import Awards from './sections/Awards';
function App() {
  return (
    <div className="App">
    <HomeHero />
    <MaindomaisSection/>
    <Startup/>
    <Applications/>
    <TechPartners/>
    <SPSVerticals/>
    <Awards/>
    <NewsAndBlog/>
    <Footer/>
    </div>
  )
}

export default App