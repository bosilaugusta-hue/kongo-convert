import { motion } from 'framer-motion'
import {
  Globe2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap
} from 'lucide-react'

import mausoleeImage from '../../assets/images/Mausolee-LaurentDesireKabila_Kinshasa.png'

function FeaturesSection() {
  const features = [
    {
      title: 'Rapide',
      subtitle: "Vitesse d'exécution",
      description: 'Des conversions instantanées avec les meilleurs taux toujours à jour.',
      icon: Zap,
      color: 'text-amber-500 bg-amber-50/60 border-amber-200',
    },
    {
      title: 'Sécurisé',
      subtitle: 'Protection totale',
      description: 'Une plateforme fiable conçue pour protéger vos données.',
      icon: ShieldCheck,
      color: 'text-emerald-500 bg-emerald-50/60 border-emerald-200',
    },
    {
      title: 'International',
      subtitle: 'Sans frontières',
      description: 'Suivez facilement les principales devises utilisées en RDC.',
      icon: Globe2,
      color: 'text-blue-500 bg-blue-50/60 border-blue-200',
    },
    {
      title: 'Mobile',
      subtitle: 'Partout avec vous',
      description: 'Une expérience fluide et premium sur tous vos appareils.',
      icon: Smartphone,
      color: 'text-purple-500 bg-purple-50/60 border-purple-200',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15
      }
    },
  }

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
          src={mausoleeImage}
          alt="Mausolée Kinshasa"
          className="w-full h-full min-h-full object-cover object-center brightness-[0.95]
contrast-[1.05] saturate-125"
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
          max-w-7xl
          px-6
          w-full
        "
      >
        {/* HEADER CONTENT */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* SMALL TITLE */}
          <div className="mb-5">
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.28em]
                text-blue-600
              "
            >
              Pourquoi KongoConvert ?
            </p>

            <div
              className="
                mt-3
                h-[3px]
                w-24
                rounded-full
                bg-blue-600
              "
            />
          </div>

          {/* MAIN TITLE */}
          <h2
            className="
              text-[36px]
              font-black
              leading-[1.12]
              tracking-tight
              text-[#071133]
              sm:text-[46px]
              md:text-[50px]
              lg:text-[54px]
              w-full
              max-w-xl
              lg:max-w-[540px]
            "
          >
            Une expérience pensée pour la{' '}
            <span className="text-blue-600">nouvelle génération</span> africaine
          </h2>

          {/* INFO BLOCK / BANNER RENDU PLUS VISIBLE (Même style que l'accueil) */}
          <div
            className="
              mt-8
              max-w-xl
              flex
              items-center
              gap-4
              rounded-[24px]
              border
              border-white
              bg-white/95
              p-5
              backdrop-blur-xl
              shadow-[0_12px_40px_rgba(15,23,42,0.12)]
            "
          >
            <motion.div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EBF1FF]"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            >
              <Sparkles size={22} className="text-blue-600" />
            </motion.div>

            <p
              className="
                text-[15px]
                leading-snug
                font-medium
                text-slate-900
              "
            >
              Une plateforme moderne inspirée des meilleures fintechs
              mondiales, adaptée aux besoins de la RDC.
            </p>
          </div>
        </motion.div>

        {/* CARDS GRID */}
        <motion.div
          className="
            mt-14
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-4
            lg:gap-8
          "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((item) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  boxShadow: "0 30px 60px rgba(37, 99, 255, 0.18)",
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="
                  relative
                  overflow-hidden
                  min-h-[260px]
                  rounded-[24px]
                  border border-white/40
                  bg-white/75
backdrop-blur-xl
                  p-6
                  shadow-[0_15px_45px_rgba(15,23,42,0.12)]
                  flex
                  flex-col
                  justify-between
                  cursor-pointer
                "
              >
                {/* INTERNAL LIGHT EFFECT */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent" />

                {/* TOP CONTENT */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    {/* ICON CONTAINER */}
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
                        border-blue-200/70
                        shadow-sm
                        p-1
                      "
                    >
                      <motion.div
                        className={`flex h-11 w-11 items-center justify-center rounded-full ${item.color}`}
                        whileHover={{ scale: 1.12, rotate: 10 }}
                      >
                        <IconComponent size={21} />
                      </motion.div>
                    </div>
                  </div>

                  {/* CARD TEXTS RENDUS TRÈS LISIBLES */}
                  <div className="mt-6 pl-1">
                    <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                      {item.subtitle}
                    </p>
                    <h3 className="text-[21px] font-black tracking-tight text-[#071133] mt-0.5 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[14px] font-medium text-slate-900 mt-2.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* BOTTOM DECORATIVE LINE */}
                <div className="relative z-10 mt-4 pt-1">
                  <div className="h-[3px] w-8 rounded-full bg-blue-600/70" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection