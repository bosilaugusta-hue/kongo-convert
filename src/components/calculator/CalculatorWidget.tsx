import { AnimatePresence, motion } from 'framer-motion'
import { Calculator, RotateCcw, X } from 'lucide-react'
import { useState } from 'react'

export function CalculatorWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [display, setDisplay] = useState('0')
  const [equation, setEquation] = useState('')
  const [isFinished, setIsFinished] = useState(false)

  const handleNumber = (num: string) => {
    if (display === '0' || isFinished) {
      setDisplay(num)
      setIsFinished(false)
    } else {
      setDisplay(display + num)
    }
    setEquation(isFinished ? num : equation + num)
  }

  const handleOperator = (op: string) => {
    setIsFinished(false)
    if (['+', '-', '*', '/'].includes(equation.slice(-1))) {
      setEquation(equation.slice(0, -1) + op)
      return
    }
    setEquation(equation + op)
    setDisplay('0')
  }

  const handleCalculate = () => {
  try {
    if (!equation) return;

    // On sépare les nombres et l'opérateur (ex: "100+50" -> nombres: ["100", "50"], opérateur: "+")
    const match = equation.match(/^([\d.]+)([+\-*/])([\d.]+)$/);
    if (!match) return;

    const num1 = Number(match[1]);
    const op = match[2];
    const num2 = Number(match[3]);

    let res = 0;
    switch (op) {
      case '+': res = num1 + num2; break;
      case '-': res = num1 - num2; break;
      case '*': res = num1 * num2; break;
      case '/': 
        if (num2 === 0) throw new Error("Div par 0");
        res = num1 / num2; 
        break;
      default: return;
    }

    const formattedResult = res.toLocaleString('fr-FR', { maximumFractionDigits: 4 });
    setDisplay(formattedResult);
    setEquation(res.toString());
    setIsFinished(true);
  } catch {
    setDisplay('Erreur');
    setEquation('');
  }
};

  const handleClear = () => {
    setDisplay('0')
    setEquation('')
    setIsFinished(false)
  }

  const buttons = [
    { label: 'C', action: handleClear, className: 'bg-red-50 text-red-500 hover:bg-red-100' },
    { label: '÷', action: () => handleOperator('/'), className: 'bg-blue-50 text-blue-600 hover:bg-blue-100' },
    { label: '×', action: () => handleOperator('*'), className: 'bg-blue-50 text-blue-600 hover:bg-blue-100' },
    { label: '-', action: () => handleOperator('-'), className: 'bg-blue-50 text-blue-600 hover:bg-blue-100' },
    { label: '7', action: () => handleNumber('7') },
    { label: '8', action: () => handleNumber('8') },
    { label: '9', action: () => handleNumber('9') },
    { label: '+', action: () => handleOperator('+'), className: 'bg-blue-50 text-blue-600 hover:bg-blue-100 row-span-2 h-full' },
    { label: '4', action: () => handleNumber('4') },
    { label: '5', action: () => handleNumber('5') },
    { label: '6', action: () => handleNumber('6') },
    { label: '1', action: () => handleNumber('1') },
    { label: '2', action: () => handleNumber('2') },
    { label: '3', action: () => handleNumber('3') },
    { label: '=', action: handleCalculate, className: 'bg-blue-600 text-white hover:bg-blue-500 row-span-2 h-full font-bold' },
    { label: '0', action: () => handleNumber('0'), className: 'col-span-2' },
    { label: '.', action: () => handleNumber('.') },
  ]

  return (
   <div className="fixed bottom-6 right-6 z-[99999]">
      {/* BOUTON FLOTTANT CALCULATRICE */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 outline-none hover:bg-blue-500 transition-colors"
      >
       {isOpen ? "Fermer [X]" : "Ouvrir 🧮"}
      </motion.button>

      {/* POP-UP INTERACTIVE DE LA CALCULATRICE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.85 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="absolute bottom-20 right-0 w-[300px] overflow-hidden rounded-[28px] border border-white/60 bg-white/85 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.15)] backdrop-blur-xl"
          >
            {/* EN-TÊTE DE LA CALCULATRICE */}
            <div className="flex items-center justify-between border-b border-slate-200/60 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Calculatrice</span>
              <button 
                onClick={handleClear}
                type="button"
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                title="Réinitialiser"
              >
                <RotateCcw size={14} />
              </button>
            </div>

            {/* ÉCRAN D'AFFICHAGE */}
            <div className="my-4 flex flex-col items-end justify-center rounded-2xl bg-slate-50/50 px-4 py-3 border border-slate-100/50">
              <span className="h-4 text-[11px] font-medium text-slate-400 tracking-wide truncate max-w-full">
                {equation || ' '}
              </span>
              <span className="mt-1 text-2xl font-black text-[#071133] tracking-tight truncate max-w-full">
                {display}
              </span>
            </div>

            {/* GRILLE DES TOUCHES */}
            <div className="grid grid-cols-4 gap-2.5">
              {buttons.map((btn) => (
                <button
                  key={btn.label}
                  onClick={btn.action}
                  type="button"
                  className={`
                    flex h-11 items-center justify-center rounded-xl text-sm font-semibold outline-none transition-all duration-150 active:scale-95
                    ${btn.className || 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-100 shadow-sm'}
                  `}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

