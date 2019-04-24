<template>
  <button v-on:click="onClick" v-bind:disabled="this.props.isReady" class="player" v-bind:class="this.className"><span>{{ setButtonText }}</span></button>
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
      // 버튼 text 추가, this.className값 삽입하여 methods에서 사용
      setButtonText : function(){
        this.className = this.props.opts[this.props.index];
        return this.className;
      }
    },
    methods : {
      onClick : function(){
        var playerNumber = this.getPlayerNumber();

        // 선택한 값에 맞춰 opt에 맞는 number값 전달
        this.$emit('onClick', playerNumber);
        this.setActiveClassName();
      },
      // class와 match하는 값을 숫자로 return함, opts 선언한 인덱스 순서
      getPlayerNumber : function(){
        var className = this.className;
        var opts = this.props.opts;
        var num;

        opts.forEach(function(v,i){
          if(className.match(v) !== null) return num = i;
        });
        return num;
      },
      // player 버튼에 클릭했을때, is-active 클래스 삽입
      setActiveClassName : function(){
        // remove
        var player = document.getElementsByClassName('player');
        for (var i = 0; i < player.length; i++) {
          player[i].classList.remove('is-active');
        }
        // add
        this.$el.classList.add('is-active');
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
  button.is-active{
    border-color:#333;
  }
  button[disabled]{
   cursor:default;
  } 
  button span{display:block;position:relative;z-index:-1;}

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
