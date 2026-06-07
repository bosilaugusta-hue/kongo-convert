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

      <div
        className="
    absolute

    top-0
    bottom-0

    -left-8

    z-20

    hidden

    w-[75px]

    overflow-hidden

    sm:block
    lg:w-[90px]
  "
      >
        <div
          className="
    h-full
    w-full

    opacity-90

    bg-cover
    bg-repeat-y
    bg-center
  "
          style={{
            backgroundImage: `url(${waxPattern})`,
          }}
        />
        <div
          className="
    absolute
    inset-0

    bg-gradient-to-r
    from-black/35
    via-black/10
    to-transparent
  "
        />
      </div>

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Kinshasa"
          className="
h-full
w-full

object-cover scale-[1.08]

scale-[1.03]

brightness-[0.95]

contrast-[1.08]

saturate-[1.10]
"
        />
        <div
          className="
    absolute
    inset-0

    bg-gradient-to-r
    from-black/35
    via-black/10
    to-transparent
  "
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
            className="
mb-6
inline-flex
items-center
gap-2

rounded-full

border
border-white/30

bg-white/20

px-4
py-2

backdrop-blur-xl

shadow-[0_8px_25px_rgba(0,0,0,0.12)]
"
          >
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-900">
              {t.badge}
            </span>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-[44px] font-black leading-[0.95] tracking-[-0.04em] text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.25)] sm:text-[58px] lg:text-7xl"
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
            className="
mx-auto
mt-8
max-w-md

rounded-[30px]

border
border-white/20

bg-white/10

px-6
py-5

backdrop-blur-xl

shadow-[0_20px_50px_rgba(0,0,0,0.15)]

lg:mx-0
"
          >
            <p className="text-[15px] leading-relaxed text-white font-medium sm:text-base">
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