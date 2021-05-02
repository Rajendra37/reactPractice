const mongoose = require('mongoose');
const validator = require('validator');
const bookSchema=new mongoose.Schema({

        bookTitle:{
            type:String,
            require:true,
            minlength:6
        },
        bookAuthor:{
            type:String,
            require:true,
            minlength:6
        },
        bookRating:{
            type:Number,
            require: true,
        },
        bookPrice:{
            type:Number,
            require: true,
        },
        bookCover:{
            type:String,
            require:true
        },
        bookDescription:{
            type:String,
            require:true
        }
})

const BookDetailData=new mongoose.model('BookDetailData',bookSchema)

module.exports= BookDetailData;