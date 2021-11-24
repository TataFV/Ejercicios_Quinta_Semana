/**
 * Crea el objeto cine que hereda atributos y la propiedad del objeto Arte
 * @param {string} Arte - El objeto padre
*/
function crea_cine(Arte) {
    /**
     * Nombre de la película
     * @type {string}  
     */
    var Cine = function (duracion, genero) {
        this.duracion = duracion
        this.genero = genero
    }

    Cine.prototype.mostrarAtributos = function () {
        alert(" La duración de esta película es de " + this.duracion + " min y es del género " + this.genero);
    }
    for (id in Arte.prototype) {
        Cine.prototype[id] = Arte.prototype[id]
    }

    var cine = new Cine(70, "comedia")
    cine.nombre = "Sopa de ganso"
    cine.alabarObra();
    cine.mostrarAtributos();
}