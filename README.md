# Facebook Social Networks API

Documentation de l'API
https://documenter.getpostman.com/view/41403418/2sBYHbrbbr

API backend développée avec NestJS, Prisma ORM et PostgreSQL pour gérer les fonctionnalités d'un réseau social.

## Prérequis

— Node.js (v18 ou supérieur)
— PostgreSQL

## Installation

1. Cloner le dépôt :
   ```bash
   git clone <URL_DU_REPO>
   cd facebook-api
Installer les dépendances :

Bash
npm install
Configurer les variables d'environnement dans un fichier .env à la racine :

Extrait de code
DATABASE_URL="postgresql://user:password@localhost:5432/dbname?schema=public"
Exécuter les migrations Prisma :

Bash
npx prisma migrate dev
Lancement
— Mode développement :

Bash
npm run start:dev
— Mode production :

Bash
npm run build
npm run start

Documentation de l'API
https://documenter.getpostman.com/view/41403418/2sBYHbrbbr