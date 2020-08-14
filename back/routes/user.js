var express = require('express')
var passport = require('passport')
var router = express.Router()

router.post('/login', passport.authenticate('login', {
    successRedirect: '/',
    failureRedirect: '/login'
}))

module.exports = router