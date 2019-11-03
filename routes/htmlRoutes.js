var path = require('path');
var express =require('express');
var router = require('express').Router();
var app =express();
router.get("/",function(req, res) {
  console.log("home page")
 res.sendFile(path.join(__dirname,"../public/index.html"));
})
router.get("/allnotes",function(req, res) {
  console.log("all notes")
  res.sendFile(path.join(__dirname, "../public/notes.html"));
})



module.exports = router;
