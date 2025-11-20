import { createPrinter } from "../servicios/readPrinter.js";


export function printerServices() {
    function getPrinter(){
        return createPrinter();
    }

    function getOtherPrinter(){
        console.log("otra impresora");
    }

    return { getPrinter, getOtherPrinter };
}

