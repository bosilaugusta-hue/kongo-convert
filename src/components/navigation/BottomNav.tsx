import { BarChart3, Home, User } from "lucide-react";

interface BottomNavProps {
	activeTab: "accueil" | "taux" | "services" | "contact";
	setActiveTab: (tab: "accueil" | "taux" | "services" | "contact") => void;
}

function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
	return (
		<div
			className="
        fixed
        bottom-4
        left-1/2
        z-50

        flex
        w-[92%]
        max-w-[430px]

        -translate-x-1/2

        items-center
        justify-around

        rounded-[30px]

        border
        border-white/20

        bg-[#07111f]/75

        px-6
        py-4

        backdrop-blur-3xl

        shadow-[0_10px_40px_rgba(0,0,0,0.35)]

        lg:hidden
      "
		>
			{/* BOUTON ACCUEIL */}
			<button
				type="button"
				onClick={() => setActiveTab("accueil")}
				className={`flex flex-col items-center gap-1 ${
					activeTab === "accueil" ? "text-blue-400" : "text-white/65"
				}`}
			>
				<Home size={24} />
				<span className="text-[11px] font-medium">Accueil</span>
			</button>

			{/* BOUTON TAUX */}
			<button
				type="button"
				onClick={() => setActiveTab("taux")}
				className={`flex flex-col items-center gap-1 ${
					activeTab === "taux" ? "text-blue-400" : "text-white/65"
				}`}
			>
				<BarChart3 size={24} />
				<span className="text-[11px] font-medium">Taux</span>
			</button>

			{/* BOUTON CONTACT */}
			<button
				type="button"
				onClick={() => setActiveTab("contact")}
				className={`flex flex-col items-center gap-1 ${
					activeTab === "contact" ? "text-blue-400" : "text-white/65"
				}`}
			>
				<User size={24} />
				<span className="text-[11px] font-medium">Contact</span>
			</button>
		</div>
	);
}

export default BottomNav;