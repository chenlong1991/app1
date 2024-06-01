import axios from 'axios'
const baseURL = '/'
const http = axios.create({
  baseURL,
  timeout: 100000
})
// 请求拦截
http.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
  }
)
// 响应拦截
http.interceptors.response.use(res => {
  return res.data
})

export default http
