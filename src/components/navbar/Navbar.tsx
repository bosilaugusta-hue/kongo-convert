import { useState } from "react"

import {
  ChevronDown,
  Menu,
  X,
} from "lucide-react"

import cdFlag from "../../assets/flags/cd.png"

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false)

  return (
    <>
      {/* Navbar */}
      <header
        className="
          fixed
          left-0
          top-5
          z-50

          w-full
        "
      >
        <div
          className="
            mx-auto

            flex
            max-w-7xl
            items-center
            justify-between

            rounded-full

            border
            border-white/40

            bg-white/75

            px-6
            py-4

            shadow-[0_10px_40px_rgba(15,23,42,0.08)]

            backdrop-blur-2xl
          "
        >
          {/* LEFT */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-2xl

                bg-gradient-to-br
                from-blue-600
                to-blue-500

                text-xl
                font-black

                text-white
              "
            >
              K
            </div>

            {/* Brand */}
            <div>
              <h1
  className="
    text-2xl
    font-black

    leading-none
    tracking-[-0.03em]
  "
>
  <span className="text-blue-600">
    Kongo
  </span>

  <span className="text-red-500">
    Convert
  </span>
</h1>

              <p
                className="
                  text-sm

                  text-slate-500
                "
              >
                Fintech RDC
              </p>
            </div>
          </div>

          {/* CENTER */}
          <nav
            className="
              hidden
              items-center
              gap-10

              lg:flex
            "
          >
            {[
              "Accueil",
              "Convertisseur",
              "Taux",
              "Services",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href="/"
                className="
                  text-[15px]
                  font-semibold

                  text-slate-600

                  transition-all
                  duration-300

                  hover:text-blue-600
                "
              >
                {item}
              </a>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            {/* Country */}
            <button
              type="button"
              className="
                hidden

                items-center
                gap-3

                rounded-2xl

                border
                border-slate-200

                bg-white

                px-4
                py-3

                shadow-sm

                transition-all
                duration-300

                hover:border-blue-200

                lg:flex
              "
            >
              <div
                className="
                  h-8
                  w-8

                  overflow-hidden

                  rounded-full
                "
              >
                <img
                  src={cdFlag}
                  alt="RDC"
                  className="
                    h-full
                    w-full

                    object-cover
                  "
                />
              </div>

              <span
                className="
                  font-semibold

                  text-slate-700
                "
              >
                FR
              </span>

              <ChevronDown
                size={18}
                className="text-slate-400"
              />
            </button>

            {/* Mobile button */}
            <button
              type="button"
              onClick={() =>
                setMobileMenuOpen(
                  !mobileMenuOpen
                )
              }
              className="
                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-2xl

                border
                border-slate-200

                bg-white

                text-slate-700

                shadow-sm

                lg:hidden
              "
            >
              {mobileMenuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div
          className="
            fixed
            inset-0
            z-40

            bg-[#f8fafc]/95

            px-8
            pt-32

            backdrop-blur-2xl

            lg:hidden
          "
        >
          <nav
            className="
              flex
              flex-col
              gap-8
            "
          >
            {[
              "Accueil",
              "Convertisseur",
              "Taux",
              "Services",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href="/"
                className="
                  text-4xl
                  font-black

                  text-slate-900
                "
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}

export default Navbar