        
const Teacher = require('../models/teacher.model');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const saltRound = 10;
// const multer = require('multer');



// var storage =   multer.diskStorage({
//     destination: function (req, file, callback) {
//       callback(null, './uploads');
//     },
//     filename: function (req, file, callback) {
//       callback(null,  file.originalname);
//     }
//   });



//   //filter
//   const fileFilter = (req,file,cb)=>{
//     if(file.mimetype==='image/jpeg'||file.mimetype==='image/jpg'){
//         cb(null,true);
//     }else{

//         cb(null,false);
//     }

// }
// const upload = multer({storage:storage,
//     limits:{
//     fileSize:1024*1024*5
//     },
//     fileFilter:fileFilter
// }).single('t_p_image');



// Create and Save a new Teacher
exports.create = (req, res) => {
   if(!req.body.t_email) {
        return res.status(400).send({
            message: "Email cannot Empty"
        });
    }

    // Create a Teacher
    
    const teacher = new Teacher({
    _id:mongoose.Types.ObjectId(),
        t_id:req.body.t_id,
        t_name:req.body.t_name,
        t_desig: req.body.t_desig,
        t_dob:req.body.t_dob,
        t_email:req.body.t_email,
        t_pswd:req.body.t_pswd,
        t_phone:req.body.t_phone,
        t_quali:req.body.t_quali,
        t_gender:req.body.t_gender,
        t_address: req.body.t_address
        //   c_code :req.body.courseCode,
        //   t_courses:[{
        //     c_title:req.body.courseTitle,
        //     c_hours:req.body.creditHours,
        //     m_quiz:req.body.quiz,
        //     m_assign:req.body.assignment,
        //     m_lab:req.body.lab,
        //     m_mid:req.body.mid,
        //     m_final:req.body.final,
        //     m_total:req.body.total,
        //     c_coprdinator:req.body.courseCoordinator,
        //     c_url:req.body.url,
        //     c_catelog:req.body.courseCatelog,
        //     c_tbook:req.body.textbook,
        //     c_reference:req.body.reference,
        //     c_goals:req.body.goals,


        //   }],
           
           
        //     topic_covered:[
        //                 [{
        //                 date:req.body.date,
        //                 day:req.body.day,
        //                 weeek:req.body.week,
        //                 dur:req.body.duration,
        //                 instr:req.body.istruments,
        //                 t_cover:req.body.topic_covered
        //                 }]
        //                  ] 
        
    });
    //Img
    if(req.file !== undefined){
        teacher.t_p_img = req.protocol+'://'+ req.get('Host')+'/'+req.file.originalname;
    }
    
    // Save Teacher in the database
    teacher.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the New Teacher."
        });
    });

};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {

    Teacher.find().populate('courses')
    .then(teacher => {
        res.send(teacher);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Teacher."
        });
    });
};


// Find a single note with a teacherID
exports.findOne = (req, res) => {
    Teacher.findById(req.params.teacherId).populate('courses').populate('topic_covered')
    .then(teacher => {
        if(!teacher) {
            return res.status(404).send({
                message: "Teacher not found with id " + req.params.teacherId
            });            
        }
        res.send(teacher);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Teach not found with id " + req.params.teacherId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.teacherId
        });
    });

};



// Update a Teacher identified by the teacherId in the request
exports.update = (req, res) => {
    if(!req.body.t_email) {
        return res.status(400).send({
            message: "Teacher  id can not be empty"
        });
    }

    // Find Teacher and update it with the request body
    Teacher.findByIdAndUpdate(req.params.teacherId, {
        
        t_id:req.body.t_id,
        t_name:req.body.t_name,
        t_desig: req.body.t_desig,
        t_dob:req.body.t_dob,
        t_email:req.body.t_email,
        t_pswd:req.body.t_pswd,
        t_phone:req.body.t_phone,
        t_quali:req.body.t_quali,
        t_gender:req.body.t_gender,
        // t_p_img: req.protocol+'://'+ req.get('Host')+'/'+req.body.file.originalname,
        t_address: req.body.t_address
        
      }, {new: true})
    .then(teacher => {
        if(!teacher) {
            return res.status(404).send({
                message: "Teacher not found with id " + req.params._id
            });
        }
        res.send(teacher);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Teacher not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Error updating teacher with id " + req.params._id
        });
    });

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Teacher.findByIdAndRemove(req.params.teacherId)
    .then(teacher => {
        if(!teacher) {
            return res.status(404).send({
                message: "Teacher not found with id " + req.params.teacherId
            });
        }
        res.send({message: "Teacher deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Teacher not found with id " + req.params.teacherId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Teacher with id " + req.params.teacherId
        });
    });
    };

    //Login here
    exports.findUser = (req, res) => {

      var t_email = req.body.t_email;
      var  t_pswd = req.body.t_pswd;
      var data;
      if(t_email.length > 0 && t_pswd.length > 0) {
        data = {
            t_email: t_email,
            t_pswd: t_pswd
        };
    } else {
        res.json({
            status: 0,
            message: err
        });
    }
    Teacher.findOne(data)
    .then(teacher => {
        if(!teacher) {
            return res.status(404).send({
                message: "Teacher not found with id " + req.params.id
            });            
        }
        res.send(teacher);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Teach not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.id
        });
    });
}