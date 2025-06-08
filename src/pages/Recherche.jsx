// ============================
// 📂 src/pages/Recherche.jsx
// ============================
import { useState } from 'react';
import { searchMovies } from '../api';
import FilmCard from '../components/FilmCard';
import { Search as SearchIcon } from 'lucide-react';

export default function Recherche() {
  const [motCle, setMotCle] = useState('');
  const [resultats, setResultats] = useState([]);
  const [enChargement, setEnChargement] = useState(false);

  const handleRecherche = async (e) => {
    e.preventDefault();
    const q = motCle.trim();
    if (!q) return;
    setEnChargement(true);

    const films = await searchMovies(q);
    setResultats(films);
    setEnChargement(false);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-10 space-y-10">
      {/* 🏷️ Titre */}
      <div className='w-full flex items-center justify-center '>
        <h1 className="text-3xl flex items-center gap-3
      bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 text-center  font-bold mb-8 mt-4
      
      ">
        Rechercher&nbsp;un&nbsp;film
      </h1>
      </div>
      

      {/* 🔍 Formulaire de recherche */}
      <form onSubmit={handleRecherche} className="flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Entrez un mot-clé…"
          value={motCle}
          onChange={(e) => setMotCle(e.target.value)}
          className="flex-1 min-w-[400px] px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 outline-none"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow font-semibold"
        >
          Rechercher
        </button>
      </form>

      {/* ⏳ Loader */}
      {enChargement && (
        <p className="text-center text-gray-500">Chargement des résultats…</p>
      )}

      {/* 🎞️ Grille des résultats */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {resultats.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </main>
  );
}
