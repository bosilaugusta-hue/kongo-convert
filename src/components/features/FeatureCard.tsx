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
        y: -10,
        scale: 1.02,
      }}
      className="
        group
        relative

        overflow-hidden

        rounded-[34px]

        border
        border-white/20

        bg-white/10

        backdrop-blur-3xl

        p-8

        transition-all
        duration-500

        hover:border-blue-400/30

        shadow-[0_20px_60px_rgba(15,23,42,0.18)]

        hover:shadow-[0_25px_80px_rgba(37,99,235,0.18)]
      "
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Glass reflection */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-white/20
          via-white/5
          to-transparent

          opacity-80
        "
      />

      {/* Blue glow */}
      <div
        className="
          absolute
          -right-24
          -top-24

          h-48
          w-48

          rounded-full

          bg-blue-500/10

          blur-3xl
        "
      />

      {/* Hover glow */}
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

      {/* Content */}
      <div className="relative z-10">
        {/* ICON */}
        <div
          className="
            mb-8

            flex
            h-24
            w-24
            items-center
            justify-center

            rounded-full

            border
            border-white/20

            bg-blue-500/15

            backdrop-blur-xl

            shadow-[0_0_50px_rgba(37,99,235,0.35)]

            transition-all
            duration-500

            group-hover:scale-105
          "
        >
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center

              rounded-full

              bg-[#2563eb]

              shadow-[0_10px_30px_rgba(37,99,235,0.35)]
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
        </div>

        {/* TITLE */}
        <h3
          className="
            mb-4

            text-[34px]
            font-black
            leading-none
            tracking-tight

            text-white

            drop-shadow-[0_4px_20px_rgba(0,0,0,0.25)]
          "
        >
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            text-lg
            leading-relaxed

            text-white/75
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
            via-cyan-300
            to-transparent

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