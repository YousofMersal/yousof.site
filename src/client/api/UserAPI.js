import Axios from 'axios'

async function loginCheck(data) {
  try {
    const res = await Axios.post('/auth/login', { ...data })
    return res
  } catch (err) {
    console.error(err)
  }
}

async function registerUser(data) {
  try {
    const res = await Axios.post('/auth/signup', { ...data })
    return res
  } catch (err) {
    console.error(err)
  }
}

async function isloggedin() {
  try {
    const res = await Axios.post('/auth/isloggedin')
    return res
  } catch (err) {
    console.error(err)
  }
}

async function logOut() {
  try {
    const res = await Axios.get('/auth/logout')
    return res
  } catch (err) {
    console.eror(err)
  }
}

export { loginCheck, isloggedin, registerUser, logOut }
