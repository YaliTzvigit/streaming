
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VideoPage from './pages/VideosPages';
import SubscribePage from './pages/Suscribe';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import Footer from './components/Footer'; 
import NotFoundPage from './pages/NotFoundPage';
import SpaceUser from './pages/SpaceUser';

function App() {

  // Logique session connected 
    const [loggedInUser, setLoggedInUser] = useState(null); // État pour l'utilisateur connecté

  // Fonction pour mettre à jour l'état de l'utilisateur connecté après la connexion
  const handleLoginSuccess = (userData) => {
    setLoggedInUser({ username: userData.username, email: userData.email, id: userData.userId }); // Stockez les infos nécessaires
  };

  // Exemple de comment vous pourriez "déconnecter" l'utilisateur
  const handleLogout = () => {
    setLoggedInUser(null);
    // Ici, vous pourriez aussi nettoyer le stockage local/session
  };
  return (
    <Router>
      {/* New drop vid! 
      <div className='drop'>
         <p className='text'>
           Nouvelle vidéo! Regardez : &nbsp; 
            <Link to="/newdropvid" className='videolink'>L'IA appliqué au développement logiciel</Link>
         </p>
      </div> */}
      <nav className="nav">
        <Link className="navbar-brand logobrand" to="/">EduStream</Link>
        <div className='navi'>
          <Link class='nav-items' to="/"> Accueil</Link>
          <Link class='nav-items' id='bill' to="/subscribe"> Abonnement</Link>
          {loggedInUser ? (
            <>
              <Link to='/spaceuser' className='nav-items' id='nameconnex'>
                <i className="bi bi-person-circle me-1"></i> {/* Exemple d'icône Bootstrap */}
                {loggedInUser.username}
              </Link>
              {/* Vous pourriez ajouter un lien de déconnexion ici */}
              {/* <button onClick={handleLogout} className='nav-items btn btn-link'>Déconnexion</button> */}
            </>
          ) : (
            <Link class='nav-items' id='auth' to="/createaccount"> Créer un compte *</Link>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video/:id" element={<VideoPage />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/spaceuser" element={<SpaceUser user={loggedInUser} />} />
        {/* Not Found page */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
