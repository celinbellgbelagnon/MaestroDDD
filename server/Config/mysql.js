const mysql = require('mysql');

const database = mysql.createConnection({ 
    user: 'root',
    host: 'localhost',
    password: '', 
    database: 'maestro' 
}) 

database.connect((error)=>{
    if (error) throw error;
    console.log('Databse connect succefully');
})

module.exports = database