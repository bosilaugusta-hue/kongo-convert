import { useState } from "react";

import ContactSection from "./components/contact/ContactSection";
import FeaturesSection from "./components/features/FeaturesSection";
import HeroSection from "./components/hero/HeroSection";
import Navbar from "./components/navbar/Navbar";
import BottomNav from "./components/navigation/BottomNav";
import RatesSection from "./components/rates/RatesSection";

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const [activeTab, setActiveTab] = useState<"accueil" | "taux" | "services" | "contact">("accueil");
	const [langCode, setLangCode] = useState<"FR" | "EN" | "LN">("FR");

	return (
		<div className={darkMode ? "dark" : ""}>
			<div className="min-h-screen w-full bg-[#020817] text-white flex flex-col relative overflow-x-hidden">
				
				{/* LA NAVBAR FLOATING */}
				<div className="absolute top-4 left-0 right-0 w-full max-w-7xl mx-auto px-4 sm:px-6 z-50">
					<Navbar
						darkMode={darkMode}
						setDarkMode={setDarkMode}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
						langCode={langCode}
						setLangCode={setLangCode}
					/>
				</div>

				{/* CORPS DE PAGE */}
				<main className="w-full flex-1 flex flex-col justify-start">
					{activeTab === "accueil" && (
						<HeroSection langCode={langCode} />
					)}

					{activeTab !== "accueil" && (
						<div className="w-full flex-1">
							{activeTab === "taux" && <RatesSection />}
							{activeTab === "services" && <FeaturesSection />}
							{activeTab === "contact" && <ContactSection />}
						</div>
					)}
				</main>

				<BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
			</div>
		</div>
	);
}

export default App;