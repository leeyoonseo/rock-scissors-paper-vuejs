<template>
    <v-card-text 
        class="font-weight-bold body-1" 
        align="center"
    >
        <div class="game-content__wrap">
            <div 
                v-show="isResultTextShow" 
                class="game-content__alert" 
            >
                {{ gameResult.text }}
            </div>

            <ul class="game-content__board-score">
                <li>총 점수 : {{ score.total }}</li>
                <li>무승부 : {{ score.tie }}</li>
                <li>승리 : {{ score.win }}</li>
                <li>패배 : {{ score.lose }}</li>
            </ul>

            <the-computer-hand
                :isGameStart="isGameStart"
                :gameResult="gameResult"
            />

            <the-player-hands
                :isGameStart="isGameStart"
                :shape="shape"
                @onClickUserHand="handlerUserHand"
            />

            <div>
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
                                    isGameStart 
                                        ? '정지'
                                        : '시작'
                                }}
                            </span>
                        </v-btn>
                    </template>
                    <span>
                        {{ 
                            isGameStart 
                                ? '정지'
                                : '시작'
                        }}
                    </span>
                </v-tooltip>
            </div>
        </div>
    </v-card-text>
</template>

<script>
import TheComputerHand from '../components/TheComputerHand';
import ThePlayerHands from '../components/ThePlayerHands';

export default {
    name : 'TheStepGame',

    components : {
        TheComputerHand,
        ThePlayerHands
    },
    
    props : {
        step : {
            type : [String, Number],
            required : true
        }
    },

    data : () => ({
        isGameStart : false,
        isResultTextShow : false,
        
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

        score : {
            total : 0,
            tie : 0,
            win : 0,
            lose : 0,
        },

        gameResult : { 
            text : '',
            userHand : '',
            computerHand : ''
        }
    }),

    watch : {
        step(){
            if(this.step !== 2){
                this.resetData();
            }
        },

        gameResult : {
            deep : true,
            handler(e){
                return this.isResultTextShow = (e.text === '') 
                    ? false 
                    : true;
            }
        }
    },

    methods : {

        // 게임 시작, 정지 버튼
        handlerGameControl(){
            this.isGameStart = !this.isGameStart;
        },

        /**
         * 사용자 손 클릭
         * @param {Object} currentTarget - 호출 타겟
         */
        handlerUserHand({ currentTarget }){
            let userShape = currentTarget.dataset.shape;
            
            userShape = this.shape.filter(({ value }) => {
                return value === userShape;
            });

            this.gameResult.userHand = userShape[0];
            this.setGameReady();
        },

        // 컴퓨터 손 설정
        setComputerHand(){
            this.gameResult.computerHand = this.shape[Math.floor(Math.random() * 3)];
        },

        setGameReady(){
            this.setComputerHand();
            this.setGameReseult();

            this.isGameStart = false;
        },

        // 게임 결과
        setGameReseult(){
            let text = '';
            let { userHand, computerHand } = this.gameResult;
            
            userHand = userHand.key;
            computerHand = computerHand.key;

            // 무승부            
            if(userHand === computerHand){
                this.score.tie++;
                text = '무승부';

            // 승리, 패배 
            }else{
                if(userHand === 0 && computerHand === 1 // 0 묵
                || userHand === 1 && computerHand === 2  // 1 찌
                || userHand === 2 && computerHand === 0){ // 2 빠
                    setScore.call(this, true);

                }else{
                    setScore.call(this, false);
                }

                if(this.score.total < 0){
                    this.score.total = 0;
                }
            }

            this.gameResult.text = text;

            setTimeout(() => {
                this.gameResult.text = '';
            }, 700);

            /**
             * 스코어 점수 설정
             * @ref setScore.call(this);로 호출
             * @param {Boolean} result - true 승리, false 패배
             */
            function setScore(result){
                if(result){
                    this.score.total++;
                    this.score.win++;
                    text = '승리';
                }else{
                    this.score.total--;
                    this.score.lose++;
                    text = '패배';
                }
            }            
        },

        resetData(){
            this.score = {
                total : 0,
                tie : 0,
                win : 0,
                lose : 0,
            };

            this.gameResult = { 
                text : '',
                userHand : '',
                computerHand : ''
            };

            this.isGameStart = false;
            this.isResultTextShow = false;
        }

    } // methods
}
</script>

<style scoped>
    .game-content__wrap{
        position:relative;
    }

    .game-content__alert{
        display:flex;
        justify-content:center;
        align-items:center;
        position:absolute;
        width:100%;
        height:100%;
        font-size:34px;
        color:#1976d2;
        animation:showText .5s;
    }

    .game-content__board-score{
        font-size:14px;
        font-weight:400;
        color:#333;
    }

    .game-content__board-score > li{
        display:inline-block;
    }

    .game-content__board-score > li + li{
        margin-left:10px;
    }

    .game-content__board-score > li:after{
        content:'|';
        display:inline-block;
        margin-left:10px;
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