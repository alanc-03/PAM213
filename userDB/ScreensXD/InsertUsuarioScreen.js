import { useEffect, useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList,StyleSheet, Alert,ActivityIndicator,Platform } from 'react-native';
import { UsuarioController } from '../controllers/UsuarioController';

const controller = new UsuarioController();

export default function InsertUsuarioScreen() {

  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [loading, setLoading] = useState(true);
  const [guardando, setGuardando] = useState(false);
  
  const [usuarioEditando, setUsuarioEditando] = useState(null); 
  const [nombreEdicion, setNombreEdicion] = useState('');

  // SELECT - Cargar usuarios (READ)
  const cargarUsuarios = useCallback(async () => {
    try {
      setLoading(true);
      const data = await controller.obtenerUsuarios();
      setUsuarios(data);
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  }, []);


//inicializar y cargar datos
useEffect(() => {
  const init = async () => {
    await controller.initialize();
    await cargarUsuarios();
  };

  init();
  controller.addListener(cargarUsuarios);

  return () => {
    controller.removeListener(cargarUsuarios);
  };
},[cargarUsuarios]);

// CRUD - CREATE
const handleAgregar = async () => {
  if (guardando) return;
  try{
    setGuardando(true);
    const usuarioCreado = await controller.crearUsuario(nombre);
    Alert.alert('Usuario Creado', `"${usuarioCreado.nombre}" guardado con ID: ${usuarioCreado.id}`);
    setNombre('');
  }catch(error){
    Alert.alert('Error', error.message);
  }
  finally {
    setGuardando(false);
  }
};

// Función para iniciar edición
const handleEditar = (usuario) => {
    setUsuarioEditando(usuario);
    setNombreEdicion(usuario.nombre);
};

// Función para guardar edición (UPDATE)
const handleGuardarEdicion = async () => {
    if (!usuarioEditando || guardando) return;

    try {
        setGuardando(true);
        await controller.actualizarUsuario(usuarioEditando.id, nombreEdicion);
        Alert.alert('Éxito', `Usuario ID: ${usuarioEditando.id} actualizado a "${nombreEdicion}"`);
        setUsuarioEditando(null);
        setNombreEdicion('');
    } catch (error) {
        Alert.alert('Error al actualizar', error.message);
    } finally {
        setGuardando(false);
    }
};

// Función para eliminar usuario (DELETE)
const handleEliminar = (id, nombreUsuario) => {
    Alert.alert(
        'Confirmar Eliminación',
        `¿Estás seguro de que quieres eliminar a "${nombreUsuario}" (ID: ${id})?`,
        [
            { text: 'Cancelar', style: 'cancel' },
            { 
                text: 'Eliminar', 
                style: 'destructive', 
                onPress: async () => { 
                    try {
                        await controller.eliminarUsuario(id);
                        Alert.alert('Eliminado', `"${nombreUsuario}" ha sido eliminado.`);
                    } catch (error) {
                        Alert.alert('Error al eliminar', error.message);
                    }
                } 
            },
        ]
    );
};


//Renderizar cada usuario (Modificado para incluir botones de acción)
const renderUsuario = ({item, index}) => (
    <View style={styles.userItem}>
        <View style={styles.userNumber}>
            <Text style={styles.userNumberText}>{index +1}</Text>
        </View>
        <View style={styles.userInfo}>
            <Text style={styles.userName}>{item.nombre}</Text>
            <Text style={styles.userId}>ID: {item.id}</Text>
            <Text style={styles.userDate}>
                {new Date(item.fechaCreacion).toLocaleDateString('es-MX', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }) }
            </Text>    
        </View>
        
        {/* BOTONES DE ACCIÓN */}
        <View style={styles.userActions}>
            <TouchableOpacity 
                style={[styles.actionButton, styles.editButton]}
                onPress={() => handleEditar(item)}
                disabled={guardando}
            >
                <Text style={styles.actionText}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.actionButton, styles.deleteButton]}
                onPress={() => handleEliminar(item.id, item.nombre)}
                disabled={guardando}
            >
                <Text style={styles.actionText}>Eliminar</Text>
            </TouchableOpacity>
        </View>
    </View>
);


  return (

    <View style={styles.container}>

      {/* ZONA DEL ENCABEZADO */}
      <Text style={styles.title}> CRUD COMPLETO</Text>
      <Text style={styles.subtitle}>
        {Platform.OS === 'web' ? ' WEB (LocalStorage)' : ` ${Platform.OS.toUpperCase()} (SQLite)`}
      </Text>

      {/* ZONA DE EDICIÓN (Se muestra si usuarioEditando no es nulo) */}
      {usuarioEditando && (
        <View style={styles.editSection}>
            <Text style={styles.sectionTitle}> Editando: {usuarioEditando.nombre}</Text>
            <TextInput
                style={styles.input}
                placeholder="Nuevo nombre del usuario"
                value={nombreEdicion}
                onChangeText={setNombreEdicion}
                editable={!guardando}
            />
            <View style={styles.editActions}>
                <TouchableOpacity 
                    style={[styles.button, styles.saveButton, guardando && styles.buttonDisabled]} 
                    onPress={handleGuardarEdicion}
                    disabled={guardando} >
                    <Text style={styles.buttonText}>
                        {guardando ? ' Guardando...' : 'Guardar Edición'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.button, styles.cancelButton, guardando && styles.buttonDisabled]} 
                    onPress={() => setUsuarioEditando(null)}
                    disabled={guardando} >
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
      )}


      {/* ZONA DEL INSERT (Se oculta si estamos editando) */}
      {!usuarioEditando && (
        <View style={styles.insertSection}>
            <Text style={styles.sectionTitle}> Insertar Usuario</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Escribe el nombre del usuario"
                value={nombre}
                onChangeText={setNombre}
                editable={!guardando}
            />

            <TouchableOpacity 
                style={[styles.button, styles.primaryButton, guardando && styles.buttonDisabled]} 
                onPress={handleAgregar}
                disabled={guardando} >

                <Text style={styles.buttonText}>
                    {guardando ? ' Guardando...' : 'Agregar Usuario'}
                </Text>

            </TouchableOpacity>
        </View>
      )}


      {/* ZONA DEL SELECT (READ) */}
      <View style={styles.selectSection}>

        <View style={styles.selectHeader}>
          <Text style={styles.sectionTitle}>Lista de Usuarios ({usuarios.length})</Text>

          <TouchableOpacity 
            style={styles.refreshButton}
            onPress={cargarUsuarios} 
            disabled={guardando || loading}
            > 
            <Text style={[styles.refreshText, (guardando || loading) && styles.refreshDisabledText]}>Recargar</Text>
          </TouchableOpacity>

        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
            <Text style={styles.loadingText}>Cargando usuarios...</Text>
          </View>
            ) : (
          <FlatList
            data={usuarios} 
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderUsuario} 
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}> No hay usuarios</Text>
                <Text style={styles.emptySubtext}>Agrega el primero arriba</Text>
              </View>
            }
            contentContainerStyle={usuarios.length === 0 && styles.emptyList}
          />
        )}


      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  insertSection: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  editSection: {
    backgroundColor: '#e0f7fa',
    padding: 20,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#00bcd4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  editActions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 10,
  },
  saveButton: {
      flex: 1,
      backgroundColor: '#4CAF50',
  },
  cancelButton: {
      flex: 1,
      backgroundColor: '#9E9E9E',
  },
  primaryButton: { 
      backgroundColor: '#007AFF',
  },
  selectSection: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  selectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  refreshButton: {
    padding: 8,
  },
  refreshText: {
    color: '#007AFF',
    fontSize: 14,
  },
  refreshDisabledText: {
    color: '#ccc',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
    fontSize: 14,
  },
  userItem: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
    alignItems: 'center',
  },
  userNumber: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  userNumberText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  userId: {
    fontSize: 12,
    color: '#007AFF',
    marginBottom: 2,
  },
  userDate: {
    fontSize: 12,
    color: '#666',
  },
  userActions: {
      flexDirection: 'row',
      marginLeft: 10,
      gap: 8,
  },
  actionButton: {
      paddingVertical: 8,
      paddingHorizontal: 10,
      borderRadius: 5,
  },
  editButton: {
      backgroundColor: '#FFC107',
  },
  deleteButton: {
      backgroundColor: '#F44336',
  },
  actionText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: '600',
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#bbb',
  },
});