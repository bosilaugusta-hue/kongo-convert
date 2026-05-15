import FeatureCard from './FeatureCard'

import phoneIcon from '../../assets/icons/phone-3d.png'
import globeIcon from '../../assets/icons/globe-3d.png'
import lockIcon from '../../assets/icons/lock-3d.png'
import flashIcon from '../../assets/icons/flash-3d.png'

import mausoleeImage from '../../assets/images/Mausolee-LaurentDesireKabila_Kinshasa.png'

function FeaturesSection() {
  return (
    <section
      className="
        relative
        overflow-hidden

        py-32
        lg:py-40
      "
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="
          absolute
          inset-0

          bg-cover
          bg-center
          bg-no-repeat

          scale-[1.02]
        "
        style={{
          backgroundImage: `url(${mausoleeImage})`,
        }}
      />

      {/* GLOBAL DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0

          bg-[#041226]/22
        "
      />

      {/* LEFT CINEMATIC GRADIENT */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-r
          from-[#041226]/45
          via-[#041226]/12
          to-transparent
        "
      />

      {/* TOP LIGHT */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b
          from-white/5
          via-transparent
          to-transparent
        "
      />

      {/* BLUE LIGHT */}
      <div
        className="
          absolute
          left-[-120px]
          top-[-120px]

          h-[420px]
          w-[420px]

          rounded-full

          bg-blue-500/20

          blur-[120px]
        "
      />

      {/* GOLD LIGHT */}
      <div
        className="
          absolute
          right-[-120px]
          bottom-[-120px]

          h-[320px]
          w-[320px]

          rounded-full

          bg-yellow-400/10

          blur-[100px]
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
        "
      >
        {/* TOP CONTENT */}
        <div
          className="
            mx-auto

            max-w-5xl

            text-center
          "
        >
          {/* SMALL TITLE */}
          <div className="mb-8 flex flex-col items-center">
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.28em]

                text-[#FFD84D]

                drop-shadow-[0_0_12px_rgba(255,216,77,0.35)]
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

                bg-[#FFD84D]

                shadow-[0_0_18px_rgba(255,216,77,0.45)]
              "
            />
          </div>

          {/* GLASS TEXT CONTAINER */}
          <div
            className="
              inline-block

              rounded-[34px]

              bg-black/8

              px-8
              py-6

              backdrop-blur-[4px]
            "
          >
            {/* MAIN TITLE */}
            <h2
              className="
                text-5xl
                font-black
                leading-[0.92]
                tracking-tight

                text-white

                drop-shadow-[0_10px_35px_rgba(0,0,0,0.35)]

                md:text-6xl
                lg:text-7xl
              "
            >
              Une expérience pensée
              <br />
              pour la nouvelle génération
              <br />
              africaine
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mx-auto
                mt-10

                max-w-3xl

                text-lg
                leading-[1.9]

                text-white/88

                md:text-[22px]
              "
            >
              Une plateforme moderne inspirée des meilleures fintechs
              mondiales, adaptée aux besoins de la RDC.
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div
          className="
            mx-auto
            mt-20

            grid
            max-w-6xl
gap-10

            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          <FeatureCard
            number="01"
            icon={flashIcon}
            title="Rapide"
            description="Des conversions instantanées avec des taux toujours à jour."
          />

          <FeatureCard
            number="02"
            icon={lockIcon}
            title="Sécurisé"
            description="Une plateforme fiable conçue pour protéger vos données."
          />

          <FeatureCard
            number="03"
            icon={globeIcon}
            title="International"
            description="Suivez facilement les principales devises utilisées en RDC."
          />

          <FeatureCard
            number="04"
            icon={phoneIcon}
            title="Mobile"
            description="Une expérience fluide et premium sur tous vos appareils."
          />
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection