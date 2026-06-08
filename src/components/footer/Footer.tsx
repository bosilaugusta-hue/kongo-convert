import { FileText, Grid, Home, Info, Lock, Mail, ShieldCheck, TrendingUp } from "lucide-react";

interface FooterProps {
  langCode: "FR" | "EN" | "LN";
  setActiveTab: (tab: "accueil" | "taux" | "services" | "contact") => void;
}

function Footer({ langCode, setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    FR: {
      navigation: "Navigation",
      accueil: "Accueil",
      taux: "Taux",
      services: "Services",
      contact: "Contact",
      legal: "Légal",
      mentions: "Mentions légales",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      followUs: "Suivez-nous",
      copyright: `© ${currentYear} KongoConvert. Tous droits réservés.`,
      secured: "Plateforme sécurisée",
      madeWith: "Fait avec",
      by: "par"
    },
    EN: {
      navigation: "Navigation",
      accueil: "Home",
      taux: "Rates",
      services: "Services",
      contact: "Contact",
      legal: "Legal",
      mentions: "Legal notices",
      privacy: "Privacy policy",
      terms: "Terms of use",
      followUs: "Follow us",
      copyright: `© ${currentYear} KongoConvert. All rights reserved.`,
      secured: "Secure platform",
      madeWith: "Made with",
      by: "by"
    },
    LN: {
      navigation: "Navigation",
      accueil: "Accueil",
      taux: "Taux",
      services: "Services",
      contact: "Contact",
      legal: "Légal",
      mentions: "Mentions légales",
      privacy: "Politique ya confidentialité",
      terms: "Conditions ya kosalela",
      followUs: "Landa biso",
      copyright: `© ${currentYear} KongoConvert. Droits nionso ebombami.`,
      secured: "Plateforme ya bokengi",
      madeWith: "Esalami na",
      by: "na"
    },
  };

  const t = footerLinks[langCode] || footerLinks.FR;

  <div
  className="
    h-px
    w-full

    bg-gradient-to-r
    from-transparent
    via-blue-500/20
    to-transparent
  "
/>

  return (
   <footer
  className="
    relative
    z-20

    bg-gradient-to-b
    from-white
    to-slate-50

    pt-12
    pb-8
  "
>
{/* BLUE GLOW */}

<div
  className="
    pointer-events-none

    absolute
    left-1/2
    top-0

    h-[300px]
    w-[600px]

    -translate-x-1/2

    rounded-full

    bg-blue-500/10

    blur-[120px]
  "
/>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* GRID PRINCIPAL */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12 pb-8 items-start">
          
          {/* LOGO + DESCRIPTION */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            <div className="flex items-center gap-3">
              <div
  className="
    flex
    h-14
    w-14
    items-center
    justify-center

    rounded-2xl

    bg-blue-600

    text-xl
    font-black
    text-white

    shadow-[0_10px_25px_rgba(37,99,235,0.25)]
  "
>
                K
              </div>
              <div>
                <div className="text-2xl font-black leading-none tracking-tight">
                  <span className="text-slate-900">Kongo</span>
                  <span className="text-blue-600">Convert</span>
                </div>
                <p className="mt-0.5 text-xs font-semibold text-slate-400">
                  Fintech RDC
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-600 max-w-sm font-medium">
              La plateforme moderne de conversion de devises pensée pour la
              République Démocratique du Congo.
            </p>

            <div className="flex flex-col space-y-3 pt-2 text-sm font-semibold text-blue-600">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 stroke-[2.5]" />
                <span className="text-slate-700 font-medium">Sûr et fiable</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="h-4 w-4 stroke-[2.5]" />
                <span className="text-slate-700 font-medium">Taux en temps réel</span>
              </div>
              <div className="flex items-center gap-3">
                <Info className="h-4 w-4 stroke-[2.5]" />
                <span className="text-slate-700 font-medium">Support local</span>
              </div>
            </div>
          </div>

          {/* NAVIGATION */}
          <div
  className="
    lg:col-span-3

    flex
    flex-col
    space-y-5

    lg:pl-6

    rounded-[24px]

    border
    border-white/20

    bg-white/40

    p-5

    backdrop-blur-xl

    shadow-[0_10px_30px_rgba(0,0,0,0.05)]
  "
>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {t.navigation}
            </h4>
            <div className="flex flex-col space-y-4"> 
              <button
                type="button"
                onClick={() => setActiveTab("accueil")}
                className="flex items-center gap-3.5 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors text-left"
              >
                <Home className="h-4 w-4 text-blue-600" />
                {t.accueil}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("taux")}
                className="flex items-center gap-3.5 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors text-left border-t border-slate-100 pt-3"
              >
                <TrendingUp className="h-4 w-4 text-blue-600" />
                {t.taux}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("services")}
                className="flex items-center gap-3.5 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors text-left border-t border-slate-100 pt-3"
              >
               <Grid className="h-4 w-4 text-blue-600" />
                {t.services}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("contact")}
                className="flex items-center gap-3.5 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors text-left border-t border-slate-100 pt-3"
              >
               <Mail className="h-4 w-4 text-blue-600" />
                {t.contact}
              </button>
            </div>
          </div>

          {/* LÉGAL */}
          <div
  className="
    lg:col-span-3

    flex
    flex-col
    space-y-5

    rounded-[24px]

    border
    border-white/20

    bg-white/40

    p-5

    backdrop-blur-xl

    shadow-[0_10px_30px_rgba(0,0,0,0.05)]
  "
