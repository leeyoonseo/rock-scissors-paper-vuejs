<template>
    <v-app id="inspire">
        <v-content>
            <v-card class="elevation-12 mx-12 my-10">
                    <v-progress-linear 
                        :active="isLoadingBarShow"
                        :indeterminate="isLoadingBarShow"
                        absolute
                        top
                        value="10"
                        color="indigo"
                    >
                    </v-progress-linear>

                <v-toolbar
                    color="primary"
                    dark
                    flat
                >
                    <v-toolbar-title>
                        <v-icon>
                            {{ myIcons.gamePad }}
                        </v-icon>
                            Rock Scissors Paper Game
                    </v-toolbar-title>
                    <v-spacer />

                    <v-tooltip top>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                icon
                                large
                                v-on="on"
                                @click="stepChangeEditContent"
                            >
                                <v-icon>
                                    {{ myIcons.account }} 
                                </v-icon>
                            </v-btn>
                        </template>
                        <span>닉네임수정</span>
                    </v-tooltip>
                </v-toolbar>

                <v-card-subtitle v-show="step !== 1">{{ nicName }}님</v-card-subtitle>

                <!-- step 0 -->
                <the-step-intro 
                    v-show="step === 0"
                    :myIcons="myIcons"
                />
                <!-- // step 0 -->

                <!-- step 1 : 닉네임 수정 -->
                <the-step-my-page 
                    v-show="step === 1"
                    :myIcons="myIcons"
                    :newNicName="newNicName"
                    @handlerSetNewNicName="handlerSetNewNicName"
                    @handlerSaveNewNicName="handlerSaveNewNicName"
                />
                <!-- // step 1 -->

                <!-- step 2 : 게임 -->
                <div v-show="step === 2">
                    <the-step-game
                        :step="step"
                    />
                </div>
                <!-- // step 2 -->
                
                <v-card-actions>
                    <v-spacer />

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn 
                                class="text-none"
                                color="primary"
                                v-on="on"
                                @click="handlerStepChange"
                            >
                                {{
                                    step === 0 ? 'Going...' : 'Exit...' 
                                }}
                            </v-btn>
                        </template>
                        <span>
                            {{
                                step === 0 ? '게임하기...' : '나가기...' 
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
            {{ snackbarText }}
        </v-snackbar>
    </v-app>   
</template>

<script>
import TheStepIntro from '../components/TheStepIntro';
import TheStepMyPage from '../components/TheStepMyPage';
import TheStepGame from '../components/TheStepGame';
import { mdiAccount, mdiGamepadVariantOutline, mdiCheckboxMarkedCircle } from '@mdi/js'

export default {
    name : 'TheMain',

    components : {
        TheStepIntro,
        TheStepMyPage,
        TheStepGame
    },

    data : () => ({

        nicName : '',
        newNicName : '',

        // 0 : 메인
        // 1 : 닉네임 수정
        // 2 : 게임
        step : 0,

        myIcons : {
            account : mdiAccount,
            gamePad : mdiGamepadVariantOutline,
            check : mdiCheckboxMarkedCircle
        },

        isLoadingBarShow : false,
        isSnackBarShow : false,

        // newNicName : '',
        snackbarText : ''
    }),

    watch : {
        nicName(newNicName){
            localStorage.setItem('nicName', newNicName);
        }
    }, 

    created(){
        const nicName = localStorage.getItem('nicName');

        this.nicName = (nicName === '' || nicName === 'null') 
            ? this.getRandomNicName() 
            : nicName;
    },

    methods : {

        // 랜덤닉네임생성
        getRandomNicName(maxNum){
            const max = maxNum || 6;
            let randomNum = '';

            for(let i = 0; i < max; i++){
                randomNum += Math.floor(Math.random() * 10);
            }

            return `user${randomNum}`;
        },

        // 닉네임 수정
        handlerSaveNewNicName(){  

            this.snackbarText = (this.nicName === this.newNicName) 
                ? `기존 닉네임 [${this.newNicName}] 유지` 
                : `새로운 닉네임 [${this.newNicName}] 저장`;


            this.nicName = this.newNicName;

            this.isSnackBarShow = true;
            this.step = 0;
        },

        handlerSetNewNicName(){
            this.newNicName = this.getRandomNicName();
        },

        // 스텝
        stepChangeEditContent(){
            this.step = 1;

            this.newNicName = this.nicName;
        },
       

        handlerStepChange(){
            if(this.step === 0){    
                this.step = 2;

            }else{
                this.step = 0;
            }
        }
    }
}
</script>

<style>
</style>