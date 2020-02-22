
module.exports = (app) => {
    const login = require('../controllers/login.controller');
// Retrieve a single user with userId
    app.post('/admin/login', login.findOne);

    
}