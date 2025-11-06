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


module.exports = { users };


