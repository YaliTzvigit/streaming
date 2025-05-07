import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VideoPage from './pages/VideosPages';
import SubscribePage from './pages/Suscribe';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import Footer from './components/Footer'; // Importe le Footer

function App() {
  return (
    <Router>
      <nav className="nav">
          <Link className="navbar-brand logobrand" to="/">EduStream</Link>
          <div className='navi'>
              <Link class='nav-items' to="/"> Accueil</Link>
              <Link class='nav-items' id='bill' to="/subscribe"> Abonnement</Link>
              <Link class='nav-items' id='auth' to="/createaccount"> Créer un compte *</Link>
            </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video/:id" element={<VideoPage />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
