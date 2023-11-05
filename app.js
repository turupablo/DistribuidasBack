const express = require('express');
const app = express();
const authRoutes = require('./src/routes/authRoutes');
const propertyRoutes = require('./src/routes/propertyRoutes');
//const testRoute = require('./src/routes/testRoute');

app.use('/auth', authRoutes);
app.use('/property', propertyRoutes);
//app.use('/test', testRoute);

app.get('/test', (req, res) => {
  res.send({ message: 'Este es un mensaje de prueba' });
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
