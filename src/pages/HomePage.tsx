import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/hero/HeroSection'
import RatesSection from "../components/rates/RatesSection"
import FeaturesSection from '../components/features/FeaturesSection'

function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <RatesSection />
      <FeaturesSection />
    </main>
  )
}

export default HomePage