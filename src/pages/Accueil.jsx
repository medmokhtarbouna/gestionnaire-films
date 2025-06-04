// import { useEffect, useState } from "react";
// import { getPopularMovies } from "../api";
// import FilmCard from "../components/FilmCard";

// export default function Accueil() {
//   const [films, setFilms] = useState([]);

//   useEffect(() => {
//     const chargerFilms = async () => {
//       const data = await getPopularMovies();
//       setFilms(data);
//     };

//     chargerFilms();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>🎬 Films Populaires</h1>
//       <div style={{
//         display: "flex",
//         flexWrap: "wrap",
//         gap: "20px"
//       }}>
//         {films.map((film) => (
//           <FilmCard key={film.id} film={film} />
//         ))}
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { getPopularMovies } from "../api";
import FilmCard from "../components/FilmCard";

export default function Accueil() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const chargerFilms = async () => {
      // 📡 1. جلب أفلام TMDb
      const filmsApi = await getPopularMovies();

      // 💾 2. استرجاع الأفلام المضافة يدويًا من localStorage
      const filmsLocaux = localStorage.getItem("films-ajoutes");
      const filmsAjoutes = filmsLocaux ? JSON.parse(filmsLocaux) : [];

      // 🔀 3. دمج القائمتين: المضافة أولاً ثم الشهيرة
      const tousLesFilms = [...filmsAjoutes, ...filmsApi];

      setFilms(tousLesFilms);
    };

    chargerFilms();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🎬 Films Populaires et Ajoutés</h1>
      <div className="flex flex-wrap gap-6">
        {films.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </div>
  );
}
