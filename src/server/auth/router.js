const router = require('express').Router()
const passport = require('passport')

const authcheck = (req, res, next) => {
  console.log('authcheck')
  if (req.user) {
    console.log(req)
    next()
  } else {
    console.log(req.user)
    res.sendStatus(403)
  }
}

router.post('/isloggedin', authcheck, (req, res) => {
  console.log('checks out ' + req.session)
  res.sendStatus(200)
})

router.post(
  '/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  (req, res) => {
    res.sendStatus(200)
  }
)

module.exports = {
  router,
  authcheck
}
