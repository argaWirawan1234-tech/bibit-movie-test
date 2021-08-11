import axios from 'axios'

const axiosInstance = axios.create ({
    baseURL : process.env.REACT_APP_API_HOST,
    headers: {'Accept': 'application/json'},
    timeout: 50 * 60 * 1000,
  })

export default axiosInstance