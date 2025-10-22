function restaurante() {
    this.nombreRestaurante = nombreRestaurante;
    this.noCuenta = noCuenta;
    this.monto = monto;
    this.canceladoPor = canceladoPor;
    this.canceladoA = canceladoA;
    this.hora = hora;
    this.noCancelaciones = noCancelaciones;
    this.totalCancelado = totalCancelado;
}

nombreRestaurante = "Restaurante";
noCuenta = "035001";
monto = 10654.00;
canceladoPor = "1001";
canceladoA = "3001";
hora = "9:13";
noCancelaciones = 1;
totalCancelado = 10654.00;


module.exports = restaurante;