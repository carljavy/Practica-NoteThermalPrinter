export async function printFooterTemplate(printer){

    printer.newLine();
    console.log("Imprimiendo footer");

    try{
        console.log("entre al try");
        await printer.printImage('./assets/footerpng.png');
    } catch (error) {
        console.error("Error", error)
        console.log("no entre al try");
    }
    

}