class User {
    constructor(nombre, codigo, contrasena, puesto) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.contrasena = contrasena;
        this.puesto = puesto;
    }
}

const users = [
    new User("Alejandro", "1001", "1111", "gerente"),
    new User("Angela", "1002", "1111", "mesero"),  
    new User("Carlos", "1003", "1111", "mesero"),
    new User("Ernesto", "1004", "1111", "capitan")
];







function usuario() {
    const nombre = "Alejandro";
    const codigo = "1001";
    const contrasena = "1111";

    return {  nombre , codigo, contrasena };
}


module.exports = { usuario, users };


