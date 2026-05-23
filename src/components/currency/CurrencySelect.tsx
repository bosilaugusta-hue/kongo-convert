import { useEffect, useRef, useState } from "react";

import { ChevronDown } from "lucide-react";

import { currencies } from "../../data/currencies";

type Currency = {
  code: string;
  name: string;
  flag: string;
  rate: number;
};

type CurrencySelectProps = {
  selected: Currency;

  onSelect: (currencyCode: string) => void;
};

function CurrencySelect({
  selected,
  onSelect,
}: CurrencySelectProps) {

  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef =
    useRef<HTMLDivElement>(null);

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
        setIsOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative w-full"
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

          rounded-[18px]

          bg-white

          px-3
          py-2.5

          shadow-[0_6px_20px_rgba(15,23,42,0.06)]

          transition-all
          duration-300

          hover:scale-[1.01]
        "
      >
        {/* LEFT */}

        <div className="flex items-center gap-2.5 min-w-0">

          <img
            src={selected.flag}
            alt={selected.code}
            className="
              h-9
              w-9

              flex-shrink-0

              rounded-full

              object-cover

              shadow-sm
            "
          />

          <div className="min-w-0 text-left">

            <p
              className="
                truncate

                text-sm
                font-bold
                leading-none

                text-[#0B132B]
              "
            >
              {selected.code}
            </p>

            <p
              className="
                mt-1

                truncate

                text-[12px]

                leading-tight

                text-[#7B849B]
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
            flex-shrink-0

            text-[#7B849B]

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
            top-[108%]

            z-50

            w-full

            overflow-hidden

            rounded-[20px]

            border
            border-[#E9EEF5]

            bg-white

            shadow-[0_20px_50px_rgba(15,23,42,0.12)]
          "
        >
          {currencies.map((currency) => (
            <button
              key={currency.code}
              type="button"
              onClick={() => {
                onSelect(currency.code);

                setIsOpen(false);
              }}
              className="
                flex
                w-full
                items-center
                gap-3

                border-b
                border-[#F1F5F9]

                px-3
                py-3

                transition-all
                duration-200

                hover:bg-[#F8FAFC]
              "
            >
              {/* FLAG */}

              <img
                src={currency.flag}
                alt={currency.code}
                className="
                  h-9
                  w-9

                  rounded-full
                "
              />

              {/* TEXT */}

              <div className="min-w-0 text-left">

                <p
                  className="
                    truncate

                    text-sm
                    font-bold

                    text-[#0B132B]
                  "
                >
                  {currency.code}
                </p>

                <p
                  className="
                    truncate

                    text-[12px]

                    text-[#7B849B]
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
  );
}

export default CurrencySelect;