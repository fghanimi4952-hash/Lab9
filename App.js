import React from 'react';
import { StatusBar } from 'expo-status-bar';
import WelcomeScreen from './src/screens/WelcomeScreen';

/**
 * Composant racine de l'application
 * Point d'entrée principal qui affiche WelcomeScreen
 */
export default function App() {
  return (
    <>
      {/* Barre de statut qui s'adapte au thème système */}
      <StatusBar style="auto" />
      {/* Écran d'accueil avec support du thème clair/sombre */}
      <WelcomeScreen />
    </>
  );
}
