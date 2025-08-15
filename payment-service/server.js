const express = require('express');
const app = express();
const PORT = 3003;

app.use(express.json());

app.post('/payment', (req, res) => {
    res.send('Paiement effectué');
});

app.listen(PORT, () => {
    console.log(`Service de paiement à l'écoute sur le port ${PORT}`);
});