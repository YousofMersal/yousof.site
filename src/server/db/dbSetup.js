const mongoose = require('mongoose')

mongoose
  .connect(process.env.MONGODB_URI, {})

const User = require('./schemas/Users')

const connection = mongoose.connection

module.exports = { User, connection }
