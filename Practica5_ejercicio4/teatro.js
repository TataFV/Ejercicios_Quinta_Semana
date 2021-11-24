function crea_teatro(Arte) {
    var Teatro = function (duracion, epoca) {
        this.duracion = duracion
        this.epoca = epoca
    }

    Teatro.prototype.mostrarAtributos = function () {
        alert("La duración de esta obra de teatro es de" + this.duracion + " y es de la época " + this.epoca);
    }
    for (id in Arte.prototype) {
        Teatro.prototype[id] = Arte.prototype[id]
    }

    var teatro = new Teatro("1 hora y media", "contemporánea")
    teatro.nombre = "Esperando a Godot"
    teatro.alabarObra();
    teatro.mostrarAtributos();
}
