//accessing mongoose package
const mongoose=require("mongoose");

//connecting with db
mongoose.connect('mongodb://localhost:27017/library');
 

//schema definition
const schema=mongoose.Schema;
const bookschema=new schema({
    title:String,
    author:String,
    genre:String,
    image:String
});


//model creation and exporting
var bookdata=mongoose.model('bookdata',bookschema);

module.exports=bookdata;