// import { Link } from "react-router-dom";

// export default function FilmCard({ film }) {
//   const imageUrl = `https://image.tmdb.org/t/p/w300${film.poster_path}`;

//   return (
//     <div style={{
//       border: "1px solid #ccc",
//       borderRadius: "10px",
//       padding: "10px",
//       width: "200px",
//       background: "#fff"
//     }}>
//       <Link to={`/film/${film.id}`}>
//         <img src={imageUrl} alt={film.title} style={{ width: "100%", borderRadius: "8px" }} />
//         <h3>{film.title}</h3>
//       </Link>
//       <p><strong>Date de sortie :</strong> {film.release_date}</p>
//       <p><strong>Note :</strong> {film.vote_average.toFixed(1)} ⭐</p>
//       <p style={{ fontSize: "0.9em", color: "#555" }}>{film.overview.substring(0, 80)}...</p>
//     </div>
//   );
// }


import { Link } from "react-router-dom";

export default function FilmCard({ film }) {
  const imageUrl = film.poster_path
    ? `https://image.tmdb.org/t/p/w300${film.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-64">
      <Link to={`/film/${film.id}`}>
        <img
          src={imageUrl}
          alt={film.title}
          className="w-full h-80 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{film.title}</h3>
          <p className="text-sm text-gray-500">Date : {film.release_date || "Non spécifiée"}</p>
          <p><strong>Note :</strong> {film.vote_average.toFixed(1)} ⭐</p>
          <p className="text-sm text-gray-600 mt-2 line-clamp-3">{film.overview}</p>

        </div>
      </Link>
    </div>
  );
}
