import { useMemo } from 'react'

type ConverterProps = {
  amount: number
  fromRate: number
  toRate: number
}

export function useConverter({
  amount,
  fromRate,
  toRate,
}: ConverterProps) {
  const convertedAmount = useMemo(() => {
    return ((amount / fromRate) * toRate).toFixed(2)
  }, [amount, fromRate, toRate])

  return {
    convertedAmount,
  }
}