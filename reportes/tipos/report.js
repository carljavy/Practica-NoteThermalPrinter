class Report { 
    constructor(){
        this.title = null;
        this.user = null;
        this.date = null;
        this.sellType = null;
    }
}   

class ReportBuilder {
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

const builder = new ReportBuilder();
builder.setTittle("Cancelaciones").setDate("2024-06-10").setSellType("Restaurante").setUser("Alejandro");

console.log(builder.build());

