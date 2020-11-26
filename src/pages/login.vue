<template>
  <div id="login">
      <h3>我是登录页</h3>
     账号：<input class="ipt" type="text" v-model="user.name" ><br>
      密码：<input  class="ipt" type="text" v-model="user.pass"><br>
      <button @click="submit()">登陆</button><br>
  </div>
</template>
<script>
import {login} from '../util/request'
export default {
 data(){
     return {
         user:{ 
             name:'',
             pass:''
         },
         status:1,
     }
 },
 methods:{
     submit(){
         if(this.user.name==''||this.user.pass==''){
            alert('请输入用户名或密码');
         };
        login(this.user.name,this.user.pass).then(res=>{
             if(res.data.isok){
                 console.log(res);
                  sessionStorage.setItem('isLogin',1);
             // 当登录成功的时候添加一个身份的标识
            sessionStorage.setItem("status", this.status)

             this.$router.push('/index')
             }  
         })  
     }
 }
}
</script>

<style scoped>
#login>h3{
    margin-top: 0.2rem;
}
 #login>.ipt{
     margin-top: 0.3rem;
 }
 #login> button{
     margin-top: 0.3rem;
 }
 
</style>