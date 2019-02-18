import crudanswers from './components/CrudAnswersComponent.vue';
import store from './questionStore';

const questions = new Vue({
    el: '#questions',
    store,
    components:{
        crudanswers,
    },
    data() {
        return {
            questionTypeUuid: null,
            questionUuid: null,
            quizUuid: null
        }
    },
    created() {
        store.dispatch('getQuestionTypes');
        store.dispatch('getAnswerTypes'); 
    }
});