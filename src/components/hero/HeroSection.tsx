import kinshasaImage from '../../assets/images/Kinshasa.jpeg'

import HeroContent from './HeroContent'
import ConverterCard from '../converter/ConverterCard'

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(11,16,32,0.95),
            rgba(11,16,32,0.85)
          ),
          url(${kinshasaImage})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-20 lg:py-32">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <HeroContent />

          <ConverterCard />

        </div>

      </div>
    </section>
  )
}

export default HeroSection