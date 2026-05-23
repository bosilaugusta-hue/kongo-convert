import { ArrowUpDown, Clock3, TrendingUp } from "lucide-react";
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
    <div className="relative w-full max-w-[620px] overflow-hidden rounded-[34px] border border-white/50 bg-white/95 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.18)] backdrop-blur-sm">

      {/* REFLET */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/20 to-transparent" />

      {/* GLOW */}
      <div className="absolute -left-16 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      {/* BARRE RDC */}
      <div className="absolute right-0 top-0 h-full w-[5px] bg-gradient-to-b from-blue-600 via-yellow-400 to-red-500" />

      <div className="relative z-10">

        {/* TOP */}
        <div className="flex items-start justify-between gap-5">

          <div className="flex-1">

            <p className="mb-2 text-sm font-semibold text-[#5B6478]">
              Vous envoyez
            </p>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full bg-transparent text-[44px] font-black leading-none tracking-tight text-[#0B132B] outline-none"
            />

            <p className="mt-2 text-sm text-[#7B849B]">
              ≈ {amount.toLocaleString("fr-FR")} {fromCurrency.code}
            </p>

          </div>

          <div className="w-[150px]">
            <CurrencySelect
              selected={fromCurrency}
              onSelect={(currencyCode) =>
                setFromCurrencyCode(currencyCode)
              }
            />
          </div>

        </div>

        {/* SWITCH */}
        <div className="relative my-8">

          <div className="h-[1px] w-full bg-[#E9EEF5]" />

          <button
            type="button"
            onClick={handleSwitch}
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600 shadow-[0_10px_35px_rgba(37,99,235,0.35)] transition-all duration-300 hover:scale-105"
          >
            <ArrowUpDown size={26} className="text-white" />
          </button>

        </div>

        {/* BOTTOM */}
        <div className="flex items-start justify-between gap-5">

          <div className="flex-1">

            <p className="mb-2 text-sm font-semibold text-[#5B6478]">
              Vous recevez
            </p>

            <h2 className="text-[44px] font-black leading-none tracking-tight text-[#2563FF]">
              {Number(convertedAmount).toLocaleString("fr-FR", {
                maximumFractionDigits: 2,
              })}
            </h2>

            <p className="mt-2 text-sm text-[#7B849B]">
              ≈{" "}
              {Number(convertedAmount).toLocaleString("fr-FR", {
                maximumFractionDigits: 2,
              })}{" "}
              {toCurrency.code}
            </p>

          </div>

          <div className="w-[150px]">
            <CurrencySelect
              selected={toCurrency}
              onSelect={(currencyCode) =>
                setToCurrencyCode(currencyCode)
              }
            />
          </div>

        </div>

        {/* FOOTER */}
        <div className="mt-8 rounded-[24px] bg-[#F8FAFC] p-5">

          <div className="flex items-center justify-between gap-4">

            <div>

              <div className="flex items-center gap-3">

                <p className="text-xl font-black text-[#0B132B]">
                  1 {fromCurrency.code} ={" "}
                  {isLoading ? (
                    <span className="text-sm font-normal text-[#7B849B]">
                      Mise à jour...
                    </span>
                  ) : (
                    liveRate?.toLocaleString("fr-FR", {
                      maximumFractionDigits: 4,
                    })
                  )}{" "}
                  {toCurrency.code}
                </p>

                <p className="text-lg font-bold text-green-500">
                  ▲ 0,56%
                </p>

              </div>

              <div className="mt-3 flex items-center gap-2">

                <Clock3 size={15} className="text-[#7B849B]" />

                <p className="text-sm text-[#7B849B]">
                  Mis à jour il y a 6 secondes
                </p>

              </div>

            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
              <TrendingUp size={22} className="text-[#2563FF]" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ConverterCard;