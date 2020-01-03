<template>
  <div id="app">
      <v-app id="inspire">
        <v-content>
            <v-card class="elevation-12 mx-12 my-10">
                <v-progress-linear 
                    absolute top
                    color="blue lighten-5"
                    :active="isLoadingBarShow"
                    :indeterminate="isLoadingBarShow"
                >
                </v-progress-linear>

                <v-toolbar
                    color="primary"
                    dark
                    flat
                >
                    <v-toolbar-title>
                        <v-icon>mdi-gamepad-variant-outline</v-icon> Rock Scissors Paper Game
                    </v-toolbar-title>

                    <v-spacer />

                    <v-tooltip top>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                icon
                                large
                                v-on="on"
                                @click="handlerMoveEdit"
                            >
                                <v-icon>
                                    mdi-account
                                </v-icon>
                            </v-btn>
                        </template>
                        <span>Edit My Name</span>
                    </v-tooltip>
                </v-toolbar>

                <!-- [D] 사용자 이름 설정 콘텐츠를 제외하고 노출 -->
                <v-card-subtitle v-show="step !== 1">
                    {{ userName }}님
                </v-card-subtitle>

                <!-- [D] 메인 콘텐츠 시 노출 -->
                <the-step-intro v-show="step === 0"/>

                <!-- [D] 사용자 이름 설정 콘텐츠 시 노출 -->
                <the-step-my-page 
                    v-show="step === 1"
                    :newUserName="newUserName"
                    @onSave="handlerSaveNewUserName"
                    @onRefresh="handlerRefreshNewUserName"
                />

                <!-- [D] 게임 콘텐츠 시 노출 -->
                <div v-show="step === 2">
                    <the-step-game :step="step"/>
                </div>
                
                <v-card-actions>
                    <v-spacer />

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn 
                                class="text-none"
                                color="primary"
                                v-on="on"
                                @click="handlerMoveGame"
                            >
                                {{
                                    step === 0 
                                        ? 'Going...' 
                                        : 'Exit...' 
                                }}
                            </v-btn>
                        </template>
                        <span>
                            {{
                                step === 0 
                                    ? '게임하기...' 
                                    : '나가기...' 
                            }}
                        </span>
                    </v-tooltip>
                </v-card-actions>
            </v-card>
        </v-content>
        
        <v-snackbar
            top
            v-model="isSnackBarShow"
            :timeout="3000"
        >
            {{ alertText }}
        </v-snackbar>
    </v-app>   
  </div>
</template>

<script>
    import TheStepIntro from './views/TheStepIntro';
    import TheStepMyPage from './views/TheStepMyPage';
    import TheStepGame from './views/TheStepGame';

    export default {
        name: 'app',

        components : {
            TheStepIntro,
            TheStepMyPage,
            TheStepGame
        },

        data : () => ({
            step : 0, // 0 - 메인 | 1 - 이름 수정 | 2 - 게임

            userName : '',
            newUserName : '',

            alertText : '', // alert
            
            isLoadingBarShow : false,
            isSnackBarShow : false,
        }),

        created(){
            this.userName = localStorage.getItem('userName') || this.createRandomUserName();
        },

        methods : {

            // 사용자 이름 변경으로...
            handlerMoveEdit(){
                this.changeStep.call(this, 1);
                this.newUserName = this.userName;
            },
        
            // 게임으로...
            handlerMoveGame(){
                this.changeStep.call(this, (this.step === 0) ? 2 : 0);
            },


            // 사용자 이름 저장
            handlerSaveNewUserName(){
                // 유지
                if(this.userName === this.newUserName){
                    this.alertText = `기존 닉네임 [${this.newUserName}] 유지`;
                    
                // 변경
                }else{
                    this.alertText = `새로운 닉네임 [${this.newUserName}] 저장`;
                    this.userName = this.newUserName;
                }

                this.isSnackBarShow = true;
                this.step = 0;
            },

            // 랜덤 사용자 이름 설정
            handlerRefreshNewUserName(){
                this.newUserName = this.createRandomUserName();
            },

            /**
             * 스텝 변경
             * @param {Number} step - 이동할 스텝 번호
             */
            changeStep(step){
               this.isLoadingBarShow = true;

                setTimeout(() => {
                    this.step = step;
                    this.isLoadingBarShow = false;
                }, 1000);
            },

            /**
             * 사용자 이름 랜덤으로 생성
             * @return {String} user + 랜덤숫자
             * @param {Number, String} limit - 랜덤 숫자값의 길이, 기본 6자
             */
            createRandomUserName(limit = 6){
                let randomNumber = '';

                for(let i = 0; i < limit; i++){
                    randomNumber += Math.floor(Math.random() * 10);
                }

                return `user${randomNumber}`;
            }
        }
    }
</script>

<style>
    ul,ol{
        padding:0;
        margin:0;
        list-style:none;
    }
</style>