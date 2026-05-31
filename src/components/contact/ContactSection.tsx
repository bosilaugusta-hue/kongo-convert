import { useState } from "react";
import { FileText, Mail, MessageSquare, Send, ShieldCheck, User } from "lucide-react";

import boulevardImg from "../../assets/images/Boulevard_FleuveKinshasa.png";
import waxPattern from "../../assets/images/wax-pattern.png";

function ContactSection() {
  const [messageLength, setMessageLength] = useState(0);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-10 lg:px-16 overflow-hidden">
      
      {/* 1. COMPOSITE D'ARRIÈRE-PLAN */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        <img
          src={boulevardImg}
          alt="Kinshasa Background"
          className="w-full h-full object-cover object-center brightness-100 contrast-100 saturate-125 scale-[1.01]"
        />
      </div>

      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-white/15 z-1" />

      {/* VIGNETTE GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent z-1" />

      {/* LE BANDEAU WAX EN HAUT À DROITE */}
      <div className="absolute top-0 right-0 z-20 h-[400px] w-[90px] lg:h-[500px] lg:w-[110px] overflow-hidden rounded-bl-[30px] shadow-[-5px_0_15px_rgba(0,0,0,0.1)]">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${waxPattern})` }}
        />
      </div>

      {/* CONTAINER DU CONTENU EN GRILLE */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:pt-6">
        
        {/* COLONNE GAUCHE (Textes & Bouton LinkedIn) */}
        <div className="lg:col-span-5 text-left flex flex-col justify-center animate-slide-up">
          {/* SMALL TITLE HARMONISÉ */}
          <div className="mb-5">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">
              Contactez-moi
            </p>
            <div className="mt-3 h-[3px] w-24 rounded-full bg-blue-600" />
          </div>
          
          <h2 className="text-[36px] sm:text-[46px] font-black leading-[1.1] text-[#071133] tracking-tight mb-6">
            Un projet ou <br />
            une <span className="text-blue-600 relative inline-block">question ?</span>
          </h2>
          
          {/* TEXTE DESCRIPTION - AJUSTÉ POUR ÊTRE AUSSI VISIBLE QUE L'ACCUEIL */}
          <div className="mb-10 max-w-md rounded-[20px] border border-white bg-white/95 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-md">
            <p className="text-sm sm:text-[15px] leading-relaxed text-slate-900 font-medium">
              Je suis à votre écoute pour toute demande d'information, partenariat ou collaboration. Je vous répondrai avec plaisir.
            </p>
          </div>

          {/* LE BOUTON LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/bosila-augusta/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Suivez-moi sur LinkedIn"
            className="group flex items-center justify-between max-w-xs w-full bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(37,99,235,0.1)]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white duration-300">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <title>LinkedIn</title>
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-slate-900">Suivez-moi sur LinkedIn</span>
                <span className="block text-[11px] font-medium text-slate-400">Restons connectés !</span>
              </div>
            </div>
            <div className="text-slate-400 group-hover:text-blue-600 transition-colors duration-300 pr-1">
              <span className="text-lg">↗</span>
            </div>
          </a>
        </div>

        {/* COLONNE DROITE : LE FORMULAIRE */}
        <div className="lg:col-span-7 w-full flex justify-center lg:justify-end animate-fade-in">
          <div className="w-full max-w-[620px] bg-white/80 backdrop-blur-md rounded-[32px] p-6 sm:p-10 border border-white/60 shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
            
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-8">
              Envoyez-<span className="text-blue-600">moi</span> un message
            </h3>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative">
                  <div className="absolute left-4 top-[18px] text-blue-600 pointer-events-none">
                    <User size={18} />
                  </div>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="Ex: Dieudonné Mwamba"
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl pt-7 pb-2.5 pl-12 pr-4 text-sm font-semibold text-slate-800 outline-none transition-all focus:border-blue-500 focus:bg-white"
                  />
                  <label htmlFor="fullName" className="absolute left-12 top-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">Nom complet</label>
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-[18px] text-blue-600 pointer-events-none">
                    <Mail size={18} />
                  </div>
                  <input
                    id="emailAddress"
                    type="email"
                    required
                    placeholder="Ex: bosilaugusta@gmail.com"
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl pt-7 pb-2.5 pl-12 pr-4 text-sm font-semibold text-slate-800 outline-none transition-all focus:border-blue-500 focus:bg-white"
                  />
                  <label htmlFor="emailAddress" className="absolute left-12 top-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">Adresse email</label>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-4 top-[18px] text-blue-600 pointer-events-none">
                  <FileText size={18} />
                </div>
                <input
                  id="msgSubject"
                  type="text"
                  required
                  placeholder="Ex: Demande d'information"
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl pt-7 pb-2.5 pl-12 pr-4 text-sm font-semibold text-slate-800 outline-none transition-all focus:border-blue-500 focus:bg-white"
                />
                <label htmlFor="msgSubject" className="absolute left-12 top-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">Sujet</label>
              </div>

              <div className="relative">
                <div className="absolute left-4 top-[18px] text-blue-600 pointer-events-none">
                  <MessageSquare size={18} />
                </div>
                <textarea
                  id="userMessage"
                  required
                  maxLength={500}
                  onChange={(e) => setMessageLength(e.target.value.length)}
                  placeholder="Écrivez votre message ici..."
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl pt-7 pb-3 pl-12 pr-4 text-sm font-semibold text-slate-800 outline-none transition-all focus:border-blue-500 focus:bg-white resize-none"
                />
                <label htmlFor="userMessage" className="absolute left-12 top-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">Votre message</label>
                <span className="absolute right-3 bottom-2.5 text-[10px] font-bold text-slate-400">{messageLength}/500</span>
              </div>

              <button
                type="submit"
                className="group w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm py-4 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_8px_25px_rgba(37,99,235,0.15)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.3)] hover:-translate-y-0.5"
              >
                <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                <span>Envoyer le message</span>
              </button>

              <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-slate-400 font-medium">
                <ShieldCheck size={14} className="text-blue-500" />
                <span>Vos données sont protégées et ne seront jamais partagées.</span>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactSection;