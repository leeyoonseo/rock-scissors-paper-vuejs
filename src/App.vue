<template>
  <div id="app">
      <router-view :nicName="nicName" @onChangeNicName="onChangeNicName"></router-view>
  </div>
</template>

<script>
    export default {
        name: 'app',

        data(){
            return{
                nicName : ''
            }
        },

        watch : {
            nicName(newNicName){
                localStorage.setItem('nicName', newNicName);
            }
        },

        created(){
            const nicName = localStorage.getItem('nicName');

            this.nicName = (nicName === '' || nicName === 'null') 
                ? this.getRandomNicName(6) 
                : nicName;
        },

        methods : {           
            getRandomNicName(maxNum){
                let randomNum = '';

                for(let i = 0; i < maxNum; i++){
                    randomNum += Math.floor(Math.random() * 10);
                }

                return `user${randomNum}`;
            },
            
            onChangeNicName(newNicName){
                this.nicName = newNicName;
            }
        }
    }
</script>
