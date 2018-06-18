//SQLITE
var database = require('./config/database');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(database.databasePath);

module.exports = db;