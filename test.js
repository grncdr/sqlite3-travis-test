var db = new require('sqlite3').Database('/tmp/test.db')
db.serialize();
db.each('create table blah (yeah int)')
db.each('insert into blah (yeah) values (1)')
db.each('select * from blah')
