
//CONTROLADORES

const express = require('express');
const app = express();
const PORT = 3000;
const impresion = require('./impresion.js');
const consola = require('./consola.js');

// Ruta básica
app.get('/', (req, res) => {
  res.send('El servidor Express está funcionando');
});

app.get('/impresion', impresion);

app.get('/consola', consola);


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
