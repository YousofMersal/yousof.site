const mongoose = require('mongoose')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../db/dbSetup')

mongoose
  .connect('mongodb://localhost/yousof', { useNewUrlParser: true })
  .catch(err => console.log(err))

passport.serializeUser((user, done) => {
  console.log(user)
  done(null, user)
})

passport.deserializeUser((username, done) => {
  mongoose
    .findOne({ name: username })
    .then(done(null, username).catch(err => console.log(err)))
})

passport.use(
  new LocalStrategy((username, password, done) => {
    console.log(username + password + done)
    User.findOne({ username: username, password: password }, (err, user) => {
      if (err) {
        return done(err)
      }

      if (!user) {
        return done(null, false, { message: 'Incorrect username.' })
      }

      if (user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect Password' })
      }
      return done(null, user)
    })
  })
)
