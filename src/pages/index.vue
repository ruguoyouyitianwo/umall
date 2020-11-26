<template>
  <div>
      <v-search></v-search>
      <transition enter-active-class="animate__animated animate__bounceInDown">
     <router-view ></router-view>
     </transition>
    <footer>
    <router-link to="/index/home" active-class="active"><i class="iconfont icon-shouye"></i></router-link>
     <router-link to="/index/order" active-class="active"><i class="iconfont icon-dingdan"></i></router-link>
     <router-link to="/index/mine" active-class="active"><i class="iconfont icon-wodedangxuan"></i></router-link>
    </footer>
  </div>
</template>

<script>
export default {
 
}
</script>

<style >
  footer{
      height: 0.8rem;
      width: 100%;
      position:fixed;
      bottom: 0rem;
      left:0rem;
      display: flex;
  }
footer a{
      border: 0.01rem solid #999999;
      flex: 1;
       text-align: center;
      line-height: 0.6rem;
      }
.active{
    background: pink;
    color:blueviolet
}
</style>