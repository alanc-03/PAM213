import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import TextoinputScreen from './TextoinputScreen';
import FondoScreen from './FondoScreen';
import Botones2Screen from './Botones2Screen';
import RepasoScreen from './repasoScreen';

export default function MenuScreen() {

    const [screen,setScreen] = useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorScreen/>
        case 'botones':
            return <BotonesScreen/>
        case 'texto':
            return <TextoinputScreen/>
        case 'fondo':
            return <FondoScreen/>
        case 'desplaza':
            return <Screen/>
        case 'indicadores':
            return <Screen/>
        case 'lista':
            return <Screen/>
        case 'modales':
            return <Screen/>
        case 'botones2':
            return <Botones2Screen/>
        case 'Repaso':
            return <RepasoScreen/>
        case 'menu':
            default: 
                return (
                    <View style={styles.container}>
                      <Text style={styles.texto}> Menu de paracticas </Text>
                      <View style={styles.botonesContainer}>
                      <Button color='green' title='Pract:Contador' onPress={()=> setScreen ('contador')} />
                      <Button color='black' title='Pract:Buttons' onPress={()=> setScreen ('botones')} />
                      <Button color='purple' title='Pract:Text Input' onPress={()=> setScreen ('texto')} />
                      <Button color='grey' title='Pract:ImageBackgroung' onPress={()=> setScreen ('fondo')} />
                      <Button color='blue' title='Pract:ScrollView' onPress={()=> setScreen ('desplaza')} />
                      <Button color='orange' title='Pract:ActivityIndicator' onPress={()=> setScreen ('indicadores')} />
                      <Button color='brown' title='Pract:FlatList' onPress={()=> setScreen ('lista')} />
                      <Button color='red' title='Pract:Modal' onPress={()=> setScreen ('modales')} />
                      <Button color='purple' title='Pract:Bottom Sheet' onPress={()=> setScreen ('botones2')} />
                      <Button color='red' title='Repaso' onPress={()=> setScreen ('Repaso')} />
                    </View>
                    </View>
    )
  
    }
  

}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginTop: 15,
    backgroundColor: '#6fc4f5ff', //color de fondo 
    alignItems: 'center',//alinea en eje x
    justifyContent: 'center',//alinea en eje y
  },
  texto:{
    color:"#661d02ff",
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through',
  },
  
  texto2:{
    color:"#eefb62ff",
    fontSize: 35,
    fontFamily: 'Courier',
    fontWeight:'900',//que tan gruesa la letra
    fontStyle:'normal',
    textDecorationLine:'underline',
  },
  botonesContainer: {
    marginTop: 15, //margen haia arriba
    flexDirection: '', 
    alignItems: 'center',
    justifyContent: 'center',
    gap:10, //separacion entre botones
  },
})


/* Buttons & switch: Alan Cruz
Text Input & Alert:  Luis Fernando
ImageBackgroung & SlapshScreen :  Guillermo
ScrollView: Barbara Itzel
ActivityIndicator:  Oscar
FlatList y Section List: Alejandro
Modal : Jesus
Bottom Sheet: Ruben Alejandro */