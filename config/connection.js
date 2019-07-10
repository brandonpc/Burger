// Set up MySQL connection.
var mysql = require("mysql");
var connection;
// var connection = mysql.createConnection({
//   host: "localhost",
//   // port: 3306,
//   user: "root",
//   password: "",
//   database: "eatdaburger_db"
// });

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "umabrisfx8afs3ja.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "	c7vq0qrrtm5zffav",
    password: "jxsnudm51py1pi8t",
    port: 3306,
    database: "xb7bn0wnbkkg0h9k"
  })
}

connection.connect(function (err) {
  // if (err) {
  //   console.error("error connecting: " + err.stack);
  //   return;
  // }
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

// export connection for orm
module.exports = connection;