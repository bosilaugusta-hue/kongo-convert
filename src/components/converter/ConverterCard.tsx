import {
  ArrowUpDown,
  TrendingUp,
  Clock3,
} from 'lucide-react'

import CurrencySelect from '../currency/CurrencySelect'

import usFlag from '../../assets/flags/us.png'
import cdFlag from '../../assets/flags/cd.png'

function ConverterCard() {
  return (
    <div
      className="
        relative

        w-full
        max-w-[680px]

        overflow-hidden

        rounded-[40px]

        border
        border-white/20

        bg-white/10

        backdrop-blur-3xl

        p-6
        sm:p-8
        lg:p-10

        shadow-[0_25px_80px_rgba(15,23,42,0.28)]
      "
    >
      {/* GLASS REFLECTION */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-white/25
          via-white/10
          to-transparent

          opacity-90
        "
      />

      {/* BLUE GLOW */}
      <div
        className="
          absolute
          -right-24
          -top-24

          h-64
          w-64

          rounded-full

          bg-blue-500/10

          blur-3xl
        "
      />

      {/* Accent border */}
      <div
        className="
          absolute
          right-0
          top-0

          h-full
          w-[6px]

          bg-gradient-to-b
          from-blue-600
          via-yellow-400
          to-red-500
        "
      />

      {/* CONTENT */}
      <div className="relative z-10">
        {/* TOP */}
        <div className="flex items-start justify-between gap-6">
          {/* LEFT */}
          <div className="flex-1">
            <p
              className="
                mb-3

                text-base
                font-medium

                text-slate-500
              "
            >
              Vous envoyez
            </p>

            <h2
              className="
                text-[56px]
                font-black

                leading-none
                tracking-tight

                text-slate-900

                md:text-[64px]
              "
            >
              100,00
            </h2>

            <p
              className="
                mt-3

                text-xl

                text-slate-500
              "
            >
              ≈ 100,00 USD
            </p>
          </div>

          {/* RIGHT */}
          <div className="w-[220px]">
            <CurrencySelect
              selected={{
                code: 'USD',
                name: 'Dollar Américain',
                flag: usFlag,
              }}
            />
          </div>
        </div>

        {/* DIVIDER */}
        <div className="relative my-10">
          <div className="h-[1px] w-full bg-slate-300/60" />

          <button
            type="button"
            className="
              absolute
              left-1/2
              top-1/2

              flex
              h-20
              w-20
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center

              rounded-full

              border
              border-white/20

              bg-blue-600

              shadow-[0_10px_35px_rgba(37,99,235,0.35)]

              transition-all
              duration-300

              hover:scale-105
              hover:bg-blue-500
            "
          >
            <ArrowUpDown
              size={34}
              className="text-white"
            />
          </button>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 flex items-start justify-between gap-6">
          {/* LEFT */}
          <div className="flex-1">
            <p
              className="
                mb-3

                text-base
                font-medium

                text-slate-500
              "
            >
              Vous recevez
            </p>

            <h2
              className="
                text-[56px]
                font-black

                leading-none
                tracking-tight

                text-blue-600

                md:text-[64px]
              "
            >
              287 540,00
            </h2>

            <p
              className="
                mt-3

                text-xl

                text-slate-500
              "
            >
              ≈ 287 540,00 CDF
            </p>
          </div>

          {/* RIGHT */}
          <div className="w-[220px]">
            <CurrencySelect
              selected={{
                code: 'CDF',
                name: 'Franc Congolais',
                flag: cdFlag,
              }}
            />
          </div>
        </div>

        {/* RATE CARD */}
        <div
          className="
            mt-10

            rounded-[28px]

            border
            border-white/20

            bg-white/20

            backdrop-blur-2xl

            p-6
          "
        >
          <div className="flex items-center justify-between gap-4">
            {/* LEFT */}
            <div>
              <div className="flex items-center gap-4">
                <p
                  className="
                    text-[26px]
                    font-black

                    text-slate-900
                  "
                >
                  1 USD = 2 875,40 CDF
                </p>

                <p
                  className="
                    text-xl
                    font-bold

                    text-green-500
                  "
                >
                  ▲ 0,56%
                </p>
              </div>

              <div
                className="
                  mt-4

                  flex
                  items-center
                  gap-3
                "
              >
                <Clock3
                  size={18}
                  className="text-slate-500"
                />

                <p
                  className="
                    text-base

                    text-slate-500
                  "
                >
                  Mis à jour il y a 6 secondes
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center

                rounded-2xl

                bg-blue-100/80

                backdrop-blur-xl
              "
            >
              <TrendingUp
                size={30}
                className="text-blue-600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConverterCard