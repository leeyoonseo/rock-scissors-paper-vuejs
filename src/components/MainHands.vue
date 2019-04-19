<template>
  <div class="hands" v-bind:class="{ on : !propsdata }"></div>
</template>

<script>
  export default {
    props:['propsdata']
  }
</script>

<style scoped>
  .hands{
    margin:0 auto;
    width:125px;
    height: 175px;
    background:url('../assets/hands.jpg')no-repeat;
    background-size:384px;
  }
  .hands.on{
    animation: animate .5s steps(3,end) infinite;
  }
  @keyframes animate{
    0%{
      background-position-x:0;
    }
    100%{
      background-position-x:-384px;
    }
  } 
</style>

<!-- 
  TODO
  1.랜덤으로 가위, 바위, 보 뿌리기.
-->