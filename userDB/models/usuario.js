export class Usuario {
    constructor(nombre, id, fechaCreacion) {
        this.id = id;
        this.nombre = nombre;
        this.fechaCreacion = fechaCreacion || new Date().toISOString();
    }

    static validate(nombre) {
        if (!nombre || nombre.trim().length === 0) {
            throw new Error('El nombre no puede estar vacío');
        }
        if(nombre.trim().length > 50) {
            throw new Error('El nombre debe tener menos de 50 caracteres');
        }
        return true;
    }
}