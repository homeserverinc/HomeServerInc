import Vue from 'vue';
import crudQuestions from './components/questions/CrudQuestionsComponent.vue';
import store from './store';
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
});

new Vue({
    el: '#questions-form',
    store,
    components:{
        crudQuestions,
    }
});