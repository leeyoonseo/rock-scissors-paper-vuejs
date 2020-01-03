<template>
    <div
        class="computer__hand" 
        :class="[
            isGameStart ? 'on' : '', 
            gameResult.computerHand.value
        ]"
    >
    </div>
</template>

<script>
    export default {
        name : 'TheComputerHand',
        props : {
            isGameStart : {
                type : Boolean,
                required : true
            },

            gameResult : {
                type : Object,
                required : true
            }
        },
    }
</script>

<style scoped>
    .computer__hand{
        margin:0 auto 30px;
        width:125px;
        height: 175px;
        background:url('../assets/img/hands.jpg')no-repeat;
        background-size:384px;
    }

    .computer__hand.on{
        animation: handAni .5s steps(3, end) infinite;
    }

    .computer__hand.rock{
        background-position:0 0;
    }

    .computer__hand.scissors{
        background-position:-128px 0;
    }

    .computer__hand.paper{
        background-position:-257px 0;
    }

    @keyframes handAni{
        0%{
            background-position-x:0;
        }
        100%{
            background-position-x:-384px;
        }
    } 
</style>

