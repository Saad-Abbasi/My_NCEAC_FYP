const mongoose = require('mongoose');

// const Courses = mongoose.Schema({
//         c_code:String,
//         c_title:String,
//         c_hours:String,
//         c_goals:String,
//         m_quiz:Number,
//         m_assign:Number,
//         m_lab:Number,
//         m_mid:Number,
//         m_final:Number,
//         m_total:Number,
//         c_coprdinator:String,
//         c_url:String,
//         c_catelog:String,
//         c_tbook:String,
//         c_reference:String,
//         c_goals:String,
// });
// const Topic = mongoose.Schema({
//              date:Date,
//             day:String,
//             weeek:Number,
//             dur:String,
//             instr:String,
//             t_cover:String

// })
const TeacherSchema = mongoose.Schema({
    t_id:Number,
    t_name:String,
    t_desig: String,
    t_dob:Date,
    t_email:String,
    t_pswd:String,
    t_gender:String,
    t_phone:Number,
    t_quali:String,
    t_p_img:String,
    t_address: String,
    courses:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"course",
            
        }
 ] 
    // topic_covered:[{
    //     type: mongoose.Schema.Types.ObjectId,
    //      ref:"topic"
    // }]
});

module.exports = mongoose.model('teacher', TeacherSchema);