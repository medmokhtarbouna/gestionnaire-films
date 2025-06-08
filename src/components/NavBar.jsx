// ============================
// 📂 src/components/NavBar.jsx
// ============================
import { NavLink } from 'react-router-dom';
import { Clapperboard, Home, Search, Plus, Film } from 'lucide-react';

export default function NavBar() {
  // 🖌️ Utility classes for active vs. inactive links
  const base = 'inline-flex items-center gap-1 font-medium transition-colors';
  const active =
    'px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow';
  const inactive = 'text-gray-700 hover:text-indigo-600';

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo & Brand */}
        <NavLink to="/" className="flex items-center gap-2 text-3xl font-bold select-none">
          <Film size={40} className="text-purple-600" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 ">
            Gestionnaire Films
          </span>
        </NavLink>

        {/* Navigation Links */}
        <nav className="md:flex hidden items-center gap-6 text-lg">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
          >
            <Home size={22} /> Accueil
          </NavLink>

          <NavLink
            to="/recherche"
            className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
          >
            <Search size={22} /> Recherche
          </NavLink>

          <NavLink
            to="/ajouter"
            className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
          >
            <Plus size={22} /> Ajouter un film
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
