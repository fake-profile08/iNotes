const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/iNotes');

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

function getNotes() {
    var result;
    note.find({},function(err, obj){
        if(err) return console.error(err);
    });
    console.log(result);
    return result;
}

let obj = {
    addNote,
    getNotes
};

module.exports = obj;