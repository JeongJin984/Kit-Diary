const passport = require('passport')
const db = require('../models')
const local = require('./local.js')

module.exports = () => {
	passport.serializeUser((User, done) => {
		return done(null, User.id)
	})

	passport.deserializeUser( async (id, done) => {
		try {
			const user = await db.User.findOne({
				where: { id }
			})
			return done(null, user)
		} catch (error) {
			console.error(error)
			return done(e)
		}
	})
	local()
}