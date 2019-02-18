import lead_questions_form from './components/LeadQuestionsFormComponent.vue';
//import Velocity from 'velocity-animate';

const questionForm = new Vue({
    el: '#lead-service-questions',
    components:{
        lead_questions_form,
    },
    data() {
        return {
            categoryUUID: null
        }
    }
});