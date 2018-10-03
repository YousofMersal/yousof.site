const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()
const port = 9001

app.get('/', (req, res)=>{
    fs.readFile('./views/landing.html', 'utf-8', (error, data)=>{
        if (error) {
            try {
                res.sendStatus(500).send('Oops! Something Went wrong!')
            } catch (error) {
                console.log(error)
            }
        }else {
            res.write(data)
            res.end()
        }
    })
})

app.listen(port, ()=>{
    console.log('Koala Keeper serving to the world!')
})