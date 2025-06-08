// ============================
// 📂 src/components/FilmCard.jsx
// ============================
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';      // ⬅️ أيقونة التاريخ

export default function FilmCard({ film }) {
  /* ───────── helpers */
  const poster = film.poster_path
    ? `https://image.tmdb.org/t/p/w300${film.poster_path}`
    : film.poster_url || '/placeholder-poster.jpg';

  const date = film.release_date || '—';
  const note = film.vote_average?.toFixed(1) ?? '0.0';

  /* ───────── render */
  return (
    <article className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow bg-white">
      <Link
        to={`/film/${film.id}`}
        state={{ film }}
        className="block"
      >
        {/* ملصق الفيلم */}
        <img
          src={poster}
          alt={film.title}
          className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* المحتوى */}
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1 line-clamp-2">
            {film.title}
          </h3>

          {/* تاريخ الإصدار مع أيقونة */}
          <p className="text-sm text-gray-500 mb-2 flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {date}
          </p>

          <p className="text-sm text-gray-700 line-clamp-3">
            {film.overview || '—'}
          </p>

          {/* التقييم */}
          <span className="absolute top-3 right-3 bg-gray-900 text-yellow-400 text-xs font-bold px-2 py-1 rounded-lg shadow-md">
            ⭐ {note}
          </span>
        </div>
      </Link>
    </article>
  );
}
