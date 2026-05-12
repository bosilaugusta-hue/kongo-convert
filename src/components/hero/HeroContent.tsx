function HeroContent() {
  return (
    <div>

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white mb-8">

        <div className="w-2 h-2 bg-green-400 rounded-full"></div>

        <span className="text-sm">
          Taux en temps réel
        </span>

      </div>

      {/* Titre */}
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">

        Convertissez vos devises en toute

        <span className="text-blue-400">
          {' '}simplicité
        </span>

      </h1>

      {/* Description */}
      <p className="text-gray-300 text-xl mt-8 leading-relaxed max-w-xl">

        Le convertisseur moderne conçu pour la République
        Démocratique du Congo.

      </p>

      {/* Boutons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10">

        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition"
        >
          Commencer
        </button>

        <button
          type="button"
          className="bg-white/10 border border-white/20 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-semibold transition hover:bg-white/20"
        >
          Voir les taux
        </button>

      </div>

    </div>
  )
}

export default HeroContent