import ConverterCard from "../converter/ConverterCard";

import heroImage from "../../assets/images/Kinshasa.png";

import waxPattern from "../../assets/images/wax-pattern.png";

import { translations } from "../../translations";

interface HeroSectionProps {
  langCode: "FR" | "EN" | "LN";
}

function HeroSection({
  langCode,
}: HeroSectionProps) {

  const t = translations[langCode];

  return (
    <section className="relative w-full min-h-screen overflow-hidden border border-black/10 bg-white">

      {/* WAX PATTERN BAS GAUCHE */}
      <div className="absolute bottom-0 left-0 z-20 h-[420px] w-[90px] overflow-hidden rounded-tr-[30px] shadow-[5px_0_15px_rgba(0,0,0,0.1)] lg:h-[520px] lg:w-[110px]">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${waxPattern})`,
          }}
        />
      </div>

      {/* IMAGE DE FOND */}
      <div className="absolute inset-0 z-0">

        <img
          src={heroImage}
          alt="Kinshasa"
          className="
            h-full
            w-full
            object-cover

            brightness-[1.05]
            contrast-[1.08]
            saturate-[1.15]
          "
        />

      </div>

      {/* CONTENU */}
      <div className="
        relative
        z-10

        mx-auto

        flex
        min-h-screen
        max-w-[1400px]
        items-center
        justify-between
        gap-16

        px-8
        lg:px-20
      ">

        {/* TEXTE */}
        <div className="max-w-[520px]">

          {/* BADGE */}
          <div className="
            mb-6

            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-blue-100

            bg-white/90

            px-4
            py-1.5

            shadow-sm
            backdrop-blur-sm
          ">

            <span className="h-2 w-2 rounded-full bg-green-500" />

            <span className="
              text-[10px]
              font-bold
              uppercase
              text-blue-900
            ">
              {t.badge}
            </span>

          </div>

          {/* TITRE */}
          <h1 className="
            text-5xl
            font-black
            leading-[1.05]
            tracking-tight

            text-slate-900

            drop-shadow-[0_2px_10px_rgba(255,255,255,0.35)]

            lg:text-7xl
          ">
            {t.title1}
            <br />

            {t.title2}
            <br />

            <span className="text-blue-600">
              {t.title3}
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p className="
            mt-8
            max-w-md

            text-lg
            leading-relaxed

            text-slate-700
          ">
            {t.description}
          </p>

          {/* BUTTON */}
          <button
            type="button"
            className="
              mt-10

              rounded-2xl

              bg-blue-600

              px-8
              py-4

              font-bold
              text-white

              shadow-[0_15px_40px_rgba(37,99,235,0.35)]

              transition-all
              duration-300

              hover:scale-105
              hover:bg-blue-700
            "
          >
            {t.button}
          </button>

        </div>

        {/* CONVERTER */}
        <div className="
          flex
          w-full
          max-w-[620px]
          justify-center
        ">

          <ConverterCard />

        </div>

      </div>
    </section>
  );
}

export default HeroSection;