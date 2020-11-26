import axios from 'axios'
// import qs from 'qs'

//请求拦截：组件发起请求，配置项先到了请求拦截，请求拦截可以修改请求配置，
//任何return结果给后端
axios.interceptors.request.use(config=>{
    console.log("========此处是请求拦截器=========");
  console.log(config);
  console.log("==========拦截器结束============");
 
  //获取身份信息
   var status=sessionStorage.getItem('status');
   if(status){
       config.status=status
   }
   return config

})

//响应拦截：后端响应数据，先到响应拦截器，拦截器可以对数据进行处理，然后return数据给组件
axios.interceptors.response.use(res=>{
    console.log("========此处是响应拦截器=========");
  console.log(res);
  console.log("==========拦截器结束============");
  if (!res.data.isok) {
    alert("请检查账号或密码")
  }
  return res
})




//登陆接口
export const login=(name,pass)=>{
    return axios({
        url:'/api/login',
        method:'post',
        data:{
            name:name,
            pass:pass
        }
    })
}

//获取电影列表
export const getMovieList=()=>{
    return axios({
        url:'/api/movie'
    })
}

//获取电影详情
export const getMovieDetail=(id)=>{
  return axios({
      url:'/api/getMovieDetail',
      params:{id:id}
  })
}

//获取外卖列表
export const getFoodList=()=>{
    return axios({
        url:'/api/foodList'
    })
}

//获取外卖详情
export const getFoodDetail=(id)=>{
    return axios({
        url:'/api/getFoodDetail',
        params:{
            foodId:id
        }
    })
}