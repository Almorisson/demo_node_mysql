var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "__toor__!",
    database: "nodedb",
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected to the database successfully!");
    
    // create a Table 
    var tableQuery = "CREATE TABLE customers(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))";
    con.query(tableQuery, function(err, result) {
        if (err) throw err;
        console.log("Table has been created ...");
    })
    
} )
