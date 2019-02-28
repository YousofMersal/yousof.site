const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userDataSchema = new Schema(
  {
    name: { type: String, require: true },
    password: { type: String, require: true },
    joined: { type: Date, default: Date.now },
    age: { type: Number, min: 13 },
    enableAdult: { type: Boolean, default: false }
  },
  { collection: 'user-data' }
)

const UserData = mongoose.model('UserData', userDataSchema)

mongoose
  .connect('mongodb://localhost:27017/yousof', { useNewUrlParser: true })
  .then(() => console.log('Db connected'))
  .catch(err => console.log(err))
