    import express from 'express';
    import 'dotenv/config';

    const app = express();
    app.use(express.json());

    app.use(express.json());

    app.listen(process.env.PORT, () => {
        console.log(`Serveur en écoute sur le port ${process.env.PORT}`);
    });

    export default app;