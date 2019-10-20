var mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user: "Your username(if you don't know : default is root)",
    password: "your MySql password",
    database: "your db name"
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected to the database successfully!");

    // Create a database programmatically. then we need to add the database name to our con object config and remove the code below
    con.query("CREATE DATABASE nodedb", function(err, result) {
        if (err) throw err;
        console.log("Database Created successfully!");

    })

} )
