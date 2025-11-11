import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, ActivityIndicator } from 'react-native';

export default function IndicadoresScreen () {
  const[cargando, setCargando] = useState(false);
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [mensajePrompt, setMensajePrompt] = useState('Presiona accion para comenzar: ');
  const manejarCarga = () =>{
    setCargando(true);
    setMostrarContenido(true);
    setMensajePrompt('Cargando.... Porfavor espere. ');
    setTimeout(()=> {
      setCargando(false);
      setMostrarContenido(false);
      setMensajePrompt('Accion completada!');
    },5000);
  }
  const cancelarCarga = () =>{
    setCargando(false);
    setMostrarContenido(false);
    setMensajePrompt('Carga cancelada. ');
  };
  
    return (
      <View style={styles.contenedor}>
        <Text style={styles.titulo}> Practica: Activity Indicators </Text>
        <Text style={styles.prompt}>{mensajePrompt}</Text>
        <View style={styles.botones}>
          <Button color="#fb5c97ff" title='Accion' onPress={manejarCarga}></Button>
          <View style={{width:10}}></View>
          <Button color="#868585ff" title='Cancelar' OnPress={cancelarCarga}></Button>
        </View>
        {cargando &&(
          <ActivityIndicator
            size="large"
            color= "#c04c0eff"
            style= {StyleSheet.indicator}
          />
        ) }
        {mostrarContenido &&(
          <Text style={styles.contenido}>Accion completada!</Text>
        )}
      </View>
    );
  
}

const styles = StyleSheet.create({
  contenedor:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    padding: 20,
    backgroundColor: '#b5f0fcff'
  },
  titulo:{
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#00000f',
  },
  prompt:{
    fontSize: 16,
    marginBottom: 20,
    color: '#348ffabc',
  },
  botones:{
    flexDirection: 'row',
    marginBottom: 20,
  },
  indicator:{
    marginVerticar: 20,
  },
  contenido:{
    fontSize: 18,
    color: 'green',
    marginTop: 10,
    fontWeight: '600',
  },
});
