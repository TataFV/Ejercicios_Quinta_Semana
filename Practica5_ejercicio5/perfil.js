/**
 * Crea un objeto llamado Perfil y lo muestra por pantalla
 * @returns {string} perfil - Perfil del usuario 
 *
 */
function crearPerfil() {
    /**
     * Nombre del perfil de usuario 
     * @type{string}
     */
    var Perfil = function () {
        this.nombre = "";
        this.apellidos = "";
        this.direccion = "";
        this.telefono = "";
        this.email = "";
        this.mostrarDatos = function () {
            alert("Nombre: " + this.nombre + "\nApellidos: " + this.apellidos + "\nDirección: " + this.direccion + "\nTelefono: " + this.telefono + "\nEmail: " + this.email);
        }
    }


    var perfil = new Perfil()
    return perfil
}
