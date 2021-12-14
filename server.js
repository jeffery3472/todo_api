const { request, response } = require('express');
const express = require('express');
const app = express();
//importing mongoose
const mongoose = require('mongoose');
//importing todoController
const todoController = require('./controllers/todoController')

app.get('/',(request,response)=>{
    response.send('hello this is get response');
});

app.put('/',(request,response)=>{
    response.send('hello this is a put response');
});

app.post('/',(request,response)=>{
    response.send('hello this is a post response');
});

app.delete('/',(request,response)=>{
    response.send('hello this is a push response');
});


app.get('/todos',(request,response)=>{
    response.send([{
        'title':'Jeffery is stuck',
        'description':'I will do it demara',
        'isCompleted': false
    }]);
});
app.get('/users',(request,response)=>{
    response.send([{
        'username':'Jeffery Amoah',
        'password':'creativity',
        
    }]);
});
//listening to request on localhost port 1489
app.listen(1489,() => {
    console.log("My server is Up and running on port 1489");
    //connecting to the database
    mongoose.connect('mongodb+srv://Jesse:jesse1489@cluster0.w79m8.mongodb.net/todo_db?retryWrites=true&w=majority')
    .then(function(){
        console.log("DataBase is Connected");
    })
    .catch(function(error){
        console.log("DataBase is not Connected",error.message);
    });
});

