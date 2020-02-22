module.exports = (app)=>{
    const addCourse = require('../controllers/addCourse.controller');
    
     app.post('/admin/addCourse',  addCourse.createCourse);
     //Getting ALl courses 
     app.get('/admin/addCourse',  addCourse.findAll);
     //Deleting 
     app.delete('/admin/:courseId', addCourse.delete);
}