import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        //
        vPath: "http://localhost/"
    },
    mutations: {
        //
    },
    actions: {

    },
    modules: {
        app,
        user
    }
});

export default store;
