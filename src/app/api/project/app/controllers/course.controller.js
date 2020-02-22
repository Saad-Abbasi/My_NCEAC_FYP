
const Teacher = require('../models/teacher.model.js');
const Course = require('../models/course.model');
const mongoose = require('mongoose');
// Create and Save a new Course


exports.create = async (req, res) => {
    if (!req.body.courseCode) {
        return res.status(400).send({
            message: "Note Course Code can not be empty"
        });
    }
    //searching for a teacher to add course
    console.log(req.body);
    const teacher = await Teacher.findOne({ _id: req.params.teacherId });
    // Create a Course
    const course = new Course();
    course._id = mongoose.Types.ObjectId(),
     course.degprog = req.body. degreeProgram;
     course.session = req.body.session;
    course.semester = req.body.semester;
     course.c_code = req.body.courseCode;
    course.c_title = req.body.courseTitle;
    course.c_hours = req.body.creditHours;
    course.m_quiz = req.body.quiz;
    course.m_assign = req.body.assignment;
    course.c_coordinator = req.body.courseCoordinator;
    course.c_url = req.body.url;
     course.c_catelog = req.body.currentCatelogDescription;
    course.c_tbook = req.body.textBook;
    course.c_reference = req.body.referenceMaterial;
    course.c_goals = req.body.courseGoals;
    course.teacher = req.body.teacherId;
    course.c_pre = req.body.pre;
     course.m_lab = req.body.lab;
    course.m_mid = req.body.midTerm;
    course.m_final = req.body.finalTerm;
     course.m_total = req.body.totalMarks;
  
    //save course in dataBase and attach to particular teacher 
    await course.save();
    await teacher.courses.push(course._id);
    await teacher.save();
    res.send(course);

};
// Showing All Courses in Data Base 


exports.findAll = (req, res) => {

    Course.find()
        .then(courses => {
            res.json(courses);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Courses."
            });
        });
};


// Shoiwing On Course with   Courses Id
exports.findOne = (req, res) => {
    Course.findById(req.params.courseId).populate('topic_covered')
        .then(course => {
            if (!course) {
                return res.status(404).send({
                    message: "Course  not found with id " + req.params.courseId
                });
            }
            res.send(course);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Course not found with id " + req.params.courseId
                });
            }
            return res.status(500).send({
                message: "Error retrieving Course with id " + req.params.courseId
            });
        });

};

// Updating a Single Course with Course id 
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Course content can not be empty"
        });
    }

    // Find note and update it with the request body
    Course.findByIdAndUpdate(req.params.courseId, {
        c_title: req.body.courseTitle,
        c_hours: req.body.creditHours,
        m_quiz: req.body.quiz,
        m_assign: req.body.assignment,
        m_lab: req.body.lab,
        m_mid: req.body.mid,
        m_final: req.body.final,
        m_final: req.body.final,
        m_final: req.body.final,
        m_final: req.body.final,
        m_final: req.body.final,
        m_total: req.body.total,
        m_total: req.body.total,
        m_total: req.body.total,
        m_total: req.body.total,
        m_total: req.body.total,
        c_coprdinator: req.body.courseCoordinator,
        c_url: req.body.url,
        c_catelog: req.body.courseCatelog,
        c_tbook: req.body.textbook,
        c_reference: req.body.reference,
        c_goals: req.body.goals

    }, { new: true })
        .then(course => {
            if (!course) {
                return res.status(404).send({
                    message: "Course not found with id " + req.params.courseId
                });
            }
            res.send(course);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Course not found with id " + req.params.courseId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.courseId
            });
        });

};
// Deleting a particular course according to provided ID

exports.delete = (req, res) => {
    Course.findByIdAndRemove(req.params.courseId)
        .then(course => {
            if (!course) {
                return res.status(404).send({
                    message: "Course not found with id " + req.params.courseId
                });
            }
            res.send({ message: "Course deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Course not found with id " + req.params.courseId
                });
            }
            return res.status(500).send({
                message: "Could not delete course with id " + req.params.courseId
            });
        });

};