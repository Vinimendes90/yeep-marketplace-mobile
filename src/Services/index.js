import axios from 'axios'
import { Config } from '@/Config'

// const instance = axios.create({
//   baseURL: Config.API_URL,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   timeout: 3000,
// })

export const handleError = ({ message, data, status }) => {
  return Promise.reject({ message, data, status })
}

// // instance.interceptors.response.use(
// //   (response) => response,
// //   ({ message, response: { data, status } }) => {
// //     return handleError({ message, data, status })
// //   },
// // )

// export default instance

const API = {

  get(path, params = {}, customHeaders = {}) {
    return this.makeRequest(path, params, customHeaders, 'get')
  },

  post(path, params = {}, customHeaders = {}) {
    return this.makeRequest(path, params, customHeaders, 'post')
  },

  put(path, params = {}, customHeaders = {}) {
    return this.makeRequest(path, params, customHeaders, 'put')
  },

  delete(path, params = {}, customHeaders = {}) {
    return this.makeRequest(path, params, customHeaders, 'delete')
  },

  // getAuthHeaders() {
  //   return store.getState().auth.token || {}
  // },

  makeRequest(path, params, customHeaders, method) {

    // const externalRequest = path.includes('https') || path.includes('http')

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Client': 'mobile',
        ...customHeaders
      }
    }
    
    // if (!externalRequest) {
    //   const authHeaders = this.getAuthHeaders()
    //   axiosConfig.baseURL = BaseURL.api
    //   axiosConfig.headers = {...axiosConfig.headers, ...authHeaders }
    // }

    axiosConfig.baseURL = Config.API_URL
    
    const AXIOS_REQUEST = axios.create(axiosConfig)

    switch (method) {
      case 'get':
        return AXIOS_REQUEST.get(path, {params}).then(response => {
          return response
        })

      case 'post':
        return AXIOS_REQUEST.post(path, params).then(response => {
          return response
        })

      case 'put':
        return AXIOS_REQUEST.put(path, params).then(response => {
          return response
        })

      case 'delete':
        return AXIOS_REQUEST.delete(path, params).then(response => {
          return response
        })

      default:
        return new Promise((resolve, _) => {
          resolve(null)
        })
    }
  }
}

export default API