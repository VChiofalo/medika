import mysql from 'mysql2';

console.log('Avant la création du pool de connexions');

export default mysql.createPool({
    host     : process.env.SQL_HOST,
    user     : process.env.SQL_USER,
    password : process.env.SQL_PASSWORD,
    port     : process.env.SQL_PORT,
    database : process.env.SQL_DBNAME,
    waitForConnections : true, 
    connectionLimit : 10,  
    queueLimit : 0
});