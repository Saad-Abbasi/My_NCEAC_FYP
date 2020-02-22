module.exports = (app) => {
    const topic = require('../controllers/topic.controller.js');

    // Create a new Note
    app.post('/teacher/:courseId/topic', topic.create);

     // Retrieve all Notes
    app.get('/teacher/:courseId/topic', topic.findAll);
    //
    app.get('/course/:topicId', topic.findOne);

    }
    
    

   

//     // Retrieve a single topics with teacher id
//     app.get('/teacher/:teacherId/topic', notes.findOne);

//     // Update a Note with noteId
//     app.put('/notes/:noteId', notes.update);

//     // Delete a Note with noteId
//     app.delete('/notes/:noteId', notes.delete);
// 
