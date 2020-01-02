<template>
  <div>
      <!-- [TODO] 
            1. 로컬스토리지 이긴 횟수 진 횟수 저장
            2. 승,패,무승부 횟수
            3. 연속승리
            4. 총게임횟수
       -->
        총 점수 : {{ score.total }} /
        무승부 : {{ score.tie }} /
        승리 : {{ score.win }} /
        패배 : {{ score.lose }}
  </div>
</template>

<script>
    export default {
        name : 'TheScoreBoard',

        props : {
            score : {
                type : Object,
                required : true
            }
        }
        
    }
</script>

<style scoped>
</style>
