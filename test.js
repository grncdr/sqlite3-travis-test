var Database = require('sqlite3').Database
var db = new Database('/tmp/test.db')
db.serialize();
db.each('create table blah (yeah int)')
db.each('insert into blah (yeah) values (1)')
