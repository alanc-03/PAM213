
import { Text, View,FlatList, StyleSheet } from 'react-native';
import React, {useState} from 'react';

class Producto{
  constructor(id, titulo, descripcion, precio){
    this.id= id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.precio = precio;
  }
}

export const productos2 =[
  new Producto('1','Auriculares','Experimenta algo sensacional',99),
  new Producto('2','lentes','Experimenta la mejor proteccion visual',1200),
  new Producto('3','mochila','espacio casi ilimitado',560),
  new Producto('4','zapatos','comodida y elegancia',350),
];

const ListaScreen= ()=> {
  const[productList, setProductList] = useState(productos2);

    return (
      <View style={styles.lista}>
        <FlatList
        data={productList}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text>{item.titulo}</Text>
            <Text>{item.descripcion}</Text>
            <Text>{item.precio}</Text>
            <Text>ver detalles</Text>
          </View>
        )}
        />
      </View>
    )

}

const styles = StyleSheet.create({
    lista: {
      paddingVertical: 200,
  
    },

    item: {
      padding: 15, // Espacio interno del item
      marginVertical: 8, // Separación vertical entre items
      marginHorizontal: 16, // Separación horizontal desde los bordes
      backgroundColor: '#f0f0f0', 
    }
})



export default ListaScreen;