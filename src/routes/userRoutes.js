const express = require('express');
const router = express.Router();
const { createUser, getUserByUsername } = require('../services/userServices');

// Rutas de usuario usando las funciones createUser y getUserByUsername
router.post('/create', async (req, res) => {
    try {
        const newUser = await createUser(req.body);
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/getByUsername/:username', async (req, res) => {
    try {
        const username = req.params.username;
        const user = await getUserByUsername(username);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

