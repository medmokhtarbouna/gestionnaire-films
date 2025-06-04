import { useEffect, useState } from "react";

export default function Ajouter() {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [filmsAjoutes, setFilmsAjoutes] = useState([]);

  // 📥 تحميل الأفلام من localStorage عند بداية الصفحة
  useEffect(() => {
    const filmsStockes = localStorage.getItem("films-ajoutes");
    if (filmsStockes) {
      setFilmsAjoutes(JSON.parse(filmsStockes));
    }
  }, []);

  // 📤 حفظ التعديلات في localStorage عند أي إضافة
  useEffect(() => {
    localStorage.setItem("films-ajoutes", JSON.stringify(filmsAjoutes));
  }, [filmsAjoutes]);

  const handleAjout = (e) => {
    e.preventDefault();

    if (!titre.trim() || !description.trim()) {
      alert("Le titre et la description sont obligatoires.");
      return;
    }

    const nouveauFilm = {
      id: Date.now(), // معرف مؤقت
      title: titre,
      overview: description,
      release_date: date,
      vote_average: 0,
      poster_path: null,
    };

    setFilmsAjoutes([nouveauFilm, ...filmsAjoutes]);
    setTitre("");
    setDescription("");
    setDate("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">➕ Ajouter un nouveau film</h1>

      <form onSubmit={handleAjout} className="space-y-4 mb-8">
        <div>
          <label className="block">Titre *</label>
          <input
            type="text"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            required
            className="border px-3 py-2 w-full rounded"
          />
        </div>

        <div>
          <label className="block">Description *</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="border px-3 py-2 w-full rounded"
          />
        </div>

        <div>
          <label className="block">Date de sortie</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border px-3 py-2 rounded"
          />
        </div>

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Ajouter
        </button>
      </form>

      {filmsAjoutes.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">📋 Films ajoutés manuellement :</h2>
          <ul className="space-y-3">
            {filmsAjoutes.map((film) => (
              <li key={film.id} className="border p-3 rounded bg-white">
                <strong>{film.title}</strong> – {film.release_date || "Date non spécifiée"}
                <p className="text-gray-700">{film.overview}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
