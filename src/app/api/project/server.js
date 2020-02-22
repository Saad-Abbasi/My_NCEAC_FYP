const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.Port||8080;

//public data


// create express app
const app = express();
//cors enable
app.use(cors());
//public data
app.use(express.static('uploads'));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Ncseac application. Take notes quickly. Organize and keep track of all your notes."});
});

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
require('./app/routes/note.routes.js')(app);
require('./app/routes/user.routes.js')(app);
require('./app/routes/login.routes.js')(app);
require('./app/routes/teacher.routes.js')(app);
require('./app/routes/course.routes.js')(app);
require('./app/routes/topic.routes.js')(app);
require('./app/routes/addCourse.route.js')(app);
require('./app/routes/book.routes.js')(app);
// listen for requests
app.listen(port, () => {
    console.log("Server is listening on port 3000");
});