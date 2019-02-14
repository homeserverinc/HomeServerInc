import Vue from 'vue';
import hsQuiz from './components/quiz/QuizComponent.vue';
import store from './store';

new Vue({
    el: '#quiz-component',
    store,
    components: { 
        'hs-quiz': hsQuiz
    }
});
