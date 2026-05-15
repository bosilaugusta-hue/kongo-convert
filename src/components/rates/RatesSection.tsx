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

        py-32
        lg:py-40
      "
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="
          absolute
          inset-0

          scale-[1.02]

          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: `url(${palaisImage})`,
        }}
      />

      {/* LEFT DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-r
          from-[#041226]/82
          via-[#041226]/30
          to-transparent
        "
      />

      {/* BLUE LIGHT */}
      <div
        className="
          absolute
          left-[-120px]
          top-[-120px]

          h-[420px]
          w-[420px]

          rounded-full

          bg-blue-500/20

          blur-[120px]
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
          <div className="mb-6">
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.28em]

                text-[#2563ff]
              "
            >
              Marché des devises
            </p>

            <div
              className="
                mt-3

                h-[3px]
                w-24

                rounded-full

                bg-[#2563ff]
              "
            />
          </div>

          <h2
            className="
              text-6xl
              font-black
              leading-[0.95]
              tracking-tight

              text-white

              md:text-7xl
            "
          >
            Les taux les plus
            <br />
            suivis en RDC
          </h2>

          <p
            className="
              mt-8

              max-w-2xl

              text-2xl
              leading-[1.7]

              text-white/90
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
                relative

                overflow-hidden

                rounded-[36px]

                border
                border-white/25

                bg-white/[0.10]

                backdrop-blur-[14px]

                p-7

                shadow-[0_10px_40px_rgba(0,0,0,0.20)]

                transition-all
                duration-500

                hover:-translate-y-2
              "
            >
              {/* GLASS LIGHT */}
              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-b
                  from-white/18
                  via-transparent
                  to-transparent
                "
              />

              {/* WHITE BORDER LIGHT */}
              <div
                className="
                  absolute
                  inset-0

                  rounded-[36px]

                  border
                  border-white/10
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
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center

                        rounded-full

                        border
                        border-white/30

                        bg-white/20

                        backdrop-blur-md
                      "
                    >
                      <img
                        src={rate.flag}
                        alt={rate.currency}
                        className="
                          h-9
                          w-9

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

                          text-white/70
                        "
                      >
                        Devise
                      </p>

                      <p
                        className="
                          text-2xl
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
                      mt-10

                      text-[34px]
                      font-extrabold

                      leading-none
                      tracking-tight

                      text-white

                      drop-shadow-[0_4px_20px_rgba(0,0,0,0.25)]
                    "
                  >
                    {rate.value}
                  </h3>
                </div>

                {/* ICON */}
                <div
                  className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center

                    rounded-2xl

                    border

                    backdrop-blur-md

                    ${
                      rate.positive
                        ? 'border-green-400/30 bg-green-400/10 text-green-300'
                        : 'border-red-400/30 bg-red-400/10 text-red-300'
                    }
                  `}
                >
                  {rate.positive ? (
                    <ArrowUpRight size={22} />
                  ) : (
                    <ArrowDownRight size={22} />
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
                    text-xl
                    font-bold

                    ${
                      rate.positive
                        ? 'text-green-300'
                        : 'text-red-300'
                    }
                  `}
                >
                  {rate.change}
                </p>

                <p
                  className="
                    text-sm

                    text-white/70
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

                  h-28

                  overflow-hidden

                  rounded-[24px]

                  border
                  border-white/20

                  bg-white/[0.04]

                  backdrop-blur-sm

                  p-2
                "
              >
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