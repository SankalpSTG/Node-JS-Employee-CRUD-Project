var mysql = require("mysql2")

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "employees"
}).promise()

module.exports = {conn}