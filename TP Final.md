# **TP Final : Création d'une application React (TypeScript, Atomic Design, Router, Zustand, TanStack Query)**

## **Objectif général**
Réaliser une **application complète** qui vous permettra de **mettre en pratique** tous les acquis des 3 semaines de formation React :

1. **Router** : Création de plusieurs pages, gestion des params (`:id` par exemple) ou de query strings (`?category=...`).
2. **Atomic Design Pattern** : Structure de vos composants (Atoms, Molecules, Organisms, Templates, Pages).  
3. **TypeScript** : Typage de votre code (interfaces, types, props, etc.), et configuration des **aliases** pour faciliter les imports.  
4. **Hooks classiques** : `useState`, `useEffect` (et éventuellement d'autres si besoin).  
5. **Zustand** : Un store global pour gérer l'état (auth, panier, ou tout autre feature centrale).  
6. **TanStack Query** : Gestion des requêtes HTTP (GET, POST, etc.), état de chargement, cache, invalidation, etc.

**Le thème est libre** : faites un mini e-commerce, un blog, un mini réseau social, un gestionnaire de recettes… L'important est de **démontrer** la mise en pratique de toutes ces briques technologiques. Pour les apprenants que j'ai eu en **REACT 1** , vous pouvez partir du projet de la fin de cette semaine et y appliquer les notions vues en **REACT 3**.

---

## **Livrables**

- **Repo GitHub** : votre code doit être versionné sur GitHub, avec un README.  
- **Arborescence** de projet **claire**, inspirée d'Atomic Design (voir plus bas).  
- **Execution** en local (via `npm run dev`) et documentation dans votre README pour l'installation.

---

## **Contraintes et points requis**

### 1. **Routing (pages)**
- Minimum **3 pages** distinctes.  
- Au moins **un paramètre** : ex. `/article/:id`, `/user/:name` ou `/product?category=...`.  

### 2. **Atomic Design Pattern**
- Au moins (par page):  
  - **2 Atoms** (ex. `Button`, `Input`),  
  - **1 Molecule** (ex. `SearchBar`, `ProductCard`, etc.),  
  - **1 Organism** (ex. `Header`, `Footer`…),  
  - **1 Page** (ex. `HomePage`, `DetailPage`…),  
  - un `Template` ou Layout si vous voulez aller plus loin.  
- **Arborescence** typique :  
  ```
  src/
    ├── components/
    │    ├── atoms/
    │    ├── molecules/
    │    ├── organisms/
    │    ├── templates/
    │    └── pages/
    ├── store/        // pour Zustand
    ├── api/          // ou services/ pour les requêtes
    ├── hooks/        // custom hooks si besoin
    ├── ...
  ```

### 3. **TypeScript + Aliases**
- **Fichiers `.ts` / `.tsx`** : tout le projet doit être en TS, pas en JS.  
- **Interfaces/types** : typage des données (ex. `IProduct`, `IUser`).  
- **Aliases** (ex. `@atoms/`, `@store/`, etc.) pour éviter les chemins relatifs interminables.  
- **tsconfig.json** configuré (et `vite.config.ts` ou plugin `vite-tsconfig-paths`).

### 4. **Hooks classiques** : `useState`, `useEffect`
- Montrez que vous savez gérer un **state local** basique avec `useState`,  
- Montrez qu'au moins un `useEffect` est employé (pour un side-effect quelconque, par ex. scroll, titre de page, etc.).

### 5. **Zustand**
- Au moins **un store** : auth, panier, favoris, etc.  
- Le store doit être composé d'**états** et d'**actions** pour les manipuler.

### 6. **TanStack Query**
- Au moins **une requête GET** (affichage d'une liste, d'un détail…)  
- Au moins **une mutation** (ajout, mise à jour, suppression…).  
- **InvalidateQueries** pour rafraîchir la liste après une mutation (ou `setQueryData()`, merci Bastien et Théo)
- Gérer l'**état de chargement** (loading (`isFetching` pour les mutations, merci Julien)) et l'**état d'erreur** de la requête (ex. message en cas d'erreur).

