function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">
              K
            </span>
          </div>

          <h1 className="text-2xl font-bold">
            <span className="text-blue-600">kongo</span>
            <span className="text-red-500">Convert</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-gray-700 hover:text-blue-600 transition">
            Convertisseur
          </a>

          <a href="/" className="text-gray-700 hover:text-blue-600 transition">
            Taux
          </a>

          <a href="/" className="text-gray-700 hover:text-blue-600 transition">
            À propos
          </a>

          <a href="/" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </a>
        </nav>

        {/* Bouton */}
        <button
  type="button"
  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition"
>
          Commencer
        </button>

      </div>
    </header>
  )
}

export default Navbar