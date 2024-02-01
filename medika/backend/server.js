    import express from 'express';
    import 'dotenv/config';
    import session from 'express-session' ;
    import cors from 'cors';
    import bcrypt from 'bcryptjs';
    import flash from 'express-flash-messages';

    const whitelist = [process.env.URLFRONT]
    const corsOptions = {
     origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
     } else {
       callback(new Error('Not allowed by CORS'))
     }
   } 
 }

    
    app.use(cors());
    app.get('/products/:id', function (req, res, next) {
      res.json({msg: 'CORS is enabled for all origins!'});
    });
    


    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false }
    }));

    const app = express();

    app.use(express.json());
 
    // Importez vos routes ici
    // const someRoute = require('./routes/someRoute');

    app.use(express.json());
    app.listen(80, function () {
      console.log('CORS-enabled web server is listening on port 80');
    });

    app.listen(process.env.PORT, () => {
        console.log(`Serveur en écoute sur le port ${process.env.PORT}`);
    });

    export default app;