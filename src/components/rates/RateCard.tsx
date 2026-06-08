import { TrendingUp, TrendingDown } from 'lucide-react'

type RateCardProps = {
  pair: string
  rate: string
  change: string
  positive?: boolean
  flag: string
}

function RateCard({
  pair,
  rate,
  change,
  positive = true,
  flag,
}: RateCardProps) {
  return (
    <div
      className="
        group
        relative

        overflow-hidden

        rounded-[30px]

        border
        border-white/30

       bg-white/12

        backdrop-blur-xl

        p-7

        transition-all
        duration-500

        hover:-translate-y-3
        hover:scale-[1.02]

        hover:border-blue-400/30

        shadow-[0_0_35px_rgba(59,130,246,0.22)]

hover:shadow-[0_0_50px_rgba(59,130,246,0.35)]
      "
    >

      <div
        className="
    absolute
    inset-0

    rounded-[30px]

    border
    border-blue-400/40

    shadow-[0_0_25px_rgba(59,130,246,0.35)]

    pointer-events-none
  "
      />

      {/* Glass reflection */}
      <div
        className="
    absolute
    inset-0

    bg-gradient-to-br
from-white/25
via-white/10
to-transparent

    backdrop-blur-[2px]
  "
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Top */}
        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          {/* Currency */}
          <div className="flex items-center gap-4">
            {/* Flag */}
            <div
              className="
                flex
                h-17
                w-17
                items-center
                justify-center

                rounded-full

                border
                border-white/15

                bg-white/5

                shadow-lg
              "
            >
              <img
                src={flag}
                alt={pair}
                className="
                  h-14
                  w-14

                  rounded-full

                  object-cover
                "
              />
            </div>

            {/* Pair */}
            <div>
              <p
                className="
                  text-sm
                  tracking-wide

                  text-slate-400
                "
              >
                Devise
              </p>

              <h3
                className="
                  text-xl
                  font-bold

                  text-[#071133]
                "
              >
                {pair}
              </h3>
              <p
                className="
    mt-1
    text-sm
    text-slate-600
  "
              >
                {pair === "USD" && "Très utilisé en RDC"}
                {pair === "EUR" && "Transactions européennes"}
                {pair === "GBP" && "Marchés internationaux"}
                {pair === "CNY" && "Commerce Chine–Afrique"}
                {pair === "ZAR" && "Afrique australe"}
                {pair === "AED" && "Import & business à Dubaï"}
              </p>
            </div>
          </div>

          {/* Trend icon */}
          <div
            className={`
              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-2xl

              border

              ${positive
                ? 'border-green-400/20 bg-green-500/10 text-green-400'
                : 'border-red-400/20 bg-red-500/10 text-red-400'
              }
            `}
          >
            {positive ? (
              <TrendingUp size={20} />
            ) : (
              <TrendingDown size={20} />
            )}
          </div>
        </div>

        {/* Rate */}
        <div className="mt-10">
          <p
            className="
              text-[52px]

              font-black

              leading-none
              tracking-tight

              text-[#071133]
            "
          >
            {rate}
          </p>

          {/* Bottom infos */}
          <div
            className="
              mt-5

              flex
              items-center
              justify-between
            "
          >
            <p
              className={`
                text-base
                font-semibold

                ${positive
                  ? 'text-green-400'
                  : 'text-red-400'
                }
              `}
            >
              {change}
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
        </div>

        {/* Chart */}
        <div
          className="
            relative

            mt-8

            h-20

            overflow-hidden

            rounded-2xl

            border
            border-white/15

            bg-white/8
          "
        >
          {/* Bottom line */}
          <div
            className={`
              absolute
              bottom-0
              left-0
              right-0

              h-[2px]

              ${positive
                ? 'bg-green-400'
                : 'bg-red-400'
              }

              opacity-20
            `}
          />

          <svg
            viewBox="0 0 300 80"
            className="h-full w-full"
            fill="none"
          >
            <title>
              Graphique de variation du taux
            </title>

            <path
              d={
                positive
                  ? 'M0 60 C40 40, 80 50, 120 30 C160 10, 200 40, 240 20 C260 10, 280 15, 300 5'
                  : 'M0 20 C40 30, 80 10, 120 40 C160 60, 200 30, 240 50 C260 60, 280 55, 300 70'
              }
              stroke={
                positive
                  ? '#22c55e'
                  : '#ef4444'
              }
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default RateCard