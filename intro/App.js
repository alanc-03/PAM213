//zona 1 import: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React,{useState} from 'react';

//zona 2 main: Zona de componentes
export default function App() {

  const [contador,setContador]=useState(0);

  return (
    <View style={styles.container}>
      <Text>Contador: {contador} </Text>      {/*soy un comentario shift + alt + A */}
      <Button title="Agregar" onPress={()=>setContador(contador + 1)}/>      {/* <Button/> y <Button></Button> tambien funciona*/}
      <Button title="Quitar"  onPress={()=>setContador(contador - 1)}/>
        <Button title="Reiniciar" onPress={()=>setContador(contador - contador)}/>
     <StatusBar style="auto" />
    </View>
  );
}

//Zona 3: Zona de los estilos, o zona de estetica y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttoncontainer: {
    marginVertical: 8, width:150,
  },
});
