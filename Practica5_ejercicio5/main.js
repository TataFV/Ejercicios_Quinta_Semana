
/** 
 * Crea un perfil de usuario y da la posibilidad de mostrar o modificar los datos o salir 
*/
function main() {
    /**
     * Nombre del perfil del usuario
     * @type {integer}
    */
    var perfil = crearPerfil();
    perfil.nombre = simple_user_input("Introduce tu nombre");
    modifica_h1(perfil.nombre, "nombre")
    perfil.apellidos = simple_user_input("Introduce tus apellidos");
    modifica_h1(perfil.apellidos, "apellidos")
    perfil.direccion = simple_user_input("Introduce tu dirección");
    modifica_h1(perfil.direccion, "direccion")
    perfil.telefono = simple_user_input("Introduce tu telefono");
    modifica_h1(perfil.telefono, "telefono")
    perfil.email = simple_user_input("Introduce tu email");
    modifica_h1(perfil.email, "email")

    do {
        /**
         * Nombre de la respuesta del usuario
         * @type {string} 
         */
        var respuesta = simple_user_input("¿Qué quieres hacer?\n 1- Mostrar datos\n 2- Modificar datos\n 3- Salir");

        if (respuesta == 1) {
            perfil.mostrarDatos();
        } else if (respuesta == 2) {
            /**
             * Nombre del dato que elige modficar el usuario
             * @type{string} 
             */

            var dato = simple_user_input("¿Qué dato quieres modificar?\n 1- Nombre\n 2- Apellidos\n 3- Dirección\n 4- Teléfono\n 5- Email");
            switch (dato) {
                case "1":
                    perfil.nombre = simple_user_input("Modifica tu nombre");
                    modifica_h1(perfil.nombre, "nombre")
                    break;
                case "2":
                    perfil.apellidos = simple_user_input("Modifica tus apellidos");
                    modifica_h1(perfil.apellidos, "apellidos")
                    break;
                case "3":
                    perfil.direccion = simple_user_input("Modifica tu dirección");
                    modifica_h1(perfil.direccion, "direccion")
                    break;
                case "4":
                    perfil.telefono = simple_user_input("Modifica tu telefono");
                    modifica_h1(perfil.telefono, "telefono")
                    break;
                case "5":
                    perfil.email = simple_user_input("Modifica tu email");
                    modifica_h1(perfil.email, "email")
                    break;
                default:
                    break;
            }
        }
    } while (respuesta != 3)
}
main()