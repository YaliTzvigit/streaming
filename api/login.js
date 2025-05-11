

// api/login.js
const users = []; // Rappel : en mémoire, ne persiste pas

module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      return res.status(200).json({ message: 'Connexion réussie!', userId: user.id, username: user.username });
    } else {
      return res.status(401).json({ message: 'Identifiants incorrects ou ce compte n\'existe pas encore.' });
    }
  } else {
    return res.status(405).json({ message: 'Méthode non autorisée.' });
  }
};