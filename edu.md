
# EduStream

Mini plateforme de streaming éducatif.

## À propos

EduStream est une plateforme de vidéos à la demande dédiée à l'apprentissage en ligne. Elle permet aux utilisateurs de découvrir et de regarder des cours et tutoriels sur une variété de sujets, allant du développement web aux langues étrangères.

## Fonctionnalités

* Recherche de vidéos par titre et catégorie.
* Filtrage des vidéos par catégorie.
* Pagination pour une navigation facile.
* Création de compte et connexion .
* Esoace utilisateur, deconnexion.

## Technologies utilisées

* React
* React Router
* Font Awesome
* Backend avec NodeJs

## Installation

1.  Clonez le dépôt : `git clone https://github.com/YaliTzvigit/streaming `
2.  Installez les dépendances : `npm install`
3.  Lancez l'application : `npm start`

## Utilisation

* Pour rechercher une vidéo, utilisez le champ de recherche en haut de la page.
* Pour filtrer les vidéos par catégorie, utilisez le menu déroulant.
* Pour créer un compte, cliquez sur "Créer un compte *" dans la barre de navigation.
* Pour vous déconnecter, après connexion, accéder à votre espace en cliquant sur "votre@username" > 'Déconnexion'

## Structure du projet
* `App.js` : Structure le projet.
* `src/components`: Contient les composants React réutilisables (NavBar, header & Footer).
* `src/pages`: Contient les composants qui représentent les différentes "pages" de l'application (par exemple, HomePage, CreateAccount, login, etc ...).
* `src/data`: Contient les données statiques (par exemple, la liste des vidéos).
* `src/fonts`, pour la police d'écriture du site
* `src/images`, pour les images en background sur les vidéocards
