const mysql = require('mysql');
const { hostname,port,db_user,db_pass,db_name } = require('./config.json');
const connection = mysql.createConnection({
  host     : hostname,
  port     : port,
  user     : db_user,
  password : db_pass,
  database : db_name,
  charset : 'utf8mb4'
});