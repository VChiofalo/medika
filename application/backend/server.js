import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import routes from './app/routes.js';


// Créez une instance de l'application Express
const app = express();
app.use(express.json());

// Origines autorisées
const whitelist = [process.env.URLFRONT];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true); // Autoriser les requêtes CORS pour l'URL front-end
    } else {
      callback(new Error(`Acces interdit`)); // Bloquer les autres origines
    }
  }
};

/* Middleware CORS appliquez à toutes les routes */
app.use(cors(corsOptions));

/* Récupération des données en POST */
app.use(express.urlencoded({ extended: false }));

// Utilisez flash messages
app.use(flash());

/* Routes */
routes(app);

/* Écoute du serveur HTTP */
app.listen(PORT, () => {
    console.log(`Le serveur est démarré sur le port ${process.env.PORT}`);
});

export default app;
