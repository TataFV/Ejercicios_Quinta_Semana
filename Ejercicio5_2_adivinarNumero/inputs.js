/**
 * Mensaje simple para preguntar al usuario y recuperar información
 * @param {string} msg - Mensaje que se muestra al usuario
 * @returns {string} user_input - Mensaje que se recibe del usuario
 */
function simple_user_input(msg) {
    /**
     * Nombre del mensaje que recibe el usuario
     * @type {string}
    */
    let user_input;
    user_input = prompt(msg);
    return user_input;
}

