<template>
    <div class="wrap">
        <p>{{ nicName }}</p>
        <div calss="noti-text">
            {{ notiText }}
        </div>
        <div class="game-board">
            <gamer-computer :isReady="isReady" 
                            :computer="computer"
            ></gamer-computer>

            <gamer-player :isReady="isReady" 
                          :shape="shape" 
                          @onClickUserHand="onSelect"
            ></gamer-player>
        </div>

        <div class="options-wrap">
            <default-button :class="'default-button__start'" 
                            :isReady="isReady" 
                            @defaultButtonClick="onResume"
            >  
                {{ isReady ? 'Start' : 'Stop' }}
            </default-button>
        </div>

        <div class="score-board">
            <the-score-board>
                {{ score }}
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
                score : 0,
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
        
        mounted(){
        },

        methods : {
            onResume(){
                this.isReady = !this.isReady;
            },
            
            onSelect(e){
                const user = this.getSelectedUser(e)[0];
                const computer = this.getSelectedComputer();

                this.onResult(user.key, computer.key);
            },

            onResult(user, computer){
                this.gameCore(user, computer);
                this.isReady = true;
            },

            gameCore(user, computer){

                // 묵0. 찌1. 빠2
                if(user === computer){
                    sameResult.call(this);
                    
                }else{
                    diffResult.call(this);
                    totalScore.call(this);

                }

                function sameResult(){
                    this.notiText = `무승부`;
                }

                function diffResult(){
                    let result = '';

                    if(user === 0){
                        switch(computer){
                            case 1 : this.score++;
                                     result = '승리';
                                     break;   
                            case 2 : this.score--;
                                     result = '패배';
                                     break;   
                            default : console.log(user, computer);
                                     break;   
                        } // switch

                    }else if(user === 1){
                        switch(computer){
                            case 0 : this.score--;
                                     result = '패배';
                                     break;   
                            case 2 : this.score++;
                                     result = '승리';
                                     break;   
                            default : console.log(user, computer);
                                     break;   
                        } // switch

                    }else if(user === 2){
                        switch(computer){
                            case 0 : this.score++;
                                     result = '승리';
                                     break;   
                            case 1 : this.score--;
                                     result = '패배';
                                     break;   
                            default : console.log(user, computer);
                                     break;   
                        } // switch
                    }

                    this.notiText = `${result}`;

                } // diffResult

                function totalScore(){
                    if(this.score < 0){
                        this.score = 0;
                    }
                }

            },

            getSelectedUser(e){
                const selectedClass = e.getAttribute('class');
                return this.shape.filter((e) => {
                    return selectedClass.match(e.value);
                });
            },

            getSelectedComputer(){
                let random = Math.floor(Math.random() * 3);

                random = this.shape[random];
                this.computer = random.value;

                return random;
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

