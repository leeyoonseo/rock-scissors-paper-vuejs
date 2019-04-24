<template>
  <button v-on:click="onClick" v-bind:class="{ 'is-active' : this.data }">{{ setButtonText }}</button>
</template>

<script>
  export default {
    props : ['data'],
    computed : {
      // 버튼명 셋팅
      setButtonText : function(){
        return (this.dat) ? 'Start' : 'Stop';
      }
    },
    methods : {
      // 클릭 시 게임 시작, 멈춤 이벤트 전달
      onClick : function(){
        this.$emit('onClick');
      }
    }
  }
</script>

<style scoped>
  button{ 
    margin:20px auto; 
    display:block; 
    width:150px;
    height:40px;
    border:0;
    color:#fff;
    border-radius:5px;
    font-size:16px;  
    font-weight:700;
    cursor:pointer;
    background-color:rgb(181, 216, 224);
  }
  button.is-active{
    background-color:rgb(224, 181, 181);
  }
</style>
