
class Restaurante {
    constructor(noCuenta, monto, hora) {
        this.noCuenta = noCuenta;
        this.monto = monto;
        this.hora = hora;
    }

    
}
const cuenta1 = new Restaurante("035001", 10654.00, "9:13");
const cuenta2 = new Restaurante("005002", 299.00, "10:45");
const cuenta3 = new Restaurante("016003", 1230.00, "12:30");


let cuentas = [cuenta1, cuenta2, cuenta3];


/*
nombreRestaurante = "Restaurante";
noCuentaRes = "035001";
montoRes = 10654.00;
hora = "9:13";
noCancelacionesRes = 1;
totalCanceladoRes = 10654.00;
*/
module.exports = { cuentas, cuenta1, cuenta2, cuenta3 };
