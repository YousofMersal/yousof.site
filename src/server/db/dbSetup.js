const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose
  .connect('mongodb://localhost:27017/yousof', { useNewUrlParser: true })
  .then(() => console.log('Db connected'))
  .catch(err => console.log(err))

const userDataSchema = new Schema(
  {
    name: { type: String, require: true },
    password: { type: String, require: true },
    joined: { type: Date, default: Date.now },
    age: { type: Number, min: 13 },
    enableAdult: { type: Boolean, default: false }
  },
  { collection: 'users' }
)

const User = mongoose.model('UserData', userDataSchema)

module.exports = User
