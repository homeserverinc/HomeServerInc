import MultiQuestionsFormComponent from './components/MultiQuestionsFormComponent.vue';

const questionsForm = new Vue({
    el: '#questions-form',
    components:{
        'multi-questions-form': MultiQuestionsFormComponent,
    }
});