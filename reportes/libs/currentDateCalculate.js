export function currentDate(periodDate){

    let fecha = null

    if(periodDate){
       fecha = new Date(periodDate)
    } else {
        fecha = new Date();
    }

    const fechaActual = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`.padStart(5, '0');
    const horaActual = `${fecha.getHours()}:${fecha.getMinutes()}`; 
    const fechaYHora = `${fechaActual} ${horaActual}`

    // formato de fecha en numerico ( 12/05/2025)
    const datetwo = new Date(periodDate).toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });

    const hora = new Date(periodDate).toLocaleTimeString('es-MX', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    return { datetwo, fechaActual, horaActual, fechaYHora, hora}
} 
