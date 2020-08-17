var express = require('express')
var passport = require('passport')
var router = express.Router()

router.post('/login', passport.authenticate('login', {
    successRedirect: '/',
    failureRedirect: '/login'
}))
router.post('/join', passport.authenticate('join',{
    successRedirect: '/',
    failureRedirect: '/join'
}))
module.exports = router