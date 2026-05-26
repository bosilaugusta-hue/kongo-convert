import { useState } from "react"

import { CalculatorWidget } from "../components/calculator/CalculatorWidget"
import FeaturesSection from "../components/features/FeaturesSection"
import HeroSection from "../components/hero/HeroSection"
import Navbar from "../components/navbar/Navbar"
import RatesSection from "../components/rates/RatesSection"

function HomePage() {
  const [activeTab, setActiveTab] = useState<
    "accueil" | "taux" | "services" | "contact"
  >("accueil")

  const [langCode, setLangCode] = useState<"FR" | "EN" | "LN">("FR")

  return (
    <main
      className="
        relative
        min-h-screen
        w-full
        overflow-x-hidden
        bg-white
      "
    >
      {/* NAVBAR */}
      <div className="relative z-50">
        <Navbar
          darkMode={false}
          setDarkMode={() => {}}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          langCode={langCode}
          setLangCode={setLangCode}
        />
      </div>

      {/* CONTENU PRINCIPAL */}
      <div className="relative z-10 w-full">
        {activeTab === "accueil" && (
          <>
            <HeroSection langCode={langCode} />
            <RatesSection />
            <FeaturesSection />
          </>
        )}

        {activeTab === "taux" && <RatesSection />}
        {activeTab === "services" && <FeaturesSection />}
      </div>

      {/* 🚀 REMETS LA CALCULATRICE ICI JUSTE AVANT LA FIN DE MAIN */}
      <CalculatorWidget />
    </main>
  )
}

export default HomePage