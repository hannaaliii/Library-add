const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');

const schema=mongoose.Schema;
const authorschema=new schema({
    name:String,
    about:String,
    image:String
});

var authorsdata=mongoose.model('author',authorschema);
module.exports=authorsdata;

