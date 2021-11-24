/**
 * Crea el objeto pintura que hereda atributos y la propiedad del objeto Arte
 * @param {string} Arte - El objeto padre
 */
function crea_pintura(Arte) {
    /**
     * Nombre de la obra de arte
     * @type {string}  
    */
    var Pintura = function (autor, estilo) {
        this.autor = autor
        this.estilo = estilo
    }

    Pintura.prototype.mostrarAtributos = function () {
        alert("El autor de esta obra es " + this.autor + " y es del estilo " + this.estilo);
    }
    for (id in Arte.prototype) {
        Pintura.prototype[id] = Arte.prototype[id]
    }

    var pintura = new Pintura("Warhol", "Arte pop")
    pintura.nombre = "La serie de retratos de Marilyn Monroe"
    pintura.alabarObra();
    pintura.mostrarAtributos();

}