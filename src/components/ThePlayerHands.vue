<template>
    <div class="player__hand__wrap">
        <v-tooltip 
            bottom
            v-for="(li, i) in shape" 
            :key="i"
        >
            <template v-slot:activator="{ on }">
                <v-btn
                    class="player__hand__button"
                    :class="`player__hand__button__${li.value}`"
                    ref="player"
                    text
                    outlined
                    fab
                    v-on="on"
                    :disabled="!isGameStart"
                    :data-shape="li.value"
                    @click.stop="handlerClick"
                >
                    <span class="player__hand__title">
                        {{ li.value }}
                    </span>
                </v-btn>
            </template>
            <span>{{ li.value }}</span>
        </v-tooltip>
    </div>
</template>

<script>
    export default {
        name : 'GamerPlayer',

        props : {
            isGameStart : Boolean,
            shape : Array
        },

        components : {
            // DefaultButton
        },

        
        methods : {
            handlerClick(e){
                this.$emit('onClickUserHand', e);
            }
        }
    }
</script>

<style scoped>  
    .player__hand__wrap{
        display:inline-block;
        overflow:hidden;
        margin-bottom:30px;
    }

    .player__hand__button{
        float:left;
        display:block; 
        padding:0;
        margin:0 20px;
        width:80px !important;
        height:80px !important;
        box-sizing:border-box;
        background:#fff url('../assets/img/hands.jpg')no-repeat;
        cursor:pointer;    
    }

    .player__hand__button:hover{
        border:1px solid #1976d2 !important; 
    }

    .player__hand__title{
        display:block;
        position:relative;
        z-index:-1;
    }

    .player__hand__button__rock{ 
        background-size:190px;
        background-position:14px -10px;
    }

    .player__hand__button__scissors{ 
        background-size:186px;
        background-position:-47px 3px;
    }

    .player__hand__button__paper{ 
        background-size:180px;
        background-position:-107px 4px; 
    }    
</style>
