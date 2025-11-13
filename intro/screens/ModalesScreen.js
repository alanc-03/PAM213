import { Modal, Text, StyleSheet, View, TouchableOpacity, Switch, TextInput, Alert, Platform } from 'react-native';
import { useState } from 'react';

export default function ModalesScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [descripcion, setDescripcion] = useState('');
  const [numFavorito, setNumFavorito] = useState('');
  const [gasto, setGasto] = useState(true);

  const botonGuardar = () => {
    if (!descripcion || !numFavorito) {
      if (Platform.OS === 'web') {
        alert('Error: Por favor completa todos los campos');
      } else {
        Alert.alert('Error', 'Por favor completa todos los campos');
      }
      return;
    }

    if (Platform.OS === 'web') {
      alert(`Éxito: Prueba Realizada. Nombre: ${descripcion} y Número favorito: ${numFavorito}`);
    } else {
      Alert.alert('Éxito', `Prueba Realizada. Nombre: ${descripcion} y Número favorito: ${numFavorito}`);
      alert('Éxito', `Prueba Realizada. Nombre: ${descripcion} y Número favorito: ${numFavorito}`);
    }

    botonCerrar();
  };

  const botonCerrar = () => {
    setModalVisible(false);
    setDescripcion('');
    setNumFavorito('');
    setGasto(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botonMostrar} onPress={() => setModalVisible(true)}>
        <Text style={styles.botonMostrarTexto}>Mostrar Modal</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={botonCerrar}>
        <View style={styles.modalContenedor}>
          <View style={styles.modalVista}>
            <Text style={styles.modalTitulo}>Prueba Modal</Text>

            <TextInput
              style={styles.modalInput}
              placeholder="Escribe tu nombre"
              placeholderTextColor="#888"
              value={descripcion}
              onChangeText={setDescripcion}
            />

            <TextInput
              style={styles.modalInput}
              placeholder="Escribe tu número favorito"
              placeholderTextColor="#888"
              value={numFavorito}
              keyboardType="numeric"
              onChangeText={setNumFavorito}
            />

            <View style={styles.switchContenedor}>
              <Text style={[styles.switchTexto, !gasto && styles.switchTextoActivoVerde]}>Activo</Text>
              <Switch
                trackColor={{ false: '#dcfce7', true: '#fee2e2' }}
                thumbColor={gasto ? '#ef4444' : '#22c55e'}
                onValueChange={() => setGasto(!gasto)}
                value={gasto}
              />
              <Text style={[styles.switchTexto, gasto && styles.switchTextoActivoRojo]}>Inactivo</Text>
            </View>

            <View style={styles.modalBotones}>
              <TouchableOpacity style={[styles.botonBase, styles.botonCancelar]} onPress={botonCerrar}>
                <Text style={styles.botonCancelarTexto}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.botonBase, styles.botonGuardar]} onPress={botonGuardar}>
                <Text style={styles.botonGuardarTexto}>Guardar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#626262ff',
  },
  botonMostrar: {
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#007AFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  botonMostrarTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalContenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalVista: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#1F2937',
  },
  modalInput: {
    width: '100%',
    height: 50,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#F9FAFB',
    color: '#1F2937',
    fontSize: 16,
  },
  switchContenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    width: '100%',
  },
  switchTexto: {
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 12,
    color: '#6B7280',
  },
  switchTextoActivoVerde: {
    color: '#22C55E',
    fontWeight: 'bold',
  },
  switchTextoActivoRojo: {
    color: '#EF4444',
    fontWeight: 'bold',
  },
  modalBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  botonBase: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 6,
  },
  botonGuardar: {
    backgroundColor: '#007AFF',
  },
  botonGuardarTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  botonCancelar: {
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  botonCancelarTexto: {
    color: '#374151',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
