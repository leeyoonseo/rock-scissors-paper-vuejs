<template>
  <button v-on:click="onClick" v-bind:disabled="this.props.isReady"><span>{{ className }}</span></button>
</template>

<script>
  export default {
    props : ['props'],
    data (){
      return{
        className : '컴포넌트 호출 시 상위에서 class를 지정해주세요. rock, scissors, paper 가능합니다.'
      }
    },
    // lifeCycle : DOM 삽입 단계, 초기 랜더링 직전에 컴포넌트(컴포넌트, 템플릿, 렌더링 된 돔)에 접근할 수 있다. 
    // 모든 하위 컴포넌트가 마운트 상태를 보장하지 않는다. 
    // 서버렌더링에서는 호출되지 않는다.
    mounted : function(){
      var className = this.$el.className;
      this.className = (className) ? className : console.log(this.className);
    },
    methods : {
      onClick : function(){
        // 선택한 값에 맞춰 opt에 맞는 number값 전달
        this.$emit('onClick',this.matchOptNumber(this.className));
        this.setClass();
      },
      matchOptNumber : function(className){
        var num;
        this.propsdata.opt.forEach(function(v,i){
          if(className.match(v) !== null) return num = i;
        });
        return num;
      },
      setClass : function(){
        // removeClassName
        var userBtns = document.getElementsByClassName('user');
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
