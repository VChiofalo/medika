const mysql = require('mysql2/promise');

(async () => {
  const connection = await mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: 'password', 
    database: 'medika' // le nom de votre base de données
  });