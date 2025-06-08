// ============================
// 📂 src/pages/Ajouter.jsx — multi‑add fix + redirect + random poster
// ============================
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';

/* 🎞️ Posters par défaut */
const POSTER_OPTIONS = [
  'https://images.unsplash.com/photo-1518930259200-3e5b29f42096?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1602404454048-b0243398564e?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1490971588422-52f6262a237a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];
const randomPoster = () =>
  POSTER_OPTIONS[Math.floor(Math.random() * POSTER_OPTIONS.length)];

export default function Ajouter() {
  /* ――― états du formulaire ――― */
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [posterUrl, setPosterUrl] = useState(randomPoster);
  const [filmsAjoutes, setFilmsAjoutes] = useState([]);

  const navigate = useNavigate();

  /* 📥 charger depuis localStorage au montage */
  useEffect(() => {
    const stock = localStorage.getItem('films-ajoutes');
    if (stock) setFilmsAjoutes(JSON.parse(stock));
  }, []);

  /* ➕ ajouter un film */
  const handleAjout = (e) => {
    e.preventDefault();
    if (!titre.trim() || !description.trim()) {
      alert('Le titre et la description sont obligatoires.');
      return;
    }

    const nouveauFilm = {
      id: Date.now(),
      title: titre,
      overview: description,
      release_date: date,
      vote_average: 0,
      poster_path: null,
      poster_url: posterUrl || null,
      source: 'local',
    };

    /* ✅ mise à jour fonctionnelle + persistance immédiate */
    setFilmsAjoutes((prev) => {
      const liste = [nouveauFilm, ...prev];
      localStorage.setItem('films-ajoutes', JSON.stringify(liste));
      return liste;
    });

    // réinitialiser les champs et proposer un nouveau poster par défaut
    setTitre('');
    setDescription('');
    setDate('');
    setPosterUrl(randomPoster());

    // 🔄 retourner à l’accueil pour visualiser la carte
    navigate('/');
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-10 space-y-12">
      {/* 🏷️ titre */}
      <div className="md:w-[700px] w-[350px] mx-auto text-center">
        <h1 className="text-3xl flex items-center justify-center gap-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 font-bold mb-8">
          {/* <PlusCircle className="w-8 h-8 text-green-600" /> */}
          Ajouter&nbsp;un&nbsp;nouveau&nbsp;film
        </h1>
      </div>

      {/* 📝 formulaire */}
      <form
        onSubmit={handleAjout}
        className="space-y-6 rounded-3xl bg-white/60 backdrop-blur p-6 shadow"
      >
        <div className="space-y-2">
          <label className="font-medium">Titre *</label>
          <input
            type="text"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium">Description *</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 outline-none resize-none"
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium">Date de sortie</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium">Poster URL (optionnel)</label>
          <input
            type="url"
            value={posterUrl}
            onChange={(e) => setPosterUrl(e.target.value)}
            placeholder="https://exemple.com/poster.jpg"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow font-semibold"
        >
          Ajouter
        </button>
      </form>

      {/* 📋 liste des films ajoutés */}
      {!!filmsAjoutes.length && (
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Films ajoutés manuellement</h2>

          <ul className="grid sm:grid-cols-2 gap-6">
            {filmsAjoutes.map((f) => (
              <li
                key={f.id}
                className="space-y-2 p-5 rounded-2xl bg-white/60 backdrop-blur shadow"
              >
                <h3 className="text-lg font-bold">{f.title}</h3>
                <p className="text-sm text-gray-600">
                  {f.release_date || 'Date non spécifiée'}
                </p>
                <p className="text-gray-700 leading-relaxed">{f.overview}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
