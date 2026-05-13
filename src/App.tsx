import { useState } from "react"

import FeaturesSection from "./components/features/FeaturesSection"
import HeroSection from "./components/hero/HeroSection"
import Navbar from "./components/navbar/Navbar"
import RatesSection from "./components/rates/RatesSection"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white transition-colors duration-500 dark:bg-[#020817]">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <HeroSection />

        <RatesSection />

        <FeaturesSection />
      </div>
    </div>
  )
}

export default App