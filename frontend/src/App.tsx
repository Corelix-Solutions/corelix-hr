import './App.css'
import ContactSection from './landingpageComponents/contact'
import FeaturesSection from './landingpageComponents/features'
import Footer from './landingpageComponents/footer'
import HeroSection from './landingpageComponents/heroSection'
import Header from './landingpageComponents/navbar'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
