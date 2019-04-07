require('dotenv').config()
require('./auth/passport-setup')
const https = require('https')
const fs = require('fs')
const uuidv4 = require('uuid/v4')
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
  store: new MongoStore({ mongooseConnection: connection }),
  genid: req => {
    return uuidv4()
  },
  cookie: { maxAge: 7 * 24 * 60 * 60 * 1000, secure: true },
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}

if (process.env.ENVIROMENT === 'PROD') {
  app.set('trust proxy', 1) // trust first proxy
}

app.use(session(sessionOptions))
app.use(passport.initialize())
app.use(passport.session())

async function getCerts() {
  if (process.env.ENVIROMENT === 'DEV') {
    const options = {
      cert: fs.readFileSync('/mnt/x/Documents/certbot/selfMadeCert/localhost.crt'),
      key: fs.readFileSync('/mnt/x/Documents/certbot/selfMadeCert/localhost.key')
    }
    return await options
  } else if (process.env.ENVIROMENT === 'PROD') {
    const options = {
      key: process.env.PRIVATE,
      cert: process.env.ORIGIN
    }
    return options
  }
}

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

getCerts()
  .then(res => {
    https
      .createServer(res, app)
      .listen(port, () =>
        console.log('Koala Keeper is up and running securly on port: ' + port)
      )
  })
  .catch(err => console.log(err))
