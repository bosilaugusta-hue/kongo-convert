import FeatureCard from "./FeatureCard"

import phoneIcon from "../../assets/icons/phone-3d.png"
import globeIcon from "../../assets/icons/globe-3d.png"
import lockIcon from "../../assets/icons/lock-3d.png"
import flashIcon from "../../assets/icons/flash-3d.png"

import palaisImage from "../../assets/images/PalaisDuPeuple-Kin.png"

function FeaturesSection() {
  return (
    <section
      className="relative overflow-hidden py-32"
      style={{
        backgroundImage: `url(${palaisImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-[#020817]/90" />

      {/* Gradient premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/95 via-[#020817]/85 to-[#020817]" />

      {/* Glow bleu */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-5xl">
          <p
            className="
              mb-6
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-blue-500
            "
          >
            Pourquoi KongoConvert ?
          </p>

          <h2
            className="
              max-w-5xl
              text-5xl
              font-black
              leading-[1.1]
              tracking-tight
              text-white
              md:text-7xl
            "
          >
            Une expérience de
            <br />
            conversion moderne pour
            <br />
            la RDC
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <FeatureCard
            icon={flashIcon}
            title="Conversion instantanée"
            description="Obtenez les taux de change USD, EUR, CDF et plus en quelques secondes."
          />

          <FeatureCard
            icon={lockIcon}
            title="Données fiables"
            description="Les taux sont mis à jour en temps réel depuis des sources fiables."
          />

          <FeatureCard
            icon={globeIcon}
            title="Pensé pour la RDC"
            description="Une expérience moderne inspirée des fintechs africaines et internationales."
          />

          <FeatureCard
            icon={phoneIcon}
            title="Responsive premium"
            description="Une expérience fluide sur mobile, tablette et ordinateur."
          />
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection