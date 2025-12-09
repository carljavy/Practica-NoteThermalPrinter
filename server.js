
//CONTROLADORES
import express from'express';
import impresionURL from'./impresionURL.js';



const app = express();
const PORT = 3000;


// Ruta básica
app.get('/', (req, res) => {
  res.send('El servidor Express está funcionando');
});

// Ruta para impresión desde URL
app.get('/impresionURL', impresionURL);


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
