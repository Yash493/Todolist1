const express=require("express");
const bodyparser=require("body-parser");
const date=require(__dirname + "/date.js");


const app=express();
app.set('view engine','ejs');

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));


let items=["Programming"];
let workItem=["work"];
app.get("/",function(req,res){
  let day= date.getdate();
res.render("index", { indexTitle:day ,newListItems: items});

});





app.post("/", function(request ,response){
  let item =request.body.item;
  if(request.body.list==="work"){
    workItem.push(item);
    response.redirect("/work");
  }
else{
  items.push(item);
  response.redirect("/");
}


//  response.send(item);
//req.render("index",{newListItem:item});

})
app.get("/work" ,function(req,res){
  res.render("index", {indexTitle:"work List", newListItems:workItem});
});

app.get("/about", function(req,res){
  res.render("about");
});
/*
app.post("/work" ,function(req,res){
  let item=req.body.item;
  workItem.push(item);
  res.redirect("/work");
});*/
/*
if(currentDay==4 || currentDay==5){

  day="weekend";
  res.render("index", {kindOfDay:day});

}
else{
  /* res.write("<h1>Noo its a week day</h1>");
  res.write("<p>is a working day hahahahahahah</p>");
  res.send(); */
/*  day="weekday";
    res.render("index", {kindOfDay:day});
}*/
/*
switch(currentDay){
   case 0:
   day="Sunday";
   break;

   case 1:
   day="monday";
   break;

   case 2:
   day="tuesday";
   break;

   case 3:
   day="wednesday";
   break;

   case 4:
   day="thruday";
   break;

   case 5:
   day="friday h peenchho";
   break;

   case 6:
   day="saturday";
   break;


}*/
//res.render("index",{kindOfDay:day});


app.listen(3000,function(){
  console.log("server started at port no 3000");
})
