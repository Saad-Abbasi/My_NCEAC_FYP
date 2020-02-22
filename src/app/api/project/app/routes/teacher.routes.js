module.exports = (app) => {
    const teachers = require('../controllers/teacher.controller.js');
    const multer = require('multer');



var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './uploads');
    },
    filename: function (req, file, callback) {
      callback(null,  file.originalname);
    }
  });



//   //filter
  const fileFilter = (req,file,cb)=>{
    if(file.mimetype==='image/jpeg'||file.mimetype==='image/jpg'||file.mimetype==='image/png'){
        cb(null,true);
    }else{

        cb(null,false);
    }

}
const upload = multer({storage:storage,
    limits:{
    fileSize:1024*1024*5
    },
    fileFilter:fileFilter
});
    // Create a new Blog
    app.post('/teacher',upload.single('file'), teachers.create);

    // Retrieve all tachers
    app.get('/teacher', teachers.findAll);

    // Retrieve a single teacher with teacher id 
    app.get('/teacher/:teacherId', teachers.findOne);

    // Update a teacher with teacherId
    app.put('/teacher/:teacherId', teachers.update);

    // Delete a Note with noteId
    app.delete('/teacher/:teacherId', teachers.delete);
    // Login 
    app.post('/teacher/login', teachers.findUser);
    
    //daily records
//     app.post('/teacher/daily', teachers.create);

//     // Retrieve all tachers
//     app.get('/teacher/daily', teachers.findAll);

//     // Retrieve a single teacher with teacher id 
//     app.get('/teacher//daily:teacherId', teachers.findOne);

//     // Update a teacher with teacherId
//     app.put('/teacher/daily/:teacherId', teachers.update);

//     // Delete a Note with noteId
//     app.delete('/teacher/daily/:teacherId', teachers.delete);


//     //
//     async function getTeacher(req, res, next) {
//         try {
//           teacher = await Teacher.findById(req.body._id)
//           if (teacher == null) {
//             return res.status(404).json({ message: 'Cant find teacher'})
//           }
//         } catch(err){
//           return res.status(500).json({ message: err.message })
//         }
      
//         res.teacher = teacher
//         next()
//       }
    
//     //
//     app.patch('/teacher/:teacherId', getTeacher, async (req, res) => {
//         if (req.body.name != null) {
//           res.teacher.t_name = req.body.name
//         }
      
//         // if (req.body.subscribedChannel != null) {
//         //   res.subscriber.subscribedChannel = req.body.subscribedChannel
//         // }
//         try {
//           const updatedTeacher = await res.teacher.save()
//           res.json(updatedTeacher)
//         } catch {
//           res.status(400).json({ message: err.message })
//         }
      
//       });
// //


}