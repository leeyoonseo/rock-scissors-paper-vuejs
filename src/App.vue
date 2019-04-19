<template>
  <div id="app">
    <Main-page></Main-page>
  </div>
</template>

<script>
  import Main from './pages/Main.vue';

  export default {
    components : {
      'Main-page' : Main
    }
  }
</script>

<!--
 TODO
 -start 버튼 클릭하면 실행
 -state가 true면 가위바위보 시작, false면 가위바위보 멈춤
 -가위 바위 보 입력 버튼 생성
 -가위 바위 보 결과 표출
-->

<style>
</style>
