// import { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { getMovieDetails } from '../api';
// import {
//   ChevronLeft,
//   Star,
//   Calendar,
//   Clock,
//   DollarSign,
// } from 'lucide-react';

// export default function DetailsFilm() {
//   const { id } = useParams();
//   const [film, setFilm] = useState(null);

//   useEffect(() => {
//     const chargerDetails = async () => {
//       const data = await getMovieDetails(id);
//       setFilm(data);
//     };
//     chargerDetails();
//   }, [id]);

//   if (!film)
//     return (
//       <div className="py-20 text-center text-gray-500 ">
//         Chargement des détails…
//       </div>
//     );

//   const posterUrl = `https://image.tmdb.org/t/p/w500${film.poster_path}`;
//   const runtime = film.runtime
//     ? `${Math.floor(film.runtime / 60)}h ${film.runtime % 60}min`
//     : '';

//   return (
//     <main className="max-w-7xl mx-auto px-4 py-10 space-y-12">
//       {/* 🔙 Back link */}
//       <Link
//         to="/"
//         className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow text-xl font-bold"
//       >
//          Retour à l’accueil
//       </Link>

//       {/* 🎬 Hero section */}
//       <section className="relative rounded-3xl shadow overflow-hidden">
//         <img
//           src={posterUrl}
//           alt={film.title}
//           className="absolute inset-0 w-full h-full object-cover" 
//           sty
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-slate-900/10 to-slate-900/80" />

//         <div className="relative p-6 md:p-12 text-white space-y-3 h-[400px]  top-56">
//           <h1 className="text-3xl md:text-4xl font-extrabold">
//             {film.title}
//           </h1>

//           <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
//             <span className="flex items-center gap-1">
//               <Star className="w-4 h-4 text-yellow-400" />
//               {film.vote_average.toFixed(1)}{' '}
//               <span className="opacity-70">({film.vote_count} votes)</span>
//             </span>
//             <span className="flex items-center gap-1">
//               <Calendar className="w-4 h-4" />{' '}
//               {new Date(film.release_date).toLocaleDateString('fr-FR', {
//                 day: '2-digit',
//                 month: 'long',
//                 year: 'numeric',
//               })}
//             </span>
//             {runtime && (
//               <span className="flex items-center gap-1">
//                 <Clock className="w-4 h-4" /> {runtime}
//               </span>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* 📝 Content & Sidebar */}
//       <section className="grid md:grid-cols-3 gap-8">
//         {/* ─────────── Left: description */}
//         <div className="md:col-span-2 space-y-10">
//           {/* Synopsis */}
//           <div>
//             <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
//             <p className="leading-relaxed text-gray-700 ">
//               {film.overview || '—'}
//             </p>
//           </div>

//           {/* Genres */}
//           {!!film.genres?.length && (
//             <div>
//               <h2 className="text-xl font-semibold mb-2">Genres</h2>
//               <div className="flex flex-wrap gap-2">
//                 {film.genres.map((g) => (
//                   <span
//                     key={g.id}
//                     className="px-3 py-1 rounded-full text-sm font-medium bg-purple-200 text-purple-700 "
//                   >
//                     {g.name}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Société de production */}
//           {!!film.production_companies?.length && (
//             <div>
//               <h2 className="text-xl font-semibold mb-2">Sociétés de production</h2>
//               <ul className="list-disc list-inside space-y-1">
//                 {film.production_companies.map((c) => (
//                   <li key={c.id}>{c.name}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>

//         {/* ─────────── Right: stats card */}
//         <aside className="rounded-3xl bg-white/60  backdrop-blur p-6 shadow space-y-5 h-fit">
//           <img
//             src={posterUrl}
//             alt={film.title}
//             className="rounded-lg w-full object-cover mb-4"
//           />

//           <div className="space-y-3 text-sm">
//             <div>
//               <h3 className="font-semibold">Note moyenne</h3>
//               <p className="flex items-center gap-1 text-lg">
//                 <Star className="w-5 h-5 text-yellow-400" />{' '}
//                 {film.vote_average.toFixed(1)} / 10
//               </p>
//             </div>
//             {!!film.popularity && (
//               <p>
//                 <span className="font-semibold">Popularité :</span> {film.popularity.toFixed(1)}
//               </p>
//             )}
//             {!!film.budget && film.budget > 0 && (
//               <p className="flex items-center gap-1">
//                 <DollarSign className="w-4 h-4 text-green-600" />
//                 <span className="font-semibold">Budget :</span>{' '}
//                 {film.budget.toLocaleString('fr-FR')} $US
//               </p>
//             )}
//             {!!film.revenue && film.revenue > 0 && (
//               <p className="flex items-center gap-1">
//                 <DollarSign className="w-4 h-4 text-green-600" />
//                 <span className="font-semibold">Recettes :</span>{' '}
//                 {film.revenue.toLocaleString('fr-FR')} $US
//               </p>
//             )}
//           </div>
//         </aside>
//       </section>
//     </main>
//   );
// }

