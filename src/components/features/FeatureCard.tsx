import { motion } from 'framer-motion'

type FeatureCardProps = {
  icon: string
  title: string
  description: string
}

function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -6,
      }}
      className="
        relative

        min-h-[210px]

        overflow-hidden

        rounded-[30px]

        border
        border-white/55

        bg-white/55

        p-6

        backdrop-blur-xl

        shadow-[0_10px_35px_rgba(15,23,42,0.08)]

        transition-all
        duration-500

        hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]
      "
    >
      {/* LIGHT EFFECT */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-white/30
          via-transparent
          to-transparent
        "
      />

      {/* CONTENT */}
      <div className="relative z-10">
        {/* ICON */}
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center

            rounded-full

            border
            border-blue-500/70

            bg-transparent

            shadow-[0_0_20px_rgba(37,99,235,0.15)]
          "
        >
          <img
            src={icon}
            alt={title}
            className="
              h-9
              w-9

              object-contain
            "
          />
        </div>

        {/* TITLE */}
        <h3
          className="
            mt-5

            text-[16px]
            font-black
            leading-tight

            text-[#071133]
          "
        >
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            mt-3

            text-[13px]
            leading-[1.8]

            text-[#1E293B]
          "
        >
          {description}
        </p>

        {/* BLUE LINE */}
        <div
          className="
            mt-5

            h-[3px]
            w-10

            rounded-full

            bg-blue-600
          "
        />
      </div>
    </motion.div>
  )
}

export default FeatureCard