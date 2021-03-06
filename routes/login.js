const express = require('express');
const User = require('../models/User');
const router = express.Router();


router.post('/', (req, res, next) => {
    const email = req.body.email
    User.find({email: email}, (err, users) => {
        if(err){
            res.json({
                confirmation: 'fail',
                error:err
            })
            return
        }
        if (users.length == 0){
            res.json({
                confirmation: 'fail',
                error: 'User not found'
            })
            return
        }
        res.json({
            confirmation: 'success',
            user: users
        })
    })
});

module.exports = router;