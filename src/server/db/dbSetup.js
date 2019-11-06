const mongoose = require('mongoose')

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .catch(err => console.error("Can't conenct to database\n"))

const User = require('./schemas/Users')

const connection = mongoose.connection

module.exports = { User, connection }
