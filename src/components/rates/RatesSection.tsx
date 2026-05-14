import usFlag from '../../assets/flags/us.png'
import euFlag from '../../assets/flags/eu.png'
import gbFlag from '../../assets/flags/gb.png'
import aeFlag from '../../assets/flags/ae.png'

import {
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react'

import palaisImage from '../../assets/images/PalaisDuPeuple-Kin.png'

function RatesSection() {
  const rates = [
    {
      currency: 'USD',
      value: '2 875,40',
      change: '+0.56%',
      positive: true,
      flag: usFlag,
    },
    {
      currency: 'EUR',
      value: '3 102,15',
      change: '+0.24%',
      positive: true,
      flag: euFlag,
    },
    {
      currency: 'GBP',
      value: '3 540,22',
      change: '-0.18%',
      positive: false,
      flag: gbFlag,
    },
    {
      currency: 'AED',
      value: '782,12',
      change: '+0.42%',
      positive: true,
      flag: aeFlag,
    },
  ]

  return (
    <section
      className="
        relative
        overflow-hidden

        py-28
        lg:py-36
      "
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="
          absolute
          inset-0

          scale-105

          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: `url(${palaisImage})`,
        }}
      />

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0

          bg-[#020817]/60
        "
      />

      {/* BLUE GLOW */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.22),transparent_70%)]
        "
      />

      {/* GLOBAL BLUR */}
      <div
        className="
          absolute
          inset-0

          backdrop-blur-[3px]
        "
      />

      {/* TOP GLOW */}
      <div
        className="
          absolute
          left-1/2
          top-0

          h-[500px]
          w-[500px]

          -translate-x-1/2

          rounded-full

          bg-blue-500/10

          blur-3xl
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10

          mx-auto
          max-w-7xl

          px-6
        "
      >
        {/* HEADER */}
        <div className="max-w-3xl">
          <p
            className="
              mb-5

              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]

              text-blue-400
            "
          >
            Marché des devises
          </p>

          <h2
            className="
              text-5xl
              font-black
              leading-tight
              tracking-tight

              text-white

              md:text-6xl
            "
          >
            Les taux les plus
            <br />
            suivis en RDC
          </h2>

          <p
            className="
              mt-7

              max-w-2xl

              text-xl
              leading-9

              text-white/70
            "
          >
            Suivez les fluctuations des principales
            devises utilisées en République
            Démocratique du Congo.
          </p>
        </div>

        {/* CARDS */}
        <div
          className="
            mt-20

            grid
            gap-8

            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {rates.map((rate) => (
            <div
              key={rate.currency}
              className="
                group
                relative

                overflow-hidden

                rounded-[34px]

                border
                border-white/10

                bg-[#020817]/72

                backdrop-blur-2xl

                p-7

                transition-all
                duration-500

                hover:-translate-y-3
                hover:scale-[1.02]

                hover:border-blue-400/30

                shadow-[0_20px_80px_rgba(0,0,0,0.35)]

                hover:shadow-[0_25px_90px_rgba(37,99,235,0.20)]
              "
            >
              {/* CARD GLOW */}
              <div
                className="
                  absolute
                  -right-20
                  -top-20

                  h-40
                  w-40

                  rounded-full

                  bg-blue-500/10

                  blur-3xl
                "
              />

              {/* GLASS EFFECT */}
              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-br
                  from-white/5
                  via-transparent
                  to-transparent
                "
              />

              {/* TOP */}
              <div
                className="
                  relative
                  z-10

                  flex
                  items-start
                  justify-between
                "
              >
                <div>
                  {/* FLAG + LABEL */}
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center

                        rounded-full

                        border
                        border-white/10

                        bg-white/5

                        shadow-lg
                      "
                    >
                      <img
                        src={rate.flag}
                        alt={rate.currency}
                        className="
                          h-8
                          w-8

                          rounded-full
                          object-cover
                        "
                      />
                    </div>

                    <div>
                      <p
                        className="
                          text-sm
                          font-medium

                          text-white/45
                        "
                      >
                        Devise
                      </p>

                      <p
                        className="
                          text-xl
                          font-bold

                          text-white
                        "
                      >
                        {rate.currency}
                      </p>
                    </div>
                  </div>

                  {/* VALUE */}
                  <h3
                    className="
                      mt-7

                      text-[58px]
                      font-black

                      leading-none
                      tracking-tight

                      text-white
                    "
                  >
                    {rate.value}
                  </h3>
                </div>

                {/* ICON */}
                <div
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-2xl

                    border

                    ${
                      rate.positive
                        ? 'border-green-400/20 bg-green-500/10 text-green-400'
                        : 'border-red-400/20 bg-red-500/10 text-red-400'
                    }
                  `}
                >
                  {rate.positive ? (
                    <ArrowUpRight size={20} />
                  ) : (
                    <ArrowDownRight size={20} />
                  )}
                </div>
              </div>

              {/* BOTTOM */}
              <div
                className="
                  relative
                  z-10

                  mt-8

                  flex
                  items-center
                  justify-between
                "
              >
                <p
                  className={`
                    text-lg
                    font-bold

                    ${
                      rate.positive
                        ? 'text-green-400'
                        : 'text-red-400'
                    }
                  `}
                >
                  {rate.change}
                </p>

                <p
                  className="
                    text-sm

                    text-white/35
                  "
                >
                  Aujourd'hui
                </p>
              </div>

              {/* GRAPH */}
              <div
                className="
                  relative
                  z-10

                  mt-8

                  h-24

                  overflow-hidden

                  rounded-2xl

                  border
                  border-white/5

                  bg-white/5
                "
              >
                {/* BOTTOM LINE */}
                <div
                  className={`
                    absolute
                    bottom-0
                    left-0
                    right-0

                    h-[2px]

                    ${
                      rate.positive
                        ? 'bg-green-400'
                        : 'bg-red-400'
                    }

                    opacity-20
                  `}
                />

                {/* SVG GRAPH */}
                <svg
                  viewBox="0 0 300 80"
                  className="h-full w-full"
                  fill="none"
                >
                  <title>
                    Graphique variation devise
                  </title>

                  <path
                    d={
                      rate.positive
                        ? 'M0 60 C40 40, 80 50, 120 30 C160 10, 200 40, 240 20 C260 10, 280 15, 300 5'
                        : 'M0 20 C40 30, 80 10, 120 40 C160 60, 200 30, 240 50 C260 60, 280 55, 300 70'
                    }
                    stroke={
                      rate.positive
                        ? '#22c55e'
                        : '#ef4444'
                    }
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RatesSection