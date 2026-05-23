import { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/hero/HeroSection'
import RatesSection from '../components/rates/RatesSection'
import FeaturesSection from '../components/features/FeaturesSection'

function HomePage() {
  const [activeTab, setActiveTab] = useState<"accueil" | "taux" | "services" | "contact">("accueil")
  const [langCode, setLangCode] = useState<"FR" | "EN" | "LN">("FR")

  return (
    <main className="w-full min-h-screen bg-[#020817]">
      <div className="max-w-7xl mx-auto px-4">
        {/* On passe tous les paramètres nécessaires pour que TypeScript soit content */}
        <Navbar 
          darkMode={false} 
          setDarkMode={() => {}} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          langCode={langCode} 
          setLangCode={setLangCode} 
        />
        {activeTab === "accueil" && <HeroSection langCode={langCode} />}
        {activeTab === "taux" && <RatesSection />}
        {activeTab === "services" && <FeaturesSection />}
      </div>
    </main>
  )
}

export default HomePage