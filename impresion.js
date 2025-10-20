const { ThermalPrinter, PrinterTypes, CharacterSet, BreakLine } = require("node-thermal-printer");

function impresion(){
    
    let printer = new ThermalPrinter({
        type: PrinterTypes.EPSON,
        interface: 'tcp://192.168.1.65',
        characterSet: CharacterSet.PC852_LATIN2,
        removeSpecialCharacters: false,
        lineCharacter: "=",
        breakLine: BreakLine.WORD
    });

    let isConnected = printer.isPrinterConnected();
    console.log("Printer connected:", isConnected);
    
    printer.print("Hola Mundo");
    printer.cut();

    let execute = printer.execute();
    console.log("Print executed:", execute);

    return printer
}

module.exports = impresion