import Axios from 'axios'

async function LoginCheck(data) {
  try {
    const userdata = {
      username: data.UserName,
      password: data.Password,
      remember: data.remember
    }
    const res = await Axios.post('/auth/login', { ...userdata })
    return res
  } catch (err) {
    console.log(err)
  }
}

export { LoginCheck }
