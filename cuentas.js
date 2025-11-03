class Restaurante {
    constructor(tipo, noCuenta, monto, hora) {
        this.tipo = tipo;
        this.noCuenta = noCuenta;
        this.monto = monto;
        this.hora = hora;
    }

    
}
const cuenta1 = new Restaurante("Restaurante", "035001", 10654.00, "9:13");
const cuenta2 = new Restaurante("Para llevar", "502", 299.00, "10:45");
const cuenta3 = new Restaurante("Restaurante", "016003", 1230.00, "12:30");
const cuenta4 = new Restaurante("Parallevar", "115", 72, "20:45")


let cuentas = [cuenta1, cuenta2, cuenta3];

module.exports = { cuentas, cuenta1, cuenta2, cuenta3 };