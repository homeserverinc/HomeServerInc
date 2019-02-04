import Vue from 'vue';
import Vuex from 'vuex';
import uuid from 'uuid/v4';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
       
    },
    getters: {
        newUuid() {
            return uuid();
        }
    },
    actions: {

    },
    mutations: {

    }
});