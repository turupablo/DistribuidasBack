const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db');
const { generateToken } = require('../../auth/auth');

const router = express.Router();

router.use(bodyParser.json());

router.post('/login', (req, res) => {
  const { email, password, googleToken } = req.body;

  if (!email || (!password && !googleToken)) {
    return res.status(400).json({ message: 'Solicitud incorrecta' });
  }

  let query;
  let table;

  if (googleToken) {
    // Iniciar sesión con Google SSO
    query = 'SELECT * FROM usuarios WHERE email = ?';
    table = 'usuarios';
  } else {
    // Iniciar sesión con email y contraseña
    query = 'SELECT * FROM duenos WHERE email = ? AND password = ?';
    table = 'duenos';
  }

  db.query(query, [email, password], (error, results) => {
    if (error) {
      return res.status(500).json({ message: 'Error interno del servidor' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    const user = results[0];

    // Generar un token JWT
    const accessToken = generateToken(user);

    // Almacenar el token en la base de datos
    db.query(`UPDATE ${table} SET accessToken = ? WHERE id_${table} = ?`, [accessToken, user[`id_${table}`]], (updateError) => {
      if (updateError) {
        return res.status(500).json({ message: 'Error al guardar el token en la base de datos' });
      }
      res.status(200).json({ accessToken, id: user[`id_${table}`], avatar: user.avatar });
    });
  });
});

module.exports = router;

