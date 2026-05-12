import { useEffect, useState } from 'react'

import { currencies } from '../../data/currencies'

import { getExchangeRate } from '../../services/exchangeService'

function ConverterCard() {
  const [amount, setAmount] = useState(100)

  const [fromCurrency, setFromCurrency] =
    useState('USD')

  const [toCurrency, setToCurrency] =
    useState('CDF')

  const [exchangeRate, setExchangeRate] =
    useState(0)

  const [loading, setLoading] =
    useState(true)

  const [error, setError] =
    useState(false)

  const convertedAmount =
    amount * exchangeRate

  function switchCurrencies() {
    setFromCurrency(toCurrency)

    setToCurrency(fromCurrency)
  }

  function getCurrencyData(code: string) {
    return currencies.find(
      (currency) => currency.code === code
    )
  }

  const fromCurrencyData =
    getCurrencyData(fromCurrency)

  const toCurrencyData =
    getCurrencyData(toCurrency)

  useEffect(() => {
    async function fetchRate() {
      setLoading(true)

      const rate =
        await getExchangeRate(
          fromCurrency,
          toCurrency
        )

      if (rate) {
        setExchangeRate(rate)

        setError(false)
      } else {
        setError(true)
      }

      setLoading(false)
    }

    fetchRate()
  }, [fromCurrency, toCurrency])

  return (
    <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-[32px] p-5 sm:p-8 shadow-2xl transition hover:scale-[1.01] duration-300">

      {/* Envoi */}
      <div className="flex justify-between items-center gap-4">

        <div className="flex-1">

          <p className="text-gray-300">
            Vous envoyez
          </p>

          <input
            type="number"
            value={amount}
            onChange={(event) =>
              setAmount(
                Number(event.target.value)
              )
            }
            className="bg-transparent text-white text-4xl sm:text-5xl font-bold mt-4 outline-none w-full"
          />

        </div>

        {/* Devise départ */}
        <div className="bg-white rounded-2xl px-4 py-3 min-w-[170px] shadow-md">

          <div className="flex items-center gap-3">

            <span className="text-3xl">
              {fromCurrencyData?.flag}
            </span>

            <div>

              <p className="font-bold text-[#0B1020]">
                {fromCurrency}
              </p>

              <p className="text-xs text-gray-500">
                {fromCurrencyData?.name}
              </p>

            </div>

          </div>

          <select
            value={fromCurrency}
            onChange={(event) =>
              setFromCurrency(
                event.target.value
              )
            }
            className="bg-transparent text-sm outline-none w-full text-gray-700 mt-3"
          >

            {
              currencies.map((currency) => (
                <option
                  key={currency.code}
                  value={currency.code}
                >
                  {currency.code}
                </option>
              ))
            }

          </select>

        </div>

      </div>

      {/* Switch */}
      <div className="flex justify-center py-8">

        <button
          type="button"
          onClick={switchCurrencies}
          className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl shadow-lg hover:bg-blue-700 hover:rotate-180 transition duration-500"
        >
          ⇅
        </button>

      </div>

      {/* Réception */}
      <div className="flex justify-between items-center gap-4">

        <div className="flex-1">

          <p className="text-gray-300">
            Vous recevez
          </p>

          <h2 className="text-blue-400 text-4xl sm:text-5xl font-bold mt-4 break-words">

            {
              loading
                ? 'Chargement...'
                : convertedAmount.toLocaleString(
                    'fr-FR',
                    {
                      maximumFractionDigits: 2,
                    }
                  )
            }

          </h2>

        </div>

        {/* Devise arrivée */}
        <div className="bg-white rounded-2xl px-4 py-3 min-w-[170px] shadow-md">

          <div className="flex items-center gap-3">

            <span className="text-3xl">
              {toCurrencyData?.flag}
            </span>

            <div>

              <p className="font-bold text-[#0B1020]">
                {toCurrency}
              </p>

              <p className="text-xs text-gray-500">
                {toCurrencyData?.name}
              </p>

            </div>

          </div>

          <select
            value={toCurrency}
            onChange={(event) =>
              setToCurrency(
                event.target.value
              )
            }
            className="bg-transparent text-sm outline-none w-full text-gray-700 mt-3"
          >

            {
              currencies.map((currency) => (
                <option
                  key={currency.code}
                  value={currency.code}
                >
                  {currency.code}
                </option>
              ))
            }

          </select>

        </div>

      </div>

      {/* Taux */}
      <div className="mt-10 bg-white/10 rounded-2xl p-5 border border-white/10">

        <p className="text-white text-lg">

          1 {fromCurrency} ={' '}
          {exchangeRate.toLocaleString(
            'fr-FR',
            {
              maximumFractionDigits: 2,
            }
          )}{' '}
          {toCurrency}

        </p>

        <p className="text-green-400 mt-2">
          Temps réel
        </p>

        {
          error && (
            <p className="text-red-400 mt-4">

              Impossible de charger les taux

            </p>
          )
        }

      </div>

    </div>
  )
}

export default ConverterCard