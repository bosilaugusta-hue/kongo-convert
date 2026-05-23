import { useState, useEffect, useMemo } from 'react';
import { currencies } from '../data/currencies';

import { getExchangeRate } from '../services/exchangeService'; 

export function useConverter() {
  const [amount, setAmount] = useState<number>(100);
  const [fromCurrencyCode, setFromCurrencyCode] = useState<string>('USD');
  const [toCurrencyCode, setToCurrencyCode] = useState<string>('CDF');
  
  
  const [liveRate, setLiveRate] = useState<number | null>(null);
  
  const [isLoading, setIsLoading] = useState<boolean>(false);

  
  const fromCurrency = useMemo(() => {
    return currencies.find(c => c.code === fromCurrencyCode) || currencies[0];
  }, [fromCurrencyCode]);

  const toCurrency = useMemo(() => {
    return currencies.find(c => c.code === toCurrencyCode) || currencies[3];
  }, [toCurrencyCode]);

  
  useEffect(() => {
    async function updateRate() {
      setIsLoading(true);
      
      
      const rate = await getExchangeRate(fromCurrencyCode, toCurrencyCode);
      
      if (rate !== null) {
        setLiveRate(rate);
      } else {
        
        const fallbackRate = toCurrency.rate / fromCurrency.rate;
        setLiveRate(fallbackRate);
      }
      
      setIsLoading(false);
    }

    updateRate();
  }, [fromCurrencyCode, toCurrencyCode, fromCurrency.rate, toCurrency.rate]);

  
  const convertedAmount = useMemo(() => {
    if (amount <= 0) return '0.00';
    
    
    if (liveRate === null) return '...';
    
    
    return (amount * liveRate).toFixed(2);
  }, [amount, liveRate]);

  const handleSwitch = () => {
    const temporary = fromCurrencyCode;
    setFromCurrencyCode(toCurrencyCode);
    setToCurrencyCode(temporary);
  };

  return {
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
    currencies
  };
}