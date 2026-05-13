import { useState } from 'react'

import {
  ChevronDown,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react'

import drcFlag from '../../assets/flags/cd.png'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Navbar */}
      <header
        className="
          fixed
          top-0
          left-0
          z-50
          w-full

          border-b
          border-white/10

          bg-[#f5f5f7]/95
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between

            px-6
            py-4
          "
        >
          {/* Logo */}
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-2xl

                bg-[#2563eb]

                text-lg
                font-black
                text-white

                shadow-lg
                shadow-blue-500/30
              "
            >
              K
            </div>

            <h1
              className="
                text-4xl
                font-black
                tracking-tight
              "
            >
              <span className="text-[#2563eb]">
                kongo
              </span>

              <span className="text-[#ff3b30]">
                Convert
              </span>
            </h1>
          </div>

          {/* Navigation Desktop */}
          <nav
            className="
              hidden
              items-center
              gap-10

              lg:flex
            "
          >
            {[
              {
                name: 'Convertisseur',
                href: '#convertisseur',
              },
              {
                name: 'Taux',
                href: '#taux',
              },
              {
                name: 'À propos',
                href: '#apropos',
              },
              {
                name: 'FAQ',
                href: '#faq',
              },
              {
                name: 'Contact',
                href: '#contact',
              },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  relative

                  text-base
                  font-semibold
                  text-[#1f2937]

                  transition-all
                  duration-300

                  hover:text-[#2563eb]
                "
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            {/* Theme */}
            <button
              type="button"
              className="
                hidden

                h-12
                w-12

                items-center
                justify-center

                rounded-2xl

                border
                border-black/5

                bg-white

                text-[#111827]

                shadow-lg

                transition-all
                duration-300

                hover:scale-105
                hover:bg-[#f3f4f6]

                lg:flex
              "
            >
              <Sun size={18} />
            </button>

            {/* Language */}
            <button
              type="button"
              className="
                hidden
                items-center
                gap-3

                rounded-2xl

                border
                border-black/5

                bg-white

                px-4
                py-3

                shadow-lg

                transition-all
                duration-300

                hover:scale-[1.02]

                lg:flex
              "
            >
              <img
                src={drcFlag}
                alt="RDC"
                className="
                  h-7
                  w-7

                  rounded-full
                  object-cover
                "
              />

              <span
                className="
                  font-semibold
                  text-[#111827]
                "
              >
                FR
              </span>

              <ChevronDown
                size={16}
                className="text-black/60"
              />
            </button>

            {/* Mobile Button */}
            <button
              type="button"
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
              className="
                flex

                h-12
                w-12

                items-center
                justify-center

                rounded-2xl

                border
                border-black/5

                bg-white

                text-[#111827]

                shadow-lg

                transition-all
                duration-300

                hover:bg-[#f3f4f6]

                lg:hidden
              "
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="
            fixed
            inset-0
            z-40

            flex
            flex-col

            bg-[#020817]/95

            px-8
            pt-32

            backdrop-blur-3xl

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
              {
                name: 'Convertisseur',
                href: '#convertisseur',
              },
              {
                name: 'Taux',
                href: '#taux',
              },
              {
                name: 'À propos',
                href: '#apropos',
              },
              {
                name: 'FAQ',
                href: '#faq',
              },
              {
                name: 'Contact',
                href: '#contact',
              },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  text-3xl
                  font-black

                  text-white/90

                  transition-all
                  duration-300

                  hover:text-[#2563eb]
                "
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Bottom Mobile */}
          <div
            className="
              mt-14

              flex
              items-center
              gap-4
            "
          >
            <button
              type="button"
              className="
                flex

                h-14
                w-14

                items-center
                justify-center

                rounded-2xl

                border
                border-white/10

                bg-white/[0.04]

                text-white

                backdrop-blur-xl
              "
            >
              <Moon size={20} />
            </button>

            <button
              type="button"
              className="
                flex
                items-center
                gap-3

                rounded-2xl

                border
                border-white/10

                bg-white/[0.04]

                px-5
                py-4

                text-white

                backdrop-blur-xl
              "
            >
              <img
                src={drcFlag}
                alt="RDC"
                className="
                  h-7
                  w-7

                  rounded-full
                  object-cover
                "
              />

              <span className="font-semibold">
                FR
              </span>

              <ChevronDown
                size={16}
                className="text-white/60"
              />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar