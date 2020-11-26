import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

//引入一级路由
const index=()=>Promise.resolve(import('../pages/index'));
const login=()=>Promise.resolve(import('../pages/login'));
const food=()=>Promise.resolve(import('../pages/food'));
const foodDetail=()=>Promise.resolve(import('../pages/foodDetail'));
const movie=()=>Promise.resolve(import('../pages/movie'));
const movieDetail=()=>Promise.resolve(import('../pages/movieDetail'));



//引入二级路由
const home=()=>import('../components/home');
const order=()=>import('../components/order');
const mine=()=>import('../components/mine');


 const router= new Router({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/index',
      component: index,
      children: [
        {
          path: 'home',
          component: home
        },
        {
          path: 'order',
          component: order
        },
        {
          path: 'mine',
          component: mine
        },
        {
          path:'',
         redirect:'home'
        },
      ]
    },
    {
      path: '/movie',
      component: movie
    },
    {
      path: '/movieDetail/:id',
      component: movieDetail
    },
    {
      path: '/food',
      component: food,
      //路由独享拦截
      beforeEnter(to,from,next){
        // 取出isLogin是否为1，如果为1说明是外卖小哥，那么就放他进来。
        var isLogin = sessionStorage.getItem("isLogin")
        if(isLogin=="1"){
        next()
        }else{
        next("/login")
        }
        }
    },
    {
      path: '/foodDetail/:id',
      component: foodDetail
    },
    {
      path: '*',
      redirect:'/login'
    },
  ]
});
//前置全局守卫
router.beforeEach((to, from, next) => {
 if(to.path=='/login'){
   next();
   return
 };
 var isLogin=sessionStorage.getItem('isLogin');
 if(isLogin){
   next();
   return
 }
  
});
//后置全局守卫
router.afterEach( ()=> {
  console.log('我离开了');
  
});

export default  router;

