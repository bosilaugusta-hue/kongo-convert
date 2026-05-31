import { motion } from "framer-motion";
import heroImage from "../../assets/images/Kinshasa.png";
import waxPattern from "../../assets/images/wax-pattern.png";
import { translations } from "../../translations";
import { fadeInUp, floatingAnimation } from "../../utils/animations";
import ConverterCard from "../converter/ConverterCard";

interface HeroSectionProps {
  langCode: "FR" | "EN" | "LN";
}

function HeroSection({ langCode }: HeroSectionProps) {
  const t = translations[langCode];

  return (
    <section className="relative min-h-screen w-full overflow-hidden border border-black/10 bg-white flex items-center justify-center">
      {/* WAX PATTERN (Haut fixe et arrondi, bas étiré qui plonge vers le footer) */}
      <div className="absolute top-[35%] bottom-0 -mb-20 left-0 z-20 hidden w-[70px] overflow-hidden rounded-tr-[26px] shadow-[5px_0_15px_rgba(0,0,0,0.1)] sm:block sm:w-[85px] lg:w-[110px]">
        <div
          className="h-full w-full bg-cover bg-repeat-y bg-top"
          style={{ backgroundImage: `url(${waxPattern})` }}
        />
      </div>

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Kinshasa"
          className="h-full w-full object-cover brightness-[1.05] contrast-[1.08] saturate-[1.25]"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex max-w-[1400px] w-full flex-col items-center justify-center gap-10 px-5 pb-16 pt-44 sm:px-8 sm:pt-48 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-20 lg:pb-12 lg:pt-40">
        {/* TEXTE */}
        <div className="max-w-[560px] text-center lg:text-left">
          {/* BADGE */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-1.5 shadow-sm backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-900">
              {t.badge}
            </span>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-[44px] font-black leading-[0.95] tracking-[-0.04em] text-slate-900 drop-shadow-[0_2px_10px_rgba(255,255,255,0.35)] sm:text-[58px] lg:text-7xl"
          >
            {t.title1}
            <br />
            {t.title2}
            <br />
            <span className="text-blue-600">{t.title3}</span>
          </motion.h1>

          {/* DESCRIPTION BLOC */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-md rounded-2xl border border-white bg-white/95 px-6 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-md lg:mx-0"
          >
            <p className="text-[15px] leading-relaxed text-slate-900 font-medium sm:text-base">
              {t.description}
            </p>
          </motion.div>

          {/* BUTTON */}
          <motion.button
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            type="button"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-[0_15px_40px_rgba(37,99,235,0.35)] transition-all duration-300 hover:bg-blue-700 sm:px-8 sm:py-4 sm:text-base"
          >
            {t.button}
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-labelledby="arrow-title"
            >
              <title id="arrow-title">Flèche vers la droite</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.button>
        </div>

        {/* CONVERTER */}
        <motion.div
          animate={floatingAnimation}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="flex w-full max-w-[360px] justify-center sm:max-w-[460px] lg:max-w-[620px]"
        >
          <ConverterCard />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;