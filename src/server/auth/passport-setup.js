const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { User } = require('../db/dbSetup')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  console.log('deserialize ' + id)
  User.findOne({ _id: id })
    .then(done(null, id))
    .catch(err => console.log(err))
})

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err, false, {
          message: 'Something went wrong while trying to log in'
        })
      }

      if (!user) {
        return done(null, false, { message: 'Incorrect username.' })
      }

      user.validPassword({ password: password, hash: user.password }).then(res => {
        if (res) {
          return done(null, user)
        } else {
          return done(null, false, { message: 'Incorrect Password' })
        }
      })
    })
  })
)
