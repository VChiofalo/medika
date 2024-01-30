// server/app.js
const express = require('express');
const app = express();

// Importez vos routes ici
// const someRoute = require('./routes/someRoute');

app.use(express.json());

// Utilisez vos routes ici
// app.use('/api/some-path', someRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});

// ...

module.exports = app;
