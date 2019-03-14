const mongoose = require('mongoose')
const Schema = mongoose.Schema
const encryption = require('../auth/BcryptSetup')

mongoose
  .connect('mongodb://localhost:27017/yousof', { useNewUrlParser: true })
  .then(() => console.log('Db connected'))
  .catch(err => console.log(err))

const userDataSchema = new Schema(
  {
    name: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    joined: { type: Date, default: Date.now },
    age: { type: Number, min: 13 },
    enableAdult: { type: Boolean, default: false }
  },
  { collection: 'users' }
)

userDataSchema.methods.validPassword = function(info) {
  encryption.validatePassword(info)
}

const User = mongoose.model('UserData', userDataSchema)

module.exports = User
