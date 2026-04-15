const express = require('express'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
sanitizer = require('sanitizer'),
app = express(),
port = 8000

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({
extended:false
}));

app.use(methodOverride(function (req, res) {
if (req.body && typeof req.body === 'object' && '_method' in req.body) {
let method = req.body._method;
delete req.body._method;
return method;
}
}));

let todolist = [];

app.get('/todo', function(req,res){
res.render('todo.ejs',{
todolist
});
})

.post('/todo/add', function(req,res){
let newTodo = sanitizer.escape(req.body.newtodo);

if(newTodo!=''){
todolist.push(newTodo);
}

res.redirect('/todo');
})

.get('/todo/delete/:id', function(req,res){

let id = req.params.id;

if(id!=''){
todolist.splice(id,1);
}

res.redirect('/todo');
})

.get('/todo/:id', function(req,res){

let id = req.params.id;
let todo = todolist[id];

res.render('edititem.ejs',{
id,
todo
});

})

.put('/todo/edit/:id', function(req,res){

let id = req.params.id;
let editTodo = sanitizer.escape(req.body.editTodo);

if(editTodo!=''){
todolist[id] = editTodo;
}

res.redirect('/todo');

})

.use(function(req,res){
res.redirect('/todo');
})

.listen(port,function(){
console.log(`Todolist running on http://0.0.0.0:${port}`);
});

module.exports = app;
