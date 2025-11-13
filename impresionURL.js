const { ThermalPrinter, PrinterTypes, CharacterSet, BreakLine } = require("node-thermal-printer");
const fecha = new Date();
const fechaActual = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`.padStart(5, '0');
const horaActual = `${fecha.getHours()}:${fecha.getMinutes()}`;

const urlpath = ""

async function impresionURL(res, req) { 
    console.log("extrayendo primeras 10 cuentas");

    try {
        const cuentas = await fetch(urlpath)
        const data = await cuentas.json()

        if(data.length > 0) {
            console.log("Cuentas extraidas con exito");

            ejecutarImpresion(data.slice(0,10));
        } else if ( !data.length ) {
            console.log("No se extrajeron cuentas");
            throw new Error("No se extrajeron cuentas");
        }

            return res.send('Impresion realizada');

    } catch (error) {
        console.error("Error", error);
    }
    
}


async function ejecutarImpresion(cancelaciones) {
    console.log("Iniciando impresion desde URL...");    

        let printer = new ThermalPrinter({
            type: PrinterTypes.EPSON,
            interface: 'tcp://192.168.1.54',
            characterSet: CharacterSet.PC852_LATIN2,
            removeSpecialCharacters: false,
            lineCharacter: "=",
            breakLine: BreakLine.WORD
        });

        const isConnected = printer.isPrinterConnected();
        console.log("Printer connected:", isConnected);

        cancelaciones.forEach( cuenta => {
            printer.println(`${cuenta._id}`)
            printer.println(`${cuenta.accountId.userCode}`)
            printer.println(`${cuenta.accountId.user}`)
        })

        // printer.alignCenter();
        //printer.print("TOMATE TAQUERIA SA DE CV");
        // printer.newLine();
        // printer.bold(true);
        // printer.print("CUENTAS CANCELADAS");
        // printer.bold(false);
        // printer.newLine();
        // printer.print(`Ventas del dia ${fechaActual}`);
        // printer.newLine();
        // printer.newLine();

        printer.cut();

        printer.execute();
        console.log("Print executed:");
    
}

module.exports = impresionURL;