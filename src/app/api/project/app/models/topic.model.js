const mongoose = require('mongoose');
const TopicSchema = mongoose.Schema({
   date:Date,
   day:String,
   week:Number,
   dur:String,
   instr:String,
   t_cover:String,
   course:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"course"
   }

});
module.exports = mongoose.model('topic', TopicSchema);