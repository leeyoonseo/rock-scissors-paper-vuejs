<template>
  <button v-on:click="onClick" v-bind:class="{hidden : this.propsdata}"><span>{{ className }}</span></button>
</template>

<script>
  export default {
    props : ['propsdata'],
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
        var vue = this;
        // 사용자 클릭 이벤트 전달, 선택한 손에 맞춰 className 전달
        vue.$emit('onClick',this.matchClassName(vue.className));
        vue.setClass();
      },
      matchClassName : function(className){
        var opt = ['rock', 'scissors', 'paper'];
        var matchClass = '';
        
        opt.forEach(function(v){
          if(className.match(v) !== null) return matchClass = className.match(v);
        });
        return matchClass;
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
  button:hover,
  button:active,
  button.on{
    border-color:#333;
  }

  /* 트랜지션으로 자연스럽게 나오게 만들기 Vue에 있나? */
  button.hidden{
    /* display:none; */
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
