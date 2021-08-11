import axios from 'axios'

  const axiosInstance = axios.create ({
    baseURL : process.env.REACT_APP_API_HOST,
    headers: {'Accept': 'application/json'},
    timeout: 50 * 60 * 1000,
  })

  axiosInstance.interceptors.response.use(function (response) {
    if(!response.status === 200) alert('Unexpected Output From API')
    return response;
  }, function (error) {
    alert('Some Error Occured, Please Check Your Internet')
    return Promise.reject(error);
  });

  

export default axiosInstance