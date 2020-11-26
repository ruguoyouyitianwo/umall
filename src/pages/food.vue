<template>
  <div class="foot">
     <v-back></v-back>
    <ul>
      <li v-for="item in foodArr" :key="item.foodId" @click="go(item.foodId)">
        <p>{{item.name}}</p>
        <p v-if="item.price">{{item.price | priceFilter}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import {getFoodList} from '../util/request'
export default {
  data(){
    return{
      foodArr:[]
    }
  },
  methods:{
    go(id){
        this.$router.push('/foodDetail/'+id)
    }
  },
  mounted(){
    getFoodList().then(res=>{
      console.log(res);
      if(res.data.isok){
      this.foodArr=res.data.data    
      }
      
    })
  },
  //组件内部守卫
  beforeRouteEnter(to, from, next){
   if(from.path=='/index/home'||from.path.includes('/foodDetail')){
      next();
   }else{
     next('/index/home');
   }
  },
  beforeRouteLeave(to, from, next){
    next();
    console.log('外卖小哥离开了');
  },
  beforeRouteUpdate(to,from,next){
    next();
    console.log('组件更新了');
  }
}
</script>

<style>
.foot>ul>li{
    padding: 0.3rem;
    margin: 0.2rem;
    background: chartreuse;
  }
  ul>li>p{
    margin-bottom: 0.1rem;
  }
</style>