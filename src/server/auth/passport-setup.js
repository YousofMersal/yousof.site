const mongoose = require('mongoose')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { User } = require('../db/dbSetup')

// mongoose
//   .connect('mongodb://localhost/yousof', { useNewUrlParser: true })
//   .catch(err => console.log(err))

passport.serializeUser((user, done) => {
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
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err)
      }

      if (!user) {
        return done(null, false, { message: 'Incorrect username.' })
      }

      user.validPassword({ password: password, hash: user.password }).then(res => {
        if (res) {
          return done(null, user)
        }
        return done(null, false, { message: 'Incorrect Password' })
      })
    })
  })
)
