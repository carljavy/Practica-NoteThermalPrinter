class Cuentas {
    constructor(restaurante, paraLlevar, noCuenta, monto, hora) {
        this.restaurante = restaurante;
        this.paraLlevar = paraLlevar;
        this.noCuenta = noCuenta;
        this.monto = monto;
        this.hora = hora;
    }

    
}
const cuentass = [];
const cuenta1 = new Cuentas(true, false, "035001", 10654.00, "9:13");
const cuenta2 = new Cuentas(false, true, "502", 299.00, "10:45");
const cuenta3 = new Cuentas(false, true, "016003", 1230.00, "12:30");
const cuenta4 = new Cuentas(false, true, "115", 72, "20:45")


let cuentas = [cuentass, cuenta1, cuenta2, cuenta3, cuenta4];

module.exports = { cuentass, cuentas, cuenta1, cuenta2, cuenta3, cuenta4 };