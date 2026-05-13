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

        border border-white/10

        bg-white/[0.03]
        backdrop-blur-xl

        p-6

        transition-all
        duration-500

        hover:-translate-y-2
        hover:border-blue-500/30
        hover:bg-white/[0.05]

        hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]
      "
    >
      {/* Glow background */}
      <div
        className="
          absolute
          top-0
          right-0

          h-32
          w-32

          rounded-full

          bg-blue-500/10

          blur-3xl
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
              h-12
              w-12

              rounded-full

              bg-white/5

              flex
              items-center
              justify-center

              border border-white/10

              shadow-lg
            "
          >
            <img
              src={flag}
              alt={pair}
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
                text-white/50
              "
            >
              Devise
            </p>

            <h3
              className="
                text-lg
                font-semibold
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
            h-10
            w-10
            items-center
            justify-center
            rounded-full

            ${
              positive
                ? 'bg-green-500/10 text-green-400'
                : 'bg-red-500/10 text-red-400'
            }
          `}
        >
          {positive ? (
            <TrendingUp size={18} />
          ) : (
            <TrendingDown size={18} />
          )}
        </div>
      </div>

      {/* Rate */}
      <div
        className="
          relative
          z-10

          mt-8
        "
      >
        <p
          className="
            text-4xl
            font-black
            tracking-tight
            text-white
          "
        >
          {rate}
        </p>

        <p
          className={`
            mt-3

            flex
            items-center
            gap-2

            text-sm
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
      </div>

      {/* Fake chart */}
      <div
        className="
          relative
          z-10

          mt-6

          h-16
        "
      >
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

            opacity-30
          `}
        />

        <svg
  viewBox="0 0 300 80"
  className="w-full h-full"
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