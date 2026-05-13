import { ArrowUpDown, TrendingUp, Clock3 } from 'lucide-react'

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

        bg-white

        p-6
        sm:p-8
        lg:p-10

        shadow-[0_25px_80px_rgba(15,23,42,0.18)]
      "
    >
      {/* Accent border */}
      <div
        className="
          absolute
          right-0
          top-0

          h-full
          w-3

          bg-gradient-to-b
          from-blue-600
          via-yellow-400
          to-red-500
        "
      />

      {/* TOP */}
      <div className="flex items-start justify-between gap-6">
        {/* LEFT */}
        <div className="flex-1">
          <p
            className="
              mb-4

              text-lg
              font-medium

              text-slate-500
            "
          >
            Vous envoyez
          </p>

          <h2
            className="
              text-[72px]
              font-black
              leading-none
              tracking-[-3px]

              text-slate-900
            "
          >
            100,00
          </h2>

          <p
            className="
              mt-4

              text-2xl

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

      {/* Divider */}
      <div className="relative my-10">
        <div className="h-[1px] w-full bg-slate-200" />

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

            bg-blue-600

            shadow-[0_10px_30px_rgba(37,99,235,0.35)]

            transition-all
            duration-300

            hover:scale-105
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
              mb-4

              text-lg
              font-medium

              text-slate-500
            "
          >
            Vous recevez
          </p>

          <h2
            className="
              text-[64px]
              font-black
              leading-none
              tracking-[-3px]

              text-blue-600
            "
          >
            287 540,00
          </h2>

          <p
            className="
              mt-4

              text-2xl

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

          bg-slate-100

          p-6
        "
      >
        <div className="flex items-center justify-between gap-4">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-4">
              <p
                className="
                  text-[32px]
                  font-black

                  text-slate-900
                "
              >
                1 USD = 2 875,40 CDF
              </p>

              <p
                className="
                  text-2xl
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
                size={20}
                className="text-slate-500"
              />

              <p
                className="
                  text-lg

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

              bg-blue-100
            "
          >
            <TrendingUp
              size={32}
              className="text-blue-600"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConverterCard