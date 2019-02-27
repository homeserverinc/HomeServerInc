import Vue from 'vue';
import store from './store';
import VeeValidate from 'vee-validate';
import HsQuizForm from './components/leads/HsQuizForm';

Vue.use(VeeValidate);

new Vue({
    el: '#hs-quiz-placeholder',
    store,
    components: { 
        HsQuizForm
    }
});
