import { ArrowUpDown } from 'lucide-react'

import CurrencySelect from '../currency/CurrencySelect'

import usFlag from '../../assets/flags/us.png'
import cdFlag from '../../assets/flags/cd.png'

function ConverterCard() {
  return (
    <div
      className="
        relative

        w-full
        max-w-[520px]

        rounded-[36px]

        border
        border-white/10

        bg-white/[0.06]

        backdrop-blur-2xl

        p-5
        sm:p-7
        lg:p-8

        shadow-[0_20px_80px_rgba(0,0,0,0.45)]

        overflow-hidden
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-blue-500/10
          via-transparent
          to-transparent

          pointer-events-none
        "
      />

      {/* Content */}
      <div className="relative z-10">
        {/* TOP */}
        <div className="flex justify-between items-start gap-5">
          {/* LEFT */}
          <div className="flex-1">
            <p
              className="
                text-white/60

                text-sm
                sm:text-base

                mb-3
              "
            >
              Vous envoyez
            </p>

            <h2
              className="
                text-white

                text-[52px]
                sm:text-[68px]
                lg:text-[74px]

                leading-none
                tracking-[-2px]

                font-black
              "
            >
              100
            </h2>
          </div>

          {/* RIGHT */}
          <div className="w-[190px]">
            <CurrencySelect
              selected={{
                code: 'USD',
                name: 'Dollar Américain',
                flag: usFlag,
              }}
            />
          </div>
        </div>

        {/* SWITCH */}
        <div className="flex justify-center py-7">
          <button
            type="button"
            className="
              group

              relative

              w-20
              h-20

              rounded-full

              flex
              items-center
              justify-center

              bg-gradient-to-br
              from-[#2563EB]
              to-[#1D4ED8]

              shadow-[0_0_40px_rgba(37,99,235,0.45)]

              transition-all
              duration-300

              hover:scale-110
            "
          >
            {/* Glow */}
            <div
              className="
                absolute
                inset-0

                rounded-full

                bg-blue-500/40

                blur-2xl

                opacity-70
              "
            />

            <ArrowUpDown
              size={30}
              className="
                relative
                z-10

                text-white

                transition-transform
                duration-300

                group-hover:rotate-180
              "
            />
          </button>
        </div>

        {/* BOTTOM */}
        <div className="flex justify-between items-start gap-5">
          {/* LEFT */}
          <div className="flex-1">
            <p
              className="
                text-white/60

                text-sm
                sm:text-base

                mb-3
              "
            >
              Vous recevez
            </p>

            <h2
              className="
                text-[#60A5FA]

                text-[34px]
                sm:text-[48px]
                lg:text-[56px]

                leading-none
                tracking-[-1px]

                font-black
              "
            >
              223 234,58
            </h2>
          </div>

          {/* RIGHT */}
          <div className="w-[190px]">
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
            mt-8

            rounded-[28px]

            border
            border-white/10

            bg-white/[0.07]

            backdrop-blur-xl

            p-6

            shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]
          "
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p
                className="
                  text-white

                  text-xl
                  font-semibold
                "
              >
                1 USD = 2232,35 CDF
              </p>

              <div
                className="
                  mt-4

                  flex
                  items-center
                  gap-2
                "
              >
                <div
                  className="
                    w-2.5
                    h-2.5

                    rounded-full

                    bg-green-400

                    animate-pulse
                  "
                />

                <p
                  className="
                    text-green-400

                    text-sm
                    font-semibold
                  "
                >
                  Temps réel
                </p>
              </div>
            </div>

            {/* Small graph block */}
            <div
              className="
                hidden
                sm:flex

                w-14
                h-14

                rounded-2xl

                items-center
                justify-center

                bg-blue-500/10

                border
                border-blue-400/20
              "
            >
              <div
                className="
                  text-blue-400

                  text-2xl
                "
              >
                ↗
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConverterCard