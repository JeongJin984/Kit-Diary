const passport = require('passport')
const { Strategy:LocalStrategy } = require('passport-local')
const bcrypt = require('bcrypt')
const db = require('../models')

module.exports = () => {
	passport.use('login',new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password'
	}, async (email, password, done) => {
		try {
			const user = await db.User.findOne({ where: { email }})
			if(!user) {
				return done(null, false, { reason: 'Not Existing User'})
			}
			const result = await bcrypt.compare(password, user.password)
			if(result) {
				return done(null, user)
			}
			return done(null, false, { reason: 'Wrong Password' })
		} catch (error) {
			console.error(error)
			return done(e)
		}
	}))
}