<template>
  <div>
    
      <div class="link">
      <router-link to="/food">外卖页面</router-link>
      </div>
      <div class="link">
       <router-link to="/movie">电影页面</router-link>
       </div>
  </div>
</template>

<script>
import vBack from '../common/vBack.vue'
export default {
  components: { vBack },

}
</script>

<style>
 .link{
     padding:0.3rem;
 }
</style>