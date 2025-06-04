import { useState } from "react";
import { searchMovies } from "../api";
import FilmCard from "../components/FilmCard";

export default function Recherche() {
  const [motCle, setMotCle] = useState("");
  const [resultats, setResultats] = useState([]);
  const [enChargement, setEnChargement] = useState(false);

  const handleRecherche = async (e) => {
    e.preventDefault();
    if (motCle.trim() === "") return;
    setEnChargement(true);
    const films = await searchMovies(motCle);
    setResultats(films);
    setEnChargement(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🔍 Rechercher un film</h1>

      <form onSubmit={handleRecherche} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Entrez un mot-clé..."
          value={motCle}
          onChange={(e) => setMotCle(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button type="submit" style={{
          padding: "10px 20px",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none"
        }}>
          Rechercher
        </button>
      </form>

      {enChargement && <p>Chargement des résultats...</p>}

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px"
      }}>
        {resultats.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </div>
  );
}
