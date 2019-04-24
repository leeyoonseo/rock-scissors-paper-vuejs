<template>
  <div class="wrap">
    <div class="game-board">
      <Computer v-bind:props="{isReady, computerClass}"></Computer>
      <GameControlButton v-bind:propsdata="isReady" v-on:onClick="toggleIsReady"></GameControlButton>
      <div class="options-wrap"><Player v-for="(opt, index) in opts" v-bind:props="{isReady, opts, index}" v-bind:key="`opt-${index}`" v-on:onClick="result"></Player></div>
    </div>
    <div class="score-board">
      <p class="welcomeTxt" v-if="this.userName">{{ this.userName }} 님, 안녕하세요</p>   
      <ScoreBoard v-bind:props="{count, notiTxt, isReady}" v-on:onClick="resetData"></ScoreBoard>
    </div>
  </div>
</template>
<script>
  import Computer from '../components/Computer.vue';
  import GameControlButton from '../components/GameControlButton.vue';
  import Player from '../components/Player.vue';
  import ScoreBoard from '../components/ScoreBoard.vue';

  export default {
    data(){
      return {
        isReady : true,
        opts : ['rock', 'scissors', 'paper'],
        computerClass : '',
        userName : '',
        notiTxt : '',
        count : {
          win : 0,
          draw : 0,
          lose : 0,
          continue : 0,
          total : 0
        }
      }
    },
    created (){
      var name = prompt('안녕하세요. \n이름을 입력해주세요.\n미 입력시 노출되지 않습니다.');
      this.userName = name;
    },
    components : {
      Computer,
      GameControlButton,
      Player,
      ScoreBoard
    },
    methods : {
      // ready 상태 전환
      toggleIsReady : function(){
        this.isReady = !this.isReady;
      },

      // 게임 결과, player-component에서 호출
      result : function(userNum){
        this.toggleIsReady();
        // 1,2,3 중 랜덤 숫자 출력
        var randomNum = Math.floor(Math.random() * 3);

        // 0 주먹 1 가위 2 보
        if(userNum === randomNum){
          this.setScore('draw');
          this.notiTxt = '무승부입니다.';
        }else if( (userNum == '0' && randomNum == '1') || (userNum == '1' && randomNum == '2') || (userNum == '2' && randomNum == '0')){
          this.setScore('win');
          this.notiTxt = '유저가 이겼습니다.';
        }else{
          this.setScore('lose');
          this.notiTxt = '컴퓨터가 이겼습니다.';
        }        
        this.computerClass = this.opts[randomNum];
      },
      setScore : function(who){
        if(who == 'win'){
          this.count.win ++;
          this.count.continue ++;
        }else if(who == 'lose'){
          this.count.lose ++;
          this.count.continue = 0;
        }else{
          this.count.draw ++;
        }
        this.count.total ++;
      },
      resetData : function(){
        this.count.win = 0;
        this.count.lose = 0;
        this.count.draw = 0;
        this.count.continue = 0;
        this.count.total = 0;
      }
    }
  }
</script>

<style scoped> 
  .wrap{ 
    margin:50px auto; 
    padding:20px;
    overflow:hidden;
    width:700px; 
    border:1px solid #ccc;
    border-radius:15px;
  }
  .game-board{
    width:400px; 
    float:left;
  }
  .score-board{
    width:300px;
    float:left;
  }
  .options-wrap{
    overflow:hidden;
    margin:0 auto;
    width:360px;
  }
   .welcomeTxt{
    font-size:12px;
    text-align:right;
  }
</style>

