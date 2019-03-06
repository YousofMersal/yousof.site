const bcrypt = require('bcryptjs')

const hash = []

async function passhash(password) {
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  return hash
}

passhash('joe')
  .then(res => hash.push(res))
  .then(() => {
    bcrypt.compare('joe', hash[0]).then(res => console.log(res))
  })
