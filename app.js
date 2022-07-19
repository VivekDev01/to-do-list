const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

app.use(express.static("public"));

const  items=["Buy Food","Cook food","Eat food"];
const workItems=[];

app.get("/", function (req, res) {
    // First Method
    // var currentDay = today.getDay();
    // var day = funDay(currentDay); // this is the way to define the string
    const day=date();
    res.render("list", { ListTitle: day , listofItems: items });
});

app.post("/",function(req,res){
    const newItem=req.body.toDoItem;
    if(req.body.list==="Work")
    {
        workItems.push(newItem);
        res.redirect("/work");
    }
    else{
        items.push(newItem);
        res.redirect("/");
    }
});

app.get("/work",function(req,res){
    res.render("list", {ListTitle:"Work",listofItems: workItems});
});

app.get("/about",function(req,res){
    res.render("about");
});

app.listen(3000, function () {
    console.log("server is running on port 3000");
});

// function funDay(x) {
//     switch (x) {
//         case 0:
//             return "Sunday";
//             break;
//         case 1:
//             return "Monday";
//             break;
//         case 2:
//             return "Tuesday";
//             break;
//         case 3:
//             return "Wednesday";
//             break;
//         case 4:
//             return "Thursday";
//             break;
//         case 5:
//             return "Friday";
//             break;
//         case 6:
//             return "Saturday";
//             break;    

//         default:
//             return "Whatever today's day is, just go and work";
//             break;
//     }
// }