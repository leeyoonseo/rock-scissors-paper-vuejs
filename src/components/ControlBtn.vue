<template>
  <button v-on:click="onClick" v-bind:class="{ on : this.propsdata }">{{ buttonText }}</button>
</template>

<script>
  export default {
    props : ['propsdata'],
    computed : {
      buttonText : function(){
        return (this.propsdata) ? 'Start' : 'Stop';
      }
    },
    methods : {
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
  
  button.on{
    background-color:rgb(224, 181, 181);
  }
</style>
