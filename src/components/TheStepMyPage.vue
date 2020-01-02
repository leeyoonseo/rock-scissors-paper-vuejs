<template>
    <v-card-text class="font-weight-bold body-1" align="center">
        <div>
            <v-text-field 
                v-model="newNicName"
                required
            >
            </v-text-field>
            

            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <v-btn 
                        class="ml-2" 
                        text 
                        icon 
                        small
                        color="primary"
                        v-on="on"
                        :loading="isRandomLoading"
                        :disabled="isRandomLoading"
                        @click="handlerSetNewNicName"
                    >
                        <v-icon>
                            mdi-cached
                        </v-icon>                                
                    </v-btn>
                </template>
                <span>랜덤</span>
            </v-tooltip>

            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <v-btn 
                        text 
                        icon 
                        small
                        color="primary"
                        v-on="on"
                        :loading="isSaveLoading"
                        :disabled="isSaveLoading"
                        @click="handlerSaveNicName"

                    >
                        <v-icon>
                            {{ myIcons.check }}
                        </v-icon>
                    </v-btn>
                </template>
                <span>저장</span>
            </v-tooltip>                            
        </div>
    </v-card-text>
</template>

<script>
export default {
    name : 'TheStepMyPage',

    props : {
        myIcons : {
            type : Object,
            required : true
        },

        newNicName : {
            type : String,
            required : true
        }
    },

    data : () => ({
        isRandomLoading : false,
        isSaveLoading : false
    }),

    methods : {
        // 랜덤 닉네임 생성 
        handlerSetNewNicName(){
            this.isRandomLoading = true;

            setTimeout(() => {
               this.isRandomLoading = false;
               this.$emit('handlerSetNewNicName');

            }, 500);
        },

        // 닉네임 저장
        handlerSaveNicName(){
            this.isSaveLoading = true;

            setTimeout(() => {
               this.isSaveLoading = false;
               this.$emit('handlerSaveNewNicName');

            }, 500);
        },
    }
}
</script>

<style>

</style>