import { Platform } from "react-native";
import * as SQLite from "expo-sqlite";

class DatabaseService {
    constructor() {
        this.db = null;
        this.storageKey = "usuarios"; 
    }
    
    async initialize() {
        if (Platform.OS === "web") {
            console.log("Usando localStorage para la web"); 
        } else {
            console.log("Usando SQLite para el móvil");
            this.db = await SQLite.openDatabaseAsync("miapp.db"); 
            await this.db.execAsync(`
                CREATE TABLE IF NOT EXISTS usuarios (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre TEXT NOT NULL,
                    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
                );
            `);
        }
    }

    async getALL() {
        if (Platform.OS === 'web') {
            const data = localStorage.getItem(this.storageKey); 
            return data ? JSON.parse(data) : [];
        } else {
            const result = await this.db.getAllAsync('SELECT * FROM usuarios ORDER BY id DESC'); 
            return result;
        }
    }

    async add(nombre) {
        if (Platform.OS === 'web') {
            const usuarios = await this.getALL();
            const nuevoUsuario = {
                id: Date.now(),
                nombre,
                fecha_creacion: new Date().toISOString()
            };
            usuarios.unshift(nuevoUsuario);
            localStorage.setItem(this.storageKey, JSON.stringify(usuarios)); 
            return nuevoUsuario;
        } else {
            const result = await this.db.runAsync( 
                'INSERT INTO usuarios(nombre) VALUES(?)',
                nombre
            );
            return {
                id: result.lastInsertRowId,
                nombre,
                fecha_creacion: new Date().toISOString()
            };
        }
    }
    
    async update(id, nuevoNombre) {
        const numericId = Number(id);
        if (Platform.OS === 'web') {
            const usuarios = await this.getALL();
            const index = usuarios.findIndex(u => u.id === numericId);
            if (index !== -1) {
                usuarios[index].nombre = nuevoNombre;
                localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
                return true;
            }
            return false;
        } else {
            const result = await this.db.runAsync(
                'UPDATE usuarios SET nombre = ? WHERE id = ?',
                nuevoNombre,
                numericId
            );
            return result.changes > 0;
        }
    }

    async remove(id) {
        const numericId = Number(id); 

        if (Platform.OS === 'web') {
            let usuarios = await this.getALL();
            const initialLength = usuarios.length;
            
            usuarios = usuarios.filter(u => u.id !== numericId); 
            
            localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
            
            return usuarios.length !== initialLength; 
        } else {
            const result = await this.db.runAsync(
                'DELETE FROM usuarios WHERE id = ?',
                numericId
            );
            return result.changes > 0;
        }
    }
}

export default new DatabaseService();