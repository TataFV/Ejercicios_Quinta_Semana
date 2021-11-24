/** 
 * Mensaje simple para preguntar al usuario y recuperar información
 * @param {string} - nsg - Mensaje que se muestra al usuario
 * return {string} - user_input - Mensaje que se recibe del usuario
*/
function simple_user_input(msg) {
    let user_input;
    user_input = prompt(msg);
    return user_input;
}

/** 
 * Pregunta al usuario, le muestra como responder y recupera la entrada de este
*/
function sample_user_input(msg, sample) {
    /**
     * Nombre del mensaje que recibe el usuario
     * @type {string}
     */
    let user_input;
    user_input = prompt(msg, sample);
    return user_input;
}