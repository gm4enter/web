import axios, {AxiosResponse} from 'axios'
import {BASE_URL} from '../constants'
import {ROUTE} from '../router/routes'

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

export const setTokens = () => {
  const token = localStorage.getItem('accessToken')
  axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
setTokens()
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // setTokens()
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)
axiosClient.interceptors.response.use(
  function (response: any) {
    return response.data
  },
  function (error) {
    if (error.response.status === 401) {
      localStorage.clear()
      // window.location.href = ROUTE.HOME
    } else return Promise.reject(error)
  }
)

export default axiosClient
