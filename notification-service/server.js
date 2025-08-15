const express = require('express');
const app = express();
const PORT = 3004;

app.use(express.json());

app.post('/notify', (req, res) => {
    res.send('Notification envoyée');
});

app.listen(PORT, () => {
    console.log(`Service de notifications à l'écoute sur le port ${PORT}`);
});