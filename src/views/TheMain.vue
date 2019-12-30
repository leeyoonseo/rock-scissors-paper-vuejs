<template>
    <div>      
        <div @show="nicName">
            {{ nicName }}님 환영합니다.
        </div>

        <div>
            <default-button @defaultButtonClick="goGameStartPage">
                게임시작
            </default-button>
            <default-button @defaultButtonClick="goMypage">
                닉네임변경
            </default-button>
        </div>
    </div>
</template>

<script>
import DefaultButton from '../components/DefaultButton.vue';

export default {
    name : 'TheMain',

    components : {
        DefaultButton
    },

    props : {
        nicName : String
    },
    
    methods : {
        goGameStartPage(){
            this.$router.push('/game');
        },

        goMypage(){
            this.$router.push('/mypage');
        }
    }
}
</script>

<style>

</style>