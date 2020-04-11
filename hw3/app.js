var express = require('express');
var todoController = require('./controllers/todocontrollers');
var app = express();

// 宣告 view engine tempalate 為 ejs
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log('you are listening to port 3000');