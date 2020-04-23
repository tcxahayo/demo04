import axios from 'axios';
import qs from 'qs';//使用post传值需要被转化

export function request(url='', params={}, method = 'GET'){
    return new Promise((resolve, reject)=>{
        //只适用于这些请求方法 'PUT', 'POST', 和 'PATCH',要使用data
        let config = {data:qs.stringify(params)}
        //`params` 是即将与请求一起发送的 URL 参数
        if (method.toUpperCase() === 'GET' || method.toUpperCase() === 'DELETE') {
            config = { params: params }
          }
          let headers = {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
        axios.request(Object.assign({url, method, headers },config)).then((response)=>{
            resolve(response.data)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}