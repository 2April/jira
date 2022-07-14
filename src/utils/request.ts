import axios from 'axios'
// // let baseURL = 'https://mloxxb9k.lc-cn-n1-shared.com'
// // export const $http = function(url,method='GET',data={}) {
// // 	return new Promise((resolve,reject)=>{
// // 		axios({
// // 			url: baseURL+url,
// // 			method,
// // 			header:{
// // 				"X-LC-Id": "MLoxXB9KQGarxHNLGEmKhkYK-gzGzoHsz",
// // 				"X-LC-Key": "h7FidvCW6if5LtWOnGr24j6u",
// // 				"Content-Type": "application/json"
// // 			},
// // 			data,
// // 			success: (res) => {
// // 				resolve(res.data)
// // 			},
// // 			fail: (err) => {
// // 				reject(err)
// // 			}
// // 		})
// // 	})
// // }


var request = axios.create({
  baseURL:'https://mloxxb9k.lc-cn-n1-shared.com',
  timeout:5000,
  headers: {
    'X-LC-Id': 'MLoxXB9KQGarxHNLGEmKhkYK-gzGzoHsz',
    'X-LC-Key': 'h7FidvCW6if5LtWOnGr24j6u',
    'Content-Type': 'application/json'
  },
})

// //拦截响应
// request.interceptors.response.use((response)=>{
//   return response
// },function (error){
//   //对响应的错误做点什么
//   return Promise.reject(error);
// }
// )

// // export const $get = function(url,data={}){
// // 	return request(url,'GET',data)
// // }

// // export const $post = function(url,data={}){
// // 	return request(url,'POST',data)
// // }

// // export const $put = function(url,data={}){
// // 	return request(url,'PUT',data)
// // }
// // export const $delete = function(url,data={}){
// // 	return request(url,'DELETE',data)
// // }

export default request

