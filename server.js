var express = require("express");
var bodyParser = require("body-parser");

server = express();
var fs = require("fs");

server.use(express.static("coffee"));//web root
//server.use(express.static("md110"));//web root
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());


server.get("/service", function(req, res){

    Services = [
        { icon: "fa-shopping-cart", title: "E-Commerce", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur porro laborum fuga repellat necessitatibus corporis nulla, in ex velit recusandae obcaecati maiores, doloremque quisquam similique, tempora aspernatur eligendi delectus! Rem." },
        { icon: "fa-laptop", title: "Responsive Design", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime qua architecto quo inventore harum ex magni, dicta impedit." },
        { icon: "fa-lock", title: "Web Security", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit." }
    ]
    res.send(Services);
})

server.get("/portfolio", function(req, res){
    
    PortfolioDB.find({}).then(results => {
        if(results !=null){
            res.send(results);
        }else{
            res.send("Error!")
        }
    }) 
    
})



server.get("/contact", function(req, res){
    //res.send("");
    res.redirect("/index.html");
});
 
server.post("/contact", function(req, res){
    console.log(req.body);
    ContactDB.insert(req.body);
    res.send("/index.html");
    //res.redirect("/index.html");
})


server.listen(8000, function(){
    console.log("Server is running at port 8000!")
})