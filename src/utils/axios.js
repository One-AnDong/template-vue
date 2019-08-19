import axios from 'axios'
// process.env.NODE_ENV
// axios.defaults.baseURL = ''
// axios.defaults.headers.common['Authorization'] = 'Bearer' + 'AUTH_TOKEN'
axios.interceptors.request(
  config => {
    config.timeout = 2000
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
axios.interceptors.response(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)
export default axios
