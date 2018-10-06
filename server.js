const bodyParser = require('body-parser')
const express    = require('express')
const http       = require('http')
const fs         = require('fs')
const app        = express()
const port       = 9001


app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    fs.readFile('./public/views/index.html', 'utf-8', (error, data) => {
        if (error) {
            try {
                res.sendStatus(500).send('Oops! Something Went wrong!')
            } catch (error) {
                console.log(error)
            }
        } else {
            res.write(data)
            res.end()
        }
    })
})

app.get('/user', (req, res) => {
    fs.readFile('')
})

app.listen(port, () => {
    console.log('Koala Keeper, serving to the world!')
})
