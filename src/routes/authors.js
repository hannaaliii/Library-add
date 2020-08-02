const express=require("express");
const authors=express.Router();
const authorsdata=require('../model/authorsdata');

function routs(nav){
   
    authors.get('/',function(req,res){
        authorsdata.find()
        .then(function(athr){
            res.render("authors",{
                nav,
                title:"Authors",
                athr
            })
        })
        
    });

    authors.get('/:i',function(req,res){
        var i=req.params.i;
        authorsdata.findOne({_id:i})
        .then(function(athr){
            res.render('author',{
                nav,
                title:"Author",
                athr
            })
        })
    })

    authors.get('/add',function(req,res){
        res.render('addauthor',{
            nav,
            title:"Add author"
        })
    })

    authors.post('/added',function(req,res){
        var name=req.body.name;
        var about=req.body.about;
        var item={
             name :req.body.name,
             about:req.body.about,
             image:req.body.image
        }
        var author=authorsdata(item);
        author.save();
        authorsdata.find()
            .then(function(athr){
                res.render("authors",{
                    nav,
                    title:"Authors",
                    athr
                })
            })
        // res.send(name+about);
    })

    authors.post('/del',function(req,res){
        var id=req.body.id;
        authorsdata.deleteOne({_id:id})
        .then(function(athr){   
        })
        authorsdata.find()
        .then(function(athr){
            res.render("authors",{
                nav,
                title:"Authors",
                athr
            })
        })
        // res.send("hi")
    })

    authors.post('/edit',function(req,res){
        var id=req.body.id;
        authorsdata.findOne({_id:id})
        .then(function(athr){
            res.render('authoredit',{
                nav,
                title:"Edit Author",
                athr
            })
        })
    })

    authors.post('/edited',function(req,res){
        var item={
            name :req.body.name,
            about:req.body.about,
            image:req.body.image
       }
       var update=authorsdata.findByIdAndUpdate(req.body.id,item);
        update.exec(function(err,data){
            if(err) throw err;
            authorsdata.find()
            .then(function(athr){
                res.render("authors",{
                    nav,
                    title:"Authors",
                    athr
                })
            })
        })
    })
    return authors;
}
module.exports=routs;