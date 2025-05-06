import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VideoPage from './pages/VideosPages';
import SubscribePage from './pages/Suscribe';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">MiniEduStream</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Accueil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/subscribe">S'abonner</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video/:id" element={<VideoPage />} />
        <Route path="/subscribe" element={<SubscribePage />} />
      </Routes>
    </Router>
  );
}

export default App;
