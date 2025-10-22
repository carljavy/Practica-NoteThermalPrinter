const { ThermalPrinter, PrinterTypes, CharacterSet, BreakLine } = require("node-thermal-printer");
const usuario = require('./usuario.js');

function impresion(){
    
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

    printer.alignRight();
    printer.print(`Usuario: ${codigo} ${nombre}`);
    printer.newLine();
    printer.print("15/08/2024 17:26");
    //printer.print({Date.prototype.getDate.call(new Date())}/{Date.prototype.getMonth.call(new Date()) + 1}/{Date.prototype.getFullYear.call(new Date())} {Date.prototype.getHours.call(new Date())}:{Date.prototype.getMinutes.call(new Date())});
    printer.newLine();

    printer.drawLine();
    //--------------------------------------------------------

    printer.newLine();
    printer.bold(true);
    printer.print(`Tipo de venta ${Restaurante}`);


    printer.cut();

    let execute = printer.execute();
    console.log("Print executed:", execute);

    return printer
}

module.exports = impresion