const mongoose = require('mongoose');
const CourseSchema = mongoose.Schema({
        degprog:String,
        session:String,
        semester:String,
        c_code:String,
        c_title:String,
        c_hours:String,
        c_goals:String,
        c_pre:String,
        m_quiz:Number,
        m_assign:Number,
        m_lab:Number,
        m_mid:Number,
        m_final:Number,
        m_total:Number,
        c_coordinator:String,
        c_url:String,
        c_catelog:String,
        c_tbook:String,
        c_reference:String,
        topic_covered:[{
            type: mongoose.Schema.Types.ObjectId,
             ref:"topic"
        }],
        
        teacher:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"teacher"
            
        }
});
module.exports = mongoose.model('course', CourseSchema);