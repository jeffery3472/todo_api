const { request, response } = require('express');
const express = require('express');
const app = express();
require('dotenv').config();
//importing mongoose
const mongoose = require('mongoose');
//importing todoController
const todoController = require('./controllers/todoController')

app.use(express.json());

app.post('/todo',todoController.addTodo);
app.get('/todo',todoController.getAllTodo);
app.put('/todo/todoId',todoController.updateById);
app.delete('/todo/:todoId',todoController.deleteById);
app.get('/todo/:todoId',todoController.getTodoById);

//listening to request on localhost port 1489
app.listen(1479,() => {
    console.log("My server is Up and running  ");
    //connecting to the database
    mongoose.connect(process.env.DB_URL)
    .then(function(){
        console.log("DataBase is Connected");
    })
    .catch(function(error){
        console.log("DataBase is not Connected",error.message);
    });
});

