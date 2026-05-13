import { ChevronDown } from 'lucide-react'

type Currency = {
  code: string
  name: string
  flag: string
}

type CurrencySelectProps = {
  selected: Currency
}

function CurrencySelect({
  selected,
}: CurrencySelectProps) {
  return (
    <button
      type="button"
      className="
        w-full

        rounded-[24px]

        border
        border-slate-200

        bg-white

        px-5
        py-5

        shadow-sm

        transition-all
        duration-300

        hover:border-blue-200
        hover:shadow-md
      "
    >
      <div className="flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {/* FLAG */}
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center

              overflow-hidden

              rounded-full

              border
              border-slate-200

              bg-white
            "
          >
            <img
              src={selected.flag}
              alt={selected.code}
              className="
                h-full
                w-full

                object-cover
              "
            />
          </div>

          {/* TEXT */}
          <div className="text-left">
            <p
              className="
                text-[20px]
                font-bold

                text-slate-900
              "
            >
              {selected.code}
            </p>

            <p
              className="
                mt-1

                text-[15px]

                text-slate-500
              "
            >
              {selected.name}
            </p>
          </div>
        </div>

        {/* ICON */}
        <ChevronDown
          size={22}
          className="text-slate-500"
        />
      </div>
    </button>
  )
}

export default CurrencySelect