
# 🎬 Gestionnaire de Films – Projet React (2024/2025)

Bienvenue dans **Gestionnaire de Films**, une application web développée avec **React.js** qui permet de consulter, rechercher, ajouter et afficher les détails de différents films.

Ce projet a été réalisé dans le cadre de la formation *Master Science et Ingénierie de Données*.

---

## 🧩 Fonctionnalités

- ✅ Affichage des **films populaires** à partir de l’API [TMDb](https://www.themoviedb.org/)
- 🔍 **Recherche de films** par mot-clé
- ➕ **Ajout manuel** de films (titre, description, date de sortie)
- 📄 **Détail d’un film** avec image, description, note, langue, etc.
- 💾 **Sauvegarde locale** des films ajoutés via `localStorage`
- 🔀 **Fusion** des films TMDb + films ajoutés localement dans la page d’accueil

---

## 🛠️ Technologies utilisées

- ⚛️ **React.js** (avec Vite)
- 🧭 **React Router DOM**
- 🌀 **Tailwind CSS** pour le style
- 🔌 **Axios** pour les appels HTTP
- 🎞️ **The Movie Database API (TMDb)**
- 💾 **localStorage** pour persister les données locales

---

## 📂 Structure des pages

| URL                  | Description                                  |
|----------------------|----------------------------------------------|
| `/`                  | Liste des films populaires + ajoutés        |
| `/recherche`         | Page de recherche de films                   |
| `/ajouter`           | Formulaire pour ajouter un film manuellement |
| `/film/:id`          | Page de détails d’un film                    |



## 🚀 Installation et exécution

### 1. Cloner le dépôt

```bash
git clone https://github.com/votre-utilisateur/gestionnaire-films.git
cd gestionnaire-films
````

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer votre clé API TMDb

Dans `src/api.js`, remplacez `VOTRE_CLE_API_ICI` par votre clé API v3 de TMDb :

```js
const API_KEY = "votre_clé_api_tmdb";
```

### 4. Démarrer le projet

```bash
npm run dev
```

---

## 📸 Captures d’écran

> *(à insérer dans le rapport PDF si requis)*

---

## 👤 Auteur

* **Nom Prénom**
* Master SID – Université Mohammed V
* Année universitaire : 2024 / 2025

---

## 🔐 Remarque

Ce projet est réalisé dans un but pédagogique. L’API TMDb est gratuite à usage personnel et requiert une clé API.

---

