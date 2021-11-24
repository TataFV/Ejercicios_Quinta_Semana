/**
 * Mensaje simple para preguntar al usuario y recuperar información
 * @param {string} texto 
 * @returns dato - Respuesta del usuario 
 */
function simple_user_input(texto) {
    /**
     * Texto que recibe del usuario
     * @type{string}
     */
    var dato = prompt(texto);
    return dato
}
