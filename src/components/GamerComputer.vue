<template>
    <div :class="['gamer-computer', isReady ? '' : 'on', computer]">
        Computer
    </div>
</template>

<script>
    export default {
        name : 'GamerComputer',
        props : {
            isReady : Boolean,
            computer : String
        },
    }
</script>

<style scoped>
    .gamer-computer{
        margin:0 auto;
        width:125px;
        height: 175px;
        background:url('../assets/img/hands.jpg')no-repeat;
        background-size:384px;
    }
    .gamer-computer.on{
        animation: gameAnimate .5s steps(3,end) infinite;
    }
    .gamer-computer.rock{
        background-position:0 0;
    }
    .gamer-computer.scissors{
        background-position:-128px 0;
    }
    .gamer-computer.paper{
        background-position:-257px 0;
    }
    @keyframes gameAnimate{
        0%{
            background-position-x:0;
        }
        100%{
            background-position-x:-384px;
        }
    } 
</style>

