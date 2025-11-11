import { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Image, TouchableOpacity, StatusBar, Text } from 'react-native';

const SPLASH_IMAGE = require('../resource/imagenes/2.jpg');
const MAIN_IMAGE = require('../resource/imagenes/1.jpg');
const LOGO1_IMAGE = require('../resource/imagenes/1.jpg');
const LOGO2_IMAGE = require('../resource/imagenes/2.jpg');
const LOGO3_IMAGE = require('../resource/imagenes/3.jpg');
const LOGO4_IMAGE = require('../resource/imagenes/4.jpg');
const LOGO5_IMAGE = require('../resource/imagenes/5.jpg');
const LOGO6_IMAGE = require('../resource/imagenes/6.jpg');

export default function Fondo() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <ImageBackground
        source={SPLASH_IMAGE}
        resizeMode="cover"
        imageStyle={styles.splashImageStyle}
        style={styles.splashBackground}
      >
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <View style={styles.splashOverlay}>
          <Text style={styles.splashTitle}>Mi galería</Text>
          <Text style={styles.splashSubtitle}>Cargando.........</Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      source={MAIN_IMAGE}
      resizeMode="cover"
      imageStyle={styles.mainImageStyle}
      style={styles.mainBackground}
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <View style={styles.mainOverlay}>
          <Image source={LOGO1_IMAGE} style={styles.logo} resizeMode="contain" />
          <Image source={LOGO2_IMAGE} style={styles.logo} resizeMode="contain" />
          <Image source={LOGO3_IMAGE} style={styles.logo} resizeMode="contain" />
          <Image source={LOGO4_IMAGE} style={styles.logo} resizeMode="contain" />
          <Image source={LOGO5_IMAGE} style={styles.logo} resizeMode="contain" />
          <Image source={LOGO6_IMAGE} style={styles.logo} resizeMode="contain" />
        <Text style={styles.welcome}>Bienvenido a Mi galería</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImageStyle: {
    opacity: 0.85,
  },
  splashOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.45)',
    padding: 24,
    borderRadius: 12,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 12,
  },
  splashTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
  },
  splashSubtitle: {
    color: '#dbeafe',
    marginTop: 8,
  },
  mainBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImageStyle: {
    opacity: 0.9,
  },
  mainOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.12)',
    padding: 20,
    borderRadius: 12,
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 20,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#61dafb',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#000',
    fontWeight: '700',
  },
});
