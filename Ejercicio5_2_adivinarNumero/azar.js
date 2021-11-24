/** 
 * Devuelve un número aleatorio
 * @returns {integer} número aleatorio 
*/
function crear_aleatorio() {
    /**
     * Nombre del número aleatorio 
     * @type {integer}
    */
    var numero_aleatorio = Math.floor(Math.random() * 100) + 1;
    return numero_aleatorio
}
/**
 * Comprueba si el número aleatorio es menor o mayor que el que introdujo el usuario
 * @param {integer} aleatorio - Número aleatorio creado
 * @param {integer} usuario - Número introducido por el usuario
 * @param {string} mensaje - Comunica al usuario si el número es mayor, menor o si ha acertado 
 */

function comprobar_menor_mayor(aleatorio, usuario) {
    var mensaje;
    if (usuario > aleatorio) {
        mensaje = "El número que buscas es menor"
    } else if (usuario < aleatorio) {
        mensaje = "El número que buscas es mayor"
    } else {
        mensaje = "Has acertado"
    }
    return mensaje
}
