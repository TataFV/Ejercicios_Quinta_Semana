/**
 * Función principal, llama a las demás funciones.
 * Despliega un menú con opciones para ver todos los datos del perfil, mostrarlos o modificarlos.
 * 
 */
function main() {
    var perfil = crearPerfil();

    perfil.nombre = simple_user_input("Introduce tu nombre");
    perfil.apellidos = simple_user_input("Introduce tus apellidos");
    perfil.direccion = simple_user_input("Introduce tu dirección");
    perfil.telefono = simple_user_input("Introduce tu telefono");
    perfil.email = simple_user_input("Introduce tu email");

    do {
        var respuesta = simple_user_input("¿Qué quieres hacer?\n 1- Mostrar datos\n 2- Modificar datos");

        if (respuesta == 1) {
            perfil.mostrarDatos()
        } else if (respuesta == 2) {
            var dato = simple_user_input("¿Qué dato quieres modificar?\n 1- Nombre\n 2- Apellidos\n 3- Dirección\n 4- Teléfono\n 5- Email");
            switch (dato) {
                case "1":
                    perfil.nombre = simple_user_input("Modifica tu nombre");
                    break;
                case "2":
                    perfil.apellidos = simple_user_input("Modifica tus apellidos");
                    break;
                case "3":
                    perfil.direccion = simple_user_input("Modifica tu dirección");
                    break;
                case "4":
                    perfil.telefono = simple_user_input("Modifica tu telefono");
                    break;
                case "5":
                    perfil.email = simple_user_input("Modifica tu email");
                    break;
                default:
                    break;
            }
        }
    } while (true)
}
main()