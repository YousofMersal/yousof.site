const router = require('express').Router()
const passport = require('passport')

const authcheck = (req, res, next) => {
  if (req.user) {
    next()
  } else {
    res.send(-1)
  }
}

router.post(
  '/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  (req, res) => {
    res.send('ok')
  }
)

module.exports = {
  router,
  authcheck
}
