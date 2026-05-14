import ConverterCard from '../converter/ConverterCard'

import heroImage from '../../assets/images/Kinshasa.jpeg'
import waxPattern from '../../assets/images/wax-pattern.png'

function HeroSection() {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-[#020817]
      "
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kinshasa"
          className="
            h-full
            w-full

            object-cover

            brightness-[0.85]
            saturate-[1.1]
          "
        />

        {/* PREMIUM DARK OVERLAY */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-r
            from-[#020817]/78
            via-[#020817]/52
            to-[#020817]/15
          "
        />

        {/* SOFT GLASS OVERLAY */}
        <div
          className="
            absolute
            inset-0

            bg-black/10
          "
        />
      </div>

      {/* WAX LEFT */}
      <div
        className="
          absolute
          left-0
          top-0

          hidden
          h-full
          w-[130px]

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

            scale-[0.78]

            object-cover
            object-center

            opacity-100
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10

          mx-auto
          grid

          min-h-screen
          max-w-7xl

          items-center

          gap-20

          px-6
          py-24

          lg:grid-cols-2
        "
      >
        {/* LEFT */}
        <div>
          {/* BADGE */}
          <div
            className="
              mb-8

              inline-flex
              items-center
              gap-3

              rounded-full

              border
              border-white/20

              bg-white/10

              px-6
              py-3

              shadow-[0_10px_30px_rgba(0,0,0,0.25)]

              backdrop-blur-2xl
            "
          >
            <div className="h-3 w-3 rounded-full bg-green-500" />

            <span
              className="
                text-sm
                font-semibold

                text-white
              "
            >
              Taux en temps réel
            </span>
          </div>

          {/* TITLE */}
          <h1
            className="
              max-w-[620px]

              text-5xl
              font-black

              leading-[0.92]
              tracking-tight

              text-white

              md:text-6xl
              lg:text-[88px]
            "
          >
            Convertissez
            <br />
            vos devises avec
            <br />

            <span className="text-blue-500">
              élégance
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-8

              max-w-xl

              text-xl
              leading-9

              text-white/75
            "
          >
            La plateforme moderne de conversion pensée
            pour la République Démocratique du Congo.
          </p>

          {/* BUTTON */}
          <div className="mt-10">
            <button
              type="button"
              className="
                group

                relative
                overflow-hidden

                rounded-2xl

                border
                border-white/20

                bg-white/10

                px-8
                py-4

                text-base
                font-semibold

                text-white

                backdrop-blur-2xl

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-blue-400/40
                hover:bg-white/15

                hover:shadow-[0_10px_40px_rgba(37,99,235,0.20)]
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-r
                  from-white/0
                  via-white/10
                  to-white/0

                  opacity-0

                  transition-opacity
                  duration-500

                  group-hover:opacity-100
                "
              />

              <span
                className="
                  relative
                  z-10

                  flex
                  items-center
                  gap-3
                "
              >
                Voir les taux

                <span
                  className="
                    text-lg

                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="
            flex
            justify-center

            lg:justify-end
          "
        >
          <div
            className="
              transition-all
              duration-500

              hover:-translate-y-2
            "
          >
            <ConverterCard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection