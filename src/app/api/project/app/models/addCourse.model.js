const mongoose = require('mongoose');
const addCourseScheema = mongoose.Schema({
    courseCode:{type:String,unique:true,required: true },
    courseTitle:String,
    lecCdtHrs:Number,
    labCdtHrs:Number,
    //creditHours:Number,

});

module.exports = mongoose.model('addCourse',addCourseScheema);

