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

        rounded-[32px]

        border
        border-white/15

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
      {/* Glow background */}
      <div
        className="
          absolute
          top-0
          right-0

          h-40
          w-40

          rounded-full

          bg-blue-500/10

          blur-3xl
        "
      />

      {/* Glass reflection */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-white/5
          via-transparent
          to-transparent

          opacity-60
        "
      />

      {/* Top */}
      <div
        className="
          relative
          z-10

          flex
          items-center
          justify-between
        "
      >
        {/* Flag + Pair */}
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-14
              w-14
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
              src={flag}
              alt={pair}
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
                tracking-wide

                text-white/50
              "
            >
              Devise
            </p>

            <h3
              className="
                text-xl
                font-bold

                text-white
              "
            >
              {pair}
            </h3>
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

            ${
              positive
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
      <div
        className="
          relative
          z-10

          mt-10
        "
      >
        <p
          className="
            text-[52px]
            font-black

            leading-none
            tracking-tight

            text-white
          "
        >
          {rate}
        </p>

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

              ${
                positive
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
              text-white/40
            "
          >
            Aujourd'hui
          </p>
        </div>
      </div>

      {/* Fake chart */}
      <div
        className="
          relative
          z-10

          mt-8

          h-20

          overflow-hidden

          rounded-2xl

          border
          border-white/5

          bg-white/5
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

            ${
              positive
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
          <title>Graphique de variation du taux</title>

          <path
            d={
              positive
                ? 'M0 60 C40 40, 80 50, 120 30 C160 10, 200 40, 240 20 C260 10, 280 15, 300 5'
                : 'M0 20 C40 30, 80 10, 120 40 C160 60, 200 30, 240 50 C260 60, 280 55, 300 70'
            }
            stroke={positive ? '#22c55e' : '#ef4444'}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  )
}

export default RateCard