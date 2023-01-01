const express=require ("express");
const app=express();
app.get('/',function(req,res){
    res.send("hello")
    })
    app.listen(4000,function(req,res){
        console.log("this is poem")
    })
