const express=require("express");
const add=express.Router();
const bookdata=require('../model/bookdata');

function routs(nav){
    add.get('/',(req,res)=>{
        res.render("addbooks",{
            nav,
            title:"Add Books"
        })
    });

    add.post('/added',(req,res)=>{
        var item={
           title: req.body.title,
           author: req.body.author,
           genre: req.body.genre,
           image: req.body.image
        };
        var book=bookdata(item);
        book.save();
        bookdata.find()
        .then(function(book){
            res.render("books",{
                nav,
                title:"Books",
                book
            })
        })
        // res.send("added"+req.body.title);
    });

    return add;
}
module.exports=routs;