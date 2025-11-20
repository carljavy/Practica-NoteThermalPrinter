
export class ParaLlevar {
    constructor(noCuentall, montoll, horall) {
        this.noCuentall = noCuentall;
        this.montoll = montoll;
        this.horall = horall;
    }

    
}
export const llevar1 = new ParaLlevar("105", 235.00, "9:13");
export const llevar2 = new ParaLlevar("107", 765.00, "10:45");
export const llevar3 = new ParaLlevar("109", 438.00, "12:30");


export let llevar = [llevar1, llevar2, llevar3];