>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {t.legal}
            </h4>
            <div className="flex flex-col space-y-4">
              <a
                href="#mentions"
                className="flex items-center gap-3.5 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
              >
                <FileText className="h-4 w-4 text-slate-800" />
                {t.mentions}
              </a>

              <a
                href="#privacy"
                className="flex items-center gap-3.5 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors border-t border-slate-100 pt-3"
              >
                <Lock className="h-4 w-4 text-slate-800" />
                {t.privacy}
              </a>

              <a
                href="#terms"
                className="flex items-center gap-3.5 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors border-t border-slate-100 pt-3"
              >
                <Info className="h-4 w-4 text-slate-800" />
                {t.terms}
              </a>
            </div>
          </div>

          {/* SUIVEZ-NOUS */}
          <div
  className="
    lg:col-span-2

    flex
    flex-col
    space-y-5

    rounded-[24px]

    border
    border-white/20

    bg-white/40

    p-5

    backdrop-blur-xl

    shadow-[0_10px_30px_rgba(0,0,0,0.05)]
  "
>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {t.followUs}
            </h4>
            <div className="flex">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
flex
h-11
w-11
items-center
justify-center

rounded-xl

border
border-white/30

bg-white/60

backdrop-blur-md

text-blue-600

shadow-[0_10px_25px_rgba(37,99,235,0.15)]

transition-all

hover:scale-105
"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>LinkedIn</title>
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* BAS DU FOOTER */}
        <div className="mt-4">
          <div
  className="
    rounded-full

    border
    border-white/30

    bg-white/50

    px-6
    py-5

    backdrop-blur-xl

    shadow-[0_10px_30px_rgba(0,0,0,0.05)]
  "
>
            <div className="flex flex-col items-center gap-4 text-xs font-medium text-slate-600 lg:flex-row lg:justify-between w-full">
              
              {/* Copyright */}
              <div className="order-3 lg:order-1 text-center lg:text-left">
                {t.copyright}
              </div>

              {/* Statut Sécurisé */}
              <div className="order-1 lg:order-2 flex items-center gap-2 text-blue-600">
                <ShieldCheck className="h-4 w-4 stroke-[2.5]" />
                <span className="text-slate-700">{t.secured}</span>
              </div>

              {/* Attribution */}
              <div className="order-2 lg:order-3 flex items-center gap-1.5 text-slate-700">
                <span>{t.madeWith}</span>
                <span className="text-red-500 text-sm">❤️</span>
                <span>{t.by} <strong className="font-semibold text-slate-900">Bosila Augusta M.</strong></span>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;