import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log ('Connexion réussie.', {email, password});
    setSuccess(true);
    /* Ajouter la logique de connexion */
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4 text-center text-muted">Se connecter</h2>
          {success && (
            <div className="alert alert-success text-center" role="alert">
              Connexion réussie.
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