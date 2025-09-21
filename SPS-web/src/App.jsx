import React from 'react';
import Navbar from './Components/Navbar';
import HomeHero from './sections/Home_hero'
import MaindomaisSection from './sections/MainDomainSection'
import Startup from './sections/startup'
import TechPartners from './sections/TechPartners';
import Applications from './Components/Applications';
import NewsAndBlog from './Components/NewsAndBlog';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <HomeHero />
    <MaindomaisSection/>
    <Startup/>
    <Applications/>
    <TechPartners/>
    <NewsAndBlog/>
    <Footer/>
    </div>
  )
}

export default App