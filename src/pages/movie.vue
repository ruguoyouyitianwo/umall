<template>
  <div class="movie">
      <v-back></v-back>
      <ul v-if="movieArr">
          <li v-for="item in movieArr" :key="item.id" @click="go(item.id)">
              <p>电影名称：{{item.name}}</p>
              <p>电影价格：{{item.price | priceFilter}}</p>
              <p>上映时间：{{item.time | timeFilter}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
import {getMovieList} from '../util/request'
export default {
 data(){
     return{
         movieArr:[]
         
     }
 },
 methods:{
     go(id){
         this.$router.push('/movieDetail/'+id)
     }
 },
 mounted(){
    getMovieList().then(res=>{
        // console.log(res);
        this.movieArr=res.data.data
    })
 }
}
</script>

<style>
 .movie>ul>li{
    padding: 0.3rem;
    margin: 0.2rem;
    background: pink;
  }
  ul>li>p{
    margin-bottom: 0.1rem;
  }
</style>