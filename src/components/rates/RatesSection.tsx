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
          className="w-full h-full min-h-full object-cover object-center brightness-100 contrast-100 saturate-125"
        />
      </div>

      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-white/15 z-1" />

      {/* VIGNETTE GRADIENT */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-white/30
          via-transparent
          to-transparent
          z-1
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
              text-[#071133]
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
              mt-7
              max-w-2xl
              rounded-[24px]
              border
              border-white
              bg-white/95
              p-5
              backdrop-blur-md
              shadow-[0_12px_40px_rgba(15,23,42,0.12)]
              flex
              items-center
              gap-4
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
                text-slate-900
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
                border
                border-white
                bg-white/95
                backdrop-blur-md
                p-6
                shadow-[0_15px_45px_rgba(15,23,42,0.12)]
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

              {/* TOP CONTENT */}
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  {/* LEFT INFO */}
                  <div className="flex items-center gap-4">
                    {/* FLAG */}
                    <div
                      className="
                        flex
                        h-16
                        w-16
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        border
                        border-slate-100
                        shadow-sm
                        p-1
                      "
                    >
                      <img
                        src={rate.flag}
                        alt={rate.currency}
                        className="
                          h-11
                          w-11
                          rounded-full
                          object-contain
                        "
                      />
                    </div>

                    <div className="flex flex-col justify-center">
                      <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                        Devise
                      </p>
                      <h3 className="text-[20px] font-bold text-[#071133] leading-tight">
                        {rate.currency}
                      </h3>
                      <p className="text-[13px] font-semibold text-slate-900 mt-0.5">
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
                      ${
                        rate.positive
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
                  <p className="text-[22px] font-black tracking-tight text-[#071133]">
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