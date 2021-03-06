import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    // 1 创建axios实例
    baseURL:'http://123.207.32.32:8000',//接口已不可用，需要使用最新接口
    timeout:5000
  })

  instance.interceptors.request.use(config=>{
    return config
  },err=>{
    console.log(err);
  })

  instance.interceptors.response.use(res=>{
    return res.data
  },err=>{
    console.log(err);
  })
  return instance(config)
}
