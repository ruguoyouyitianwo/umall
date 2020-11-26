<template>
  <div>
       <v-back></v-back>
      <div v-if="movieDetail">
         <p>电影名称：{{movieDetail.name}}</p>
         <p v-if="movieDetail.price">电影价格：{{movieDetail.price | priceFilter}}</p>
         <p v-if="movieDetail.time">上映时间：{{movieDetail.time | timeFilter}}</p>
         <img :src="movieDetail.img" alt="">
      </div>
  </div>
</template>

<script>
import {getMovieDetail} from '../util/request'
export default {
    data(){
      return{
        movieDetail:{}
      }
    },
    mounted(){
    getMovieDetail(this.$route.params.id).then(res=>{
      // console.log(res);
      if(res.data.isok){
        this.movieDetail=res.data.detail
      }
    })
    }
}
</script>

<style>
  img{
    width: 80%;
  }
  p{margin-bottom: 0.3rem;}
</style>