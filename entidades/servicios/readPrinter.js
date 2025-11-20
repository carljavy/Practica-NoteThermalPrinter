import { ThermalPrinter, PrinterTypes, CharacterSet, BreakLine } from "node-thermal-printer";

export function createPrinter() {
    let printer = new ThermalPrinter({
        type: PrinterTypes.EPSON,
        interface: 'tcp://192.168.1.54',
        characterSet: CharacterSet.PC852_LATIN2,
        removeSpecialCharacters: false,
        lineCharacter: "=",

        breakLine: BreakLine.WORD
    });

    return printer;
}