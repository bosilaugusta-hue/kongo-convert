import {
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import palaisImage from '../../assets/images/PalaisDuPeuple-Kin.png'

function RatesSection() {
  const rates = [
    {
      currency: "USD",
      value: "2 875,40",
      change: "+0.56%",
      positive: true,
    },
    {
      currency: "EUR",
      value: "3 102,15",
      change: "+0.24%",
      positive: true,
    },
    {
      currency: "GBP",
      value: "3 540,22",
      change: "-0.18%",
      positive: false,
    },
    {
      currency: "AED",
      value: "782,12",
      change: "+0.42%",
      positive: true,
    },
  ]

  return (
   <section
  className="
    relative
    overflow-hidden

    py-32
  "
>
{/* Background image */}
<div
  className="
    absolute
    inset-0

    bg-cover
    bg-center
    bg-no-repeat
  "
  style={{
    backgroundImage: `url(${palaisImage})`,
  }}
/>

{/* White overlay */}
<div
  className="
    absolute
    inset-0

    bg-white/50
  "
/>

{/* Blue glow */}
<div
  className="
    absolute
    inset-0

    bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.18),transparent_70%)]
  "
/>
      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-0

          h-[500px]
          w-[500px]

          -translate-x-1/2

          rounded-full

          bg-blue-500/10

          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-7xl

          px-6
        "
      >
        {/* Header */}
        <div className="max-w-3xl">
          <p
            className="
              mb-4

              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]

              text-blue-600
            "
          >
            Marché des devises
          </p>

          <h2
            className="
              text-5xl
              font-black
              leading-tight
              tracking-tight

              text-slate-900

              md:text-6xl
            "
          >
            Les taux les plus
            <br />
            suivis en RDC
          </h2>

          <p
            className="
              mt-6

              max-w-2xl

              text-xl
              leading-9

              text-slate-600
            "
          >
            Suivez les fluctuations des
            principales devises utilisées en
            République Démocratique du Congo.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-20

            grid
            gap-8

            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {rates.map((rate) => (
            <div
              key={rate.currency}
              className="
                group

                rounded-[32px]

                bg-white

                p-8

                shadow-[0_10px_40px_rgba(15,23,42,0.06)]

                transition-all
                duration-300

                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)]
              "
            >
              {/* Top */}
              <div className="flex items-start justify-between">
                <div>
                  <p
                    className="
                      text-lg
                      font-semibold

                      text-slate-500
                    "
                  >
                    {rate.currency}
                  </p>

                  <h3
                    className="
                      mt-5

                      text-5xl
                      font-black
                      tracking-tight

                      text-slate-900
                    "
                  >
                    {rate.value}
                  </h3>
                </div>

                <div
                  className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center

                    rounded-2xl

                    ${
                      rate.positive
                        ? "bg-green-100"
                        : "bg-red-100"
                    }
                  `}
                >
                  {rate.positive ? (
                    <ArrowUpRight
                      size={28}
                      className="text-green-500"
                    />
                  ) : (
                    <ArrowDownRight
                      size={28}
                      className="text-red-500"
                    />
                  )}
                </div>
              </div>

              {/* Bottom */}
              <div
                className="
                  mt-10

                  flex
                  items-center
                  justify-between
                "
              >
                <p
                  className={`
                    text-lg
                    font-bold

                    ${
                      rate.positive
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  `}
                >
                  {rate.change}
                </p>

                <p
                  className="
                    text-sm

                    text-slate-400
                  "
                >
                  Aujourd’hui
                </p>
              </div>

              {/* Fake graph */}
              <div
                className="
                  mt-8

                  h-20

                  rounded-2xl

                  bg-gradient-to-r
                  from-blue-50
                  to-blue-100
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RatesSection