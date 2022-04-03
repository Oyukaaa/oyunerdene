const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "mydb"
});
const app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

app.post('/Auth',function(request, response){
  let fname=request.body.fname;
  console.log(fname);
  if(fname){
    con.query('SELECT * FROM suragch WHERE fname = ?',[fname],function(error,results,fields){
      if 
      (error)throw error;

      if(results.length>0){
      console.log(result);
      
      }
    })
  }
})

app.get('/', function(request, response) {

	response.sendFile(path.join(__dirname + '/Search.html'));
});
app.listen(65534);