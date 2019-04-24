<template>
  <div class="score-board-wrap">
    <button class="reset" v-on:click="onClick">기록삭제</button>
    <p class="welcomeTxt" v-if="this.props.userName">{{ this.props.userName }} 님, 안녕하세요</p>    
    <table>
      <tbody>
        <tr>
          <td>이겼다</td>
          <td>{{ this.props.count.win }} 번</td>
        </tr>
        <tr>
          <td>비겼다</td>
          <td>{{ this.props.count.draw }} 번</td>
        </tr>
        <tr>
          <td>졌다</td>
          <td>{{ this.props.count.lose }} 번</td>
        </tr>
        <tr>
          <td>연속 승리</td>
          <td>{{ this.props.count.continue }} 번</td>
        </tr>
        <tr>
          <td>총 게임 횟수</td>
          <td>{{ this.props.count.total }} 번</td>
        </tr>
      </tbody>
    </table>    
    <p class="resultTxt" v-if="this.props.isReady">{{ this.props.notiTxt }}</p>
  </div>
</template>

<script>
export default {
  props:['props'],
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
  .welcomeTxt{
    font-size:12px;
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
