import 'dotenv/config';
import mysql from 'mysql2/promise';

async function testDatabaseConnection() {
    let connection;

    try {
        connection = await mysql.createConnection({
            host: process.env.DB_HOST, 
            user: process.env.DB_USER, 
            password: process.env.DB_PASSWORD, 
            database: process.env.DB_NAME
        });

        const [rows] = await connection.query('SELECT 1 + 1 AS solution');
        console.log('Test de connexion réussi, Solution: ', rows[0].solution);
    } catch (error) {
        console.error('Erreur lors du test de la base de données:', error);
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

testDatabaseConnection();
