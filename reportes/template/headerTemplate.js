export function printHeaderTemplate(printer, report){

    printer.alignCenter();
    printer.print("TOMATE TAQUERIA SA DE CV");
    printer.newLine();
    printer.bold(true);
    printer.print(report.title);
    printer.bold(false);
    printer.newLine();
    printer.print(report.periodDetail);
    printer.newLine();
    printer.newLine();

    printer.alignLeft();
    printer.print(`Usuario: ${report.user}`);
    printer.newLine();
    printer.print(report.date);
    printer.newLine();

}