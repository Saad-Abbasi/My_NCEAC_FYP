module.exports = (app)=>{
    const book = require('../controllers/book.controller');
    
     app.post('/admin/book',  book.createbook);
     //Getting ALl courses 
     app.get('/admin/book',  book.findAll);
     //Deleting 
     app.delete('/admin/:bookId', book.delete);
}