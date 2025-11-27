import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { UsuarioController } from './controllers/UsuarioController';

const usuarioController = new UsuarioController();

export default function InsertUsuarioScreen({ navigation }) {
    const [nombre, setNombre] = useState('');

    const guardarUsuario = async () => {
        try {
            await usuarioController.crearUsuario(nombre);
            Alert.alert('Éxito', 'Usuario creado correctamente');
            navigation.goBack();
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nombre del usuario:</Text>

            <TextInput
                style={styles.input}
                placeholder="Escribe un nombre..."
                value={nombre}
                onChangeText={setNombre}
            />

            <TouchableOpacity style={styles.button} onPress={guardarUsuario}>
                <Text style={styles.buttonText}>Guardar Usuario</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },
    label: {
        fontSize: 18,
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        marginBottom: 20
    },
    button: {
        backgroundColor: '#2e86de',
        padding: 15,
        borderRadius: 8
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});
