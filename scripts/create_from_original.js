// GET the original script by some id
// change the title to something else
// insert that thing in the database as a new document

var models = require('../models/subtitle');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/subtitles');
