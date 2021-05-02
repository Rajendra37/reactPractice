const express = require('express');
const router = new express.Router();
const BookData = require('../bookModules/bookSchema')
var cors = require('cors')





router.post('/books',async (req,res) => {
    try {
        let book = new BookData(req.body)
        let bdata = await book.save();
        res.send(bdata);
    }
    catch (e) {
        res.send(e)
    }
})

router.get('/books', async (req,res) => {
    try {
        let getBookdata = await BookData.find()
        res.send(getBookdata);
    }
    catch (e) {
        res.send(e)
    }
})

router.delete('/books/:id', async(req,res) => { 

    try{
            let deleteBook=await BookData.findByIdAndDelete(req.params.id)
            if(!req.params.id)
            {
                return res.status(400).send()
            }
            res.send(deleteBook)
        }
        catch(e)
        {
            res.send(e);
        }
})

module.exports=router;