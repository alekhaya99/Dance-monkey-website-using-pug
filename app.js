const express=require("express");
const path=require("path");
const fs = require("fs");
const app=express();
const port=8000;

//EXPRESS

app.use('./static',express.static('static'));
app.use(express.urlencoded());
app.use('/static', express.static('static'));

//PUG
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.get("/",(req,res)=>{
    
    const parameters= {};
    res.status(200).render('home.pug',parameters)
});
app.get("/contact",(req,res)=>{
    
    const parameters= {};
    res.status(200).render('contact.pug',parameters)
});

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})