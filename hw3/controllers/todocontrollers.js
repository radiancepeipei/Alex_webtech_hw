var bodyParser = require('body-parser');

var data = [{ item: 'get milk' }, { item: 'walk dog' }, { item: 'go for a walk' }]; //data array 
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
    //request handler
    app.get('/todo', function(req, res) { //訪問todoList頁面的路由
        res.render("todo", { todos: data });
        // pass data to the todo view , property name is todos
    });

    app.post('/todo', urlencodedParser, function(req, res) { //新增item時用到的路由
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item', function(req, res) { //刪除item時用到的路由
        data = data.filter(function(todo) {
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        //res.render("todo", { todos: data });
        res.json(data);

    });

};