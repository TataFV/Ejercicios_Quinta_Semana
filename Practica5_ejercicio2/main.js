/**
 * Menú principal del programa; genera un número aleatorio y da al usuario la posibilidad de acertarlo en 5 intentos
 * Indica al usuario si si el número que busca es mayor o menor al que acaba de introducir
 * Si acierta, o si se acabaron sus intentos, se le pregunta si quiere seguir jugando
 */
function _main_() {
    /**
     * Nombre del número del usuario para acertar
     * @type {integer} 
     */
    var numero_usuario = 0;
    /**
     * Nombre de la respuesta recibida a la pregunta de si quiere continuar
     * @type {integer} 
     */
    var mensaje_continuar = "";
    /**
     * Nombre del mensaje para avisar al usuario de si el número que busca es mayor o menor 
     * @type {string} 
     */
    var mensaje_menor_mayor = "";
    /** Nombre que recibe la posibilidad o no de que el usuario contiue jugando
     * @type {boolean} 
     */
    var isRunning = false;

    do {
        var numero_aleatorio = crear_aleatorio();
        for (var i = 0; i < 5; i++) {
            numero_usuario = simple_user_input("Introduce un número");
            mensaje_menor_mayor = comprobar_menor_mayor(numero_aleatorio, numero_usuario);
            alert_output(mensaje_menor_mayor);
            if (numero_aleatorio == numero_usuario) {
                alert_output("Has acertado")
                break
            }
        }

        mensaje_continuar = simple_user_input("¿Quieres seguir jugando?\n1- Sí\n2-No").toLowerCase()

        if (mensaje_continuar == "1") {
            isRunning = true;
        } else {
            isRunning = false;
        }

    } while (isRunning)

}
_main_()
}

