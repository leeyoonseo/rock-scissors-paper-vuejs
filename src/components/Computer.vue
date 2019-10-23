<template>
  <div class="computer" v-bind:class="[ { 'is-active' : !this.data.isReady }, this.data.computerClass ]"></div>
</template>

<script>
  export default {
    props:['data']
  }
</script>

<style scoped>
  .computer{
    margin:0 auto;
    width:125px;
    height: 175px;
    background:url('../assets/hands.jpg')no-repeat;
    background-size:384px;
  }
  .computer.is-active{
    animation: gameAnimate .5s steps(3,end) infinite;
  }
  .rock{
    background-position:0 0;
  }
  .scissors{
    background-position:-128px 0;
  }
  .paper{
    background-position:-257px 0;
  }

  @keyframes gameAnimate{
    0%{
      background-position-x:0;
    }
    100%{
      background-position-x:-384px;
    }
  } 
</style>

