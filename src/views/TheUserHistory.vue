<template>
    <div>
        <div>
            {{ nicName }}
            <default-button @defaultButtonClick="onChage">
                {{ isChanging ? '확인' : '변경' }}    
            </default-button>      

            <div v-if="isChanging">
                <input type="text" v-model="newNicName">
                <default-button @defaultButtonClick="onRandom">
                    랜덤    
                </default-button>   
            </div>
        </div>

        <default-button @defaultButtonClick="goMain">
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
            isChanging : false,
            newNicName : ''
        }
    },

    methods : {
        onRandom(){
            this.newNicName = this.$parent.getRandomNicName();
        },

        onChage(){
            if(this.isChanging){
                this.$emit('onChangeNicName', this.newNicName);
            }

            this.isChanging = !this.isChanging;
        },

        goMain(){
            this.$router.push('/');
        }
    }
}
</script>

<style>

</style>