// Import MySQL connection.
var connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
  all: function (tableInput, cb) {
    connection.query('SELECT * FROM ' + tableInput + ';', function (err, result) {
      if (err) throw err;
      cb(result);
    })
  },

  update: function (tableInput, condition, cb) {
    connection.query('UPDATE ' + tableInput + ' SET consumed=true WHERE id=' + condition + ';', function (err, result) {
      if (err) throw err;
      cb(result);
    })
  },

  create: function (tableInput, val, cb) {
    connection.query('INSERT INTO ' + tableInput + " (burger_name) VALUES ('" + val + "');", function (err, result) {
      if (err) throw err;
      cb(result);
    })
  }
}

module.exports = orm;