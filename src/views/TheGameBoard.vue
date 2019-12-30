<template>
    <div class="wrap">
        <p>{{ nicName }}님</p>
        <div calss="noti-text">
            {{ notiText }}
        </div>
        <div class="game-board">
            <gamer-computer 
                :isReady="isReady" 
                :computer="computer"
            />

            <gamer-player 
                :isReady="isReady" 
                :shape="shape" 
                @onClickUserHand="handlerChoose"
            />
        </div>

        <div class="options-wrap">
            <default-button 
                :class="'default-button__start'" 
                :isReady="isReady" 
                @defaultButtonClick="handlerReady"
            >  
                {{ 
                    isReady 
                        ? '시작' 
                        : '정지' 
                }}
            </default-button>
        </div>

        <div class="score-board">
            <the-score-board>
                총 점수 : {{ score.total }}
                무승부 : {{ score.tie }}
                승리 : {{ score.win }}
                패배 : {{ score.lose }}
            </the-score-board>
        </div>
    </div>
</template>

<script>
    import GamerComputer from '../components/GamerComputer.vue';
    import GamerPlayer from '../components/GamerPlayer.vue';
    import DefaultButton from '../components/DefaultButton.vue';
    import TheScoreBoard from '../components/TheScoreBoard.vue';

    export default {
        name : 'TheGameBoard',

        props : {
            nicName : String
        },

        // [TODO] name받기(랜덤 --사용자설정가능--)
        // [TODO] 웹에 데이터 저장(name, score)
        data(){
            return{
                isReady : true,
                computer : '',
                score : {
                    total : 0,
                    tie : 0,
                    win : 0,
                    lose : 0,
                },
                notiText : '',
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
            }
        },

        components : {
            GamerComputer,
            GamerPlayer,
            DefaultButton,
            TheScoreBoard
        },        

        methods : {
            handlerReady(){
                this.isReady = !this.isReady;
            },
            
            handlerChoose(e){
                const userHand = getUserChoosed.call(this,e);
                const computerHand = getComputerChoosed.call(this);

                this.handlerGameStart(userHand.key, computerHand.key);

                // 유저
                function getUserChoosed(e){
                    const selectedClass = e.getAttribute('class');
                    return this.shape.filter((e) => {
                        return selectedClass.match(e.value);
                    })[0];
                }

                // 랜덤 컴퓨터
                function getComputerChoosed(){
                    let random = Math.floor(Math.random() * 3);

                    random = this.shape[random];
                    this.computer = random.value;

                    return random;
                }
            },

            handlerGameStart(user, computer){
                this.setGameLogic(user, computer);
                
                this.isReady = true;
            },
            
            setGameLogic(userHand, computerHand){
                if(userHand === computerHand){
                    this.score.tie++;
                    this.notiText = '무승부';
                    
                }else{
                    let resultText = '';

                    // 묵0. 찌1. 빠2
                    if(userHand === 0){
                        switch(computerHand){
                            case 1 : this.score.total++;
                                     this.score.win++;
                                     resultText = '승리';
                                     break;   
                            case 2 : this.score.total--;
                                     this.score.lose++;
                                     resultText = '패배';
                                     break;   
                            default : console.log(userHand, computerHand);
                                     break;   
                        } // switch

                    }else if(userHand === 1){
                        switch(computerHand){
                            case 0 : this.score.total--;
                                     this.score.lose++;
                                     resultText = '패배';
                                     break;   
                            case 2 : this.score.total++;
                                     this.score.win++;
                                     resultText = '승리';
                                     break;   
                            default : console.log(userHand, computerHand);
                                     break;   
                        } // switch

                    }else if(userHand === 2){
                        switch(computerHand){
                            case 0 : this.score.total++;
                                     this.score.win++;
                                     resultText = '승리';
                                     break;   
                            case 1 : this.score.total--;
                                     this.score.lose++;
                                     resultText = '패배';
                                     break;   
                            default : console.log(userHand, computerHand);
                                     break;   
                        } // switch
                    }

                    this.notiText = resultText;

                    if(this.score.total < 0){
                        this.score.total = 0;
                    }
                }
            }
        }

    }
</script>

<style scoped> 
    .wrap{ 
        margin:50px auto; 
        padding:20px;
        overflow:hidden;
        width:700px; 
        border:1px solid #ccc;
        border-radius:15px;
    }
    .game-board{
        width:400px; 
        float:left;
    }
    .score-board{
        width:300px;
        float:left;
    }
    .options-wrap{
        overflow:hidden;
        margin:0 auto;
        width:360px;
    }
    .welcomeTxt{
        font-size:12px;
        text-align:right;
    }

    .default-button__start{ 
        margin:20px auto; 
        display:block; 
        width:150px;
        height:40px;
        border:0;
        color:#fff;
        border-radius:5px;
        font-size:16px;  
        font-weight:700;
        cursor:pointer;
        background-color:rgb(181, 216, 224);
    }
    .default-button__start.on{
        background-color:rgb(224, 181, 181);
    }
</style>

