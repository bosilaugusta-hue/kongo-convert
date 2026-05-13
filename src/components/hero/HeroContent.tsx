function HeroContent() {
  return (
    <div className="relative z-20 max-w-[620px]">
      {/* Badge */}
      <div
        className="
          inline-flex
          items-center
          gap-3

          px-5
          py-3

          rounded-full

          bg-white/10
          backdrop-blur-xl

          border
          border-white/10

          shadow-lg

          mb-8
        "
      >
        <div className="w-3 h-3 rounded-full bg-green-400" />

        <span className="text-white font-medium text-sm sm:text-base">
          Taux en temps réel
        </span>
      </div>

      {/* Title */}
      <h1
        className="
          text-white
          font-black

          text-[52px]
          lg:text-7xl

          leading-[0.95]

          tracking-[-2px]

          max-w-[700px]
        "
      >
        Convertissez vos devises en toute{' '}
        <span className="text-blue-500">
          simplicité
        </span>
      </h1>

      {/* Description */}
      <p
        className="
          mt-8

          text-base
          lg:text-lg

          text-gray-300

          leading-relaxed

          max-w-[520px]
        "
      >
        Le convertisseur moderne conçu pour la République
        Démocratique du Congo.
      </p>

      {/* Buttons */}
      <div
        className="
          flex
          flex-col
          sm:flex-row

          gap-4

          mt-10
        "
      >
        {/* Primary */}
        <button
  type="button"
  className="
            h-[60px]

            px-8

            rounded-2xl

            bg-blue-600

            text-white
            font-semibold

            shadow-[0_10px_40px_rgba(37,99,235,0.45)]

            transition-all
            duration-300

            hover:scale-[1.02]
            hover:bg-blue-500
          "
        >
          Commencer
        </button>

        {/* Secondary */}
        <button
  type="button"
  className="
            h-[60px]

            px-8

            rounded-2xl

            bg-white/10
            backdrop-blur-xl

            border
            border-white/10

            text-white
            font-semibold

            transition-all
            duration-300

            hover:bg-white/20
          "
        >
          Voir les taux
        </button>
      </div>
    </div>
  )
}

export default HeroContent