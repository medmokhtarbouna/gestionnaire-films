// ============================
// 📂 src/pages/Accueil.jsx
// ============================
import { useEffect, useState } from 'react';
import { getPopularMovies } from '../api';
import FilmCard from '../components/FilmCard';

export default function Accueil() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const chargerFilms = async () => {
      /* 📡 1) récupérer les films populaires depuis TMDb */
      const filmsApi = await getPopularMovies();

      /* 💾 2) récupérer les films ajoutés manuellement */
      const filmsLocaux = JSON.parse(
        localStorage.getItem('films-ajoutes') || '[]'
      );

      /* 🔀 3) fusion : mettre les films locaux en tête de liste */
      setFilms([...filmsLocaux, ...filmsApi]);
    };

    chargerFilms();
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 py-10 space-y-12">
      {/* 🏷️ titre principal */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
        Films populaires&nbsp;&amp;&nbsp;ajoutés
      </h1>

      {/* 🎞️ grille des films */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {films.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </main>
  );
}
