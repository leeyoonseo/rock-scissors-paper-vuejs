<template>
    <v-card-text class="font-weight-bold body-1" align="center">
        <div class="wrap">
            <div class="game-board">
                <gamer-computer 
                    :isGameReady="isGameReady"
                />

                <gamer-player 
                    :isGameReady="isGameReady"
                    :shape="shape"
                />

                <!-- <gamer-computer 
                :isReady="isReady" 
                :computer="computer"
                />

                <gamer-player 
                :isReady="isReady" 
                :shape="shape" 
                @onClickUserHand="handlerChoose"
                /> -->
            </div>

            <div class="options-wrap">
                <!-- <default-button 
                :class="'default-button__start'" 
                :isReady="isReady" 
                @defaultButtonClick="handlerReady"
                >  
                {{ 
                isReady 
                    ? '시작' 
                    : '정지' 
                }}
                </default-button> -->
            </div>

            <div class="score-board">
                <!-- <the-score-board>
                총 점수 : {{ score.total }}
                무승부 : {{ score.tie }}
                승리 : {{ score.win }}
                패배 : {{ score.lose }}
                </the-score-board> -->
            </div>
        </div>
    </v-card-text>
</template>

<script>
import GamerComputer from '../components/GamerComputer';
import GamerPlayer from '../components/GamerPlayer';

export default {
    name : 'TheStepGame',

    components : {
        GamerComputer,
        GamerPlayer
    },

    data : () => ({
        isGameReady : false,

        notiText : '',

        
        computer : '',
        score : {
            total : 0,
            tie : 0,
            win : 0,
            lose : 0,
        },

        shape : [ 
            {
                key : 0,
                value : 'rock'
            }, 
            { 
                key : 1,
                value : 'scissors'
            },
            {
                key : 2,
                value : 'paper'
            } 
        ]
    })
}
</script>

<style>

</style>