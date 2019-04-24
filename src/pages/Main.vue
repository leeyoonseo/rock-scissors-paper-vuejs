<template>
  <div class="wrap">
    <div class="game-area">
      <MainHands-component v-bind:props="{isReady, computer}"></MainHands-component>
      <ControlBtn-component class="controls" v-bind:propsdata="isReady" v-on:onClick="gameStateToggle"></ControlBtn-component>
      <div class="options-wrap">
        <user-button-component v-for="(opt, index) in opts" v-bind:props="{isReady,opts,index}" v-bind:key="`opt-${index}`" v-on:onClick="result"></user-button-component>
      </div>
    </div>
    <div class="score-board">
      <p> 승리횟수 : {{ win }}</p>
      <p> 패배횟수 : {{ lose }}</p>
      <p> 연속승리 : {{ continueScore }}</p>
      <p> 총 게임 횟수 : {{ totalRound }}</p>
    </div>
  </div>
</template>

<script>
  import MainHands from '../components/MainHands.vue';
  import ControlBtn from '../components/ControlBtn.vue';
  import userHands from '../components/UserHands.vue';

  export default {
    data(){
      return {
        isReady : true,
        opts : ['rock', 'scissors', 'paper'],
        computer : '',
        win : 0,
        lose : 0,
        continueScore : 0,
        totalRound : 0
      }
    },
    components : {
      'MainHands-component' : MainHands,
      'ControlBtn-component' : ControlBtn,
      'user-button-component' : userHands,
    },
    methods : {
      gameStateToggle : function(){
        this.isReady = !this.isReady;
      },
      result : function(userNum){
        this.gameStateToggle();
        // 1,2,3 중 랜덤 숫자 출력
        var randomNum = Math.floor(Math.random() * 3);

        // 0 주먹 1 가위 2 보
        if(userNum === randomNum){
          console.log('비겼습니다.');
        }else if( (userNum == '0' && randomNum == '1') || (userNum == '1' && randomNum == '2') || (userNum == '2' && randomNum == '0')){
          console.log('유저 WIN!');
          this.setScore('user');
        }else{
          console.log('컴퓨터 WIN!');
          this.setScore('computer');
        }
        this.computer = this.opts[randomNum];
      },
      setScore : function(who){
        if(who == 'user'){
          this.win ++;
          this.continueScore ++;
        }else{
          this.lose ++;
          this.continueScore = 0;
        }
        this.totalRound ++;
      },
      // result : function(userNum){
        
      // }
    }
  }
</script>

<style scoped>
  .wrap{ margin:0 auto; width:700px; }
  .game-area{
    width:500px; 
    float:left;
  }
  .score-board{
    width:200px;
    float:left;
  }
  .options-wrap{
    overflow:hidden;
    margin:0 auto;
    width:360px;
  }
</style>
