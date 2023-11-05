const express = require('express');
const router = express.Router();
const db = require('../db');

// Ruta para obtener la lista de propiedades para el owner
router.get('/owner/propertylist', (req, res) => {
  const ownerId = req.query.id;
  const listaTipo = req.query.listaTipo;

  if (!ownerId || !listaTipo) {
    return res.status(400).json({ message: 'Solicitud incorrecta' });
  }

  // Comprueba si el owner existe
  db.query('SELECT id_dueno FROM duenos WHERE id_dueno = ?', [ownerId], (error, ownerResults) => {
    if (error) {
      return res.status(500).json({ message: 'Error interno del servidor' });
    }

    if (ownerResults.length === 0) {
      return res.status(404).json({ message: 'Owner no encontrado' });
    }

    // Consulta la base de datos para obtener la lista de propiedades
    fetchProperties(ownerId, listaTipo, res);
  });
});

// Función para consultar propiedades
function fetchProperties(ownerId, listaTipo, res) {
  db.query(
    'SELECT id_propiedad, imagenURL, CONCAT(direccionCalle, " ", direccionNumero) AS direccion, precio, barrio FROM propiedades WHERE id_dueno = ? AND listaTipo = ?',
    [ownerId, listaTipo],
    (error, results) => {
      if (error) {
        return res.status(500).json({ message: 'Error interno del servidor' });
      }

      // Devuelve la lista de propiedades en formato JSON
      res.status(200).json(results);
    }
  );
}

module.exports = router;