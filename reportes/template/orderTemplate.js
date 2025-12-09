import { tables } from "../libs/formatOrders.js";

export function printOrdersTemplate(printer, orders){

const typeOrder = ["Restaurante", "ON_SITE_ORDER",
                   "ParaLlevar", "TOGO_ORDER",
                   "Telefonico", "PHONE_ORDER",
                   "Rappi", "RAPPI_ORDER"
                  ]
//const ON_SITE_ORDER = [Restaurante, onSite]
//const TOGO_ORDER = []
//const PHONE_ORDER = []
//const RAPPI_ORDER = []
    
    let i = 0

    for(i; i<= 7; i++){
        //tipo de venta (Restaurante, Para llevar)
        //--------------------------------------------------------
        printer.newLine();
        printer.drawLine();
        //-------------------------------------------------------
        printer.newLine();
        printer.bold(true);
        printer.alignLeft();
        printer.print(`Tipo de venta: ` +  typeOrder[i] );
        i++
        printer.bold(false);
        printer.newLine();

        tables(typeOrder[i], orders, printer);
    }
    
}
 
