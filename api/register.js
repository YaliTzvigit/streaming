
// api/register.js
const users = []; // En mémoire, attention : cela ne persistera pas entre les requêtes sur Vercel

module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { username, email, password } = req.body;
    if (users.some(user => user.email === email)) {
      return res.status(409).json({ message: 'Cet email est déjà utilisé.' });
    }
    const newUser = { id: Date.now(), username, email, password };
    users.push(newUser);
    console.log('Nouvel utilisateur enregistré:', newUser);
    return res.status(201).json({ message: 'Compte créé avec succès!' });
  } else {
    return res.status(405).json({ message: 'Méthode non autorisée.' });
  }
};