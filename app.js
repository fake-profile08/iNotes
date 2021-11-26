const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 80;
const pug = require('pug');
const path = require('path');
mongoose.connect('mongodb://localhost:27017/iNotes');

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));
app.use('/static',express.static('static'));

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
    res.render('index',params)
});

app.get('/contact',(req,res) => {
    const params = {
        title:"Contact Us"
    };
    res.status = 200;
    res.render('contact',params)
});

app.get('/about',(req,res) => {
    const params = {
        title:"About Us"
    };
    res.status(200).render('about',params);
})

app.listen(port,() => {
    console.log("Server is online");
})