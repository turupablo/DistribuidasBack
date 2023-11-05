const express = require('express');
const router = express.Router();

// Ruta de prueba para verificar que el backend esté corriendo
router.get('/test', (req, res) => {
  //res.status(200).json({ message: 'Backend corriendo' });
  //res.render('Backend corriendo');
  res.send({ message: 'Este es un mensaje de prueba' });
});


module.exports = router;
