import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  useColorScheme, // Hook React Native pour détecter le thème système (clair/sombre)
} from 'react-native';

/**
 * Composant WelcomeScreen
 * 
 * Affiche un écran d'accueil qui s'adapte automatiquement au thème système
 * (clair/sombre) grâce au hook useColorScheme de React Native.
 * 
 * Fonctionnalités :
 * - Détection automatique du thème système
 * - Application de styles conditionnels (fond, texte, accent)
 * - Mise à jour immédiate lors du changement de thème
 */
export default function WelcomeScreen() {
  // Hook useColorScheme : récupère le thème système actuel
  // Valeurs possibles : 'light', 'dark', ou null
  // S'abonne automatiquement aux changements du thème système
  const colorScheme = useColorScheme();

  // Déterminer si on est en mode clair
  // Si colorScheme est null (préférence non définie), on traite comme sombre par défaut
  const effectiveIsLight = colorScheme === 'light';

  // Palette de couleurs conditionnelle basée sur le thème
  // Cette approche centralise les couleurs pour éviter la duplication
  const palette = effectiveIsLight
    ? {
        // Mode clair : fond clair, texte sombre
        background: '#EDEFEE', // Fond clair (beige/gris très clair)
        text: '#333333', // Texte sombre pour contraste
        accent: '#EE9972', // Couleur d'accent (orange/saumon)
      }
    : {
        // Mode sombre : fond sombre, texte clair
        background: '#333333', // Fond sombre (gris foncé)
        text: '#EDEFEE', // Texte clair pour contraste
        accent: '#EE9972', // Même couleur d'accent (conservation de l'identité visuelle)
      };

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: palette.background }, // Style conditionnel : fond adapté au thème
      ]}
    >
      {/* En-tête avec le titre "My Bistro" */}
      <View style={styles.headerWrapper}>
        {/* Logo : Image locale (asset) pour fonctionner hors-ligne */}
        {/* Note : L'image est commentée dans le code original, mais on peut l'ajouter si besoin */}
        {/* 
        <Image
          source={require('../../assets/icon.png')}
          style={styles.image}
          accessible={true}
          accessibilityLabel="Logo My Bistro"
        />
        */}

        {/* Titre principal avec couleur de texte conditionnelle */}
        <Text style={[styles.headerText, { color: palette.text }]}>
          My Bistro
        </Text>
      </View>

      {/* Texte descriptif avec couleur conditionnelle */}
      <Text style={[styles.regularText, { color: palette.text }]}>
        My Bistro est une application de démonstration permettant d'explorer
        l'adaptation automatique du thème clair/sombre dans React Native.
      </Text>

      {/* Barre d'accent décorative */}
      {/* Illustre l'utilisation de la couleur d'accent (stable entre thèmes) */}
      <View style={[styles.accentBar, { backgroundColor: palette.accent }]} />
    </ScrollView>
  );
}

/**
 * Styles de base (statiques)
 * 
 * Les styles conditionnels (couleurs) sont appliqués via des objets inline
 * dans le JSX pour permettre leur modification dynamique basée sur le thème.
 * 
 * Note importante : L'ordre des styles dans un tableau est déterminant.
 * Les styles appliqués plus tard dans le tableau écrasent les précédents.
 * Exemple : style={[styles.container, { backgroundColor: palette.background }]}
 * Ici, backgroundColor écraserait une valeur définie dans styles.container.
 */
const styles = StyleSheet.create({
  // Conteneur principal : prend tout l'espace disponible
  container: {
    flex: 1,
  },

  // Wrapper de l'en-tête : alignement horizontal centré
  headerWrapper: {
    flexDirection: 'row', // Alignement horizontal
    justifyContent: 'center', // Centrage horizontal
    margin: 10,
  },

  // Style du titre principal
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    textAlign: 'center',
    // Note : la couleur est appliquée conditionnellement dans le JSX
  },

  // Style du texte régulier/description
  regularText: {
    fontSize: 20,
    padding: 20,
    marginVertical: 8,
    textAlign: 'center',
    // Note : la couleur est appliquée conditionnellement dans le JSX
  },

  // Style de l'image (logo) - actuellement non utilisé mais disponible
  image: {
    width: 90,
    height: 90,
    borderRadius: 16, // Coins arrondis pour un aspect plus moderne
  },

  // Barre d'accent décorative
  // Cette barre illustre l'utilisation de la couleur d'accent
  accentBar: {
    height: 8,
    marginHorizontal: 20,
    borderRadius: 6,
    marginBottom: 20,
    // Note : la couleur de fond est appliquée conditionnellement dans le JSX
  },
});
