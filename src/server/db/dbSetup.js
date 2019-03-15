const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost:27017/yousof', {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .catch(err => console.log("Can't conenct to database"))

const User = require('./schemas/Users')

module.exports = { User }
