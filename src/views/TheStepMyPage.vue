<template>
    <v-card-text class="font-weight-bold body-1" align="center">
        <div>
            <v-text-field 
                v-model="newUserName"
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
                        :loading="isRefreshLoading"
                        :disabled="isRefreshLoading"
                        @click="handlerRefresh"
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
                        @click="handlerSave"
                    >
                        <v-icon>
                            mdi-check
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
        newUserName : {
            type : String,
            required : true
        }
    },

    data : () => ({
        isRefreshLoading : false,
        isSaveLoading : false
    }),

    methods : {

        // 새로운 유저이름 저장
        handlerSave(){
            this.isSaveLoading = true;
            
            setTimeout(() => {
                this.isSaveLoading = false;
                this.emitSaveNewUserName();
            }, 500);
        },

        emitSaveNewUserName(){
            this.$emit('onSave');
        },

        // 랜덤 유저 이름릭
        handlerRefresh(){
            this.isRefreshLoading = true;
            
            setTimeout(() => {
                this.isRefreshLoading = false;
                this.emitRefreshUserName();
            }, 500);
        },

        emitRefreshUserName(){
            this.$emit('onRefresh');
        }
    }
}
</script>

<style>

</style>