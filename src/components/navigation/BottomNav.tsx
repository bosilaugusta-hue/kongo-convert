import {
  BarChart3,
  Home,
  Repeat2,
  User,
} from "lucide-react"

function BottomNav() {
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
        justify-between

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
      {/* HOME */}
      <button
        type="button"
        className="
          flex
          flex-col
          items-center
          gap-1

          text-blue-400
        "
      >
        <Home size={24} />

        <span className="text-[11px] font-medium">
          Accueil
        </span>
      </button>

      {/* CONVERT */}
      <button
        type="button"
        className="
          flex
          flex-col
          items-center
          gap-1

          text-white/65
        "
      >
        <Repeat2 size={24} />

        <span className="text-[11px] font-medium">
          Convertir
        </span>
      </button>

      {/* RATES */}
      <button
        type="button"
        className="
          flex
          flex-col
          items-center
          gap-1

          text-white/65
        "
      >
        <BarChart3 size={24} />

        <span className="text-[11px] font-medium">
          Taux
        </span>
      </button>

      {/* PROFILE */}
      <button
        type="button"
        className="
          flex
          flex-col
          items-center
          gap-1

          text-white/65
        "
      >
        <User size={24} />

        <span className="text-[11px] font-medium">
          Profil
        </span>
      </button>
    </div>
  )
}

export default BottomNav