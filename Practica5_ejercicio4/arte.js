/** 
 * Crea un objeto padre llamado Arte que tiene un atributo y una función.
 * @returns {string} - Objeto Arte
*/

function crea_arte() {
    /**
     * Nombre de la obra de arte
     * @type {string}  
     */
    var Arte = function () { }
    Arte.prototype.nombre = ""

    Arte.prototype.alabarObra = function () {
        console.log(this.nombre + " es impresionante")
    }
    return Arte;
}



