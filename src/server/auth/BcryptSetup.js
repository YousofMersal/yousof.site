const bcrypt = require('bcryptjs')

const hash = []

async function passhash(password) {
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  return hash
}

async function validatePassword(obj) {
  try {
    console.log(await bcrypt.compare(obj.pass, obj.hash).then(res => res))
  } catch (err) {
    console.log(err)
  }
  // bcrypt.compare(obj.pass, obj.hash).then(res => res)
}

// passhash('123')
//   .then(res => hash.push(res))
//   .then(() => {
//     console.log(hash[0])
//     bcrypt.compare('joe', hash[0]).then(res => console.log(res))
//   })

module.exports = {
  passhash,
  validatePassword
}
