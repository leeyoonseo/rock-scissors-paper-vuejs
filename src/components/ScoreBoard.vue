<template>
  <div class="score-board-wrap">
    <button class="reset" v-on:click="onClick">기록삭제</button>     
    <table>
      <tbody>
        <tr>
          <td>유저 승</td>
          <td>{{ this.data.count.win }} 번</td>
        </tr>
        <tr>
          <td>무승부</td>
          <td>{{ this.data.count.draw }} 번</td>
        </tr>
        <tr>
          <td>컴퓨터 승</td>
          <td>{{ this.data.count.lose }} 번</td>
        </tr>
        <tr>
          <td>유저 연속 승리</td>
          <td>{{ this.data.count.continue }} 번</td>
        </tr>
        <tr>
          <td>총 게임 횟수</td>
          <td>{{ this.data.count.total }} 번</td>
        </tr>
      </tbody>
    </table>    
    <p class="resultTxt" v-if="this.data.isReady">{{ this.data.notiTxt }}</p>
  </div>
</template>

<script>
export default {
  props:['data'],
  methods : {
    onClick : function(){
      this.$emit('onClick');
    }
  }
}
</script>

<style scoped>
  .score-board-wrap{
    text-align:right;
  } 
  .resultTxt{
    text-align:center;
    color:red;
  }
  table{
    border-spacing:0px;
    border-collapse:collapse;
    margin-top:20px;
    width: 100%;
    font-size:14px;
    text-align:left;
  }
  td{
    border:1px solid #ccc;
    box-sizing:border-box;
    padding:10px;     
  }
  td:last-child{
    text-align:center;
    width:50%;
  }
  button{ 
  display:inline-block; 
  width:70px;
  height:25px;
  border:0;
  color:#fff;
  border-radius:5px;
  font-size:12px;  
  cursor:pointer;
  background-color:#ccc;
}
button:hover{
  background-color:red;
}
</style>
