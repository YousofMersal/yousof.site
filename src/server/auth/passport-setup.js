const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { User } = require('../db/dbSetup')

passport.serializeUser((user, done) => {
  console.log(user.id)
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  console.log('deserialize ' + id)
  User.findOne({ _id: id })
    .then(done(null, id))
    .catch(err => console.log(err))
})

passport.use(
  'login',
  new LocalStrategy({ passReqToCallback: true }, (req, username, password, done) => {
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
          req.session.cookie.loggedin = true
          return done(null, user)
        } else {
          return done(null, false, 'username already in use')
        }
      })
    })
  })
)

passport.use(
  'register',
  new LocalStrategy((username, password, done) => {
    User.find({ username: username }, (err, user) => {
      if (err) {
        return done(err)
      } else if (user.length) {
        return done(null, false, { message: 'Name in use' })
      } else {
        User.encryptPassword(password)
          .then(hash => {
            User.create({ username: username, password: hash }).then(res =>
              done(null, res)
            )
          })
          .catch(err => console.log(err))
      }
    })
  })
)
