import ConverterCard from "../converter/ConverterCard"
import heroImage from "../../assets/images/Kinshasa.jpeg"
import waxPattern from "../../assets/images/wax-pattern.png"

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#020817]"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-[#020817]/80" />

      {/* Gradient premium */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/95 via-[#020817]/75 to-[#020817]/40" />

      {/* Wax côté gauche */}
      <div className="absolute left-0 top-0 hidden h-full w-20 overflow-hidden lg:block">
        <img
          src={waxPattern}
          alt="Wax pattern"
          className="h-full w-full object-cover opacity-90"
        />
      </div>

      {/* Glow bleu */}
      <div className="absolute left-1/3 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl" />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-screen
          max-w-7xl
          items-center
          gap-10
          px-6
          py-24
          lg:grid-cols-2
        "
      >
        {/* Texte */}
        <div>
          {/* Badge */}
          <div
            className="
              mb-8
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/5
              px-6
              py-3
              backdrop-blur-xl
            "
          >
            <div className="h-3 w-3 rounded-full bg-emerald-400" />

            <span className="font-medium text-white">
              Taux en temps réel
            </span>
          </div>

          {/* Titre */}
          <h1
            className="
              max-w-3xl
              text-5xl
              font-black
              leading-[0.95]
              tracking-tight
              text-white
              md:text-7xl
            "
          >
            Convertissez vos
            <br />
            devises en toute
            <br />
            <span className="text-blue-500">
              simplicité
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-7
              max-w-xl
              text-lg
              leading-8
              text-white/70
            "
          >
            Le convertisseur moderne conçu pour
            la République Démocratique du Congo.
          </p>

          {/* Boutons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <button
              type="button"
              className="
                rounded-2xl
                bg-blue-600
                px-7
                py-4
                text-base
                font-semibold
                text-white
                shadow-[0_0_40px_rgba(37,99,235,0.35)]
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Commencer
            </button>

            <button
              type="button"
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-7
                py-4
                text-base
                font-semibold
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:bg-white/10
              "
            >
              Voir les taux
            </button>
          </div>
        </div>

        {/* Converter */}
        <ConverterCard />
      </div>
    </section>
  )
}

export default HeroSection