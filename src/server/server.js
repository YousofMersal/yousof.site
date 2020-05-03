require('dotenv').config()
require('./auth/passport-setup')
const { v4: uuid_v4 } = require('uuid')
const { connection } = require('./db/dbSetup')
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
const apikey = process.env.APIKEY
const MongoStore = require('connect-mongo')(session)

app.use('/user', authrouter.router)
app.use(bodyParser.json())
app.use(express.static(buildPath))

const sessionOptions = {
  store: new MongoStore({ mongooseConnection: connection, touchAfter: 24 * 3600 }),
  genid: () => {
    return uuid_v4()
  },
  cookie: { maxAge: 7 * 24 * 60 * 60 * 1000, secure: false },
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}

app.set('trust proxy') // trust first proxy

app.use(session(sessionOptions))
app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', authrouter.router)

app.post('/api/getmultiple', (req, res) => {
  const searchTerm = req.body.data
  Axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=${searchTerm}`
  )
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.error(err))
})

app.post('/api/getsingle', (req, res) => {
  const id = req.body.data
  Axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=en-US`
  )
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.error('/api/getsingle/ failed \n' + err))
})

app.get('/*', function (req, res) {
  const indexPath = path.join(buildPath, 'index.html')
  res.sendFile(indexPath)
})

app.listen(port, () => {
  if (process.env.NODE_ENV == 'development') {
    console.log('Server is running on http://localhost:' + port)
  } else {
    console.log('Koala Keeper is up and running on port: ' + port)
  }
})
