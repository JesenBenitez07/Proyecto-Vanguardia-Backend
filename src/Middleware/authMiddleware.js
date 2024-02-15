/*const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const requireAuth = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }

    jwt.verify(token, 'secreto', async (err, decodedToken) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido' });
        }

        const user = await User.findById(decodedToken.userId);
        if (!user) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }

        req.user = user;
        next();
    });
};

module.exports = { requireAuth };*/
