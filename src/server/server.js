require('dotenv').config()
// const mongoose = require('mongoose')
const Axios = require('axios')
const apikey = process.env.apikey
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const buildPath = path.join(__dirname, '../../build')
const port = process.env.PORT || 9001
app.use(bodyParser.json())
app.use(express.static(buildPath))

// mongoose.connect(
//   process.env.MONGODB_URI,
//   { useNewUrlParser: true }
// )

app.post('/api/getmultiple', (req, res) => {
  const searchTerm = req.body.data
  Axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=${searchTerm}`
  ).then(response => {
    console.log(response.data)
    res.send(response.data)
  })
})

app.post('/api/getsingle', (req, res) => {
  const id = req.body.data
  Axios.get(`https://api.themoviedb.org/3/*********/?api_key=${apikey}`).then(
    response => {
      res.send(response.data)
    }
  )
})

app.get('/*', function(req, res) {
  const indexPath = path.join(buildPath, 'index.html')
  res.sendFile(indexPath)
})

app.listen(port, () => {
  console.log('Koala Keeper is up and running')
})
