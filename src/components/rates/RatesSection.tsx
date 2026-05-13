import RateCard from './RateCard'

import usFlag from '../../assets/flags/us.png'
import euFlag from '../../assets/flags/eu.png'
import gbFlag from '../../assets/flags/gb.png'
import zaFlag from '../../assets/flags/za.png'

function RatesSection() {
  return (
    <section
      className="
        relative

        overflow-hidden

        bg-[#020817]

        py-24
      "
    >
      {/* Glow background */}
      <div
        className="
          absolute
          top-1/2
          left-1/2

          h-[500px]
          w-[500px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-blue-600/10

          blur-[140px]
        "
      />

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-7xl

          px-6
        "
      >
        {/* Header */}
        <div
          className="
            mb-14

            flex
            flex-col
            items-start
            gap-6

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            {/* Badge */}
            <div
              className="
                mb-5

                inline-flex
                items-center
                gap-3

                rounded-full

                border border-white/10

                bg-white/[0.03]

                px-5
                py-2

                backdrop-blur-xl
              "
            >
              <div
                className="
                  h-2.5
                  w-2.5

                  rounded-full

                  bg-green-400

                  animate-pulse
                "
              />

              <span
                className="
                  text-sm
                  font-medium
                  text-white/80
                "
              >
                Marché en direct
              </span>
            </div>

            <h2
              className="
                max-w-3xl

                text-4xl
                font-black
                leading-tight
                tracking-tight
                text-white

                md:text-5xl
              "
            >
              Taux de change en
              <span className="text-blue-500">
                {' '}
                temps réel
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-2xl

                text-lg
                leading-relaxed
                text-white/60
              "
            >
              Consultez les principaux taux de change utilisés
              en République Démocratique du Congo avec une mise
              à jour moderne et rapide.
            </p>
          </div>

          {/* Live update */}
          <div
            className="
              rounded-2xl

              border border-white/10

              bg-white/[0.03]

              px-5
              py-4

              backdrop-blur-xl
            "
          >
            <p className="text-sm text-white/50">
              Dernière mise à jour
            </p>

            <p
              className="
                mt-1

                text-lg
                font-semibold
                text-white
              "
            >
              il y a 6 secondes
            </p>
          </div>
        </div>

        {/* Grid */}
        <div
          className="
            grid
            grid-cols-1
            gap-6

            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          <RateCard
            pair="USD / CDF"
            rate="2 875,40"
            change="+0,56%"
            positive
            flag={usFlag}
          />

          <RateCard
            pair="EUR / CDF"
            rate="3 112,65"
            change="+0,34%"
            positive
            flag={euFlag}
          />

          <RateCard
            pair="GBP / CDF"
            rate="3 631,20"
            change="+0,21%"
            positive
            flag={gbFlag}
          />

          <RateCard
            pair="ZAR / CDF"
            rate="157,80"
            change="-0,18%"
            positive={false}
            flag={zaFlag}
          />
        </div>
      </div>
    </section>
  )
}

export default RatesSection