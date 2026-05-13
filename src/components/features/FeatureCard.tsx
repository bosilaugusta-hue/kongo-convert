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
        y: -14,
        scale: 1.04,
        rotateX: 4,
        rotateY: -4,
      }}
      className="
        group
        relative
        overflow-hidden

        rounded-[32px]

        border
        border-white/15

        hover:border-blue-400/40

        bg-[#020817]/55

        backdrop-blur-xl

        p-8

        transition-all
        duration-500

        hover:shadow-[0_20px_80px_rgba(37,99,235,0.25)]
      "
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-blue-500/10
          via-transparent
          to-transparent

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      {/* Blur background */}
      <div
        className="
          absolute
          -top-24
          -right-24

          h-48
          w-48

          rounded-full

          bg-blue-500/10

          blur-3xl
        "
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div
          className="
            mb-8

            flex
            h-28
            w-28
            items-center
            justify-center

            rounded-full

            border
            border-white/10

            bg-blue-500/20

            shadow-[0_0_60px_rgba(37,99,235,0.45)]

            transition-all
            duration-500

            group-hover:scale-110
          "
        >
          <div
            className="
              flex
              h-20
              w-20
              items-center
              justify-center

              rounded-full

              bg-[#2563eb]
            "
          >
            <img
              src={icon}
              alt={title}
              className="
                h-12
                w-12

                object-contain
              "
            />
          </div>
        </div>

        {/* Title */}
        <h3
          className="
            mb-4

            text-[38px]
            font-black
            leading-none
            tracking-tight

            text-white
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            text-lg
            leading-relaxed

            text-white/70
          "
        >
          {description}
        </p>

        {/* Bottom line */}
        <div
          className="
            mt-8

            h-[2px]
            w-0

            bg-gradient-to-r
            from-blue-400
            to-cyan-400

            transition-all
            duration-500

            group-hover:w-full
          "
        />
      </div>
    </motion.div>
  )
}

export default FeatureCard