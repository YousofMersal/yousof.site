const bcrypt = require('bcryptjs')

async function passhash(password) {
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  return hash
}

async function validatePassword(password, hash) {
  try {
    const bool = await bcrypt.compare(password, hash).then(res => res)
    return bool
  } catch (err) {
    console.error('error comparing ' + err)
  }
}

module.exports = {
  passhash,
  validatePassword
}
