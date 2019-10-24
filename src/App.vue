<template>
  <div id="app">
      <router-view :nicName="nicName" @onChangeNicName="onChange"></router-view>
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

            if(nicName === ''){
                this.nicName = this.getRandomNicName();

            }else{
                this.nicName = nicName;
            }
        },

        methods : {           
            getRandomNicName(){
                const random = getRandomNum(6); // n으로 숫자 갯수 조절
                const nicName = `user${random}`;
                
                return nicName;
                
                function getRandomNum(n){
                    let num = '';

                    for(let i = 0; i < n; i++){
                        num += Math.floor(Math.random() * 10);
                    }

                    return num
                }
            },
            
            onChange(newNicName){
                this.nicName = newNicName;
            }
        }
    }
</script>
