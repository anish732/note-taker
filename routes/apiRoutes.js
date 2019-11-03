
var express =require('express');
var router = require('express').Router();
var connection = require('../db/connection');

var note = [""];
var title =[""];


// https://expressjs.com/en/guide/routing.html

// GET responds with all notes from the database
router.get("/allnotesdata", function(req, res) {
  // TODO: Create connection query to retrieve all notes from MySQL database
  connection.query("SELECT * FROM notes",function(err,notes){
    console.log(notes)
    res.json(notes);
  });

});

// POST uses data passed on req.body to create a new note in the database
router.post('/note', function(req, res) {
  // TODO: Create connection query to insert a new note into MySQL database
  var query = "INSERT INTO notes (title, body) VALUE ('"  + req.body.title + " ',' " + req.body.note + "')" 
  console.log("Insert query", query);
  connection.query(query,function(err,result){
    console.log(result);
    res.json(result);
  })

});

// DELETE deletes the note with an id equal to req.params.id
router.delete('/note/:id', function(req, res) {
  // TODO: Create connection query to delete a note from MySQL database by the provided `id` parameter
  connection.query("DELETE FROM notes WHERE id = ?",[req.params.id],function(err,result){
    if(err) throw error;
    res.status(200).end();
  })

});

module.exports = router;
