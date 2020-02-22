module.exports = (app)=>{
const course = require('../controllers/course.controller');

 app.post('/teacher/:teacherId/course',  course.create);

//  // Retrieve all courses attached to particular teacher
 app.get('/teacher/:teacherId/course', course.findAll);

//  // Retrieve a single course attached to teacher 
  app.get('/teacher/course/:courseId', course.findOne);

//  // Update a Course with CourseId
 app.put('/teacher/:teacherId/course/:courseId', course.update);

//  // Delete a Course with noteId
  app.delete('/teacher/:teacherId/course/:courseId', course.delete);

}