var Database = require('sqlite3').Database
var db = new Database('/tmp/test.db')
db.serialize();
