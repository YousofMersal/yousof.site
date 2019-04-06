const mongoose = require('mongoose')
const Schema = mongoose.Schema
const encryption = require('../../auth/BcryptSetup')

const usersSchema = new Schema({
  username: { type: String, required: true, lowercase: true },
  password: { type: String, required: true },
  joined: { type: Date, default: Date.now() },
  age: { type: Number, min: 13 },
  enableAdult: { type: Boolean, default: false }
})

usersSchema.methods.validPassword = async function(info) {
  const bool = await encryption.validatePassword(info.password, info.hash)
  return bool
}

usersSchema.statics.encryptPassword = async function(password) {
  const res = await encryption.passhash(password)
  return res
}

const User = mongoose.model('User', usersSchema)

module.exports = User
