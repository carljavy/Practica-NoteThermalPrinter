const { ThermalPrinter, PrinterTypes, CharacterSet, BreakLine } = require("node-thermal-printer");
const usuario = require('./usuario.js');
const fecha = new Date();
const fechaActual = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`.padStart(5, '0');
const horaActual = `${fecha.getHours()}:${fecha.getMinutes()}`;
const { cuentas } = require('./ventaRestaurante.js');
const { llevar } = require('./ventaParaLlevar.js');



function impresion(req, res) {
    // destructuring assignment to get user details
     const { nombre, codigo } = usuario();
     const formatName = `Usuario: ${codigo} ${nombre}`

    let printer = new ThermalPrinter({
        type: PrinterTypes.EPSON,
        interface: 'tcp://192.168.1.54',
        characterSet: CharacterSet.PC852_LATIN2,
        removeSpecialCharacters: false,
        lineCharacter: "=",
        breakLine: BreakLine.WORD
    });
 
    let isConnected = printer.isPrinterConnected();
    console.log("Printer connected:", isConnected);
    
    printer.alignCenter();
    printer.print("TOMATE TAQUERIA SA DE CV");
    printer.newLine();
    printer.bold(true);
    printer.print("CUENTAS CANCELADAS");
    printer.bold(false);
    printer.newLine();
    printer.print(`Ventas del dia ${fechaActual}`);
    printer.newLine();
    printer.newLine();



    printer.alignLeft();
    printer.print(formatName);
    printer.newLine();
    printer.print(`${fechaActual} ${horaActual}`);
    //printer.print({Date.prototype.getDate.call(new Date())}/{Date.prototype.getMonth.call(new Date()) + 1}/{Date.prototype.getFullYear.call(new Date())} {Date.prototype.getHours.call(new Date())}:{Date.prototype.getMinutes.call(new Date())});
    printer.newLine();


    //RESTAURANTE
    //--------------------------------------------------------
    printer.drawLine();
    //--------------------------------------------------------

    printer.newLine();
    printer.bold(true);
    printer.print(`Tipo de venta: Restaurante`);
    printer.bold(false);
    printer.newLine();

    printer.underline(true);
    printer.table(["Cuenta", "Monto($) ", "Ca.Por", "Ca.A", "", "Hora"]);
    printer.underline(false);


    let montoTotalRes = 0;
    for (const cuenta of cuentas) {
            printer.table([`${cuenta.noCuenta}`, `${cuenta.monto}`, ` ${codigo}`, ` ${codigo}`, `${nombre.slice(0, 7)}`, ` ${cuenta.hora.padStart(5, '0')}`]);
            montoTotalRes += cuenta.monto;

        }

    printer.newLine();
    printer.alignRight();
    printer.bold(true);

    // for (i=0; i<=cuentas.length; i++) {
    //     montoTotal = cuentas[i]?.monto + montoTotal;
    //     console.log(cuentas[i]?.monto);
    // }

    printer.print(`${cuentas.length} Cancelaciones $${montoTotalRes}`);

    printer.bold(false);
    printer.newLine();
    printer.newLine();

    //PARA LLEVAR
    //--------------------------------------------------------
    printer.drawLine();
    //--------------------------------------------------------  

    printer.alignLeft();
    printer.newLine();
    printer.bold(true);
    printer.print(`Tipo de venta: Para llevar`);
    printer.bold(false);
    printer.newLine();

    printer.table(["Cuenta", "Monto($) ", "Ca.Por", "Ca.A", "", "Hora"]);

    let montoTotalllevar = 0;
    for (const cuentallevar of llevar) {
            printer.table([`${cuentallevar.noCuentall}`, `${cuentallevar.montoll}`, ` ${codigo}`, ` ${codigo}`, `${nombre.slice(0, 7)}`, ` ${cuentallevar.horall.padStart(5, '0')}`]);
            montoTotalllevar += cuentallevar.montoll;
        }
    

    printer.newLine();
    printer.alignRight();
    printer.bold(true);

    printer.print(`${llevar.length} Cancelaciones $${montoTotalllevar}`);

    printer.bold(false);
    printer.newLine();
    printer.newLine();

    //TOTAL GENERAL
    //--------------------------------------------------------
    
    let noCancelacionesTotal = cuentas.length + llevar.length;
    let totalGeneral = montoTotalRes + montoTotalllevar;

    printer.drawLine();
    printer.bold(true);
    printer.print(`TOTAL  ${noCancelacionesTotal} Cancelaciones $${totalGeneral}`);
    printer.newLine();
    printer.bold(false);


    printer.drawLine();
    //--------------------------------------------------------

    printer.alignLeft();
    printer.print("Ca.por = Cancelado por");
    printer.newLine();
    printer.print("Ca.a = Cancelado a");
    printer.newLine();
    printer.print("Hora = Hora de cancelacion");
    printer.newLine();
    printer.drawLine();

    //--------------------------------------------------------
    
    printer.newLine();
    printer.print("Tomate");
    printer.alignRight();
    printer.print("TOMATE PUNTO DE VENTA");
    printer.newLine();
    printer.print("www.tomatepos.com");
    printer.alignLeft();
    printer.print("Punto de venta");


    //--------------------------------------------------------

    printer.cut();

    printer.execute();
    console.log("Print executed:");

    return res.send('Impresion realizada con exito');
}

module.exports = impresion;