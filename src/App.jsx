import { Routes, Route, Link } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Recherche from './pages/Recherche';
import Ajouter from './pages/Ajouter';
import DetailsFilm from './pages/DetailsFilm';

function App() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '15px', padding: '15px', background: '#f0f0f0' }}>
        <Link to="/">Accueil</Link>
        <Link to="/recherche">Recherche</Link>
        <Link to="/ajouter">Ajouter</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/recherche" element={<Recherche />} />
        <Route path="/ajouter" element={<Ajouter />} />
        <Route path="/film/:id" element={<DetailsFilm />} />
      </Routes>
    </div>
  );
}

export default App;
