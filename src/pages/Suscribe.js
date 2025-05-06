
/* Formulaire d'authentification */

import { useState } from 'react';

function SubscribePage() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nouvel abonné :", email);
    setSuccess(true);
    setEmail('');
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Abonnez-vous 📩</h1>

      {success ? (
        <div className="alert alert-success text-center">
          Merci pour votre abonnement ! 🎉
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '500px' }}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Votre adresse email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              placeholder="Entrez votre email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            S'abonner
          </button>
        </form>
      )}
    </div>
  );
}

export default SubscribePage;
