/**
 * Crea el objeto escultura que hereda atributos y la propiedad del objeto Arte
 * @param {string} Arte - El objeto padre
*/
function crea_escultura(Arte) {
    /**
     * Nombre de la escultura
     * @type {string}  
    */
    var Escultura = function (material, epoca) {
        this.material = material
        this.epoca = epoca
    }

    Escultura.prototype.mostrarAtributos = function () {
        alert("El material de esta escultura es " + this.material + " y es de la época del " + this.epoca);
    }
    for (id in Arte.prototype) {
        Escultura.prototype[id] = Arte.prototype[id]
    }

    var escultura = new Escultura("marmol", "Renacimiento")
    escultura.nombre = "El David"
    escultura.alabarObra();
    escultura.mostrarAtributos();
}