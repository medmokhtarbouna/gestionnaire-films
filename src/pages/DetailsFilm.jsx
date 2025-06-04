import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails } from "../api";

export default function DetailsFilm() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    const chargerDetails = async () => {
      const data = await getMovieDetails(id);
      setFilm(data);
    };

    chargerDetails();
  }, [id]);

  if (!film) return <p>Chargement des détails...</p>;

  const imageUrl = `https://image.tmdb.org/t/p/w500${film.poster_path}`;

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">← Retour à l’accueil</Link>
      <div style={{ display: "flex", marginTop: "20px", gap: "20px" }}>
        <img src={imageUrl} alt={film.title} style={{ width: "300px", borderRadius: "10px" }} />
        <div>
          <h1>{film.title}</h1>
          <p><strong>Date de sortie :</strong> {film.release_date}</p>
          <p><strong>Note :</strong> {film.vote_average.toFixed(1)} / 10 ({film.vote_count} votes)</p>
          <p><strong>Langue originale :</strong> {film.original_language.toUpperCase()}</p>
          <p><strong>Description :</strong></p>
          <p>{film.overview}</p>
        </div>
      </div>
    </div>
  );
}
