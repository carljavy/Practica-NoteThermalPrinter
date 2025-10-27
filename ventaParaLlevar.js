
class ParaLlevar {
    constructor(noCuentall, montoll, horall) {
        this.noCuentall = noCuentall;
        this.montoll = montoll;
        this.horall = horall;
    }

    
}
const llevar1 = new ParaLlevar("105", 235.00, "9:13");
const llevar2 = new ParaLlevar("107", 765.00, "10:45");
const llevar3 = new ParaLlevar("109", 438.00, "12:30");


let llevar = [llevar1, llevar2, llevar3];

module.exports = { llevar, llevar1, llevar2, llevar3 };
