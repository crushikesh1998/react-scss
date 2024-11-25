import BuildSection from './components/buildSection/BuildSection'
import CompaniesSection from './components/companiesSection/CompaniesSection'
import FeatureSection from './components/featureSection/FeatureSection'
import Footer from './components/footer/Footer'
import HabitSection from './components/habitSection/HabitSection'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import PriceSection from './components/priceSection/PriceSection'
import Testimonials from './components/testimonials/Testimonials'
function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <CompaniesSection/>
      <FeatureSection/>
      <HabitSection/>
      <BuildSection/>
      <PriceSection/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App
