module.exports = (app) => {
    const blog = require('../controllers/note.controller');
    //Multer
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
    if(file.mimetype==='image/jpeg'||file.mimetype==='image/jpg'){
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
    app.post('/blog',upload.single('file'), blog.create);

    // Retrieve all users
    app.get('/blog', blog.findAll);

    // Retrieve a single Note with noteId
    app.get('/blog/:blogId', blog.findOne);

    // Update a Note with userId
    app.put('/blog/:blogId', blog.update);

    // Delete a Note with userId
    app.delete('/blog/:blogId', blog.delete);
}