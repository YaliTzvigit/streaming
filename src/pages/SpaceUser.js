import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function SpaceUser({ user }) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogout = () => {
    navigate('/login');
    window.location.reload();
  };

  if (!user) {
    return (
      <div className="container py-5 text-center">
        <h2>Vous devez être connecté pour accéder à cette page.</h2>
        <Link to="/login" className="btn btn-primary mt-3">Se connecter</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4 text-center text-muted">Espace Utilisateur</h2>

          <div className="mb-3">
            <strong>Nom d'utilisateur:</strong> {user.username}
          </div>

          <div className="mb-3">
            <strong>Courriel:</strong> {user.email || 'Non disponible'}
          </div>

          <div className="mb-3">
            <strong>Mot de passe:</strong>{' '}
            {showPassword ? user.password : '********'}
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary ms-2"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? 'Masquer' : 'Afficher'}
            </button>
          </div>

          <div className="text-center mt-5">
            <button className="btn btn-danger" onClick={handleLogout}>
              Déconnexion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpaceUser;
