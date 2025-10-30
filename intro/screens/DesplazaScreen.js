
import react,{useState} from "react";
import { ScrollView,View,Text, StyleSheet,Button } from 'react-native';

export default function DesplazaScreen () {
  const [items,setItems] =  useState(["Opcion 1", "Opcion 2","Opcion 3"]);

  const agregarOpcion = ()=> {
    const nuevaOpcion = `Opcion ${items.length +1}`;
    setItems([...items,nuevaOpcion]);
  };

  const borrarUltima = ()=> {
    if(items.length > 3){
      setItems(items.slice(0,items.length - 1));
    }else{
      alert("solo se borran las opciones que agreste");
    }
  };


  return(
    <View style={styles.container}>
      <Text style={styles.title}>Scroll View</Text>

      <ScrollView 
      style={styles.scroll} 
      contentContainerStyle={styles.content} 
//      horizontal={true} 
      showsVerticalScrollIndicator={true} 
      persistentScrollBar={true}
      scrollEnabled={true}
      >
        {items.map((item,index)=>(
          <View key={index} style={styles.box}>
            <Text style={styles.text}>{item}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button title="Aregar opcion" color="#4d8a71ff" onPress={agregarOpcion}/>
        <View style={styles.space}/>
        <Button title="Borrar opcion" color="#d99d4fff" onPress={borrarUltima}/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    backgroundColor:'#eef2ff',
  },
  title:{
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#2c3e50',
  },
  scroll:{
    flex: 1,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#f9fafb',
  },
  content:{
    paddingVertical: 15,
    alignItems: 'center',
  },
  box:{
    backgroundColor: '#82b6ed',
    width: '90%',
    padding: 20,
    marginVertical: 10,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  text:{
    fontSize: 18,
    color:'#1f2739',
    textAlign: 'center',
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  space:{
    width: 10,
  },
});
