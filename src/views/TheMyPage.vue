<template>
    <div>
        <div>
            <div>
                <p v-show="!isNicNameChanging">{{ nicName }}</p>

                <div v-show="isNicNameChanging">
                    <input type="text" ref="newNicName" :value="nicName">
                    <default-button @defaultButtonClick="handlerRandomNicName">
                        랜덤생성    
                    </default-button>   
                </div>
            </div>

            <div>
                <default-button @defaultButtonClick="handlerChageNicName">
                    {{ 
                        isNicNameChanging 
                            ? '저장하기' 
                            : '변경하기' 
                    }}    
                </default-button>      
                <default-button v-show="isNicNameChanging" @defaultButtonClick="handlerCancelNicName">
                    취소하기
                </default-button>
            </div>
        </div>

        <default-button @defaultButtonClick="goMainPage">
            메인으로
        </default-button>      
    </div>
</template>

<script>
import DefaultButton from '../components/DefaultButton.vue';

export default {
    name : 'TheUserHistory',
    
    components : {
        DefaultButton
    },

    props : {
        nicName : String
    },

    data(){
        return{
            isNicNameChanging : false
        }
    },

    methods : {
        handlerRandomNicName(){
            this.$refs.newNicName.value = this.$parent.getRandomNicName();
        },

        handlerChageNicName(){
            if(this.isNicNameChanging){
                this.$emit('onChangeNicName', this.$refs.newNicName.value);
            }

            this.isNicNameChanging = !this.isNicNameChanging;
        },

        handlerCancelNicName(){
            this.isNicNameChanging = false;
        },

        goMainPage(){
            this.$router.push('/');
        }
    }
}
</script>

<style>

</style>