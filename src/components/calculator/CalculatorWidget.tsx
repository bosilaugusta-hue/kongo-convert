import { AnimatePresence, motion } from "framer-motion";
import { Calculator, RotateCcw } from "lucide-react";
import { useState } from "react";

function CalculatorWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  // ========================================
  // Handle Number Input
  // ========================================

  const handleNumber = (num: string) => {
    if (display === "0" || isFinished) {
      setDisplay(num);
      setIsFinished(false);
    } else {
      setDisplay(display + num);
    }

    setEquation(isFinished ? num : equation + num);
  };

  // ========================================
  // Handle Operators
  // ========================================

  const handleOperator = (op: string) => {
    setIsFinished(false);

    if (["+", "-", "*", "/"].includes(equation.slice(-1))) {
      setEquation(equation.slice(0, -1) + op);
      return;
    }

    setEquation(equation + op);
    setDisplay("0");
  };

  // ========================================
  // Calculate Result
  // ========================================

  const handleCalculate = () => {
    try {
      if (!equation) return;

      const match = equation.match(
        /^([\d.]+)([+\-*/])([\d.]+)$/
      );

      if (!match) return;

      const num1 = Number(match[1]);
      const op = match[2];
      const num2 = Number(match[3]);

      let result = 0;

      switch (op) {
        case "+":
          result = num1 + num2;
          break;

        case "-":
          result = num1 - num2;
          break;

        case "*":
          result = num1 * num2;
          break;

        case "/":
          if (num2 === 0) {
            throw new Error("Division by zero");
          }
          result = num1 / num2;
          break;

        default:
          return;
      }

      const formattedResult =
        result.toLocaleString("fr-FR", {
          maximumFractionDigits: 4,
        });

      setDisplay(formattedResult);
      setEquation(result.toString());
      setIsFinished(true);
    } catch {
      setDisplay("Erreur");
      setEquation("");
    }
  };

  // ========================================
  // Reset Calculator
  // ========================================

  const handleClear = () => {
    setDisplay("0");
    setEquation("");
    setIsFinished(false);
  };

  // ========================================
  // Calculator Buttons
  // ========================================

  const buttons = [
    {
      label: "C",
      action: handleClear,
      style:
        "text-red-300 bg-red-500/10 hover:bg-red-500/20 border border-red-400/20",
    },

    {
      label: "÷",
      action: () => handleOperator("/"),
      style:
        "text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-400/20",
    },

    {
      label: "×",
      action: () => handleOperator("*"),
      style:
        "text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-400/20",
    },

    {
      label: "−",
      action: () => handleOperator("-"),
      style:
        "text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-400/20",
    },

    {
      label: "7",
      action: () => handleNumber("7"),
    },

    {
      label: "8",
      action: () => handleNumber("8"),
    },

    {
      label: "9",
      action: () => handleNumber("9"),
    },

    {
      label: "+",
      action: () => handleOperator("+"),
      style:
        "text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-400/20 row-span-2",
    },

    {
      label: "4",
      action: () => handleNumber("4"),
    },

    {
      label: "5",
      action: () => handleNumber("5"),
    },

    {
      label: "6",
      action: () => handleNumber("6"),
    },

    {
      label: "1",
      action: () => handleNumber("1"),
    },

    {
      label: "2",
      action: () => handleNumber("2"),
    },

    {
      label: "3",
      action: () => handleNumber("3"),
    },

    {
      label: "=",
      action: handleCalculate,
      style:
        "bg-blue-600 text-white row-span-2 shadow-[0_10px_30px_rgba(37,99,235,0.4)] hover:bg-blue-500 hover:shadow-[0_15px_40px_rgba(37,99,235,0.6)]",
    },

    {
      label: "0",
      action: () => handleNumber("0"),
      style: "col-span-2",
    },

    {
      label: ",",
      action: () => handleNumber("."),
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Floating Button */}

      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
          flex
          h-14
          w-14
          items-center
          justify-center

          rounded-2xl

          border
          border-white/20

          bg-white/10

          backdrop-blur-xl

          text-white

          shadow-[0_10px_35px_rgba(37,99,235,0.25)]

          transition-all
          duration-300

          hover:scale-105
          hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)]
        "
      >
        <Calculator size={20} strokeWidth={1.5} />
      </motion.button>
      {/* Outer Glow */}

<div
  className="
    absolute

    -inset-3

    rounded-[40px]

    bg-blue-500/15

    blur-3xl

    pointer-events-none
  "
/>

{/* Neon Border */}

<div
  className="
    absolute
    inset-0

    rounded-[32px]

    border
    border-blue-400/40

    shadow-[0_0_20px_rgba(59,130,246,0.45),
            0_0_40px_rgba(59,130,246,0.25),
            0_0_60px_rgba(59,130,246,0.15)]

    pointer-events-none
  "
/>

      {/* Calculator Popup */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 350,
            }}
            className="
              absolute
              bottom-16
              right-0

              w-[320px]

              overflow-hidden

              rounded-[32px]

              border
              border-white/20

              bg-white/10

              backdrop-blur-xl

              p-6

              shadow-[0_25px_80px_rgba(37,99,235,0.35)]
            "
          >
            {/* Glass Overlay */}

            <div
              className="
                absolute
                inset-0

                bg-gradient-to-br
                from-white/15
                via-white/5
                to-transparent

                pointer-events-none
              "
            />

            {/* Content */}

            <div className="relative z-10">
              {/* Header */}

              <div className="mb-4 flex items-center justify-between">
                <span
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-wider
                    text-white/60
                  "
                >
                  Calculatrice
                </span>

                <button
                  type="button"
                  onClick={handleClear}
                  title="Réinitialiser"
                  className="
                    rounded-lg
                    p-1.5

                    text-white/60

                    transition-colors

                    hover:bg-white/10
                    hover:text-white
                  "
                >
                  <RotateCcw size={14} />
                </button>
              </div>

              {/* Display */}

              <div
                className="
                  mb-5

                  rounded-2xl

                  border
                  border-white/15

                  bg-white/10

                  px-4
                  py-4
                "
              >
                <div
                  className="
                    h-4

                    truncate

                    text-right
                    text-[11px]
                    font-medium

                    text-white/60
                  "
                >
                  {equation || "\u00A0"}
                </div>

                <div
                  className="
                    truncate

                    text-right
                    text-2xl
                    font-bold
                    tracking-tight

                    text-white
                  "
                >
                  {display}
                </div>
              </div>

              {/* Buttons Grid */}

              <div className="grid grid-cols-4 gap-2">
                {buttons.map((btn) => (
                  <button
                    key={btn.label}
                    type="button"
                    onClick={btn.action}
                    className={`
                      flex
                      h-11
                      items-center
                      justify-center

                      rounded-xl

                      text-sm
                      font-medium

                      transition-all
                      active:scale-95

                      ${
                        btn.style ||
                        "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                      }
                    `}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CalculatorWidget;