import {
  ArrowUpDown,
  Clock3,
  TrendingUp,
} from "lucide-react";

import { motion } from "framer-motion";

import CurrencySelect from "../currency/CurrencySelect";

import { useConverter } from "../../hooks/useConverter";

function ConverterCard() {
  const {
    amount,
    setAmount,
    fromCurrency,
    setFromCurrencyCode,
    toCurrency,
    setToCurrencyCode,
    convertedAmount,
    handleSwitch,
    liveRate,
    isLoading,
  } = useConverter();

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -6,
      }}
      className="
relative
w-full
max-w-[620px]

scale-[0.92]

overflow-hidden

rounded-[36px]

border
border-white/35

bg-white/22

p-4

shadow-[0_20px_70px_rgba(15,23,42,0.18)]

backdrop-blur-xl

transition-all
duration-500

sm:scale-100
sm:p-6
lg:rounded-[40px]
"
    >
      {/* REFLET */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
from-white/25
via-white/10
to-transparent
        "
      />

      {/* GLOW */}
      <div
        className="
          absolute
          -left-16
          top-1/2

          h-56
          w-56

          -translate-y-1/2

          rounded-full

        bg-blue-400/20
blur-[120px]
        "
      />

      <div
        className="
    absolute
    inset-0

    rounded-[40px]

    border
    border-blue-400/40

   shadow-[0_0_60px_rgba(96,165,250,0.55)]

    pointer-events-none
  "
      />
      <div
        className="
    absolute

    -inset-[3px]

    rounded-[42px]

    border
    border-blue-300/25

    blur-[4px]

    pointer-events-none
  "
      />

      <div
        className="
    pointer-events-none

    absolute
    inset-0

    rounded-[40px]

    border
    border-white/20
  "
      />

      <div className="relative z-10">
        {/* TOP */}
        <div
          className="
            flex
            flex-col

            gap-5

            sm:flex-row
            sm:items-start
            sm:justify-between
          "
        >
          <div className="flex-1">
            <p
              className="
                mb-2

                text-xs
                font-semibold

                text-[#5B6478]

                sm:text-sm
              "
            >
              Vous envoyez
            </p>

            <input
              type="number"
              value={amount}
              onChange={(e) =>
                setAmount(Number(e.target.value))
              }
              className="
                w-full

                bg-transparent

                text-[42px]
                font-black
                leading-none
                tracking-tight

                text-[#0B132B]

                outline-none

                sm:text-[44px]
              "
            />

            <p
              className="
                mt-2

                text-xs
                text-white/60

                sm:text-sm
              "
            >
              ≈{" "}
              {amount.toLocaleString("fr-FR")}{" "}
              {fromCurrency.code}
            </p>
          </div>

          <div className="w-full sm:w-[170px]">
            <CurrencySelect
              selected={fromCurrency}
              onSelect={(currencyCode) =>
                setFromCurrencyCode(currencyCode)
              }
            />
          </div>
        </div>

        {/* SWITCH */}
        <div className="relative my-7 sm:my-8">
          <div className="h-[1px] w-full bg-white/15" />

          <motion.button
            whileTap={{ scale: 0.92 }}
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.4 }}
            type="button"
            onClick={handleSwitch}
            className="
              absolute
              left-1/2
              top-1/2

              flex
              h-14
              w-14

              -translate-x-1/2
              -translate-y-1/2

              items-center
              justify-center

              rounded-full

              bg-blue-600

              shadow-[0_0_60px_rgba(37,99,235,0.55)]

              transition-all
              duration-300

              hover:scale-105

              sm:h-16
              sm:w-16
            "
          >
            <ArrowUpDown
              size={24}
              className="text-white"
            />
          </motion.button>
        </div>

        {/* BOTTOM */}
        <div
          className="
            flex
            flex-col

            gap-5

            sm:flex-row
            sm:items-start
            sm:justify-between
          "
        >
          <div className="flex-1">
            <p
              className="
                mb-2

                text-xs
                font-semibold

                text-[#5B6478]

                sm:text-sm
              "
            >
              Vous recevez
            </p>

            <h2
              className="
                text-[42px]
                font-black
                leading-none
                tracking-tight

                text-[#2563FF]

                sm:text-[44px]
              "
            >
              {Number(
                convertedAmount,
              ).toLocaleString("fr-FR", {
                maximumFractionDigits: 2,
              })}
            </h2>

            <p
              className="
                mt-2

                text-xs
                text-white/60
                sm:text-sm
              "
            >
              ≈{" "}
              {Number(
                convertedAmount,
              ).toLocaleString("fr-FR", {
                maximumFractionDigits: 2,
              })}{" "}
              {toCurrency.code}
            </p>
          </div>

          <div className="w-full sm:w-[170px]">
            <CurrencySelect
              selected={toCurrency}
              onSelect={(currencyCode) =>
                setToCurrencyCode(currencyCode)
              }
            />
          </div>
        </div>

        {/* FOOTER */}
        <div
          className="
mt-7

rounded-[26px]

bg-white/18
border
border-white/20
p-4

backdrop-blur-xl

sm:mt-8
sm:p-5
"
        >
          <div
            className="
              flex
              flex-col

              gap-5

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-2
                "
              >
                <p
                  className="
                    text-base
                    font-black

                    text-white

                    sm:text-xl
                  "
                >
                  1 {fromCurrency.code} =
                  {" "}
                  {isLoading ? (
                    <span
                      className="
                        text-sm
                        font-normal
                        text-white/60
                      "
                    >
                      Mise à jour...
                    </span>
                  ) : (
                    liveRate?.toLocaleString(
                      "fr-FR",
                      {
                        maximumFractionDigits: 4,
                      },
                    )
                  )}{" "}
                  {toCurrency.code}
                </p>

                <p
                  className="
                    text-sm
                    font-bold

                    text-green-500

                    sm:text-lg
                  "
                >
                  ▲ 0,56%
                </p>
              </div>

              <div
                className="
                  mt-3

                  flex
                  items-center
                  gap-2
                "
              >
                <Clock3
                  size={15}
                  className="text-[#7B849B]"
                />

                <p
                  className="
                    text-xs
                    text-[#7B849B]

                    sm:text-sm
                  "
                >
                  Mis à jour il y a 6 secondes
                </p>
              </div>
            </div>

            <div
              className="
                flex
                h-12
                w-12

                items-center
                justify-center

                rounded-2xl

                bg-white/10

border
border-white/10

backdrop-blur-md

                sm:h-14
                sm:w-14
              "
            >
              <TrendingUp
                size={22}
                className="text-[#2563FF]"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ConverterCard;