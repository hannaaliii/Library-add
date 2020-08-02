const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/library');
const schema=mongoose.Schema;
const schema1=mongoose.Schema;


const up=new schema({
    name:String,
    age:String,
    gender:String,
    authority:String,
    email:String,
    phone:String,
    password:String
});

const sin=new schema1({
    semail:String,
    spassword:String
});


var updata=mongoose.model('signupdata',up);
var indata=mongoose.model('signindata',sin);


module.exports=updata;
module.exports=indata;