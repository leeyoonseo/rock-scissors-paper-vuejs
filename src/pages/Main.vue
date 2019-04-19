<template>
  <div class="wrap">
    <MainHands-component v-bind:propsdata="isReady"></MainHands-component>
    <ControlBtn-component class="controls" v-bind:propsdata="isReady" v-on:onClick="gameStateToggle"></ControlBtn-component>
    <div class="options-wrap">
      <!-- TODO 반복문으로 생성 할 수 있을듯???. -->
      <userHands-component v-bind:class="{opt}" v-for="opt in handsOpts" v-bind:props="isReady"></userHands-component>

      <!-- <RockHand-component class="user rock" v-bind:propsdata="{isReady,opt}" v-on:onClick="compareResult"></RockHand-component>


      <ScissorsHand-component class="user scissors" v-bind:propsdata="{isReady,opt}" v-on:onClick="compareResult"></ScissorsHand-component>
      <PaperHand-component class="user paper" v-bind:propsdata="{isReady,opt}" v-on:onClick="compareResult"></PaperHand-component> -->
    </div>
  </div>

</template>

<script>
  import MainHands from '../components/MainHands.vue';
  import ControlBtn from '../components/ControlBtn.vue';

  import userHands from '../components/UserHands.vue';


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
        opt : ['rock', 'scissors', 'paper'],
        handsOpts : ['rock', 'scissors', 'paper'],
        win : 0,
        lose : 0,
        continueScore : 0,
        totalRound : 0

        // userHand : ''
      }
    },
    components : {
      'MainHands-component' : MainHands,
      'ControlBtn-component' : ControlBtn,
      'RockHand-component' : Rock,
      'ScissorsHand-component' : Scissors,
      'PaperHand-component' : Paper,

      'userHands-component' : userHands,
    },
    methods : {
      gameStateToggle : function(){
        this.isReady = !this.isReady;
      },
      setComputerHand : function(){
        
      },
      compareResult : function(userNum){
        this.gameStateToggle();

        // 1,2,3 중 랜덤 숫자 출력
        var randomNum = Math.floor(Math.random() * 3);
        setClass(randomNum);


        if(userNum === randomNum){
          console.log('비겼다');
        }else if( (this.opt[userNum] == 'rock' && this.opt[randomNum] == 'scissors') 
                ||(this.opt[userNum] == 'scissors' && this.opt[randomNum] == 'paper')
                ||(this.opt[userNum] == 'paper' && this.opt[randomNum] == 'rock')){
          console.log('user가 이겼습니다.');
          this.setScore(true);
        }else{
          console.log('computer가 이겼습니다.');
          this.setScore(false);
        }
      },
      setClass : function(randomNum){
        // removeClassName
        var computerHand = document.querySelector('.hands');
        for (var i = 0; i < this.opt.length; i++) {
          computerHand[i].classList.remove(opt[i]);
        }
        
        // addClassName
        computerHandclassList.add(opt[randomNum]);
      },
      setScore : function(result){
        if(result){
          this.win ++;
          this.continueScore ++;
        }else{
          this.lose ++;
          this.continueScore = 0;
        }
        this.totalRound ++;
      },
      result : function(userNum){
        
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
