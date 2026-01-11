# Lab 9 : Hooks React Native – Thème clair/sombre avec useColorScheme

## 📋 Aperçu

Ce lab met en place un écran d'accueil React Native qui s'adapte automatiquement au thème système (clair/sombre) grâce au hook `useColorScheme`. L'interface applique des couleurs cohérentes (fond, texte, accent) et se met à jour immédiatement lorsque le thème de l'appareil change.

## 🎯 Objectifs d'apprentissage

- Importer et instancier `useColorScheme`
- Comprendre les valeurs possibles : `light`, `dark`, `null`
- Construire un mini-système de thème (palette) sans dépendances externes
- Appliquer des styles conditionnels de manière lisible
- Tester et valider le comportement sur émulateurs Android/iOS

## 🚀 Installation

1. **Installer les dépendances**
   ```bash
   npm install
   ```

2. **Démarrer l'application**
   ```bash
   npm start
   ```
   
   Ou pour une plateforme spécifique :
   ```bash
   npm run android  # Android
   npm run ios      # iOS
   npm run web      # Web
   ```

## 📱 Structure du projet

```
ThemeHookApp/
├── App.js                      # Point d'entrée principal
├── src/
│   └── screens/
│       └── WelcomeScreen.js    # Écran principal avec useColorScheme
├── assets/                     # Assets (images, icônes)
├── package.json
└── app.json                    # Configuration Expo
```

## 🎨 Palette de couleurs

- **Accent** : `#EE9972` (orange/saumon)
- **Mode clair** :
  - Fond : `#EDEFEE`
  - Texte : `#333333`
- **Mode sombre** :
  - Fond : `#333333`
  - Texte : `#EDEFEE`

## 🔍 Fonctionnalités principales

- ✅ Détection automatique du thème système via `useColorScheme`
- ✅ Adaptation immédiate des couleurs lors du changement de thème
- ✅ Palette de couleurs centralisée et réutilisable
- ✅ Styles conditionnels via tableaux de styles
- ✅ Contraste optimal pour la lisibilité

## 📝 Notions clés

- **Hook** : fonction permettant d'accéder aux fonctionnalités React dans un composant fonctionnel
- **useColorScheme** : lecture et abonnement au thème système
- **Styles conditionnels** : tableau de styles `[styleFixe, styleVariable]`
- **Contraste** : assurer la lisibilité (texte clair sur fond sombre, et inversement)

## 🧪 Test

Pour tester la bascule clair/sombre :

1. **Android** : Paramètres → Affichage → Mode sombre
2. **iOS** : Réglages → Affichage et luminosité → Mode sombre
3. L'application se met à jour automatiquement sans redémarrage

## 📚 Ressources

- [Documentation React Native - useColorScheme](https://reactnative.dev/docs/usecolorscheme)
- [Documentation Expo](https://docs.expo.dev/)

---

**Note** : Aucun accès Internet n'est requis pour le fonctionnement de l'application (assets locaux uniquement).
