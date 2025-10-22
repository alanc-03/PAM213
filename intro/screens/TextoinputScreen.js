import React, {useState} from 'react' 
import { Text, TextInput, View, Button, Alert, StyleSheet, Platform  } from 'react-native'

export default function TextoinputScreen () {
  const[nombre,setNombre] = useState('');
  const[contrasena,setContrasena] = useState('');
  const[multexto,setMultexto] = useState('');
  const mostrarAlerta = () => {
    if(nombre.trim() === ''){//.TRiM anula(no toma en cuenta) los espacios en blanco de nuestro texto
      if(Platform.OS === 'web' ){
        alert('por favor escribe tu nombre antes de continuar.');
        }else{
        Alert.alert(
          'Atencion',
          'porfavor, escribe tu nombre antes de continuar ',
          [
            {text: 'cancelar'},
            {text: 'aceptar'}
          ]        
        );
      }
    }
    else{
      if(Platform.OS === 'web'){
        alert(`Bienvenido, ${nombre}!`);//usamos comillas invertidas para que aparezca en azul el ${nombre}
      }
      else{
        Alert.alert(
          'Hola', `Bienvenido, ${nombre}!`,
          [
            {text: 'cancelar'},
          {text: 'aceptar'}
        ]
        );
      }
    }
  };

return (
  <View style= {styles.container}>
    <Text style= {styles.titulo}>Practica TextInput y Alert</Text>

    <TextInput
    style= {styles.input}
    placeholder="Escribe tu nombre"
    value={nombre}
    onChangeText={setNombre}
    />
    <TextInput
    style= {styles.input}
    placeholder="contrasena"
    secureTextEntry={true}
    keyboardType = 'numeric'
    value={contrasena}
    onChangeText={setContrasena}
    />
    <TextInput
    style= {styles.input}
    placeholder="Escribe tu nombre"
    value={multexto}
    multiline={true}
    onChangeText={setMultexto}
    />


    <Button title="Mostrar alerta" onPress={mostrarAlerta}/>
  </View>
);
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    padding: 20,
  },
  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input:{
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    width: '80%',
    padding: 10,
    marginBottom: 15, 
  },
})
