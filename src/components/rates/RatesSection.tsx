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

        border
        border-black/10

        py-32
        lg:py-40
      "
    >
      {/* BACKGROUND IMAGE */}
      <div
       className="
  absolute
  inset-0

  scale-[1.03]

  brightness-110
  saturate-150
  contrast-110

  bg-cover
  bg-center
  bg-no-repeat
"
        style={{
          backgroundImage: `url(${palaisImage})`,
        }}
      />

      {/* LIGHT OVERLAY */}
<div
  className="
    absolute
    inset-0

    bg-gradient-to-r
    from-black/20
    via-black/5
    to-transparent
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
              text-5xl
              font-black
              leading-[0.95]
              tracking-tight

              text-[#0B132B]

              md:text-7xl
            "
          >
            Les taux les plus
            <br />
            suivis en RDC
          </h2>

          <p
  className="
    mt-6
    max-w-2xl

    text-lg
    leading-relaxed
    font-medium

    text-[#0F172A]

    bg-white/35
    backdrop-blur-md

    px-6
    py-4

    rounded-2xl

    border
    border-white/40

    shadow-[0_10px_40px_rgba(15,23,42,0.08)]
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
                border-white/40

                bg-white/35

                backdrop-blur-xl

                p-7

                shadow-[0_20px_60px_rgba(15,23,42,0.15)]

                transition-all
                duration-500

                hover:-translate-y-2
                hover:scale-[1.02]
              "
            >
              {/* GLASS LIGHT */}
              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-b
                  from-white/20
                  via-transparent
                  to-transparent
                "
              />

              {/* INNER BORDER */}
              <div
                className="
                  absolute
                  inset-0

                  rounded-[36px]

                  border
                  border-white/20
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
                        border-white/40

                        bg-white/30

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

                          text-slate-500
                        "
                      >
                        Devise
                      </p>

                      <p
                        className="
                          text-2xl
                          font-bold

                          text-[#0B132B]
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

                      text-[#0B132B]
                    "
                  >
                    {rate.value}
                  </h3>

                  <p
                    className="
                      mt-2

                      text-sm

                      text-slate-500
                    "
                  >
                    CDF
                  </p>
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
                        ? 'border-green-400/30 bg-green-400/10 text-green-500'
                        : 'border-red-400/30 bg-red-400/10 text-red-500'
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
                        ? 'text-green-500'
                        : 'text-red-500'
                    }
                  `}
                >
                  {rate.change}
                </p>

                <p
                  className="
                    text-sm

                    text-slate-500
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
                  border-white/40

                  bg-white/30

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