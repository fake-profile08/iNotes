const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/iNotes');
var result;


var noteSchema = new mongoose.Schema({
    title:String,
    description:String,
});

const note = mongoose.model('note',noteSchema);

function addNote(body){
    let obj = new note({
        title:body.title,
        description:body.description
    });
    obj.save(function(err, result){
        if(err) return console.error(err);

    });
}

function storeNotes() {
    note.find({},function(err, obj){
        if(err) return console.error(err);
        result = obj;
        console.log("obj = "+obj);
    });
    console.log(result);
}

function getNotes(){
    return result;
}

let obj = {
    addNote,
    getNotes,
    storeNotes,
};

module.exports = obj;