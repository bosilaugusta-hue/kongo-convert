import { AnimatePresence, motion } from "framer-motion";
import { Calculator, RotateCcw } from "lucide-react";
import { useState } from "react";

function CalculatorWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  const handleNumber = (num: string) => {
    if (display === "0" || isFinished) {
      setDisplay(num);
      setIsFinished(false);
    } else {
      setDisplay(display + num);
    }
    setEquation(isFinished ? num : equation + num);
  };

  const handleOperator = (op: string) => {
    setIsFinished(false);
    if (["+", "-", "*", "/"].includes(equation.slice(-1))) {
      setEquation(equation.slice(0, -1) + op);
      return;
    }
    setEquation(equation + op);
    setDisplay("0");
  };

  const handleCalculate = () => {
    try {
      if (!equation) return;
      const match = equation.match(/^([\d.]+)([+\-*/])([\d.]+)$/);
      if (!match) return;

      const num1 = Number(match[1]);
      const op = match[2];
      const num2 = Number(match[3]);

      let res = 0;
      switch (op) {
        case "+": res = num1 + num2; break;
        case "-": res = num1 - num2; break;
        case "*": res = num1 * num2; break;
        case "/":
          if (num2 === 0) throw new Error("Division par zéro");
          res = num1 / num2;
          break;
        default: return;
      }

      const formattedResult = res.toLocaleString("fr-FR", { maximumFractionDigits: 4 });
      setDisplay(formattedResult);
      setEquation(res.toString());
      setIsFinished(true);
    } catch {
      setDisplay("Erreur");
      setEquation("");
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setEquation("");
    setIsFinished(false);
  };

  const buttons = [
    { label: "C", action: handleClear, style: "text-red-500 bg-red-50 hover:bg-red-100" },
    { label: "÷", action: () => handleOperator("/"), style: "text-blue-600 bg-blue-50 hover:bg-blue-100" },
    { label: "×", action: () => handleOperator("*"), style: "text-blue-600 bg-blue-50 hover:bg-blue-100" },
    { label: "−", action: () => handleOperator("-"), style: "text-blue-600 bg-blue-50 hover:bg-blue-100" },
    { label: "7", action: () => handleNumber("7") },
    { label: "8", action: () => handleNumber("8") },
    { label: "9", action: () => handleNumber("9") },
    { label: "+", action: () => handleOperator("+"), style: "text-blue-600 bg-blue-50 hover:bg-blue-100 row-span-2" },
    { label: "4", action: () => handleNumber("4") },
    { label: "5", action: () => handleNumber("5") },
    { label: "6", action: () => handleNumber("6") },
    { label: "1", action: () => handleNumber("1") },
    { label: "2", action: () => handleNumber("2") },
    { label: "3", action: () => handleNumber("3") },
    { label: "=", action: handleCalculate, style: "bg-blue-600 text-white hover:bg-blue-700 row-span-2 font-semibold" },
    { label: "0", action: () => handleNumber("0"), style: "col-span-2" },
    { label: ",", action: () => handleNumber(".") },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      
      {/* BOUTON FLOTTANT — minimaliste */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-lg shadow-slate-200/50 ring-1 ring-slate-200/50 transition-all hover:shadow-xl"
      >
        <Calculator size={20} strokeWidth={1.5} />
      </motion.button>

      {/* POP-UP CALCULATRICE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="absolute bottom-16 right-0 w-[280px] overflow-hidden rounded-3xl bg-white p-5 shadow-2xl shadow-slate-300/40 ring-1 ring-slate-100"
          >
            
            {/* EN-TÊTE */}
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Calculatrice
              </span>
              <button
                onClick={handleClear}
                type="button"
                className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                title="Réinitialiser"
              >
                <RotateCcw size={14} />
              </button>
            </div>

            {/* ÉCRAN */}
            <div className="mb-4 rounded-2xl bg-slate-50 px-4 py-3">
              <div className="text-right text-[11px] font-medium text-slate-400 h-4 truncate">
                {equation || "\u00A0"}
              </div>
              <div className="text-right text-2xl font-bold tracking-tight text-slate-900 truncate">
                {display}
              </div>
            </div>

            {/* GRILLE DES TOUCHES */}
            <div className="grid grid-cols-4 gap-2">
              {buttons.map((btn) => (
                <button
                  key={btn.label}
                  onClick={btn.action}
                  type="button"
                  className={`
                    flex h-11 items-center justify-center rounded-xl text-sm font-medium transition-all active:scale-95
                    ${btn.style || "bg-slate-50 text-slate-700 hover:bg-slate-100"}
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
  );
}

export default CalculatorWidget;
