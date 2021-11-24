function modifica_h1(contenido, id) {
    var etiqueta = document.getElementById(id)
    console.log("Cambiando el contenido del H1 con id " + id + " de " + etiqueta.innerHTML + " a " + contenido)
    etiqueta.innerHTML = contenido
}