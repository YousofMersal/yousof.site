const router = require('express').Router()
const passport = require('passport')

const authcheck = (req, res, next) => {
  console.log('authcheck')
  if (req.user) {
    console.log(req.session)
    next()
  } else {
    res.sendStatus(403)
  }
}

router.post('/isloggedin', authcheck, (req, res) => {
  console.log('checks out ' + req.session)
  res.sendStatus(200)
})

router.post('/login', passport.authenticate('login'), (req, res) => {
  res.send({ message: 'Login succesfull' })
})

router.post('/signup', (req, res) => {
  passport.authenticate('register', (err, user, info) => {
    if (err) {
      res.sendStatus(500)
    } else if (user === false) {
      res.send(info.message)
    } else {
      res.sendStatus(201)
    }
  })(req, res)
})

module.exports = {
  router,
  authcheck
}
