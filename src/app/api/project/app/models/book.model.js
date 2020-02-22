const mongoose = require('mongoose');
const bookScheema = mongoose.Schema({
    
    b_id:{type:String,unique:true},
    b_name:String,
    b_author:String,
    b_rec:String,
    b_sec:String

});

module.exports = mongoose.model('book',bookScheema);

