/* Créer son compte */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CreateAccount() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ici, tu ajouterais la logique pour envoyer les données du formulaire
    console.log('Compte à créer:', { username, email, password });
    setSuccess(true);
    /* Réinitialiser le formulaire */
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4 text-center text-muted">S'inscrire</h2>
          {success && (
            <div className="alert alert-success text-center" role="alert">
              Compte crée!
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Courriel</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Mot de passe</label>
              <input
                type="password"
                placeholder='6 caractères min'
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button id='createbtn' type="submit" className="btn btn-primary w-100">Créer mon compte</button>
          </form>
          <p className="mt-3 text-center">
            Déjà chez nous ? <Link className='login' to="/login">Connectez-vous.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;