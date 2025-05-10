import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
  console.log('Connexion réussie:', data);
  onLoginSuccess({
    username: data.username,
    email: email,
    userId: data.userId,
    password: password,
  });
  setSuccess(true);
  setEmail('');
  setPassword('');
  navigate('/'); // Home Page après connexion
}
else {
        console.error('Erreur lors de la connexion:', data);
        setError(data.message || 'Identifiants incorrects ou ce compte n\'existe pas encore.');
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
          <h2 className="mb-4 text-center text-muted">Se connecter</h2>
          {error && (
            <div className="alert alert-danger text-center" role="alert">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
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
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button id="logbtn" type="submit" className="btn btn-primary w-100">Se connecter</button>
          </form>
          <p className="mt-3 text-center">
            Pas de compte ? <Link className="auth" to="/createaccount">Inscrivez-vous.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;