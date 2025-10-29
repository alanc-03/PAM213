import React, { useEffect, useState } from 'react';
import {  View,  Text,  StyleSheet,  TextInput,  Alert,  Platform,  ImageBackground,
  Switch,  Image,  StatusBar,  TouchableOpacity,} from 'react-native';

const SPLASH_IMAGE = require('../assets/imagenes/3.jpg');
const MAIN_IMAGE = require('../assets/imagenes/2.jpg');
const LOGO_IMAGE = require('../assets/imagenes/1.jpg');

export default function RepasoScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const mostrarAlerta = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}\n\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const registrar = () => {
    if (nombre.trim() === '' || correo.trim() === '') {
      mostrarAlerta('Error', 'Por favor completa todos los campos.');
      return;
    }

    if (!aceptaTerminos) {
      mostrarAlerta('Aviso', 'Debes aceptar los términos y condiciones.');
      return;
    }

    const mensaje = `Registro exitoso:\n\nNombre: ${nombre}\nCorreo: ${correo}`;
    mostrarAlerta(' ', mensaje);
  };

  if (isLoading) {
    return (
      <ImageBackground
        source={SPLASH_IMAGE}
        resizeMode="cover"
        style={styles.fullScreen}
      >
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <View style={styles.splashOverlay}>
          <Image source={LOGO_IMAGE} style={styles.logo} resizeMode="contain" />
          <Text style={styles.splashTitle}>Registro</Text>
          <Text style={styles.splashSubtitle}>Cargando... espere un momento</Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      source={MAIN_IMAGE}
      resizeMode="cover"
      style={styles.fullScreen}
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <View style={styles.mainOverlay}>
        <Text style={styles.titulo}>Registro</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          placeholderTextColor="#777"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#777"
          value={correo}
          keyboardType="email-address"
          onChangeText={setCorreo}
        />

        <View style={styles.switchRow}>
          <Text style={styles.switchText}>Acepto términos y condiciones</Text>
          <Switch
            value={aceptaTerminos}
            onValueChange={setAceptaTerminos}
            trackColor={{ false: '#bbb', true: '#4CAF50' }}
            thumbColor={aceptaTerminos ? '#fff' : '#f4f3f4'}
          />
        </View>

        <TouchableOpacity style={styles.boton} onPress={registrar}>
          <Text style={styles.botonTexto}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashOverlay: {
    backgroundColor: 'rgba(0,0,0,0.55)',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 12,
  },
  splashTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
  },
  splashSubtitle: {
    color: '#ddd',
    marginTop: 8,
  },
  mainOverlay: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 25,
    borderRadius: 15,
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#222',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    width: '100%',
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    color: '#000',
    textAlign: 'center',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  switchText: {
    fontSize: 15,
    color: '#333',
    flex: 1,
    flexWrap: 'wrap',
    marginRight:10,
  },
  boton: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
  },
  botonTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
