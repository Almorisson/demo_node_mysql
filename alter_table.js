var mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "__toor__!",
    database: "nodedb",
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected to the database successfully!");
    
    // Alter a Table 
    var tableQuery = "Alter TABLE customers ADD COLUMN address VARCHAR(255)";
    con.query(tableQuery, function(err, result) {
        if (err) throw err;
        console.log("Table has been altered successfully !");
    })
    
} )