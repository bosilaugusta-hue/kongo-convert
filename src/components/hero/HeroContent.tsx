function HeroContent() {
  return (
    <div
      className="
        relative
        z-20

        max-w-[540px]
      "
    >
      {/* Badge */}
     <div
  className="
    inline-flex
    items-center
    gap-3

    rounded-full

    border
    border-emerald-400/30

    bg-emerald-500/15

    backdrop-blur-xl

    px-5
    py-3

    shadow-[0_8px_25px_rgba(16,185,129,0.25)]
  "
>
  <span
  className="
    h-2.5
    w-2.5

    rounded-full

    bg-emerald-400

    animate-pulse

    shadow-[0_0_12px_rgba(52,211,153,0.9)]
  "
/>

  <span
    className="
      text-[12px]
      font-extrabold
      uppercase
      tracking-[0.25em]

      text-white
    "
  >
    TAUX EN TEMPS RÉEL
  </span>
</div>

      {/* Title */}
      <h1
        className="
          max-w-[620px]

          text-[58px]
          font-black

          leading-[0.92]
          tracking-[-3px]

          text-white

          drop-shadow-[0_6px_30px_rgba(0,0,0,0.45)]

          lg:text-7xl
        "
      >
        Convertissez
        <br />
        vos devises avec
        <br />
        <span
          className="
            text-blue-500

            drop-shadow-[0_0_18px_rgba(37,99,235,0.45)]
          "
        >
          élégance
        </span>
      </h1>

      {/* Description */}
<div
  className="
    mt-8

    max-w-[560px]

    rounded-3xl

    bg-white/95

    p-6

    shadow-[0_15px_40px_rgba(0,0,0,0.12)]

    backdrop-blur-md
  "
>
  <p
    className="
      text-lg

      leading-9

      font-medium

      text-slate-800
    "
  >
    La plateforme moderne de conversion pensée pour la

    <span className="font-bold text-blue-600">
      {" "}
      République Démocratique du Congo.
    </span>
  </p>
</div>

      {/* Buttons */}
      <div
        className="
          mt-10

          flex
          flex-col

          gap-4

          sm:flex-row
        "
      >
        {/* Primary Button */}
        <button
          type="button"
          className="
            h-[60px]

            rounded-2xl

            bg-blue-600

            px-8

            font-semibold
            text-white

            shadow-[0_10px_40px_rgba(37,99,235,0.45)]

            transition-all
            duration-300

            hover:scale-[1.02]
            hover:bg-blue-500
          "
        >
          Commencer
        </button>

        {/* Secondary Button */}
        <button
          type="button"
          className="
            h-[60px]

            rounded-2xl

            border
            border-white/10

            bg-white/8

            px-8

            font-semibold
            text-white

            backdrop-blur-xl

            transition-all
            duration-300

            hover:border-white/30
            hover:bg-white/20
          "
        >
          Voir les taux →
        </button>
      </div>
    </div>
  )
}

export default HeroContent