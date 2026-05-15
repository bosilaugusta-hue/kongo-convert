import { useEffect, useRef, useState } from "react"

import { ChevronDown } from "lucide-react"

import { currencies } from "../../data/currencies"

type Currency = {
  code: string
  name: string
  flag: string
  rate: number
}

type CurrencySelectProps = {
  selected: Currency

  onSelect: (currencyCode: string) => void
}

function CurrencySelect({
  selected,
  onSelect,
}: CurrencySelectProps) {
  /*
   |------------------------------------------------------------------
   | STATE
   |------------------------------------------------------------------
   */

  const [isOpen, setIsOpen] = useState(false)

  /*
   |------------------------------------------------------------------
   | CLOSE OUTSIDE
   |------------------------------------------------------------------
   */

  const dropdownRef =
    useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(
      event: MouseEvent
    ) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target as Node
        )
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    )

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      )
    }
  }, [])

  return (
    <div
      ref={dropdownRef}
      className="relative"
    >
      {/* SELECT BUTTON */}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="
          group

          flex
          w-full
          items-center
          justify-between
          gap-2

sm:gap-4

          rounded-[20px]

sm:rounded-[28px]

          border
          border-white/15

          bg-white/10

         px-3
py-2.5

sm:px-5
sm:py-4

          backdrop-blur-2xl

          transition-all
          duration-300

          hover:bg-white/15
          hover:border-white/25
        "
      >
        {/* LEFT */}

        <div className="flex items-center gap-4">
          <img
            src={selected.flag}
            alt={selected.code}
            className="
              h-10
w-10

sm:h-12
sm:w-12

lg:h-14
lg:w-14

              rounded-full

              border
              border-white/10

              object-cover

              shadow-lg
            "
          />

          <div className="text-left">
            <p
              className="
                text-sm

sm:text-base

lg:text-[18px]
                font-black

                leading-none

                text-white
              "
            >
              {selected.code}
            </p>

            <p
              className="
                mt-2

               text-[11px]

sm:text-xs

lg:text-sm

                text-white/65
              "
            >
              {selected.name}
            </p>
          </div>
        </div>

        {/* ICON */}

        <ChevronDown
          size={16}
          className={`
            text-white/60

            transition-all
            duration-300

            ${
              isOpen
                ? "rotate-180"
                : ""
            }
          `}
        />
      </button>

      {/* DROPDOWN */}

      {isOpen && (
        <div
          className="
            absolute
            left-0
            top-[110%]

            z-50

            w-full

            overflow-hidden

           rounded-[22px]

sm:rounded-[28px]
            border
            border-white/10

            bg-[#07111f]/95

            backdrop-blur-3xl

            shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          "
        >
          {currencies.map((currency) => (
            <button
              key={currency.code}
              type="button"
              onClick={() => {
                onSelect(currency.code)

                setIsOpen(false)
              }}
              className="
                flex
                w-full
                items-center
                gap-3

                border-b
                border-white/5

                px-3
py-3

sm:px-5
sm:py-4

                transition-all
                duration-200

                hover:bg-white/10
              "
            >
              {/* FLAG */}

              <img
                src={currency.flag}
                alt={currency.code}
                className="
                h-9
w-9

sm:h-11
sm:w-11

lg:h-12
lg:w-12

                  rounded-full

                  border
                  border-white/10
                "
              />

              {/* TEXT */}

              <div className="text-left">
                <p
                  className="
                    text-[11px]

sm:text-xs

lg:text-sm

sm:text-base

lg:text-lg
                    font-bold

                    text-white
                  "
                >
                  {currency.code}
                </p>

                <p
                  className="
                    text-sm

                    text-white/60
                  "
                >
                  {currency.name}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default CurrencySelect