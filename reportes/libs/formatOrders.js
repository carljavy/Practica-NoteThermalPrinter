import { currentDate } from "./currentDateCalculate.js";

export function tables(typeOrder, cancelaciones, printer) {
    let numCuentas = 0;
    let montoTotal = 0;

    console.log("ESTOY ENTRANDO A LA FUNCION")

    printer.underline(true)
    printer.tableCustom([
        {text:"Cuenta"},
        {text:"Monto($)", align:"RIGHT"},
        {text:"Ca.Por", align:"RIGHT"},
        {text:"Ca.A", align:"RIGHT"},
        {text:"", align:"RIGHT"},
        {text:"Hora", align:"RIGHT"},
    ]);

    printer.underline(false);

    //Object.keys(item).map( el => printer.println(el))

    cancelaciones.forEach( (cancelacion, indice) => {
        console.log("ESTA ENTRANDO AL FOR")

        const formatHours = currentDate(cancelaciones[indice].accountId.createdAt);
        const getHours = formatHours.hora;

        if (true) {
        //if (cancelacion.accountId.sellType === typeOrder) {
            printer.tableCustom([
                {text: `${cancelacion.accountId.code}`},
                {text: `${parseFloat(cancelacion.accountId.checkTotal).toFixed(2)}`, align:"RIGHT"},
                {text: `${cancelacion.cancellationBy.employeeNumber}`, align:"RIGHT"},
                {text: `${cancelacion.accountId.userCode}`, align:"RIGHT"},
                {text: `${cancelacion.accountId.user.slice(0, 7)}`, align:"RIGHT"},
                {text: `${getHours}`, align:"RIGHT"},
            ]);
            console.log("sali de la tabla")
            montoTotal += parseFloat(cancelacion.accountId.checkTotal);
            numCuentas++;
        }
    });

    printer.newLine();
    printer.alignRight();
    printer.bold(true);

    printer.print(`${numCuentas} Cancelaciones $${montoTotal}`);

    printer.bold(false);
    printer.newLine();
    printer.newLine();

}