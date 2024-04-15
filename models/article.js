'use strict'

 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var ArticleSchema = Schema({
    title: String,
    content: String,
    //date:{ Type: Date, default: Date.now},
    date:{ Type: Date},
    image: String
 });

 module.exports = mongoose.model('Article', ArticleSchema);