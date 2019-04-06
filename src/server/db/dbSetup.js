const mongoose = require('mongoose')

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .catch(err => console.log("Can't conenct to database"))

const User = require('./schemas/Users')

module.exports = { User }
