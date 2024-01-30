import 'dotenv/config';
import mysql from 'mysql2/promise';
// import con from '../app/database_sql.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
(async () => {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST, 
        user: process.env.DB_USER, 
        password: process.env.DB_PASSWORD, 
        database: process.env.DB_NAME
    });

    const scriptPath = path.join(__dirname, 'initiatedatabase.sql');
    const scriptSQL = fs.readFileSync(scriptPath, 'utf-8');

    try {
        await connection.query(scriptSQL);
        console.log('La base de données a été initialisée avec succès.');
    } catch (error) {
        console.error('Erreur lors de l\'initialisation de la base de données:', error);
    } finally {
        await connection.end();
    }
})();