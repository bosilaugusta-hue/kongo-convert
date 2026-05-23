import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { translations } from "../../translations";

import frFlag from "../../assets/flags/fr.png";
import gbFlag from "../../assets/flags/gb.png";
import cdFlag from "../../assets/flags/cd.png";

interface NavbarProps {
	darkMode: boolean;
	setDarkMode: (value: boolean) => void;
	activeTab: "accueil" | "taux" | "services" | "contact";
	setActiveTab: (tab: "accueil" | "taux" | "services" | "contact") => void;
	langCode: "FR" | "EN" | "LN";
	setLangCode: (lang: "FR" | "EN" | "LN") => void;
}

function Navbar({ activeTab, setActiveTab, langCode, setLangCode }: NavbarProps) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [langMenuOpen, setLangMenuOpen] = useState(false);

	const languages = [
		{ code: "FR", name: "Français", flagImg: frFlag },
		{ code: "EN", name: "English", flagImg: gbFlag },
		{ code: "LN", name: "Lingala", flagImg: cdFlag },
	] as const;

	const currentLang = languages.find((l) => l.code === langCode) || languages[0];
	const t = translations[langCode];

	const navigationItems = [
		{ name: t.navAccueil, id: "accueil" },
		{ name: t.navTaux, id: "taux" },
		{ name: t.navServices, id: "services" },
		{ name: t.navContact, id: "contact" },
	] as const;

	return (
		<header className="w-full z-50">
			<div className="mx-auto flex max-w-7xl items-center justify-between rounded-[28px] border border-white/40 bg-white/75 px-4 py-3 shadow-[0_10px_40px_rgba(15,23,42,0.10)] backdrop-blur-2xl sm:px-6 lg:rounded-full lg:px-6 lg:py-4">
				
				{/* LOGO */}
				<div className="flex items-center gap-3">
					<div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-xl font-black text-white">
						K
					</div>
					<div>
						<h1 className="text-xl sm:text-2xl font-black leading-none tracking-[-0.03em] text-slate-900">
							<span className="text-blue-600">Kongo</span>
							<span className="text-red-500">Convert</span>
						</h1>
						<p className="hidden text-sm sm:block text-slate-500">Fintech RDC</p>
					</div>
				</div>

				{/* NAV ITEMS TRADUITS */}
				<nav className="hidden items-center gap-10 lg:flex">
					{navigationItems.map((item) => (
						<button
							key={item.id}
							type="button"
							onClick={() => setActiveTab(item.id)}
							className={`text-[15px] font-semibold transition-all duration-300 ${
								activeTab === item.id
									? "text-blue-600 scale-105"
									: "text-slate-700 hover:text-blue-600"
							}`}
						>
							{item.name}
						</button>
					))}
				</nav>

				{/* SELECTEUR DE LANGUES AVEC PROTECTION DES CONTRAINTES IMAGE */}
				<div className="flex items-center gap-4 relative">
					<button
						type="button"
						onClick={() => setLangMenuOpen(!langMenuOpen)}
						className="flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-3.5 py-2 shadow-sm transition-all duration-300 hover:border-blue-300 font-bold text-slate-700 text-sm"
					>
						{/* Sécurité maximale pour le ratio d'affichage des drapeaux (surtout FR) */}
						<div className="w-6 h-6 min-w-[24px] min-h-[24px] rounded-full overflow-hidden shadow-xs bg-slate-100 flex items-center justify-center">
							<img 
								src={currentLang.flagImg} 
								alt={currentLang.name} 
								className="w-full h-full object-cover aspect-square"
							/>
						</div>
						<span>{currentLang.code}</span>
						<ChevronDown size={14} className={`transition-transform duration-200 text-slate-400 ${langMenuOpen ? "rotate-180" : ""}`} />
					</button>

					{/* LISTE DÉROULANTE */}
					{langMenuOpen && (
						<div className="absolute top-full right-0 mt-2 w-44 rounded-2xl border border-slate-100 bg-white p-1.5 shadow-xl z-50">
							{languages.map((lang) => (
								<button
									key={lang.code}
									type="button"
									onClick={() => {
										setLangCode(lang.code);
										setLangMenuOpen(false);
									}}
									className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-semibold transition-all ${
										langCode === lang.code ? "bg-blue-50 text-blue-600" : "text-slate-700 hover:bg-slate-50"
									}`}
								>
									<div className="w-6 h-6 min-w-[24px] min-h-[24px] rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
										<img 
											src={lang.flagImg} 
											alt={lang.name} 
											className="w-full h-full object-cover aspect-square"
										/>
									</div>
									<span>{lang.name}</span>
								</button>
							))}
						</div>
					)}

					{/* MENU MOBILE BUTTON */}
					<button
						type="button"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm lg:hidden"
					>
						{mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
					</button>
				</div>
			</div>
		</header>
	);
}

export default Navbar;