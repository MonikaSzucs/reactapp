const express=require("express");
var app=express();
const port=15000;
const path=require("path");

var greetings=[
    "hola",
    "hey dudes",
    "Nihaoma",
    "Salam Refighi",
    "Ahlan Va sahlan",
    "Priviet"
]

var usernames = [
    
]
var passwords = [
    
]

// this will be displayed or called on when you fetch it from your App.js function (speakServer)
app.get("/greeting", function(req, resp){
    // randomize the index and set it to your greetings array, then send it in the response
    var index=Math.random()*(greetings.length-1);
    index=Math.round(index);
    resp.end(greetings[index]);
});
//this where we receive the greeting and push it into our array
app.get("/addG/:greet", (req, resp)=>{
    var greet=req.params.greet;
    greetings.push(greet);
    resp.end("a new greeting added");
});

// for username
app.get("/username", function(req, resp){
    resp.end(usernames[0]);
});
app.get("/addUser/:user", (req, resp)=>{
    var user=req.params.user;
    usernames.push(user);
    resp.end("user added");
});

// for password
app.get("/password", function(req, resp){
    resp.end(passwords[0]);
});
app.get("/addPW/:pw", (req, resp)=>{
    var pw=req.params.pw;
    passwords.push(pw);
    resp.end("pw added");
});

app.listen(port, function(err){
    if(err){
        console.log("hey something is wrong");
        return false;
    }
    else{
        console.log("all good go ahead the gate is open");
    }
});

// from original code (assignment 2)
var pFolder=path.resolve(__dirname,"public");

app.use("/image", express.static("image"));

app.use("/crazyjs",express.static("js"));

app.get("/",function(req,resp){
    //resp.end("Welcome to our amazing app"); 
    resp.sendFile(pFolder+"/index.html");
});

app.get("/calculation",function(req,res, html){
    //resp.end("Welcome to our amazing app"); 
    res.sendFile(path.join(__dirname+"/public/calculation.html"));
});
