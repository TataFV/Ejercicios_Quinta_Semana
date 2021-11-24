/**
 * Modfica el contenido de la etiqueta h1
 * @param {} contenido - Contenido de la etiqueta
 * @param {*string} id - Atributo de la etiqueta h1 
 */

function modifica_h1(contenido, id) {
    /**
     * Nombre que hacer referencia a la etiqueta h1 del index.html
     * @type{string} 
     */
    var etiqueta = document.getElementById(id)
    console.log("Cambiando el contenido del H1 con id " + id + " de " + etiqueta.innerHTML + " a " + contenido)
    etiqueta.innerHTML = contenido
}