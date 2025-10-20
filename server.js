const express = require('express');
const app = express();
const PORT = 3000;
const servicio = require('./servicio.js');

// Ruta básica
app.get('/', (req, res) => {
  res.send('¡Hola, mundo! El servidor Express está funcionando.');
});

app.get('/info', servicio);



// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
