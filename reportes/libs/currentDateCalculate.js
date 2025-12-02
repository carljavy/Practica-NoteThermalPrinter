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

    // const datetwo = new Date(periodDate).toLocaleDateString('es-MX', {
    //     weekday: 'long',
    //     year: 'numeric',
    //     month: 'long',
    //     day: 'numeric'
    // });

    return { fechaActual, horaActual, fechaYHora}
} 
