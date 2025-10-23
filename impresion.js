const { ThermalPrinter, PrinterTypes, CharacterSet, BreakLine } = require("node-thermal-printer");
const usuario = require('./usuario.js');
const ventaRestaurante = require('./ventaRestaurante.js');
const ventaParaLlevar = require('./ventaParaLlevar.js');



function impresion(){
    // destructuring assignment to get user details
     const { nombre, codigo } = usuario();
     const formatName = `Usuario: ${nombre} ${codigo}`
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
    printer.newLine();



    printer.alignLeft();
    printer.print(formatName);
    printer.newLine();
    printer.print("15/08/2024 17:26");
    //printer.print({Date.prototype.getDate.call(new Date())}/{Date.prototype.getMonth.call(new Date()) + 1}/{Date.prototype.getFullYear.call(new Date())} {Date.prototype.getHours.call(new Date())}:{Date.prototype.getMinutes.call(new Date())});
    printer.newLine();


    //RESTAURANTE
    //--------------------------------------------------------
    printer.drawLine();
    //--------------------------------------------------------

    printer.newLine();
    printer.bold(true);
    printer.print(`Tipo de venta ${nombreRestaurante}`);
    printer.bold(false);
    printer.newLine();

    printer.table(["Cuenta", "Monto($)", "Ca.Por", "Ca.A", "", "Hora"]);
    printer.table([`${noCuentaRes}`, `${montoRes}`, `${codigo}`, `${codigo}`, `${codigo} `, `${hora}`]);
    printer.newLine();

    printer.newLine();
    printer.alignRight();
    printer.bold(true);
    printer.print(`${noCancelacionesRes} Cancelaciones  $${totalCanceladoRes}`); 
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
    printer.print(`Tipo de venta ${nombreParaLlevar}`);
    printer.bold(false);
    printer.newLine();

    printer.table(["Cuenta", "Monto($) ", "Ca.Por", "Ca.A", "  ", " Hora"]);
    printer.table([`${noCuentaRes}`, `${montoRes}`, `${codigo}`, `${codigo}`, `${nombre} `, `${hora}`]);
    printer.newLine();

    printer.newLine();
    printer.alignRight();
    printer.bold(true);
    printer.print(`${noCancelacionesRes} Cancelaciones  $${totalCanceladoRes}`); 
    printer.bold(false);


    printer.cut();

    let execute = printer.execute();
    console.log("Print executed:", execute);

    return printer
}

module.exports = impresion;