//const impresion = require('./impresion.js');
const { users } = require('./usuario.js');
const readline = require('readline');
const impresionConsola = require('./impresionConsola.js');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function consola(req, res) {

    rl.question('Ingrese su codigo: ', (usuario) => {
        rl.question('Ingrese su contrasena: ', (contrasena) => {
            console.log(usuario);
            console.log(contrasena);
 
            var verdadero = false;
            

            for (let user of users) {
                if (usuario === user.codigo && contrasena === user.contrasena) {
                    verdadero = true;
                    break;
                } else {
                    consola();
                }
            }

            if (verdadero === true) { 
                console.log("seleccione una opcion: \n");
                console.log("1. Crear cuenta");
                console.log("2. Cancelar cuenta");
                console.log("3. Imprimir Reporte cuentas canceladas");
                    
                rl.question('Ingrese una opcion: ', (option) => {
                    console.log(option);
                    console.log(option == "1");
                    if (option == "1" ) {
                        
                        console.log("1. Crear cuenta");                        
                    } else if (option == "2") {
                        console.log("2. Cancelar cuenta");
                    } else if (option == "3") {
                        console.log(usuario);
                        users.forEach(user => {
                            if (user.codigo.trim() === usuario.trim()){
                                impresionConsola(user);
                                console.log("Impresion realizada con exito");
                            } else {
                                console.log("Usuario no encontrado");
                            }
                        });
                        
                    } else {
                        console.log("Opcion no valida");    
                    }
                    rl.close();
                });
            } else {
                consola();
            }

            return res.send('Consola ejecutada');
        });
    });
}

module.exports = consola;