---

## **Idées de sujets**

1. **E-commerce simplifié** :  
   - Liste de produits (GET),  
   - Détail d'un produit (`/product/:id`),  
   - Ajout au panier via store Zustand,  
   - CRUD possible si vous voulez gérer la création de produit (mutation).  
2. **Mini-blog** :  
   - Liste d'articles (GET),  
   - Détail d'un article (`/article/:id`),  
   - Création/édition (POST, PUT) pour vos articles.  
3. **Réseau social** (simplifié) :  
   - Liste de posts,  
   - "Like" un post (mutation + invalidateQuery).  
4. **Gestion de recettes** :  
   - Liste de recettes (titre, ingrédients),  
   - Ajout/suppression d'une recette, etc.

Ou **toute autre idée** qui vous motive, tant que vous respectez les critères !

---

## **Critères d'évaluation (non exhaustifs)**

1. **Fonctionnalité** : L'appli se lance sans erreur, la navigation est possible, la liste s'affiche, etc.  
2. **Atomic Design** : Respect des dossiers "atoms", "molecules", "organisms" (même minimaux).  
3. **TypeScript** : Propreté du typage, absence d'abus de `any`.  
4. **Router** : Pages distinctes, utilisation correcte des params (`/.../:id`).  
5. **Zustand** : Au moins un store + utilisation.  
6. **TanStack Query** : Au moins `useQuery` + une `useMutation` + invalider la query.  
7. **Quality code** : Structure claire, code lisible, quelques commentaires si nécessaire.  
8. **Aliases** : Présents dans `tsconfig.json` + imports propres.  
9. **README** : Petite description du projet, comment l'installer (`npm install`), comment le lancer (`npm run dev`), éventuellement les routes disponibles.

---

## **Modalités de travail**

- **En solo ou en binôme**.  
- **Durée** : vous avez le reste du temps imparti (mercredi, jeudi, voire un bout de vendredi) pour avancer.  
- **Remise** : push le code sur GitHub, fournir l'URL du repo, et être prêt à faire une démo. Il faut que le projet soit accessible via **GitHub Pages** (ou autre moyen de déploiement).

---

## **Conseils**

- **Commencez par le squelette** : structure de dossiers, config TS, aliases, etc.  
- **Choisissez une API** simple (JSONPlaceholder, Fake Store API, ou votre propre mock).  
- **Focus** sur la fonctionnalité : 2-3 pages suffisent, pas besoin d'en faire 10 !  
- **Testez** régulièrement : s'assurer que le store Zustand fonctionne, que TanStack Query fetch les données.  
- **Posez des questions**  : si vous avez un doute sur un point précis, n'hésitez pas à demander. **Être bloqué 2h sur un point n'est pas productif.**
- **Personnalisez** : vous pouvez styliser un peu, ajouter un design plus ou moins poussé, mais ce n'est pas le coeur de l'évaluation, entendez par là que vous êtes évalués sur la qualité du code et non sur le design.

---

## **Conclusion**

Ce **TP final** doit vous permettre de **montrer** que vous pouvez :  
1. Configurer et coder un projet React + TypeScript  
2. Organiser vos composants en Atomic Design  
3. Gérer un état global (Zustand)  
4. Faire des requêtes asynchrones (TanStack Query)  
5. Naviguer entre plusieurs pages (React Router)  
6. Livrer un code **maintenable**, **typé**, et **structuré**.

**Amusez-vous**, soyez créatifs, et montrez que vous avez compris les principes clés de ces trois semaines ! Si vous avez le temps, n'hésitez pas à ajouter un peu de style si et seulement si ça vous chante (CSS modules, Tailwind, etc.) ou des features bonus. 

Bon coding et bonne soutenance (pour ceux qui la passent) !