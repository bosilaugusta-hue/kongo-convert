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

            brightness-[1.02]
            saturate-[1.05]
          "
        />

        {/* PREMIUM OVERLAY */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-r
            from-[#020817]/55
            via-[#020817]/35
            to-[#020817]/10
          "
        />

        {/* LIGHT GLASS EFFECT */}
        <div
          className="
            absolute
            inset-0

            bg-white/5
          "
        />
      </div>

      {/* BLUE CINEMATIC GLOW */}
      <div
        className="
          absolute
          left-[18%]
          top-1/2

         h-[260px]
w-[260px]

sm:h-[380px]
sm:w-[380px]

lg:h-[500px]
lg:w-[500px]

          -translate-y-1/2

          rounded-full

          bg-blue-600/20

          blur-[140px]
        "
      />

      {/* BLUE RIGHT GLOW */}
      <div
        className="
          absolute
          right-[8%]
          top-1/2

          h-[180px]
w-[180px]

sm:h-[240px]
sm:w-[240px]

lg:h-[320px]
lg:w-[320px]

          -translate-y-1/2

          rounded-full

          bg-blue-500/15

          blur-[120px]
        "
      />

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

          flex
          flex-col

          min-h-[100svh]
          lg:min-h-screen
          max-w-[1400px]

          justify-center

          gap-16

          px-6
          pt-32
          pb-16
          lg:py-24

          sm:px-10

          lg:grid
          lg:grid-cols-2
          lg:items-center
          lg:gap-20
          lg:px-16
        "
      >
        {/* LEFT */}
        <div
          className="
            text-center

            lg:text-left
          "
        >
          {/* BADGE */}
          <div
            className="
              mb-8

              inline-flex
              items-center
              gap-3

              rounded-full

              border
              border-white/30

              bg-white/14

              px-4
py-2.5
sm:px-6
sm:py-3

              backdrop-blur-2xl

              shadow-[0_8px_30px_rgba(0,0,0,0.25)]
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
              mx-auto

              max-w-[620px]

              text-[38px]
              font-extrabold

              leading-[0.95]
              tracking-[-3px]

              text-white

              drop-shadow-[0_8px_35px_rgba(0,0,0,0.35)]

             sm:text-[52px]
              md:text-6xl
              lg:mx-0
              lg:text-[68px]
            "
          >
            Convertissez
            <br />
            vos devises avec
            <br />

            <span
              className="
                text-blue-500

                drop-shadow-[0_0_18px_rgba(37,99,235,0.45)]
              "
            >
              élégance
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-8

              max-w-xl

              text-base
sm:text-lg
              leading-8

              text-white/75

              lg:mx-0
              lg:text-xl
              lg:leading-9
            "
          >
            La plateforme moderne de conversion pensée
            pour la République Démocratique du Congo.
          </p>

          {/* BUTTON */}
          <div
            className="
              mt-10

              flex

              justify-center

              lg:justify-start
            "
          >
            <button
              type="button"
              className="
                group

                relative
                overflow-hidden

                rounded-2xl

                border
                border-white/30

                bg-white/22

                px-6
py-3.5

sm:px-8
sm:py-4

                text-base
                font-semibold

                text-white/95

                backdrop-blur-2xl

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-blue-400/40
                hover:bg-white/25

                hover:shadow-[0_10px_40px_rgba(37,99,235,0.25)]
              "
            >
              {/* BUTTON GLOW */}
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