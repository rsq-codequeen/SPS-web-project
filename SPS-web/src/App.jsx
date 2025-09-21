import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import HomeHeroSkeleton from './components/HomeHeroSekeleton';
import MainDomainSkeleton from './components/MainDomainSkeleton';
import Footer from './components/Footer';
import StartUpSkeleton from './components/StartUpSkeleton';

// Use React.lazy() for all sections you want to lazy-load
const HomeHero = lazy(() => import('./sections/HomeHero'));
const MaindomaisSection = lazy(() => import('./sections/MainDomainSection'));
const Startup = lazy(() => import('./sections/startup'));
const Applications = lazy(() => import('./components/Applications'));
const TechPartners = lazy(() => import('./sections/TechPartners'));
const SPSVerticals = lazy(() => import('./sections/SPSVerticals'));
const Awards = lazy(() => import('./sections/Awards'));
const NewsAndBlog = lazy(() => import('./components/NewsAndBlog'));
const Customers = lazy(() => import('./sections/customers'));

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* Suspense handles the loading state automatically */}
      <Suspense fallback={
        <>
          <HomeHeroSkeleton />
          <MainDomainSkeleton />
          <StartUpSkeleton/>
        </>
      }>
        <HomeHero />
        <MaindomaisSection />
        <Startup />
        <Applications />
        <TechPartners />
        <SPSVerticals />
        <Awards />
        <NewsAndBlog />
        <Customers />
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;