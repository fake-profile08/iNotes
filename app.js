const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 80;
const pug = require('pug');
const path = require('path');
const functions = require('./functions');
mongoose.connect('mongodb://localhost:27017/iNotes');

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));
app.use('/static',express.static('static'));
app.use(express.urlencoded());

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to database");
});

app.get('/',(req,res) => {
    const params = {
        title:"Home"
    };
    res.status = 200;
    res.render('index',params);
});

app.post('/',(req,res) => {
    const params = {

    };
    functions.addNote(req.body);
    res.status(200);
    res.send("Saved");
});

app.get('/contact',(req,res) => {
    const params = {
        title:"Contact Us"
    };
    res.status = 200;
    res.render('contact',params)
});

app.get('/view',(req,res) => {
    const params = {
        title:"View Notes",
        notes:functions.getNotes()
    };
    console.log(functions.getNotes());
    res.status(200).render('view',params);
})

app.listen(port,() => {
    console.log("Server is online");
})

console.log(functions.getNotes());