// // ===============================================
// // نهاية الملف — Happy coding ✨



// ============================
// 📂 src/pages/DetailsFilm.jsx
// ============================
import { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../api';
import {
  ChevronLeft,
  Star,
  Calendar,
  Clock,
  DollarSign,
} from 'lucide-react';

export default function DetailsFilm() {
  /* ── hooks */
  const { id } = useParams();
  const { state } = useLocation();          // قد يحوي الفيلم إذا أُرسل من FilmCard
  const [film, setFilm] = useState(state?.film || null);

  const isLocal = film?.source === 'local';

  /* ── جلب TMDb عند الحاجة */
  useEffect(() => {
    if (film || isLocal) return;

    const fetcher = async () => {
      const data = await getMovieDetails(id);
      setFilm(data);
    };
    fetcher();
  }, [id, film, isLocal]);

  /* ── شاشة تحميل */
  if (!film)
    return (
      <div className="py-20 text-center text-gray-500">
        Chargement des détails…
      </div>
    );

  /* ── helpers */
  const posterUrl = film.poster_path
    ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
    : film.poster_url || '/placeholder-poster.jpg';

  const runtime = film.runtime
    ? `${Math.floor(film.runtime / 60)}h ${film.runtime % 60}min`
    : '';


    
  /* ── rendu */
  return (
    <main className="max-w-7xl mx-auto px-4 py-10 space-y-12">
      {/* رجوع */}
      <Link
        to="/"
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow text-xl font-bold flex items-center gap-1 w-max"
      >
        <ChevronLeft className="w-5 h-5" />
        Retour à l’accueil
      </Link>

      {/* Hero */}
      <section className="relative rounded-3xl shadow overflow-hidden">
        <img
          src={posterUrl}
          alt={film.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-slate-900/10 to-slate-900/80" />

        {/* bloc détails في الموضع الأصلي */}
        <div className="relative p-6 md:p-12 text-white space-y-3 h-[400px] top-56">
          <h1 className="text-3xl md:text-4xl font-extrabold">{film.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400" />
              {film.vote_average?.toFixed(1) ?? '0.0'}
              <span className="opacity-70">
                ({film.vote_count ?? 0} votes)
              </span>
            </span>

            {film.release_date && (
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(film.release_date).toLocaleDateString('fr-FR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            )}

            {runtime && (
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {runtime}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* contenu */}
      <section className="grid md:grid-cols-3 gap-8">
        {/* description */}
        <div className="md:col-span-2 space-y-10">
          {/* synopsis */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
            <p className="leading-relaxed text-gray-700">
              {film.overview || '—'}
            </p>
          </div>

          {/* genres */}
          {!!film.genres?.length && !isLocal && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Genres</h2>
              <div className="flex flex-wrap gap-2">
                {film.genres.map((g) => (
                  <span
                    key={g.id}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-purple-200 text-purple-700"
                  >
                    {g.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* sociétés */}
          {!!film.production_companies?.length && !isLocal && (
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Sociétés de production
              </h2>
              <ul className="list-disc list-inside space-y-1">
                {film.production_companies.map((c) => (
                  <li key={c.id}>{c.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* stats */}
        <aside className="rounded-3xl bg-white/60 backdrop-blur p-6 shadow space-y-5 h-fit">
          <img
            src={posterUrl}
            alt={film.title}
            className="rounded-lg w-full object-cover mb-4"
          />

          <div className="space-y-3 text-sm">
            <div>
              <h3 className="font-semibold">Note moyenne</h3>
              <p className="flex items-center gap-1 text-lg">
                <Star className="w-5 h-5 text-yellow-400" />
                {film.vote_average?.toFixed(1) ?? '0.0'} / 10
              </p>
            </div>

            {!!film.popularity && !isLocal && (
              <p>
                <span className="font-semibold">Popularité&nbsp;:</span>{' '}
                {film.popularity.toFixed(1)}
              </p>
            )}

            {!!film.budget && film.budget > 0 && !isLocal && (
              <p className="flex items-center gap-1">
                <DollarSign className="w-4 h-4 text-green-600" />
                <span className="font-semibold">Budget&nbsp;:</span>{' '}
                {film.budget.toLocaleString('fr-FR')} $US
              </p>
            )}

            {!!film.revenue && film.revenue > 0 && !isLocal && (
              <p className="flex items-center gap-1">
                <DollarSign className="w-4 h-4 text-green-600" />
                <span className="font-semibold">Recettes&nbsp;:</span>{' '}
                {film.revenue.toLocaleString('fr-FR')} $US
              </p>
            )}
          </div>
        </aside>
      </section>
    </main>
  );
}
