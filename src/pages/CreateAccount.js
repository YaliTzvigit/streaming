import React, { useState, useEffect } from 'react'; // Import useEffect
import { Link, useNavigate } from 'react-router-dom';

function CreateAccount() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      // Après 1.5 secondes (1500 millisecondes), rediriger vers la page de connexion
      const timer = setTimeout(() => {
        navigate('/login');
      }, 1500);
      // Nettoyer le timer si le composant est démonté avant la fin du délai
      return () => clearTimeout(timer);
    }
  }, [success, navigate]); // Dépendances de l'useEffect

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Inscription réussie:', data);
        setSuccess(true);
        setUsername('');
        setEmail('');
        setPassword('');
        // La redirection se fait maintenant via l'useEffect
      } else {
        console.error('Erreur lors de l\'inscription:', data);
        setError(data.message || 'Une erreur est survenue lors de l\'inscription.');
        setSuccess(false);
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
      setError('Erreur de connexion au serveur.');
      setSuccess(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4 text-center text-muted">S'inscrire</h2>
          {success && (
            <div className="alert alert-success text-center" role="alert">
              Compte créé!
            </div>
          )}
          {error && (
            <div className="alert alert-danger text-center" role="alert">
              {error}
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