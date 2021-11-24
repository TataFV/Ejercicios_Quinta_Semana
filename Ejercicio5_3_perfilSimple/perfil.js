/**
 * Crea objeto un llamado Perfil con atributos y una función
 * @returns {string} perfil - Perfil creado
 */
function crearPerfil() {
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
