class Cuentas {
    constructor(restaurante, paraLlevar, noCuenta, monto, hora) {
        this.restaurante = restaurante;
        this.paraLlevar = paraLlevar;
        this.noCuenta = noCuenta;
        this.monto = monto;
        this.hora = hora;
    }
}

const cuentas = [
    new Cuentas(true, false, "035001", 1654.00, "9:13"),
    new Cuentas(false, true, "502", 299.00, "10:45"),
    new Cuentas(false, true, "016003", 1230.00, "12:30"),
    new Cuentas(false, true, "115", 72, "20:45"),
    new Cuentas(true, false, "035002", 840.00, "11:20"),
];

module.exports = { cuentas };