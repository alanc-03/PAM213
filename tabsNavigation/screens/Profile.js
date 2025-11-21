import { View, Text, StyleSheet,Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Ionicons name="person-outline" size={28} color="green" />
        <Text style={styles.title}>Perfil de usuario</Text>

        <Pressable style={styles.button} onPress={()=> navigation.navigate('Detalle')}>
          <Text style={styles.buttonText}>Ir a detalles del perfil</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconRow: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'green',
  },
  button:{
    marginTop: 20,
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius:10,
  },
  buttonText:{
    color:'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});