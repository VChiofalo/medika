    import express from 'express';
    import 'dotenv/config';
    import cors from 'cors';
    import bcrypt from 'bcryptjs';
    import path from 'path';
    import { fileURLToPath } from 'url';
    import routes from './app/routes.js';

    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    

    const whitelist = [process.env.URL_FRONT_MEDIKA]
    const corsOptions = {
      origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
        } else {
          callback(new Error('Not allowed by CORS'))
        }
      } 
    }

    
    /* app.use(cors());
    app.get('/products/:id', function (req, res, next) {
      res.json({msg: 'CORS is enabled for all origins!'});
    }); */

    const app = express();

    //--------------------------------------------------------------------
    //      Récupération des données en POST
    //--------------------------------------------------------------------
    app.use(express.urlencoded({ extended: false }));

    //--------------------------------------------------------------------
    //      Routes
    //--------------------------------------------------------------------
    routes(app);

    //--------------------------------------------------------------------
    //     Ecoute du serveur HTTP
    //--------------------------------------------------------------------
    app.listen(process.env.PORT, ()=>{
      if (process.env.APP_ENV == 'dev') {
        console.log(`Le serveur est démarré : http://localhost:${process.env.PORT}`);
      }
});

    export default app;