function main() {
    /**
     * Nombre de la obra de arte
     * @type {string}  
     */
    var Arte = crea_arte();
    crea_cine(Arte);
    crea_escultura(Arte);
    crea_pintura(Arte);
    crea_teatro(Arte);

}
main()