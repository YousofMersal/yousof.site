require('dotenv').config()
require('./auth/passport-setup')
const passport = require('passport')
const Axios = require('axios')
const express = require('express')
const path = require('path')
const session = require('express-session')
const bodyParser = require('body-parser')
const app = express()
const buildPath = path.join(__dirname, '../../build')
const port = process.env.PORT || 9001
const authrouter = require('./auth/router')
const CronJob = require('cron').CronJob
const apikey = process.env.APIKEY
app.use('/user', authrouter.router)
app.use(bodyParser.json())
app.use(express.static(buildPath))
const sessionOptions = {
  cookie: { maxAge: 7 * 24 * 60 * 60 * 1000, secure: true },
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}
if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
}
app.use(session(sessionOptions))
app.use(passport.initialize())
app.use(passport.session())

// let movieConfig = Axios.get(
//   'https://api.themoviedb.org/3/configuration?api_key=d65f7650048ab646ecf08931d26d9be4'
// )

// const job = new CronJob('*/4 * * * * *', () => {
//   Axios.get(
//     'https://api.themoviedb.org/3/configuration?api_key=d65f7650048ab646ecf08931d26d9be4'
//   )
//     .then(res => {
//       movieConfig = res
//     })
//     .catch(err => console.log(err))
// })
// job.start()

app.use('/auth', authrouter.router)

app.post('/api/getmultiple', (req, res) => {
  const searchTerm = req.body.data
  Axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=${searchTerm}`
  )
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log(err))
})

app.post('/api/getsingle', (req, res) => {
  const id = req.body.data
  Axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=en-US`
  )
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log('/api/getsingle/ failed \n' + err))
})

app.get('/*', function(req, res) {
  const indexPath = path.join(buildPath, 'index.html')
  res.sendFile(indexPath)
})

app.listen(port, () => {
  console.log('Koala Keeper is up and running on port: ' + port)
})
