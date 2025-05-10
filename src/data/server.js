
/* Backend */

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware pour parser le JSON dans le corps des requêtes
app.use(bodyParser.json());
// Middleware pour gérer les requêtes cross-origin (si votre frontend est sur un autre port)
app.use(cors());

// Simuler une base de données en mémoire pour les utilisateurs
const users = [];

// Route pour l'inscription
app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;

  // Vérifier si l'utilisateur existe déjà (par email pour cet exemple simple)
  if (users.some(user => user.email === email)) {
    return res.status(409).json({ message: 'Cet email est déjà utilisé.' });
  }

  // Simuler la création d'un nouvel utilisateur
  const newUser = { id: Date.now(), username, email, password };
  users.push(newUser);
  console.log('Nouvel utilisateur enregistré:', newUser);
  res.status(201).json({ message: 'Compte créé avec succès!' });
});

// Route pour la connexion
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.status(200).json({ message: 'Connexion réussie!', userId: user.id, username: user.username });
  } else {
    res.status(401).json({ message: 'Identifiants incorrects ou ce compte n\'existe pas encore.' });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port ${PORT}`);
});