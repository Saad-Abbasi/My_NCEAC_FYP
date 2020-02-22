const addCourse = require('../models/addCourse.model');

// Create and Save a new Note
exports.createCourse = (req, res) => {
    if(!req.body.courseCode) {
        return res.status(400).send({
            message: "CourseCode can not be empty"
        });
    }

    // Create a Note
    const addcourse = new addCourse({
        courseCode:req.body.courseCode,
        courseTitle:req.body.courseTitle,
        lecCdtHrs:req.body.lecCdtHrs,
        labCdtHrs:req.body.labCdtHrs,
        //creditHours:req.body.creditHours,
    });

    // Save Note in the database
    addcourse.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Course."
        });
    });
    
   

};
exports.findAll=(req,res)=>{
    addCourse.find()
    .then(result =>{
        res.send(result);
    }).catch(err =>{
        res.status(500).send({
            message:err.message||"Some Error occured while getting the courses"
        })
    })
};
// Delete a course with the specified CourseId in the request
exports.delete = (req, res) => {
    addCourse.findByIdAndRemove(req.params.courseId)
    .then(course => {
        if(!course) {
            return res.status(404).send({
                message: "Course not found with id " + req.params.courseId
            });
        }
        res.send({message: "Course deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "coure not found with id " + req.params.courseId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Course with id " + req.params.courseId
        });
    });

};