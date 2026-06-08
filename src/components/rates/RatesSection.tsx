import aeFlag from '../../assets/flags/ae.png'
import cnFlag from '../../assets/flags/cn.png'
import euFlag from '../../assets/flags/eu.png'
import gbFlag from '../../assets/flags/gb.png'
import usFlag from '../../assets/flags/us.png'
import zaFlag from '../../assets/flags/za.png'

import {
  ArrowDownRight,
  ArrowUpRight,
  TrendingUp,
} from 'lucide-react'

import palaisImage from '../../assets/images/PalaisDuPeuple-Kin.png'

function RatesSection() {
  const rates = [
    {
      currency: 'USD',
      description: 'Très utilisé en RDC',
      value: '2 875,40',
      change: '+0.56%',
      positive: true,
      flag: usFlag,
    },
    {
      currency: 'EUR',
      description: 'Transactions européennes',
      value: '3 102,15',
      change: '+0.24%',
      positive: true,
      flag: euFlag,
    },
    {
      currency: 'GBP',
      description: 'Marchés internationaux',
      value: '3 540,22',
      change: '-0.18%',
      positive: false,
      flag: gbFlag,
    },
    {
      currency: 'CNY',
      description: 'Commerce Chine–Afrique',
      value: '395,40',
      change: '+0.12%',
      positive: true,
      flag: cnFlag,
    },
    {
      currency: 'ZAR',
      description: 'Afrique australe',
      value: '157,80',
      change: '+0.18%',
      positive: true,
      flag: zaFlag,
    },
    {
      currency: 'AED',
      description: 'Import & business à Dubaï',
      value: '782,12',
      change: '+0.42%',
      positive: true,
      flag: aeFlag,
    },
  ]

  return (
    <section
      className="
        relative
        overflow-hidden
        py-24
        w-full
        min-h-screen
        flex
        flex-col
        justify-center
      "
    >
      {/* BACKGROUND IMAGE CONTAINER */}
      <div className="absolute inset-0 w-full h-full min-h-full pointer-events-none z-0">
        <img
          src={palaisImage}
          alt="Palais du Peuple Kinshasa"
          className="
w-full
h-full
object-cover

brightness-[1.12]
contrast-[1.30]
saturate-[1.90]

scale-[1.03]
"
        />
      </div>
      <div
        className="
absolute
inset-0

bg-gradient-to-br

from-[#0A4DFF]/12
via-transparent
to-[#38BDF8]/8
"
      />

      <div
        className="
absolute
inset-0

bg-black/8
"
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1180px]
          px-6
          w-full
        "
      >
        {/* HEADER */}
        <div className="max-w-3xl">
          <div className="mb-5">
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#2563FF]
              "
            >
              Marché des devises
            </p>

            <div
              className="
                mt-3
                h-[3px]
                w-24
                rounded-full
                bg-[#2563FF]
              "
            />
          </div>

          <h2
            className="
              text-[48px]
              font-black
              leading-[0.95]
              tracking-tight
              text-white
              md:text-[64px]
            "
          >
            Les taux les plus
            <br />
            suivis <span className="text-[#2563FF]">en RDC</span>
          </h2>

          {/* DESCRIPTION */}
          <div
            className="
mt-8
max-w-xl

flex
items-center
gap-4

rounded-[28px]

border
border-white/25

bg-white/12
p-5

backdrop-blur-xl

shadow-[0_0_35px_rgba(59,130,246,0.18)]
"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EBF1FF]">
              <TrendingUp size={22} className="text-[#2563FF]" />
            </div>

            <p
              className="
                text-[16px]
                leading-snug
                font-medium
                text-white
              "
            >
              Suivez les fluctuations des principales devises utilisées en République Démocratique du Congo.
            </p>
          </div>
        </div>

        {/* CARDS GRID */}
        <div
          className="
            mt-14
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
            lg:gap-8
          "
        >
          {rates.map((rate) => (
            <div
              key={rate.currency}
              className="
                relative
                overflow-hidden
                min-h-[250px]
                rounded-[24px]
                border border-white/20
                bg-[#173A63]/28
backdrop-blur-2xl
                p-6
               shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                transition-all
                duration-300
                hover:-translate-y-1
                flex
                flex-col
                justify-between
              "
            >
              {/* LIGHT EFFECT */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-white/30
                  via-transparent
                  to-transparent
                "
              />
              <div
                className="
    absolute
    inset-0

    rounded-[24px]

    border
    border-blue-400/40

    shadow-[0_0_50px_rgba(59,130,246,0.65)]
    pointer-events-none
  "
              />

              {/* TOP CONTENT */}
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  {/* LEFT INFO */}
                  <div className="flex items-center gap-4">
                    {/* FLAG */}
                    <div
                      className="
    flex
    h-14
    w-14
    items-center
    justify-center

    rounded-full

    bg-white/10

    backdrop-blur-md
  "
                    >
                      <img
                        src={rate.flag}
                        alt={rate.currency}
                        className="
                          h-[72px]
w-[72px]
                          rounded-full
                          object-cover
                        "
                      />
                    </div>

                    <div className="flex flex-col justify-center">
                      <p className="text-[11px] uppercase tracking-wider font-bold text-white">
                        Devise
                      </p>
                      <h3 className="text-[20px] font-bold text-white leading-tight">
                        {rate.currency}
                      </h3>
                      <p className="text-[13px] font-semibold text-white mt-0.5">
                        {rate.description}
                      </p>
                    </div>
                  </div>

                  {/* TOP RIGHT ICON */}
                  <div
                    className={`
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      ${rate.positive
                        ? 'border-green-200 bg-white/90 text-green-500'
                        : 'border-red-200 bg-white/90 text-red-500'
                      }
                    `}
                  >
                    {rate.positive ? (
                      <ArrowUpRight size={18} />
                    ) : (
                      <ArrowDownRight size={18} />
                    )}
                  </div>
                </div>

                {/* VALUE */}
                <div className="mt-6 pl-1">
                  <p className="text-[22px] font-black tracking-tight text-white">
                    {rate.value}
                    <span className="ml-2 text-[15px] font-bold text-slate-400">
                      CDF
                    </span>
                  </p>
                </div>
              </div>

              {/* MIDDLE GRAPH */}
              <div className="absolute inset-x-0 bottom-14 h-16 z-0 px-1 pointer-events-none">
                <svg
                  viewBox="0 0 300 100"
                  className="h-full w-full"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <title>Graphique variation devise</title>
                  <path
                    d={
                      rate.positive
                        ? 'M0 75 C40 55, 70 85, 120 45 C170 10, 210 65, 250 35 C275 20, 285 40, 300 20'
                        : 'M0 25 C40 45, 70 15, 120 55 C170 90, 210 35, 250 65 C275 80, 285 60, 300 80'
                    }
                    stroke={rate.positive ? '#22C55E' : '#EF4444'}
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* BOTTOM METRICS */}
              <div
                className="
                  relative
                  z-10
                  mt-8
                  flex
                  items-center
                  justify-between
                  border-t border-slate-200/60
                  pt-3
                "
              >
                <p
                  className={`
                    text-[15px]
                    font-bold
                    flex
                    items-center
                    gap-1
                    ${rate.positive ? 'text-[#22C55E]' : 'text-[#EF4444]'}
                  `}
                >
                  {rate.change}
                  <span className="text-[12px]">{rate.positive ? '▲' : '▼'}</span>
                </p>

                <p className="text-[13px] font-semibold text-slate-900">
                  Aujourd'hui
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RatesSection;