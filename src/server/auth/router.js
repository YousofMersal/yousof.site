const router = require('express').Router()
const passport = require('passport')

const authcheck = (req, res, next) => {
  if (req.session.isLoggedIn) {
    next()
  } else {
    res.send(false)
  }
}

router.post('/isloggedin', authcheck, (req, res) => {
  res.send({ isLoggedIn: true, userID: req.session.userID })
})

router.post('/login', (req, res) => {
  passport.authenticate('login', (err, user, info) => {
    if (err) {
      res.sendStatus(500)
    } else if (user === false) {
      res.send(info.message)
    } else {
      res.sendStatus(200)
    }
  })(req, res)
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

router.get('/logout', authcheck, (req, res) => {
  req.session.destroy(() => {
    res.send('OK')
  })
})

module.exports = {
  router,
  authcheck
}
