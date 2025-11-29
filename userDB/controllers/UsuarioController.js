import { Usuario } from '../models/usuario';
import DatabaseService from '../database/DatabaseService';

export class UsuarioController {
    constructor() {
        this.listeners = [];
    }

    async initialize() {
        await DatabaseService.initialize();
    }

    async obtenerUsuarios() {
        try {
            const data = await DatabaseService.getALL();
            return data.map(u => new Usuario(u.nombre, u.id, u.fecha_creacion));
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            throw new Error('No se pudieron cargar los usuarios');
        }
    }

    async crearUsuario(nombre) {
        try {
            Usuario.validate(nombre);
            const nuevoUsuario = await DatabaseService.add(nombre.trim());
            this.notifyListeners();
            return new Usuario(
                nuevoUsuario.nombre,
                nuevoUsuario.id,
                nuevoUsuario.fecha_creacion
            );
        } catch (error) { 
            console.error('Error al crear usuario:', error);
            throw error;
        }
    }

    async actualizarUsuario(id, nuevoNombre) {
        try {
            Usuario.validate(nuevoNombre);
            const exito = await DatabaseService.update(id, nuevoNombre.trim());
            if (!exito) {
                throw new Error('No se encontró el usuario para actualizar.');
            }
            this.notifyListeners();
            return true;
        } catch (error) {
            console.error('Error al actualizar usuario:', error);
            throw error;
        }
    }

    async eliminarUsuario(id) {
        try {
            const exito = await DatabaseService.remove(id);
            if (!exito) {
                throw new Error('El usuario no existe o ya fue eliminado.');
            }
            this.notifyListeners();
            return true;
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
            throw error;
        }
    }

    addListener(callback) {
        this.listeners.push(callback);
    }

    removeListener(callback) {
        this.listeners = this.listeners.filter(l => l !== callback);
    }

    notifyListeners() {
        this.listeners.forEach(callback => callback());
    }
}