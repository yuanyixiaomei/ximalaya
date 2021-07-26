/*
 * @Author: your name
 * @Date: 2021-07-25 10:49:53
 * @LastEditTime: 2021-07-25 22:40:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ximalaya\src\config\http.rs
 */
import axios from 'axios'
import Config from 'react-native-config'

axios.defaults.baseURL = Config.API_URL 

axios.interceptors.request.use(function (config) {
  console.log('request',config)
  console.log('request',config)
  return  config
}, function (error) {
    return Promise.reject(error)
});

axios.interceptors.response.use(function (response){
  console.log('res', response)
  return response.data
}, function (error) {
    console.log(error,'erroer')
  return Promise.reject(error)
})
