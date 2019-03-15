const mongoose = require('mongoose')
const Schema = mongoose.Schema
const encryption = require('../../auth/BcryptSetup')

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

userDataSchema.methods.validPassword = async function(info) {
  const bool = await encryption.validatePassword(info.password, info.hash)
  return bool
}

const User = mongoose.model('UserData', userDataSchema)

module.exports = User
