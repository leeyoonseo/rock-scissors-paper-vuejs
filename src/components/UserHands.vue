<template>
  <button v-on:click="onClick" v-bind:disabled="this.props.isReady" class="user-btn" v-bind:class="this.className"><span>{{ optValue }}</span></button>
</template>

<script>
  export default {
    props : ['props'],
    data (){
      return{
        className : ''
      }
    },
    computed : {
      optValue : function(){
        this.className = this.props.opts[this.props.index];
        return this.className;
      }
    },
    methods : {
      onClick : function(){
        var num = this.getOptNum();

        // 선택한 값에 맞춰 opt에 맞는 number값 전달
        this.$emit('onClick',num);
        this.setClass();
      },
      getOptNum : function(){
        var className = this.className;
        var opts = this.props.opts;
        var num;

        opts.forEach(function(v,i){
          if(className.match(v) !== null) return num = i;
        });
        return num;
      },
      setClass : function(){
        // removeClassName
        var userBtns = document.getElementsByClassName('user-btn');
        for (var i = 0; i < userBtns.length; i++) {
          userBtns[i].classList.remove('on');
        }
        // addClassName
        this.$el.classList.add('on');
      }
    }
  }
</script>

<style scoped>  
  button{
    display:block; 
    padding:0;
    margin:0 20px;
    width:80px;
    height:80px;
    float:left;
    cursor:pointer;    
    border:1px solid #ccc;
    box-sizing:border-box;
    border-radius:50%;
    background:url('../assets/hands.jpg')no-repeat;
    background-color:#fff;
  }
  button:not([disabled]):hover,
  button:active,
  button.on{
    border-color:#333;
  }
  button[disabled]{
   cursor:default;
  } 
  /* button span{display:block;position:relative;z-index:-1;} */
  .rock{ 
    background-size:190px;
    background-position:14px -10px;
  }
  .scissors{ 
    background-size:186px;
    background-position:-47px 3px;
  }
  .paper{ 
    background-size:180px;
    background-position:-107px 4px;
  }
</style>
