const express=require("express");
const books=express.Router();
const bookdata=require("../model/bookdata");
const authorsdata = require("../model/authorsdata");
function routs(nav){
    books.get("/",function(req,res){
        bookdata.find()
        .then(function(book){
            res.render("books",{
                nav,
                title:"Books",
                book
            })
        })
        
    })

    books.get('/:i',function(req,res){
        var i=req.params.i;
        bookdata.findOne({_id:i})
        .then(function(bk){
            res.render('book',{
                nav,
                title:"book",
                bk
            })
        })
    })

    books.post('/del',function(req,res){
        var id=req.body.id;
        bookdata.deleteOne({_id:id})
         // bookdata.find()
        .then(function(book){
            res.render("books",{
                nav,
                title:"Books",
                book
            })
            // res.redirect('books');
        })
    })

    books.post('/edit',function(req,res){
        var id=req.body.id;
        bookdata.findOne({_id:id})
        .then(function(bk){
            res.render('edit',{
                nav,
                title:"edit book",
                bk
            })
        })
    })


    books.post('/edited',(req,res)=>{
        var id=req.body.id;
        
        var item={
           title: req.body.title,
           author: req.body.author,
           genre: req.body.genre,
           image: req.body.image
        };
        // var book=bookdata(item);
        var update=bookdata.findByIdAndUpdate(req.body.id,item);
        update.exec(function(err,data){
            if(err) throw err;
            res.redirect('/books');
        })
    });
   
    return books;
}
module.exports=routs;