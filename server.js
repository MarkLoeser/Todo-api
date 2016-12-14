var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId =1;

//GET /todos

app.get('/todos', function (req, res) {
	res.json(todos);
});

//GET /todos/:id  todos/3
app.get('/todos/:id', function (req, res) {
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;
	
	todos.forEach(function (todo) {
		if (todoId === todo.id) {
			matchedTodo = todo;	
		}
	});

	if (matchedTodo){
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}

});

//POST /todos
app.post('/todos', function (req, res) {

});


app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!');
});