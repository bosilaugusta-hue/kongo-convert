import { motion } from 'framer-motion'

type FeatureCardProps = {
  icon: string
  title: string
  description: string
  number: string
}

function FeatureCard({
  icon,
  title,
  description,
  number,
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
        y: -8,
      }}
      className="
        group
        relative

        overflow-hidden

        rounded-[30px]

        border
        border-white/22

        bg-white/[0.08]

        backdrop-blur-[16px]

        p-7

        shadow-[0_10px_40px_rgba(0,0,0,0.22)]

        transition-all
        duration-500
      "
    >
      {/* GLASS LIGHT */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-white/12
          via-transparent
          to-transparent
        "
      />

      {/* TOP LIGHT */}
      <div
        className="
          absolute
          inset-x-0
          top-0

          h-[1px]

          bg-white/30
        "
      />

      {/* NUMBER */}
      <div
        className="
          absolute
          right-6
          top-5

          text-sm
          font-bold

          tracking-widest

          text-white/75
        "
      >
        {number}
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        {/* ICON CONTAINER */}
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
            border-[#3b82f6]/70

            bg-transparent

            shadow-[0_0_30px_rgba(37,99,235,0.25)]

            transition-all
            duration-500

            group-hover:scale-105
          "
        >
          <img
            src={icon}
            alt={title}
            className="
              h-16
              w-16

              object-contain
            "
          />
        </div>

        {/* TITLE */}
        <h3
          className="
    mt-6

    text-[28px]
    font-black
    leading-none
    tracking-[-0.02em]

    text-white

    drop-shadow-[0_5px_18px_rgba(0,0,0,0.25)]
  "
>
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            mt-5

            text-[17px]
            leading-[1.9]

            text-white/80
          "
        >
          {description}
        </p>

        {/* BOTTOM LINE */}
        <div
          className="
            mt-8

            h-[3px]
            w-14

            rounded-full

            bg-[#2596ff]
          "
        />
      </div>
    </motion.div>
  )
}

export default FeatureCard