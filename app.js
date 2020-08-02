const express=require("express");
const app=new express;
const nav=[{link:"/",title:"HOME"},{link:"/books",title:"Books"},{link:"/authors",title:"Author"},{link:"/add",title:"Add Books"},{link:"/signup",title:"Signup"},{link:"/signin",title:"Signin"}];
const books=require("./src/routes/books")(nav);
const signin=require("./src/routes/signin")(nav);
const signup=require("./src/routes/signup")(nav);
const authors=require("./src/routes/authors")(nav);
const add=require("./src/routes/add")(nav);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use(express.urlencoded({extended:true}));
app.use('/signin',signin);
app.use('/books',books);
app.use('/signup',signup);
app.use('/authors',authors);
app.use('/add',add);

app.get("/",(req,res)=>{
    res.render("index",{
        nav,
        title:"Library"
    });
});
app.listen(5000,function(){
    console.log("Port is good");
});