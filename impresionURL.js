//const { ThermalPrinter } = require("node-thermal-printer");
import { ThermalPrinter, PrinterTypes, CharacterSet, BreakLine } from "node-thermal-printer";
import { printerServices } from "./entidades/impresora/printerServices.js";
import { ReportBuilder, ReportsDirector } from "./reportes/tipos/report.js"
import { currentDate } from "./reportes/libs/currentDateCalculate.js";




const urlpath = ""


let montoTotalCancelaciones = 0;
let numeroTotalCancelaciones = 0;
//const EMPLOYEE_ORDER = "EMPLOYEE_ORDER" (PROXIMAMENTE)



// function tables(orderType, orderType2, cancelaciones, printer) {
//     let numCuentas = 0;
//     let montoTotal =0;

//     printer.underline(true);
//     printer.tableCustom([
//         {text:"Cuenta"},
//         {text:"Monto($)", align:"RIGHT"},
//         {text:"Ca.Por", align:"RIGHT"},
//         {text:"Ca.A", align:"RIGHT"},
//         {text:"", align:"RIGHT"},
//         {text:"Hora", align:"RIGHT"},
//     ]);

//     printer.underline(false);

//     //Object.keys(item).map( el => printer.println(el))

//     cancelaciones.forEach( cuenta => {
//         if (true) {
//             printer.tableCustom([
//                 {text: `${cuenta.accountId.code}`},
//                 {text: `${parseFloat(cuenta.accountId.checkTotal).toFixed(2)}`, align:"RIGHT"},
//                 {text: `${cuenta.cancellationBy.employeeNumber}`, align:"RIGHT"},
//                 {text: `${cuenta.accountId.userCode}`, align:"RIGHT"},
//                 {text: `${cuenta.accountId.user.slice(0, 7)}`, align:"RIGHT"},
//                 {text: `${getHours(cuenta.accountId.createdAt)}`, align:"RIGHT"},
//             ]);
//             montoTotal += parseFloat(cuenta.accountId.checkTotal);
//             montoTotalCancelaciones += parseFloat(cuenta.accountId.checkTotal);
//             numCuentas += 1;
//             numeroTotalCancelaciones +=1;
//         }
//     });

//     printer.newLine();
//     printer.alignRight();
//     printer.bold(true);

//     printer.print(`${numCuentas} Cancelaciones $${montoTotal}`);

//     printer.bold(false);
//     printer.newLine();
// }

export default async function impresionURL(req, res) { 
    console.log("extrayendo primeras 10 cuentas");

    try {
        const cuentas = await fetch(urlpath)
        const data = await cuentas.json()
        const periodDate = data[0].createdAt
        const formatDate = currentDate(periodDate)
        const userRequested = "1001 Alejandro A"

        if(data.length > 0) {
            console.log("Cuentas extraidas con exito");

            ejecutarImpresion(data.slice(0,10), formatDate, userRequested);
        } else if ( !data.length ) {
            console.log("No se extrajeron cuentas");
            throw new Error("No se extrajeron cuentas");
        }

            return res.send('Impresion realizada');

    } catch (error) {
        console.error("Error", error);
    }
    
}


async function ejecutarImpresion(cancelaciones, formatDate, userRequested) {  

        let service = printerServices();

        const printer = service.getPrinter();




        const isConnected = printer.isPrinterConnected();
        console.log("Printer connected:", isConnected);


        
        //creando un nuevo builder, que crea un reporte internamente
        const builder =  new ReportBuilder();
        //crear un director 
        const directorBuilder = new ReportsDirector(builder);
        
        

        directorBuilder.cancelationsReport(printer, userRequested, formatDate.datetwo, cancelaciones)
        







        //IMPRESION----------------------------------------------------------------------

        // printer.alignCenter();
        // printer.print("TOMATE TAQUERIA SA DE CV");
        // printer.newLine();
        // printer.bold(true);
        // printer.print("CUENTAS CANCELADAS");
        // printer.bold(false);
        // printer.newLine();
        // printer.print(`Ventas del dia ${fechaActual}`);
        // printer.newLine();
        // printer.newLine();

        // printer.alignLeft();
        // printer.print(`Usuario: 1001 Alejandro A`);
        // printer.newLine();
        // printer.print(`${fechaActual} ${horaActual}`);
        // printer.newLine();

        // //RESTAURANTE
        // //--------------------------------------------------------
        // printer.drawLine();
        // //--------------------------------------------------------
        // printer.newLine();
        // printer.bold(true);
        // printer.print(`Tipo de venta: Restaurante`);
        // printer.bold(false);
        // printer.newLine();

        // tables(ONSITE_ORDER, ON_SITE_ORDER, cancelaciones, printer);

        // //PARA LLEVAR
        // //--------------------------------------------------------
        // printer.drawLine();
        // //--------------------------------------------------------  

        // printer.alignLeft();
        // printer.newLine();
        // printer.bold(true);
        // printer.print(`Tipo de venta: Para llevar`);
        // printer.bold(false);
        // printer.newLine();

        // tables(TOGO_ORDER, TOGO_ORDER, cancelaciones, printer);

        // //TELEFONICO
        // //--------------------------------------------------------
        // printer.drawLine();
        // //--------------------------------------------------------  

        // printer.alignLeft();
        // printer.newLine();
        // printer.bold(true);
        // printer.print(`Tipo de venta: Telefonico`);
        // printer.bold(false);
        // printer.newLine();

        // tables(PHONE_ORDER, PHONE_ORDER, cancelaciones, printer);

        // //RAPPI
        // //--------------------------------------------------------
        // printer.drawLine();
        // //--------------------------------------------------------  

        // printer.alignLeft();
        // printer.newLine();
        // printer.bold(true);
        // printer.print(`Tipo de venta: Rappi`);
        // printer.bold(false);
        // printer.newLine();

        // tables(RAPPI_ORDER, RAPPI_ORDER, cancelaciones, printer);

        // //TOTAL GENERAL
        // //--------------------------------------------------------

        // printer.alignRight
        // printer.drawLine();
        // printer.bold(true);
        // printer.print(`TOTAL  ${numeroTotalCancelaciones} Cancelaciones $${montoTotalCancelaciones}`);
        // printer.newLine();
        // printer.bold(false);


        // printer.drawLine();
        // //--------------------------------------------------------

        // printer.alignLeft();
        // printer.print("Ca.por = Cancelado por");
        // printer.newLine();
        // printer.print("Ca.a = Cancelado a");
        // printer.newLine();
        // printer.print("Hora = Hora de cancelacion");
        // printer.newLine();
        // printer.drawLine();

        // //--------------------------------------------------------
    
        // printer.newLine();
        // printer.leftRight("TOMATE", "PUNTO DE VENTA");
        // printer.leftRight("Punto de venta", "www.tomatepos.com");




        
    
}
