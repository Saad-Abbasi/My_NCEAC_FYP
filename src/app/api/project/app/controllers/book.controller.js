const Book = require('../models/book.model');

// Create and Save a new Book
exports.createbook = (req, res) => {
    if(!req.body.b_id) {
        return res.status(400).send({
            message: "Book id can not  Empty"
        });
    }

    // Create a Book
    const book = new Book({
        b_id:req.body.b_id,
        b_name:req.body.b_name,
        b_author:req.body.b_author,
        b_sec:req.body.b_sec,
        b_rec:req.body.b_rec,
    });

    // Save Book in the database
    book.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating new book."
        });
    });
    
   

};
exports.findAll=(req,res)=>{
    Book.find()
    .then(result =>{
        res.send(result);
    }).catch(err =>{
        res.status(500).send({
            message:err.message||"Some Error occured while getting the Books"
        })
    })
};
// Delete a Book with the specified BookId in the request
exports.delete = (req, res) => {
    Book.findByIdAndRemove(req.params.b_Id)
    .then(book => {
        if(!book) {
            return res.status(404).send({
                message: "Book not found with id " + req.params.b_Id
            });
        }
        res.send({message: "Book deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Book not found with id " + req.params.b_Id
            });                
        }
        return res.status(500).send({
            message: "Could not delete Book with id " + req.params.b_Id
        });
    });

};