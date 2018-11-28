<template>
    <div class="card">
        <table class="table table-sm table-striped table-hover bg-light">
            <thead>
                <tr>
                    <td>Answer</td>
                    <td>Type</td>
                    <td>Next Question</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="answer in answers" :key="answer.id">
                    <td>{{answer.answer}}</td>
                    <td>{{ answer.answerType }}</td>
                    <td>{{ answer.nextQuestion }}</td>
                    <td>actions</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td><input type="text" class="form-control" name="" id=""></td>
                    <td>
                        <select ref="inputAnswerType" v-model="currentAnswer.answer_type_id" class="form-control" data-style="btn-secondary" name="inputAnswerType" id="inputAnswerType">
                            <option v-for="answerType in answerTypes" :key="answerType.id" :value="answerType.id">{{ answerType.answer_type }}</option>
                        </select>
                    </td>
                    <td><input type="text" class="form-control" name="" id=""></td>
                    <td><input type="button" class="btn" value=""></td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
export default {
    name:'crudanswers',
    props: [
        'returnedData',
        'questionTypeId',
    ],
    data() {
        return {
            answers: [],
            currentAnswer: {
                'answer_type_id': null
            },
            answerTypes: []
        }
    },
    watch: {
        questionTypeId: function() {
            this.getAnswerTypes();
        }
    },
    updated() {
        $(this.$refs.inputAnswerType).selectpicker('refresh');
    },
    mounted() {
        this.answers.push({
            'answer': 'answer',
            'answerId': '1',
            'answerType': 'type',
            'nextQuestionId': 'next_question_id',
            'nextQuestion': 'next_question'
        });
    },
    methods: {
        getAnswerTypes() {
            let self = this;
            if (this.questionTypeId !== null) {
                axios.get('/admin/list-answer-types/'+this.questionTypeId) 
                    .then(async function(response) {
                        self.answerTypes = response.data;
                        if (self.answerTypes.lenght >= 0) {
                            self.currentAnswer.answer_type_id = self.answerTypes[0].id;
                        }
                    });
            }
        },
    }
}
</script>
