import Vue from 'vue';
import Router from 'vue-router';
import TheMain from '../views/TheMain.vue';
import TheGameBoard from '../views/TheGameBoard.vue';
import TheUserHistory from '../views/TheUserHistory.vue';

Vue.use(Router);

export const router = new Router({
    mode : 'history',
    routes : [
        { 
            name : 'TheMain',
            path : '/',
            component : TheMain
        },
        { 
            name : 'TheGameBoard',
            path : '/game',
            component : TheGameBoard
        },
        { 
            name : 'TheUserHistory',
            path : '/history',
            component : TheUserHistory
        },

    ]
});