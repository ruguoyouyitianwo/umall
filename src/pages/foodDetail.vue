<template>
  <div>
     <v-back></v-back>
      <div v-if="foodDetail" class="foodDetail">
        <p>外卖名称：{{foodDetail.name}}</p>
        <p v-if="foodDetail.price">外卖价格：{{foodDetail.price | priceFilter}}</p>
      </div>
  </div>
</template>

<script>
import {getFoodDetail} from '../util/request'
export default {
   data(){
     return{
       foodDetail:{}
     }
   },
   mounted(){
    //  console.log(this.$route);
     getFoodDetail(this.$route.params.id).then(res=>{
       console.log(res);
       if(res.data.isok){
         this.foodDetail=res.data.detail;
       }
     }
     )
   }
}
</script>

<style>
   .foodDetail{
     padding:0.2rem;
     background: pink;
     
   }
    .foodDetail>p{
      margin-bottom: 0.3rem;
    }
</style>