/*
class Usuario {
    constructor(nombre, codigo, puesto) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.puesto = puesto;
    }
}

const Alex = new Usuario("Alejandro", "00123", "Gerente");
const JoseLuis = new Usuario("JoseLuis", "00456", "Capitan");
const Angela = new Usuario("Angela", "00789", "Mesera");

export { Alex };
*/

function usuario() {
    const nombre = "Alejandro";
    const codigo = "1001";

    return {  nombre ,  codigo  };
}


module.exports = usuario;

