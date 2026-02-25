# 🚁 Stellaris Drone

> Site web professionnel pour services de photographie et vidéographie aérienne par drone en Occitanie

![Astro](https://img.shields.io/badge/Astro-5.15-BC52EE?logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Latest-3178C6?logo=typescript&logoColor=white)

## 📖 À propos

**Stellaris Drone** est le site vitrine de Mathieu Toffolon, télépilote professionnel indépendant certifié DGAC (CATT & CATS) basé dans l'Aude. Le site présente une gamme complète de services de prise de vue aérienne pour professionnels et particuliers en Occitanie.

### Services proposés

- **Inspection de Toiture** - Photos et vidéos 4K HDR pour évaluer l'état d'une toiture ou documenter un sinistre
- **Cartographie & SIG** - Orthophotos géoréférencées et relevés de terrain pour exploitations agricoles et chantiers
- **Production Créative** - Mise en valeur cinématique de biens immobiliers, domaines viticoles et événements
- **Portraits & Projets Personnels** - Souvenirs de famille et images de communication pour artisans

## 🛠️ Technologies

Ce site web moderne est construit avec :

- **[Astro](https://astro.build)** - Framework web performant avec Islands Architecture
- **[React](https://react.dev)** - Composants interactifs (formulaire de contact)
- **[TypeScript](https://www.typescriptlang.org/)** - Typage statique pour plus de robustesse
- **[TailwindCSS](https://tailwindcss.com)** - Framework CSS utility-first pour un design moderne
- **Design System** - Palette de couleurs purple/fuchsia/indigo avec effets glassmorphism

## 🚀 Structure du projet

```text
stellarisdrone/
├── public/                      # Assets statiques (vidéos, images)
├── src/
│   ├── assets/                  # Images optimisées par Astro
│   ├── components/              # Composants réutilisables
│   │   ├── About.astro         # Section À propos
│   │   ├── Approach.astro      # Méthodologie de travail
│   │   ├── Contact.astro       # Section contact
│   │   ├── ContactForm.tsx     # Formulaire React interactif
│   │   ├── Footer.astro        # Pied de page
│   │   ├── Header.astro        # Navigation principale
│   │   ├── Hero.astro          # Section héro avec CTA
│   │   ├── ServiceCard.astro   # Carte de service
│   │   ├── Services.astro      # Grille des services
│   │   └── Welcome.astro       # Message d'accueil
│   ├── layouts/
│   │   └── Layout.astro        # Layout principal avec meta tags
│   ├── pages/                   # Pages du site (routing auto)
│   │   ├── index.astro         # Page d'accueil
│   │   ├── mentions-legales.astro
│   │   └── politique-confidentialite.astro
│   └── styles/
│       └── global.css          # Styles globaux et Tailwind directives
├── astro.config.mjs            # Configuration Astro
├── tailwind.config.cjs         # Configuration TailwindCSS
└── tsconfig.json               # Configuration TypeScript
```

## 📦 Installation

### Prérequis

- **Node.js** 18.0 ou supérieur
- **npm** ou **pnpm** ou **yarn**

### Cloner le projet

```bash
git clone <repository-url>
cd stellarisdrone
```

### Installer les dépendances

```bash
npm install
```

## 🧞 Commandes disponibles

Toutes les commandes s'exécutent depuis la racine du projet dans un terminal :

| Commande              | Action                                                    |
| :-------------------- | :-------------------------------------------------------- |
| `npm install`         | Installe les dépendances                                  |
| `npm run dev`         | Lance le serveur de développement sur `localhost:4321`   |
| `npm run build`       | Construit le site de production dans `./dist/`            |
| `npm run preview`     | Prévisualise le build de production localement            |
| `npm run astro ...`   | Exécute les commandes CLI Astro (`astro add`, etc.)      |

## 🌐 Développement

### Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:4321](http://localhost:4321)

### Mode développement avec HMR

Astro offre le Hot Module Replacement (HMR) : les changements dans les fichiers sources sont immédiatement reflétés dans le navigateur sans rechargement complet de la page.

## 🏗️ Build de production

### Construire le site

```bash
npm run build
```

Le site optimisé sera généré dans le dossier `./dist/` avec :
- HTML statique généré
- Assets optimisés et minifiés
- CSS et JavaScript bundlés
- Images optimisées

### Prévisualiser le build

```bash
npm run preview
```

Permet de tester le build de production localement avant le déploiement.

## 🎨 Personnalisation

### Couleurs et design

Le thème utilise une palette purple/fuchsia/indigo définie dans [tailwind.config.cjs](tailwind.config.cjs). Les effets visuels incluent :

- Gradients animés
- Glassmorphism avec `backdrop-blur`
- Ombres colorées (`shadow-purple-500/30`)
- Effets de survol et transitions

### Composants

Les composants sont modulaires et réutilisables :
- `.astro` pour les composants statiques
- `.tsx` pour les composants React interactifs (ex: formulaires)

## 🌍 Déploiement

Le site Astro peut être déployé sur diverses plateformes :

- **Vercel** - `npm run build` puis déploiement automatique
- **Netlify** - Support natif d'Astro
- **Cloudflare Pages** - Excellent pour les sites statiques
- **GitHub Pages** - Gratuit pour les projets open source

Consultez la [documentation Astro sur le déploiement](https://docs.astro.build/en/guides/deploy/) pour plus de détails.

## 📄 Pages légales

Le site inclut les pages légales obligatoires :
- [Mentions légales](src/pages/mentions-legales.astro)
- [Politique de confidentialité](src/pages/politique-confidentialite.astro)

## 🔗 Liens utiles

- [Documentation Astro](https://docs.astro.build)
- [Documentation React](https://react.dev)
- [Documentation TailwindCSS](https://tailwindcss.com/docs)
- [Discord Astro](https://astro.build/chat)

## 📝 Licence

Tous droits réservés © 2026 Stellaris Drone - Mathieu Toffolon

---

**Zone d'intervention** : Rayon de 135 km autour de Montseret (Aude) - Narbonne, Carcassonne, Toulouse et toute l'Occitanie
