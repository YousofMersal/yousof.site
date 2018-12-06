const express = require('express')
const path = require('path')
const app = express()
const buildPath = path.join(__dirname, '../../build')
app.use(express.static(buildPath))

app.get('/*', function(req, res) {
  const indexPath = path.join(buildPath, 'index.html')
  res.sendFile(indexPath)
})

app.listen(process.env.PORT || 9001, () => {
  console.log('Koala Keeper is up and running')
})
