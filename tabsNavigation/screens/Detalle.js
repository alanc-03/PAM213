import {View,Text,StyleSheet} from  'react-native';

export default function Detalle(){
    return(
        <View style={styles.container}>
            <Text style={styles.text1}>Detalles de Usuario</Text>
            <Text style={styles.text2}>Usando navegationStack</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1:{
        color: 'black',
        fontSize: 22,
    },
    text2:{
        color:'blue',
        fontSize:16, 
    }

})