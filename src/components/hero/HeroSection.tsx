import ConverterCard from "../converter/ConverterCard"

import heroImage from "../../assets/images/Kinshasa.jpeg"
import waxPattern from "../../assets/images/wax-pattern.png"

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kinshasa"
          className="
            h-full
            w-full

            object-cover

            brightness-110
            saturate-125
          "
        />

        {/* Light overlay */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-r
            from-[#f8fafc]/95
            via-[#f8fafc]/70
            to-[#f8fafc]/20
          "
        />
      </div>

      {/* Wax */}
      <div
        className="
          absolute
          left-0
          top-0

          hidden
          h-full
          w-32

          overflow-hidden

          lg:block
        "
      >
        <img
          src={waxPattern}
          alt="Wax Congo"
          className="
            h-full
            w-full

            object-cover

            opacity-95
          "
        />
      </div>

      {/* Glow */}
      <div
        className="
          absolute
          left-[20%]
          top-1/2

          h-[500px]
          w-[500px]

          -translate-y-1/2

          rounded-full

          bg-blue-500/20

          blur-3xl
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10

          mx-auto
          grid

          min-h-screen
          max-w-7xl

          items-center

          gap-16

          px-6
          py-24

          lg:grid-cols-2
        "
      >
        {/* LEFT */}
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
              border-slate-200

              bg-white/80

              px-6
              py-3

              shadow-sm

              backdrop-blur-xl
            "
          >
            <div className="h-3 w-3 rounded-full bg-green-500" />

            <span
              className="
                font-medium

                text-slate-700
              "
            >
              Taux en temps réel
            </span>
          </div>

          {/* Title */}
          <h1
            className="
              max-w-3xl

              text-5xl
              font-black

              leading-[0.95]
              tracking-tight

              text-slate-900

              md:text-7xl
            "
          >
            Convertissez vos
            <br />
            devises avec
            <br />
            <span className="text-blue-600">
              élégance
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-8

              max-w-xl

              text-xl
              leading-9

              text-slate-600
            "
          >
            La plateforme moderne de conversion
            pensée pour la République Démocratique
            du Congo.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-5">
            <button
              type="button"
              className="
                rounded-2xl

                bg-blue-600

                px-8
                py-5

                text-lg
                font-semibold

                text-white

                shadow-[0_10px_30px_rgba(37,99,235,0.35)]

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
                border-slate-200

                bg-white/80

                px-8
                py-5

                text-lg
                font-semibold

                text-slate-700

                shadow-sm

                backdrop-blur-xl

                transition-all
                duration-300

                hover:bg-white
              "
            >
              Voir les taux
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center lg:justify-end">
          <ConverterCard />
        </div>
      </div>
    </section>
  )
}

export default HeroSection