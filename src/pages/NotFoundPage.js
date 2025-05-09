

/* Erreur : Aucune page trouvée ou mauvaise route */


// src/pages/NotFoundPage.js

import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-1 nberr">404</h1>
      <h2 className="mb-4 errtxt">Erreur : Page non trouvée ou mauvaise route.</h2>
      <p className="mb-4 badroute">La page que vous cherchez n'existe pas ou a été déplacée.</p>
      <Link to="/" className="btn btn-primary backfp">
        Retour à l'accueil 
      </Link>
    </div>
  );
}

export default NotFoundPage;
