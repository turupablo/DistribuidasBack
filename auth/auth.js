const jwt = require('jsonwebtoken');

const secretKey = 'lima757';

function generateToken(user) {
  const payload = {
    id: user.id,
    email: user.email, 
  };

  return jwt.sign(payload, secretKey, { expiresIn: '168h' }); // JWT con expiración en 1 semana
}

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return null; // El token es inválido
  }
}

module.exports = {
  generateToken,
  verifyToken,
};
