import { ThermalPrinter, PrinterTypes, CharacterSet, BreakLine } from "node-thermal-printer";
import { cuentas } from'./cuentas.js';

const fecha = new Date();
const fechaActual = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`.padStart(5, '0');
const horaActual = `${fecha.getHours()}:${fecha.getMinutes()}`;



export function impresionConsola(usuarioActual) {
    console.log("Impresion desde consola"); 

    //usuario que imprime
    const { codigo, nombre } = usuarioActual;    
    
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

    printer.print(`Usuario: ${codigo} ${nombre.slice(0, 9)}`);
    printer.newLine();
    printer.print(`${fechaActual} ${horaActual}`);
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

    const cuentasRestaurante = cuentas.filter(cuenta => cuenta.restaurante === true);
    if (cuentasRestaurante.length > 0) {
        cuentasRestaurante.forEach((cuenta) => {
            printer.table([
                `${cuenta.noCuenta.toString().padStart(6, '0')}`,
                `${cuenta.monto}`, 
                `${codigo}`, 
                `${codigo}`, 
                `${nombre.slice(0, 7)}`, 
                `${cuenta.hora.padStart(5, '0')}`
            ]);
            montoTotalRes += cuenta.monto
        });
        printer.newLine();
        printer.alignRight();
        printer.bold(true);

        printer.print(`${cuentasRestaurante.length} Cancelaciones $${montoTotalRes}`);
    } else {
        printer.print("No hay cuentas de restaurante para imprimir.");
    }
    

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

    printer.underline(true);
    printer.table(["Cuenta", "Monto($) ", "Ca.Por", "Ca.A", "", "Hora"]);
    printer.underline(false);

    let montoTotalPL = 0;
    const cuentasLlevar = cuentas.filter(cuenta => cuenta.paraLlevar === true);
    if (cuentasLlevar.length > 0) {
        cuentasLlevar.forEach((cuenta) => {
            printer.table([
                `${cuenta.noCuenta.toString().padStart(6, '0')}`,
                `${cuenta.monto}`, 
                `${codigo}`, 
                `${codigo}`, 
                `${nombre.slice(0, 7)}`, 
                `${cuenta.hora.padStart(5, '0')}`
            ]);
            montoTotalPL += cuenta.monto
        });
        printer.newLine();
        printer.alignRight();
        printer.bold(true);

        printer.print(`${cuentasLlevar.length} Cancelaciones $${montoTotalPL}`);
    } else {
        printer.print("No hay cuentas de restaurante para imprimir.");
    }









printer.newLine();
    printer.alignRight();
    printer.bold(true);

    //printer.print(`${llevar.length} Cancelaciones $${montoTotalllevar}`);

    printer.bold(false);
    printer.newLine();
    printer.newLine();

    //TOTAL GENERAL
    //--------------------------------------------------------
    
    let noCancelacionesTotal = cuentas.length + llevar.length;
    let totalGeneral = montoTotalRes + montoTotalllevar;

    printer.drawLine();
    printer.bold(true);
    //printer.print(`TOTAL  ${noCancelacionesTotal} Cancelaciones $${totalGeneral}`);
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

// try catch por si da errror la impresion

    printer.cut();
    
    printer.execute();
    console.log("printer excute");

    try {
        printer.excute();
        console.log("impresion exitosa desde consola");
        return true;

    } catch (error) {
        console.error("Error en la impresion desde consola:", error);
        return false;
    }

}


