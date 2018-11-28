let crudanswers = require('./components/CrudAnswersComponent.vue');

const questions = new Vue({
    el: '#questions',
    components:{
        crudanswers,
    },
    data() {
        return {
            questionTypeId: null,
            questionId: null
        }
    }
});