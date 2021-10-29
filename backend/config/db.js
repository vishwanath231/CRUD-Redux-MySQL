import mysql from 'mysql';

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root',
    database: 'redux-crud'  
})


export default db;


