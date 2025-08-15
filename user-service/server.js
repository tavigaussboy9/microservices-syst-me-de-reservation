const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());

app.post('/users', (req, res) => {
    res.send('Utilisateur créé');
});

app.listen(PORT, () => {
    console.log(`Service des utilisateurs à l'écoute sur le port ${PORT}`);
});