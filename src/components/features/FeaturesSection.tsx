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
      "
    >
      {/* Background image */}
      <div
        className="
          absolute
          inset-0

          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: `url(${mausoleeImage})`,
        }}
      />

      {/* White cinematic overlay */}
      <div
        className="
          absolute
          inset-0

          bg-white/72
        "
      />

      {/* Blue premium glow */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12),transparent_70%)]
        "
      />

      {/* Blur top */}
      <div
        className="
          absolute
          top-0
          left-0

          h-40
          w-full

          bg-gradient-to-b
          from-white
          to-transparent
        "
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* TOP */}
        <div className="max-w-5xl">
          <p
            className="
              mb-6

              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]

              text-[#2563EB]
            "
          >
            Pourquoi KongoConvert ?
          </p>

          <h2
            className="
              max-w-5xl

              text-5xl
              md:text-6xl
              lg:text-7xl

              font-black

              leading-[1.05]
              tracking-tight

              text-[#020817]
            "
          >
            Une expérience pensée
            <br />
            pour la nouvelle génération
            <br />
            africaine
          </h2>

          <p
            className="
              mt-10

              max-w-3xl

              text-lg
              md:text-xl

              leading-relaxed

              text-slate-700
            "
          >
            Une plateforme moderne inspirée des meilleures fintechs
            mondiales, adaptée aux besoins de la RDC.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-20

            grid
            gap-8

            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          <FeatureCard
            icon={flashIcon}
            title="Rapide"
            description="Des conversions instantanées avec des taux toujours à jour."
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