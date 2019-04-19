<template>
  <div class="wrap">
    <MainHands-component v-bind:propsdata="isReady"></MainHands-component>
    <ControlBtn-component class="controls" v-bind:propsdata="isReady" v-on:onClick="gameStateToggle"></ControlBtn-component>
    <div class="options-wrap">
      <!-- TODO 반복문으로 생성 할 수 있을듯???. -->
      <RockHand-component class="user rock" v-bind:propsdata="isReady" v-on:onClick="setUserHand"></RockHand-component>
      <ScissorsHand-component class="user scissors" v-bind:propsdata="isReady" v-on:onClick="setUserHand"></ScissorsHand-component>
      <PaperHand-component class="user paper" v-bind:propsdata="isReady" v-on:onClick="setUserHand"></PaperHand-component>
    </div>
  </div>

</template>

<script>
  import MainHands from '../components/MainHands.vue';
  import ControlBtn from '../components/ControlBtn.vue';

  // TODO import 도 하나로 해서 쓸 수 있나?
  import Rock from '../components/UserHands.vue';
  import Scissors from '../components/UserHands.vue';
  import Paper from '../components/UserHands.vue';

  export default {
    data(){
      return {
        isReady : true,
        // 이거 이용해서 반복문 돌려서 component 하나로 할 수 있을까?
        // 이거로 random 결과 내기
        opt : ['rock', 'scissors', 'paper']
        // userHand : ''
      }
    },
    components : {
      'MainHands-component' : MainHands,
      'ControlBtn-component' : ControlBtn,
      'RockHand-component' : Rock,
      'ScissorsHand-component' : Scissors,
      'PaperHand-component' : Paper,
    },
    methods : {
      gameStateToggle : function(){
        this.isReady = !this.isReady;
      },
      setUserHand : function(userOpt){
        console.log('123',userOpt);

      },
      result : function(){
        // 1,2,3 중 랜덤 숫자 출력
        var random = Math.floor(Math.random() * 3);
        
      }
    }
  }
</script>

<style scoped>
  .wrap{
    margin:0 auto;
    width:500px; 
  }
  .options-wrap{
    overflow:hidden;
    margin:0 auto;
    width:360px;
  }
</style>
