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

function Navbar({
	activeTab,
	setActiveTab,
	langCode,
	setLangCode,
}: NavbarProps) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [langMenuOpen, setLangMenuOpen] = useState(false);

	const languages = [
		{ code: "FR", name: "Français", flagImg: frFlag },
		{ code: "EN", name: "English", flagImg: gbFlag },
		{ code: "LN", name: "Lingala", flagImg: cdFlag },
	] as const;

	const currentLang =
		languages.find((l) => l.code === langCode) || languages[0];

	const t = translations[langCode];

	const navigationItems = [
		{ name: t.navAccueil, id: "accueil" },
		{ name: t.navTaux, id: "taux" },
		{ name: t.navServices, id: "services" },
		{ name: t.navContact, id: "contact" },
	] as const;

	return (
		<header
			className="
				fixed
				top-0
				left-0

				z-50

				w-full

				px-3
				pt-3

				lg:px-0
				lg:pt-0
			"
		>
			<div
				className="
					mx-auto

					max-w-7xl
				"
			>
				{/* NAVBAR */}
				<div
					className="
						flex
						items-center
						justify-between

						rounded-[26px]

						border
						border-white/40

						bg-white/70

						px-4
						py-3

						shadow-[0_10px_40px_rgba(15,23,42,0.10)]

						backdrop-blur-2xl

						sm:px-6

						lg:rounded-full
						lg:px-6
						lg:py-4
					"
				>
					{/* LOGO */}
					<div className="flex items-center gap-3">
						<div
							className="
								flex
								h-10
								w-10

								items-center
								justify-center

								rounded-2xl

								bg-gradient-to-br
								from-blue-600
								to-blue-500

								text-xl
								font-black
								text-white

								sm:h-12
								sm:w-12
							"
						>
							K
						</div>

						<div>
							<h1
								className="
									text-[18px]
									font-black
									leading-none
									tracking-[-0.03em]

									text-slate-900

									sm:text-2xl
								"
							>
								<span className="text-blue-600">
									Kongo
								</span>

								<span className="text-red-500">
									Convert
								</span>
							</h1>


						</div>
					</div>

					{/* NAVIGATION DESKTOP */}
					<nav className="hidden items-center gap-10 lg:flex">
						{navigationItems.map((item) => (
  <button
    key={item.id}
    type="button"
    onClick={() => setActiveTab(item.id)}
    className={`
      relative

      py-2

      text-[15px]
      font-semibold

      transition-all
      duration-300

      ${
        activeTab === item.id
          ? "text-blue-600"
          : "text-slate-700 hover:text-blue-600"
      }
    `}
  >
    {item.name}

    {activeTab === item.id && (
      <span
        className="
          absolute
          left-0
          -bottom-1

          h-[3px]
          w-full

          rounded-full

          bg-blue-600
        "
      />
    )}
  </button>
))}
					</nav>

					{/* RIGHT SIDE */}
					<div className="relative flex items-center gap-3">
						{/* LANG SELECT */}
						<button
							type="button"
							onClick={() =>
								setLangMenuOpen(!langMenuOpen)
							}
							className="
								flex
								items-center
								gap-2.5

								rounded-2xl

								border
								border-slate-200

								bg-white

								px-3.5
								py-2

								text-sm
								font-bold
								text-slate-700

								shadow-sm

								transition-all
								duration-300

								hover:border-blue-300
							"
						>
							<div
								className="
									flex
									h-6
									w-6

									items-center
									justify-center

									overflow-hidden

									rounded-full

									bg-slate-100
								"
							>
								<img
									src={currentLang.flagImg}
									alt={currentLang.name}
									className="
										h-full
										w-full
										object-cover
									"
								/>
							</div>

							<span>{currentLang.code}</span>

							<ChevronDown
								size={14}
								className={`
									text-slate-400
									transition-transform
									duration-200

									${
										langMenuOpen
											? "rotate-180"
											: ""
									}
								`}
							/>
						</button>

						{/* LANG MENU */}
						{langMenuOpen && (
							<div
								className="
									absolute
									right-0
									top-full

									z-50

									mt-2
									w-44

									rounded-2xl

									border
									border-slate-100

									bg-white

									p-1.5

									shadow-xl
								"
							>
								{languages.map((lang) => (
									<button
										key={lang.code}
										type="button"
										onClick={() => {
											setLangCode(lang.code);
											setLangMenuOpen(false);
										}}
										className={`
											flex
											w-full
											items-center
											gap-3

											rounded-xl

											px-3
											py-2

											text-left
											text-sm
											font-semibold

											transition-all

											${
												langCode === lang.code
													? "bg-blue-50 text-blue-600"
													: "text-slate-700 hover:bg-slate-50"
											}
										`}
									>
										<div
											className="
												flex
												h-6
												w-6

												items-center
												justify-center

												overflow-hidden

												rounded-full

												bg-slate-100
											"
										>
											<img
												src={lang.flagImg}
												alt={lang.name}
												className="
													h-full
													w-full
													object-cover
												"
											/>
										</div>

										<span>{lang.name}</span>
									</button>
								))}
							</div>
						)}

						{/* MOBILE BUTTON */}
						<button
							type="button"
							onClick={() =>
								setMobileMenuOpen(!mobileMenuOpen)
							}
							className="
								flex
								h-11
								w-11

								items-center
								justify-center

								rounded-2xl

								border
								border-white/40

								bg-white/80

								text-slate-700

								shadow-[0_4px_20px_rgba(15,23,42,0.08)]

								backdrop-blur-xl

								transition-all
								duration-300

								hover:scale-105

								lg:hidden
							"
						>
							{mobileMenuOpen ? (
								<X size={22} />
							) : (
								<Menu size={22} />
							)}
						</button>
					</div>
				</div>

				{/* MOBILE MENU */}
				{mobileMenuOpen && (
					<div
						className="
							mt-3

							rounded-[28px]

							border
							border-white/40

							bg-white/75

							p-4

							shadow-[0_10px_40px_rgba(15,23,42,0.10)]

							backdrop-blur-2xl

							lg:hidden
						"
					>
						<nav className="flex flex-col gap-2">
							{navigationItems.map((item) => (
								<button
									key={item.id}
									type="button"
									onClick={() => {
										setActiveTab(item.id);
										setMobileMenuOpen(false);
									}}
									className={`
										rounded-2xl

										px-4
										py-3

										text-left
										text-[15px]
										font-semibold

										transition-all
										duration-300

										${
											activeTab === item.id
												? "bg-blue-600 text-white"
												: "text-slate-700 hover:bg-blue-50"
										}
									`}
								>
									{item.name}
								</button>
							))}
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}

export default Navbar;