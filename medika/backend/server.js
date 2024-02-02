import express from 'express';
import 'dotenv/config';
import session from 'express-session';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import flash from 'express-flash-messages';
import routes from './app/routes.js';


// Créez une instance de l'application Express
const app = express();
app.use(express.json());

// Définissez la liste des origines autorisées
const whitelist = [process.env.URLFRONT];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true); // Autoriser les requêtes CORS pour l'URL front-end
    } else {
      callback(new Error('Not allowed by CORS')); // Bloquer les autres origines
    }
  }
};



// Appliquez les middleware JSON et CORS à toutes les routes

app.use(cors(corsOptions));
/* Récupération des données en POST */
app.use(express.urlencoded({ extended: false }));
// Configurez le middleware de session
/* app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // 'secure' doit être true si vous êtes en HTTPS
})); */

// Utilisez flash messages
app.use(flash());

routes(app);

// Définissez vos routes
// Par exemple, vous pouvez avoir une route de test pour CORS
app.get('/products/:id', function (req, res) {
  res.json({msg: 'This route is CORS-enabled for whitelisted origins.'});
});

// Écoutez sur le port défini dans le fichier .env
const PORT = process.env.PORT || 3000; // Port par défaut à 80 si non défini dans .env
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

export default app;
