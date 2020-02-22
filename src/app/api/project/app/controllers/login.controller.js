const login = require('../models/login.model');
const jwt = require('jsonwebtoken');

exports.findOne = (req, res) => {
    
    var username = req.body.t_email;
    var password = req.body.t_pswd;
    login.findOne({username:username,password:password})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + username
            });            
        }else{
            let payload = {subject:user._id}
            let token = jwt.sign(payload,'secretKey')
             res.status(200).send({token});
        }
         
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + username
            });                
        }
        return res.status(500).send({
            message: "Error retrieving User with id " + username
        });
    });

        


};