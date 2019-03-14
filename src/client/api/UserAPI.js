import Axios from 'axios'

async function LoginCheck(data) {
  try {
    const res = await Axios.post('/auth/login', { ...data })
    return res
  } catch (err) {
    console.log(err)
  }
}

export { LoginCheck }
