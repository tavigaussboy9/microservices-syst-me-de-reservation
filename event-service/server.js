const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/events', (req, res) => {
    res.send('Liste des événements');
});

app.listen(PORT, () => {
    console.log(`Service d'événements à l'écoute sur le port ${PORT}`);
});