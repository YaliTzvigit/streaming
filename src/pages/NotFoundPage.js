

/* Erreur : Aucune page trouvée ou mauvaise route */


// src/pages/NotFoundPage.js

import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-1">404</h1>
      <h2 className="mb-4">Erreur : Page non trouvée ou mauvaise route.</h2>
      <p className="mb-4">La page que vous cherchez n'existe pas ou a été déplacée.</p>
      <Link to="/HomePage.js" className="btn btn-primary">
        Retour à l'accueil
      </Link>
    </div>
  );
}

export default NotFoundPage;
