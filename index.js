var mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "__toor__!",
    database: "nodedb"
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
