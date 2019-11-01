var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;
var connection = require("./connection.js");
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var note = [""];
var title =[""];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/note", function(req, res) {
  res.sendFile(path.join(__dirname, "note.html"));
});

app.post("/note", function(req, res) {
  var query = "INSERT INTO notes (title, body) VALUE ('"  + req.body.title + " ',' " + req.body.note + "')" 
  console.log("Insert query", query);
  connection.query(query,function(err,result){
    console.log(result);
    res.json(result);
    console.log(err);
  })
});
app.get("/allnotes",function(req,res){
  connection.query("SELECT * FROM notes",function(err,notes){
    res.json(notes);
  });
})

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  
  