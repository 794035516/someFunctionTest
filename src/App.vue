<template>
  <div id="app">
    <Home></Home>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from '@/components/Home'

export default {
  name: 'App',
  components:{
    Home
  }

}
</script>

<style>
*{
  margin:0;
  padding:0;
}

li{
  list-style: none;
  display: inline;
}

a{
  text-decoration: none;
}


#app{
  max-width: 80%;
  margin:20px auto 0px;
  font-family: 'microsoft YaHei';
  font-size: 18px;
  
}

</style>
