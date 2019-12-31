<template>
    <v-card-text class="body-1" align="center">
        닉네임 변경은<br>
        좌측 상단의 <span class="font-weight-bold">아이콘</span><v-icon>{{ myIcons.account }}</v-icon>을 클릭해주세요.<br><br>
        
        가위·바위·보 게임페이지 이동은<br> 
        <span class="font-weight-bold">'Going...'</span> 버튼을 눌러주세요.
    </v-card-text>
</template>

<script>
export default {
    name : 'TheStepIntro',
    props : {
        myIcons : {
            type : Object,
            required : true
        }
    }
}
</script>

<style>

</style>