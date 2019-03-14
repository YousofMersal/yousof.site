const mongoose = require('mongoose')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../db/dbSetup')

mongoose
  .connect('mongodb://localhost/yousof', { useNewUrlParser: true })
  .catch(err => console.log(err))

passport.serializeUser((user, done) => {
  console.log('serializeing')
  done(null, user)
})

passport.deserializeUser((username, done) => {
  console.log(username)
  mongoose
    .findOne({ name: username })
    .then(done(null, username).catch(err => console.log(err)))
})

passport.use(
  new LocalStrategy((username, password, done) => {
    console.log(username + password)

    User.findOne({ username: username }, (err, user) => {
      if (err) {
        console.log(err)
        return done(err)
      }

      if (!user) {
        console.log('incorrect user')
        return done(null, false, { message: 'Incorrect username.' })
      }

      if (!user.validPassword({ password: password, hash: user.password })) {
        console.log('incorrect pass')
        return done(null, false, { message: 'Incorrect Password' })
      }

      console.log(user + 'correct')
      return done(null, user)
    })
  })
)
