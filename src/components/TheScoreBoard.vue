<template>
  <div class="score-board-wrap">
      <slot></slot>
      <!-- [TODO] 
            1. 로컬스토리지 이긴 횟수 진 횟수 저장
            2. 승,패,무승부 횟수
            3. 연속승리
            4. 총게임횟수
       -->
  </div>
</template>

<script>
    export default {
        name : 'TheScoreBoard',
        
    }
</script>

<style scoped>
</style>
