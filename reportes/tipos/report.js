
class Report { 
    constructor(){
        this.title = null;
        this.user = null;
        this.date = null;
        this.sellType = null;
    }
}   

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

    setSellType(sellType){
        this.__report.sellType = sellType
        return this
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

    

    cancelationsReport(printer, fechaActual){
        this.__builder.setTittle("Cortesias").setDate(fechaActual).setUser("Alejandro");
        const report = this.__builder.build();

        printer.alignCenter();
        printer.print("TOMATE TAQUERIA SA DE CV");
        printer.newLine();
        printer.bold(true);
        printer.print(report.title);
        printer.bold(false);
        printer.newLine();
        printer.print(`Ventas del dia ${report.date}`);
        printer.newLine();
        printer.newLine();

        printer.alignLeft();
        printer.print(`Usuario: ${report.user}`);
        printer.newLine();
        printer.print(``);
        printer.newLine();
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

