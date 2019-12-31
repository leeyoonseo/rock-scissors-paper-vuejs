<template>
  <div id="app">
      <TheMain />
  </div>
</template>

<script>
    import TheMain from './views/TheMain';

    export default {
        name: 'app',

        components : {
            TheMain
        },

        data(){
            return{
                // nicName : ''
            }
        },

        // watch : {
        //     nicName(newNicName){
        //         localStorage.setItem('nicName', newNicName);
        //     }
        // },

        // created(){
        //     const nicName = localStorage.getItem('nicName');

        //     this.nicName = (nicName === '' || nicName === 'null') 
        //         ? this.getRandomNicName(6) 
        //         : nicName;
        // },

        methods : {           
            // getRandomNicName(maxNum){
            //     let randomNum = '';

            //     for(let i = 0; i < maxNum; i++){
            //         randomNum += Math.floor(Math.random() * 10);
            //     }

            //     return `user${randomNum}`;
            // },
            
            // onChangeNicName(newNicName){
            //     this.nicName = newNicName;
            // }
        }
    }
</script>
<style>
</style>