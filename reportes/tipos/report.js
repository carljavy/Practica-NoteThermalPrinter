
import { currentDate } from "../libs/currentDateCalculate.js";
import { printHeaderTemplate } from "../template/headerTemplate.js";
import { printOrdersTemplate } from "../template/orderTemplate.js";
import { printFooterTemplate } from "../template/footerTemplate.js";
import { totalAmountCancelations } from "../template/totalCancelations.js";

class Report { 
    constructor(){
        this.title = null;
        this.user = null;
        this.date = null;
        this.sellType = null;
        this.periodDetail = null;
        this.totalOrders = null;
        this.totalOrdersAmount = null;
    }
}   
// _ = protegido
// __ = privado
export class ReportBuilder {
    constructor(){
        this.__report = new Report();
    }    

    setTittle(title){
        this.__report.title = title;
        return this    
    }

    setUser(user){
        this.__report.user = user
        return this
    }

    setDate(date){
        this.__report.date = date
        return this
    }

    __setCurrentDate(){
        this.__report.date = currentDate().fechaYHora
        return this
    }

    setSellType(sellType){
        this.__report.sellType = sellType
        return this
    }

    setPeriodDetail(periodDetail){
        this.__report.periodDetail = periodDetail
        return this;
    }

    setTotalOrders(totalOrders){
        this.__report.totalOrders = totalOrders
        return this;
    }

    setTotalOrdersAmount(totalAmountCancelations){
        this.__report.totalAmountCancelations = totalAmountCancelations
        return this;
    }


    printHeader(printer){

        const report = this.build();

        printHeaderTemplate(printer, report)

    }

    printCancelOrders(printer, orders){

        printOrdersTemplate(printer, orders)
    }

    printerTotalOrders(printer, orders){
        let total = 0;
        let monto = 0;
        let i = 0;
        
        for(i; i < orders.length; i++){
            total++;
            monto += parseFloat(orders[i].accountId.checkTotal);
        }
        for(let y = 0; y < orders.length; y++){
            total++;
            monto += parseFloat(orders[y].accountId.checkTotal);
        }
        for(let j = 0; j < orders.length; j++){
            total++;
            monto += parseFloat(orders[j].accountId.checkTotal);
        }
        for(let k = 0; k < orders.length; k++){
            total++;
            monto += parseFloat(orders[k].accountId.checkTotal);
        }

        totalAmountCancelations(printer, total, monto)

    }

    async printFooter(printer){

        await printFooterTemplate(printer)
    }

    build(){
        return this.__report;
    }


}

//const builder = new ReportBuilder();
//builder.setTittle("Cancelaciones").setDate("2024-06-10").setSellType("Restaurante").setUser("Alejandro");

//console.log(builder.build());



export class ReportsDirector {
    constructor(reportBuilder){
        this.__builder = reportBuilder;

    }

    async cancelationsReport(printer, userRequested, formatDate, orders){
        
        this.__builder.setTittle("Cancelaciones")
                      .setPeriodDetail(formatDate)
                      .setUser(userRequested)
                      .__setCurrentDate()



        this.__builder.printHeader(printer)

        this.__builder.printCancelOrders(printer, orders)

        this.__builder.printerTotalOrders(printer, orders)

        await this.__builder.printFooter(printer)
        
        this.executePrint(printer)
    }

    
    executePrint(printer){
        printer.cut();

        printer.execute();
        console.log("Print executed:");
    }

}


// class Teclado{
//     constructor(){
//         this.teclas = null;
//         this.configuration = null;
//     }
// }

// //constructor: construlle un teclado
// //setters: modifica los valores
// class BuildTeclado{
//     constructor(){
//         //crea un nuevo teclado
//         this.__teclado = new Teclado();
//     }

//     //confgura las teclas 
//     setTeclas(teclas){
//         this.__teclado.teclas = teclas;
//         //retornamos el construcctor
//         return this;
//     }

//     setConfiguration(configuration){
//         this.__teclado.configuration = configuration;
//         //este metodo return, retorna la variable configuracion modificada
//         return this;
//     }

//     build(){
//         //retorna el teclado ya configurado
//         return this.__teclado;
//     }
// }

// //crear el builder, para que crear un nuevo teclado
// const builderDos = new BuildTeclado();

// //Poner valores al new Teclado
// builderDos.setTeclas("72").setConfiguration("Ingles");

// const tecladoConfigurado = builderDos.build(); 


// console.log(tecladoConfigurado);

