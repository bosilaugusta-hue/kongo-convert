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
        group

        w-full

        flex
        items-center
        justify-between

        rounded-2xl

        border
        border-white/10

        bg-white/[0.08]

        backdrop-blur-xl

        px-4
        py-3

        transition-all
        duration-300

        hover:bg-white/[0.12]
        hover:border-blue-400/30

        hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)]
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-3">
        {/* FLAG */}
        <img
          src={selected.flag}
          alt={selected.code}
          className="
            w-11
            h-11

            rounded-full
            object-cover

            shadow-lg
            shadow-black/30

            ring-2
            ring-white/10
          "
        />

        {/* TEXT */}
        <div className="text-left">
          <p
            className="
              text-white

              text-lg
              font-semibold
            "
          >
            {selected.code}
          </p>

          <p
            className="
              text-white/55

              text-sm
            "
          >
            {selected.name}
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <ChevronDown
        size={20}
        className="
          text-white/60

          transition-transform
          duration-300

          group-hover:rotate-180
        "
      />
    </button>
  )
}

export default CurrencySelect