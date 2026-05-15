import { useState } from "react"

import {
  ArrowUpDown,
  Clock3,
  TrendingUp,
} from "lucide-react"

import CurrencySelect from "../currency/CurrencySelect"

import { currencies } from "../../data/currencies"

function ConverterCard() {
  /*
   |------------------------------------------------------------------
   | STATES
   |------------------------------------------------------------------
   */

  const [amount, setAmount] = useState(100)

  const [fromCurrency, setFromCurrency] =
    useState("USD")

  const [toCurrency, setToCurrency] =
    useState("CDF")

  /*
   |------------------------------------------------------------------
   | FIND CURRENCIES
   |------------------------------------------------------------------
   */

  const fromCurrencyData = currencies.find(
    (currency) => currency.code === fromCurrency
  )

  const toCurrencyData = currencies.find(
    (currency) => currency.code === toCurrency
  )

  /*
   |------------------------------------------------------------------
   | SAFETY CHECK
   |------------------------------------------------------------------
   */

  if (!fromCurrencyData || !toCurrencyData) {
    return null
  }

  /*
   |------------------------------------------------------------------
   | CONVERSION
   |------------------------------------------------------------------
   */

  const convertedAmount =
    amount *
    (fromCurrencyData.rate /
      toCurrencyData.rate)

  /*
   |------------------------------------------------------------------
   | SWAP FUNCTION
   |------------------------------------------------------------------
   */

  const swapCurrencies = () => {
    setFromCurrency(toCurrency)

    setToCurrency(fromCurrency)
  }

  return (
    <div
      className="
        relative

        w-full
       max-w-[420px]

sm:max-w-[520px]
lg:max-w-[620px]

        overflow-hidden

       rounded-[32px]

sm:rounded-[40px]

        border
        border-white/40

        bg-[#f4efe7]/38

        p-4
sm:p-6
lg:p-10

        backdrop-blur-3xl

        shadow-[0_25px_80px_rgba(15,23,42,0.25)]
      "
    >
      {/* GLASS LIGHT */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-white/50
          via-white/20
          to-transparent
        "
      />

      {/* BLUE GLOW */}

      <div
        className="
          absolute
          -left-20
          top-1/2

          h-72
          w-72

          -translate-y-1/2

          rounded-full

          bg-blue-500/10

          blur-3xl
        "
      />

      {/* CONGO BORDER */}

      <div
        className="
          absolute
          right-0
          top-0

          h-full
          w-[5px]

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

                text-slate-600
              "
            >
              Vous envoyez
            </p>

            {/* INPUT */}

            <input
              type="number"
              value={amount}
              onChange={(e) =>
                setAmount(Number(e.target.value))
              }
              className="
                w-full

                bg-transparent

                text-[38px]

sm:text-[48px]
md:text-[56px]
                font-black

                leading-none
                tracking-tight

                text-slate-900

                outline-none

                md:text-[64px]
              "
            />

            <p
              className="
                mt-3

                text-xl

                text-slate-500
              "
            >
              ≈{" "}
              {amount.toLocaleString("fr-FR")}{" "}
              {fromCurrencyData.code}
            </p>
          </div>

          {/* RIGHT */}

          <div className="w-[220px]">
            <CurrencySelect
              selected={fromCurrencyData}
              onSelect={setFromCurrency}
            />
          </div>
        </div>

        {/* DIVIDER */}

        <div className="relative my-10">
          <div className="h-[1px] w-full bg-slate-300/40" />

          {/* SWAP BUTTON */}

          <button
            type="button"
            onClick={swapCurrencies}
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

              shadow-[0_10px_35px_rgba(37,99,235,0.45)]

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

                text-slate-600
              "
            >
              Vous recevez
            </p>

            <h2
              className="
                text-[38px]

sm:text-[48px]
md:text-[56px]
                font-black

                leading-none
                tracking-tight

                text-blue-600

                md:text-[64px]
              "
            >
              {convertedAmount.toLocaleString(
                "fr-FR",
                {
                  maximumFractionDigits: 2,
                }
              )}
            </h2>

            <p
              className="
                mt-3

                text-base

sm:text-lg
                text-slate-500
              "
            >
              ≈{" "}
              {convertedAmount.toLocaleString(
                "fr-FR",
                {
                  maximumFractionDigits: 2,
                }
              )}{" "}
              {toCurrencyData.code}
            </p>
          </div>

          {/* RIGHT */}

          <div className="w-[220px]">
            <CurrencySelect
              selected={toCurrencyData}
              onSelect={setToCurrency}
            />
          </div>
        </div>

        {/* RATE CARD */}

        <div
          className="
            mt-10

            rounded-[28px]

            border
            border-white/30

            bg-white/35

            p-4

sm:p-6
            backdrop-blur-2xl
          "
        >
          <div className="flex items-center justify-between gap-4">
            {/* LEFT */}

            <div>
              <div className="flex items-center gap-4">
                <p
                  className="
                   text-lg

sm:text-2xl
                    font-black

                    text-slate-900
                  "
                >
                  1 {fromCurrencyData.code} ={" "}
                  {(
                    fromCurrencyData.rate /
                    toCurrencyData.rate
                  ).toLocaleString("fr-FR", {
                    maximumFractionDigits: 2,
                  })}{" "}
                  {toCurrencyData.code}
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
               h-12
w-12

sm:h-16
sm:w-16

                items-center
                justify-center

                rounded-2xl

                bg-blue-500/15

                backdrop-blur-xl
              "
            >
              <TrendingUp
                size={22}
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