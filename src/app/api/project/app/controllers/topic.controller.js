const Topic = require('../models/topic.model.js');
const Course = require('../models/course.model')
const mongoose = require('mongoose');

// Create and Save a new topic
exports.create = async (req, res) => {
    // if (!req.body.duration) {
    //     return res.status(400).send({
    //         message: " content can not be empty"
    //     });
    // }
    const course = await Course.findOne({ _id: req.params.courseId });
    // Create a topic
    console.log(req.body);
    const topic =  new Topic({
        _id:mongoose.Types.ObjectId(),
        date: req.body.date,
        day: req.body.day,
        week: req.body.week,
        dur: req.body.duration,
        instr: req.body.instrumentUsed,
        t_cover: req.body.topicCovered,
        course:req.body.courseId
    });

    // Save Topic in the database
    await topic.save();
    await course.topic_covered.push(topic._id);
    await course.save().then(result=>{
        res.send(result);
    }).catch(err=>{
        res.status(500).send({
            message:err.message|| "some error in storing topics"
        })
    })
   
          

};
exports.findAll = (req, res) => {

    Topic.find()
    .then(topic => {
        res.send(topic)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Topics."
        });
    });
};
exports.findOne = (req, res) => {
    Topic.findById(req.params.topicId)
    .then(topic => {
        if(!topic) {
            return res.status(404).send({
                message: "Topic not found with id " + req.params.topicId
            });            
        }
        res.send(topic);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message:"Topic not found with id " + req.params.topicId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Topic with id " + req.params.topicId
        });
    });

};
