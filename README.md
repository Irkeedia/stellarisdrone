# 🚁 Stellaris Drone

> Site vitrine professionnel — Services de prise de vue aérienne par drone en Occitanie

![Astro](https://img.shields.io/badge/Astro-5.15-BC52EE?logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Latest-3178C6?logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel&logoColor=white)

## 📖 À propos

**Stellaris Drone** est le site vitrine de Mathieu Toffolon, télépilote professionnel indépendant certifié DGAC (CATT & CATS) basé dans l'Aude.
Le site présente ses services de prise de vue aérienne pour professionnels et particuliers en Occitanie, avec un portfolio interactif, un simulateur de tarifs et un formulaire de contact.

### Services proposés

- **Inspection de Toiture** — Photos et vidéos 4K HDR pour évaluer l'état d'une toiture ou documenter un sinistre
- **Captation Commerciale** — Mise en valeur immobilière, domaines viticoles, événements
- **Inspection Terrain** — Orthophotos haute résolution, suivi parcellaire et avancement chantier
- **Couverture Événementielle** — Survol drone de festivals, rassemblements agricoles, marchés

### Fonctionnalités du site

- **Portfolio** — Carrousel horizontal draggable avec 10 réalisations illustrées
- **Simulateur de tarifs** — Calcul interactif selon type de prestation, durée et options
- **Formulaire de contact** — Envoi via Web3Forms (aucun backend nécessaire)
- **Pages légales** — Mentions légales et politique de confidentialité

## 🛠️ Technologies

- **[Astro](https://astro.build)** — Framework web performant, Islands Architecture, rendu statique
- **[React](https://react.dev)** — Composants interactifs (formulaire, portfolio, simulateur de tarifs)
- **[TypeScript](https://www.typescriptlang.org/)** — Typage statique
- **[TailwindCSS](https://tailwindcss.com)** — Utility-first CSS avec palette gold/neutral personnalisée
- **[Web3Forms](https://web3forms.com)** — Service d'envoi de formulaires sans backend
- **[Vercel](https://vercel.com)** — Hébergement et déploiement continu

## 🚀 Structure du projet

```text
stellarisdrone/
├── public/                      # Assets statiques (images portfolio, vidéos)
├── src/
│   ├── assets/                  # Images optimisées par Astro
│   ├── components/
│   │   ├── About.astro          # Section À propos
│   │   ├── Approach.astro       # Méthodologie de travail
│   │   ├── Contact.astro        # Section contact
│   │   ├── ContactForm.tsx      # Formulaire React (Web3Forms)
│   │   ├── Footer.astro         # Pied de page
│   │   ├── Header.astro         # Navigation principale
│   │   ├── Hero.astro           # Section héro avec vidéo de fond
│   │   ├── Portfolio.tsx        # Carrousel portfolio draggable
│   │   ├── PricingCalculator.tsx# Simulateur de tarifs interactif
│   │   ├── ServiceCard.astro    # Carte de service
│   │   ├── Services.astro       # Grille des services
│   │   └── Welcome.astro        # Message d'accueil
│   ├── layouts/
│   │   └── Layout.astro         # Layout principal avec meta tags SEO
│   ├── pages/
│   │   ├── index.astro          # Page d'accueil
│   │   ├── mentions-legales.astro
│   │   └── politique-confidentialite.astro
│   └── styles/
│       └── global.css           # Styles globaux et Tailwind directives
├── astro.config.mjs             # Configuration Astro
├── tailwind.config.cjs          # Configuration TailwindCSS (palette gold)
└── tsconfig.json                # Configuration TypeScript
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

### Palette de couleurs

Le thème utilise une palette **gold / neutral** personnalisée définie dans [tailwind.config.cjs](tailwind.config.cjs) :

- **Gold** — Couleur d'accent (CTA, titres, accents)
- **Neutral / Stone** — Tons sombres pour le fond et le texte

### Composants

- `.astro` — Composants statiques (SEO, layout, sections)
- `.tsx` — Composants React interactifs (formulaire, portfolio, simulateur)

## 🌍 Déploiement sur Vercel

Le site est déployé automatiquement sur **Vercel** lors de chaque push sur `main`.

### Variables d'environnement

Le formulaire de contact utilise [Web3Forms](https://web3forms.com). La clé d'accès est actuellement en dur dans le composant. Pour la passer en variable d'environnement :

| Variable | Valeur |
|:---|:---|
| `PUBLIC_WEB3FORMS_KEY` | `8d1b3a1c-e865-4d8f-8593-f993f7a8874f` |

> Dans Vercel : **Settings → Environment Variables → Ajouter la variable ci-dessus.**

### Build settings (Vercel)

| Paramètre | Valeur |
|:---|:---|
| Framework Preset | Astro |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

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
