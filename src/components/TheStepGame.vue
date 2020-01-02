<template>
    <v-card-text class="font-weight-bold body-1" align="center">
        <div class="wrap">
            <div v-show="result.notiText !== ''" class="current-state" ref="current">
                {{ result.notiText }}
            </div>

            <div class="score-board">
                <div class="score-all">
                    총 점수 : {{ score.total }} / 
                    무승부 : {{ score.tie }} / 
                    승리 : {{ score.win }} / 
                    패배 : {{ score.lose }}
            </div>
            </div>

            <div class="game-board">
                <gamer-computer 
                    :isGameReady="isGameReady"
                    :result="result"
                />

                <gamer-player 
                    :isGameReady="isGameReady"
                    :shape="shape"
                    @handlerUserHandChoose="handlerUserHandChoose"
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
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="primary"
                            v-on="on"
                            depressed
                            outlined 
                            @click.stop="handlerGameControl"
                        >
                            <span>
                                {{
                                    !isGameReady 
                                        ? '시작' 
                                        : '정지'
                                }}
                            </span>
                        </v-btn>
                    </template>
                    <span>
                        {{
                            !isGameReady 
                                ? '시작' 
                                : '정지'
                        }}
                    </span>
                </v-tooltip>
            </div>
        </div>
    </v-card-text>
</template>

<script>
import GamerComputer from './GamerComputer';
import GamerPlayer from './GamerPlayer';

export default {
    name : 'TheStepGame',

    components : {
        GamerComputer,
        GamerPlayer
    },
    
    props : {
        step : {
            type : [String, Number],
            required : true
        }
    },

    data : () => ({
        isGameReady : false,
        
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
        ],

        result : { 
            userHand : '',
            computerHand : '',
            notiText : ''
        }
    }),

    watch : {
        step(){
            if(this.step !== 2){
                this.resetData();
            }
        }
    },

    methods : {

        resetData(){
            this.score = {
                total : 0,
                tie : 0,
                win : 0,
                lose : 0,
            };

            this.result = { 
                userHand : '',
                computerHand : '',
                notiText : ''
            };

            this.isGameReady = false;
        },

        handlerGameControl(){
            this.isGameReady = !this.isGameReady;
        },

        handlerUserHandChoose(e){
            let userShape = e.currentTarget.dataset.shape;
            
            userShape = this.shape.filter(({ value }) => {
                return value === userShape;
            });

            this.result.userHand = userShape[0];
            this.handlerReadyGame();
        },

        handlerReadyGame(){
            this.handlerComputerHandChoose();

            this.startGame();                
            this.isGameReady = false;
        },

        handlerComputerHandChoose(){
            this.result.computerHand = this.shape[Math.floor(Math.random() * 3)];
        },
        setNotiText(){
            
            this.isNotiTextShow = true;


            setTimeout(() => {

                this.isNotiTextShow = false;
            }, 500);
        },
        startGame(){
            let text = '';
            let { userHand, computerHand } = this.result;
            userHand = userHand.key;
            computerHand = computerHand.key;

            if(userHand === computerHand){
                this.score.tie++;
                text = '무승부';
                
            }else{
                // 묵0. 찌1. 빠2
                if(userHand === 0){
                    switch(computerHand){
                        case 1 : this.score.total++;
                                    this.score.win++;
                                    text = '승리';
                                    break;   
                        case 2 : this.score.total--;
                                    this.score.lose++;
                                    text = '패배';
                                    break;   
                        default : console.log(userHand, computerHand);
                                    break;   
                    } // switch

                }else if(userHand === 1){
                    switch(computerHand){
                        case 0 : this.score.total--;
                                    this.score.lose++;
                                    text = '패배';
                                    break;   
                        case 2 : this.score.total++;
                                    this.score.win++;
                                    text = '승리';
                                    break;   
                        default : console.log(userHand, computerHand);
                                    break;   
                    } // switch

                }else if(userHand === 2){
                    switch(computerHand){
                        case 0 : this.score.total++;
                                    this.score.win++;
                                    text = '승리';
                                    break;   
                        case 1 : this.score.total--;
                                    this.score.lose++;
                                    text = '패배';
                                    break;   
                        default : console.log(userHand, computerHand);
                                    break;   
                    } // switch
                }

                if(this.score.total < 0){
                    this.score.total = 0;
                }
            }

            this.result.notiText = text;

            setTimeout(() => {
                this.result.notiText = '';
            }, 700);
        }
    }
}
</script>

<style scoped>

.wrap{
    position:relative;
}
.score-all{
    font-size:14px;
    font-weight:400;
    color:#333;
}

.current-state{
    display:flex;
    position:absolute;
    font-size:34px;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
    color:#1976d2;
    animation:showText .5s;
}

@keyframes showText {
    0%{
        transform:scale(0);
    }
    100%{
        transform:scale(1);
    }
}
</style>