<template>
    <div class="gamer_player_wrap">
        <v-tooltip bottom
            v-for="(li, i) in shape" 
            :key="i"
        >
            <template v-slot:activator="{ on }">
                <v-btn
                    :class="`default-button__${li.value}`"
                    ref="player"
                    @click.stop="handlerUserHandChoose"
                    text
                    outlined
                    fab
                    class="default-button"
                    v-on="on"
                    :disabled="!isGameReady"
                    :data-shape="li.value"
                >
                    <span class="default-button__title">{{ li.value }}</span>
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
            isGameReady : Boolean,
            shape : Array
        },

        components : {
            // DefaultButton
        },

        
        methods : {
            handlerUserHandChoose(e){
                this.$emit('handlerUserHandChoose', e);
            }
        }
    }
</script>

<style scoped>  
    .gamer_player_wrap{
        margin-bottom:30px;
        display:inline-block;
        overflow:hidden;
    }
    .default-button{
        display:block; 
        padding:0;
        margin:0 20px;
        width:80px !important;
        height:80px !important;
        float:left;
        cursor:pointer;    
        box-sizing:border-box;
        background:#fff url('../assets/img/hands.jpg')no-repeat;
    }
    .default-button:hover{
        border:1px solid #1976d2 !important; 
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
