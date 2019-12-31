<template>
    <div class="gamer_player_wrap">
        <v-tooltip bottom
            v-for="(li, i) in shape" 
            :key="i"
        >
            <template v-slot:activator="{ on }">
                <v-btn
                    class="default-button"
                    :class="`default-button__${li.value}`"
                    v-on="on"
                >
                    <span class="default-button__title">{{ li.value }}</span>
                </v-btn>
            </template>
            <span>{{ li.value }}</span>
        </v-tooltip>

        

                    <!-- class="default-button"
            :class="`default-button__${li.value}`" 
            
            :disabled="isGameReady" 
            @defaultButtonClick="onClick" -->
            <!-- <span class="default-button__title">{{ li.value }}</span> -->
        <!-- <default-button class="default-button"
                        v-for="(li, i) in shape" 
                        :class="`default-button__${li.value}`" 
                        :key="i" :disabled="isReady" 
                        @defaultButtonClick="onClick"
        >
            <span class="default-button__title">{{ li.value }}</span>
        </default-button> -->
    </div>
</template>

<script>
    // import DefaultButton from '../components/DefaultButton.vue';

    export default {
        props : {
            isGameReady : Boolean,
            shape : Array
        },

        components : {
            // DefaultButton
        },

        
        methods : {
            onClick(e){
                this.$emit('onClickUserHand', e);
            }
        }
    }
</script>

<style scoped>  
    /* .gamer_player_wrap{
        overflow:hidden;
    } */
    .gamer_player_wrap:after{
        display:block;
        content:'';
        clear:both;
    }

    .default-button{
        display:block; 
        padding:0;
        margin:0 20px;
        width:80px;
        height:80px;
        float:left;
        cursor:pointer;    
        border:1px solid #ccc;
        box-sizing:border-box;
        border-radius:50%;
        background:url('../assets/img/hands.jpg')no-repeat;
        background-color:#fff;
    }

    .default-button:not([disabled]):hover,
    .default-button:active,
    .default-button.on{
        border-color:#333;
    }
    .default-button[disabled]{
        cursor:default;
    } 
    .default-button__title{display:block;position:relative;z-index:-1;}

    .default-button__rock{ 
        background-size:190px;
        background-position:14px -10px;
    }
    .default-button__scissors{ 
        background-size:186px;
        background-position:-47px 3px;
    }
    .default-button__paper{ 
        background-size:180px;
        background-position:-107px 4px; 
    }
</style>
