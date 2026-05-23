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

        py-24
        lg:py-32
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

      {/* LIGHT OVERLAY */}
      <div
        className="
          absolute
          inset-0

          bg-white/10
        "
      />

      {/* LEFT GRADIENT */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-r
          from-white/55
          via-white/10
          to-transparent
        "
      />

      {/* SOFT LIGHT */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b
          from-white/10
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

          bg-blue-500/10

          blur-[120px]
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
        {/* TOP SECTION */}
        <div
          className="
            grid
            items-center
            gap-8

            lg:grid-cols-2
          "
        >
          {/* LEFT CONTENT */}
          <div>
            {/* SMALL TITLE */}
            <div className="mb-6">
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
                  w-20

                  rounded-full

                  bg-blue-600
                "
              />
            </div>

            {/* MAIN TITLE */}
            <h2
              className="
                max-w-[760px]

                text-[52px]
                font-black
                leading-[0.95]

                tracking-[-0.04em]

                text-[#071133]

                md:text-[64px]
                lg:text-[72px]
              "
            >
              Une expérience pensée
              <br />
              pour la{' '}
              <span className="text-blue-600">
                nouvelle génération
              </span>
              <br />
              africaine
            </h2>

            {/* INFO BLOCK */}
            <div
              className="
                mt-10

                flex
                items-center
                gap-4

                rounded-[24px]

                border
                border-white/60

                bg-white/70

                px-5
                py-5

                backdrop-blur-xl

                shadow-[0_8px_30px_rgba(15,23,42,0.08)]
              "
            >
              {/* ICON */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center

                  rounded-full

                  bg-white

                  shadow-md
                "
              >
                <span className="text-xl">🛡️</span>
              </div>

              {/* TEXT */}
              <p
                className="
                  max-w-xl

                  text-base
                  font-medium
                  leading-relaxed

                  text-[#0F172A]
                "
              >
                Une plateforme moderne inspirée des meilleures fintechs
                mondiales, adaptée aux besoins de la RDC.
              </p>
            </div>
          </div>

          {/* RIGHT SPACE */}
          <div />
        </div>

        {/* CARDS */}
        <div
          className="
            mt-14

            grid
            gap-6

            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          <FeatureCard
            icon={flashIcon}
            title="Rapide"
            description="Des conversions instantanées avec les meilleurs taux toujours à jour."
          />

          <FeatureCard
            icon={lockIcon}
            title="Sécurisé"
            description="Une plateforme fiable conçue pour protéger vos données."
          />

          <FeatureCard
            icon={globeIcon}
            title="International"
            description="Suivez facilement les principales devises utilisées en RDC."
          />

          <FeatureCard
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