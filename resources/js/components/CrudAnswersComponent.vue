<template>
    <div class="border">
            <table class="table table-sm table-striped table-hover" style="margin: 0px">
                <thead class="thead-light">
                    <tr class="d-flex">
                        <th class="col-md-4">Answer</th>
                        <th class="col-md-2">Type</th>
                        <th class="col-md-5">Next Question</th>
                        <th class="col-md-1">Actions</th>
                    </tr>
                </thead>
                <tbody name="fade" is="transition-group">
                    <!-- <transition name="fade"> -->
                    <tr class="d-flex" v-for="(answer, index) in answers" :key="index">
                        <td class="col-md-4">
                            {{ answer.answer }}
                            <input type="hidden" :name="'answers['+index+'][answer]'" :value="answer.answer">
                            <input type="hidden" :name="'answers['+index+'][answer_id]'" :value="answer.answerId">
                            <input type="hidden" :name="'answers['+index+'][answer_question_id]'" :value="answer.answerQuestionId">
                        </td>
                        <td class="col-md-2">
                            {{ answer.answerType }}
                            <input type="hidden" :name="'answers['+index+'][answer_type_id]'" :value="answer.answerTypeId">
                            <input type="hidden" :name="'answers['+index+'][answer_type]'" :value="answer.answerType">
                        </td>
                        <td class="col-md-5">
                            {{ answer.nextQuestion }}
                            <input type="hidden" :name="'answers['+index+'][next_question_id]'" :value="answer.nextQuestionId">
                            <input type="hidden" :name="'answers['+index+'][next_question]'" :value="answer.nextQuestion">
                        </td>
                        <td class="col-md-1">
                            <button type="button" class="btn btn-sm btn-warning" @click="editAnswer(index)" v-show="!editing">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button type="button" class="btn btn-sm btn-danger" @click="deleteAnswer(index)" v-show="!editing">
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <!-- </transition> -->
                </tbody>
            </table>
        
            <div class="row d-flex">
                <div v-bind:class="{'col-md-4 pr-0': true, ' has-error': inputAnswerError}">
                    <input type="text" ref="inputAnswer" v-model="currentAnswer" class="form-control" name="answer" id="answer">
                    <span class="help-block" :v-if="inputAnswerError">
                        <strong>{{ inputAnswerErrorMsg }}</strong>
                    </span>
                </div>
                <div v-bind:class="{'col-md-2 p-0': true, ' has-error': inputAnswerTypeError}">
                    <select ref="inputAnswerType" v-model="currentAnswerType" class="form-control selectpicker" data-style="btn-secondary" name="answerType" id="answerType">
                        <option v-for="(answerType, index) in answerTypes.data" :value="answerType.id" :key="index">{{ answerType.answer_type }}</option>
                    </select>
                    <span class="help-block" :v-if="inputAnswerTypeError">
                        <strong>{{ inputAnswerTypeErrorMsg }}</strong>
                    </span>
                </div>
                <div class="col-md-5 p-0">
                    <select ref="inputQuestion" v-model="currentNextQuestion" class="form-control selectpicker" data-style="btn-secondary" data-live-search="true" name="nextQuestion" id="nextQuestion" >
                        <option selected="selected" :value="-1"> Nothing Selected </option>
                        <option v-for="(question, index) in questions.data" :key="index" :value="question.id"> {{ question.question }} </option>
                    </select>
                </div>
                <div class="col-md-1">
                    <button type="button" class="btn btn-success" @click="addAnswer" v-show="!editing">
                        <i class="fas fa-plus"></i>
                    </button>
                    <button type="button" class="btn btn-success" @click="updateAnswer" v-show="editing">
                        <i class="fas fa-check"></i>
                    </button>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name:'crudanswers',
    props: [
        'inputAnswer',
        'inputAnswerType',
        'returnedData',
        'questionTypeId',
        'questionId'
    ],
    data() {
        return  {
            currentAnswer: '',
            currentAnswerIndex: null,
            currentAnswerType: null,
            currentNextQuestion: -1,
            inputAnswerError: false,
            inputAnswerErrorMsg: '',
            inputAnswerTypeError: false,
            inputAnswerTypeErrorMsg: '',
            answerTypeIndex: null,
            editing: false,
            answers: [],
            answerTypes: [],
            answerTypes: [],
            questions: [],  
            updatingAnswer: {},
            selectedQuestionTypeId: null,
            singleNextQuestion: null
        }
    },
    watch: {
        questionTypeId: function() {
            this.getAnswerTypes(this.questionTypeId);
        }
    },
    updated() {
        $(this.$refs.inputAnswerType).selectpicker('refresh');
        $(this.$refs.inputQuestion).selectpicker('refresh');
    },
    mounted() {
        this.getQuestions();
        $(this.$refs.ref_questino_type_id).selectpicker('refresh');
        if (this.returnedData !== null) {
            let items = this.returnedData;
            this.returnedData.forEach((answer) => {
                let nextquestion = '';
                if (answer.next_question_id !== null) {
                    nextquestion = answer.next_question.question
                }
                this.answers.push({
                            'answer': answer.answer,
                            'answerId': answer.id,
                            'answerQuestionId': answer.answer_question_id,
                            'answerType': answer.answer_type.answer_type,
                            'answerTypeId': answer.answer_type_id,
                            'nextQuestion': nextquestion,
                            'nextQuestionId': answer.next_question_id
                        });
            });
        }
        //if has ans question type defined - editing
        if (this.questionTypeId !== 'undefined') {
            this.getAnswerTypes(this.questionTypeId);
        }
    },
    methods: {
        addAnswer() {
            if (this.validateAnswer()) {
                let nextQuestionId, nextQuestion;
                if (this.currentNextQuestion >= 0) {
                    nextQuestionId = this.currentNextQuestion;
                    nextQuestion = this.nextQuestionById(nextQuestionId).question;
                }

                let answerTypeId, answerType;
                if (this.answerTypes.data.length > 0) {
                    answerTypeId = this.currentAnswerType;
                    answerType = this.answerTypeById(answerTypeId).answer_type;
                }
                this.answers.push({
                    'answer': this.currentAnswer,
                    'answerTypeId': answerTypeId,
                    'answerType': answerType,
                    'nextQuestionId': nextQuestionId,
                    'nextQuestion': nextQuestion
                });
                this.currentAnswer = '';
                this.currentAnswerType = this.answerTypeByIndex(0).id;
                this.currentNextQuestion = -1;
                this.$refs.inputAnswer.focus();
            }
        },
        deleteAnswer(index) {
            this.$delete(this.answers, index);
        },
        editAnswer(index) {
            this.editing = true;
            this.updatingAnswer = this.answers.slice(index, index+1)[0];            
            this.currentAnswerIndex = index;
            this.currentAnswerType = this.updatingAnswer.answerTypeId; 
            this.currentNextQuestion = this.updatingAnswer.nextQuestionId;           
            this.currentAnswer = this.updatingAnswer.answer;
            $(this.$refs.inputAnswerType).selectpicker('val', this.updatingAnswer.answerTypeId);
            $(this.$refs.inputQuestion).selectpicker('val', this.updatingAnswer.nextQuestionId);
        },
        updateAnswer() {
            if (this.validateAnswer()) {
                let nextQuestionId, nextQuestion;
                if (this.currentNextQuestion > 0) {
                    nextQuestionId = this.currentNextQuestion;
                    nextQuestion = this.nextQuestionById(nextQuestionId).question;
                }

                let answerTypeId, answerType;
                if (this.answerTypes.data.length > 0) {
                    answerTypeId = this.currentAnswerType;
                    answerType = this.answerTypeById(answerTypeId).answer_type;
                }
                
                this.updatingAnswer.answer = this.currentAnswer;
                this.updatingAnswer.answerTypeId = answerTypeId;
                this.updatingAnswer.answerType = answerType;
                this.updatingAnswer.nextQuestionId = nextQuestionId;
                this.updatingAnswer.nextQuestion = nextQuestion;

                this.$set(this.answers, this.currentAnswerIndex, this.updatingAnswer);

                this.editing = false;
                this.updatingAnswer = null;
                this.currentAnswer = '';
                this.currentAnswerType = this.answerTypeByIndex(0).id;
                this.currentNextQuestion = -1;
                this.$refs.inputAnswer.focus();
            }
        },
        getAnswerTypes(id) {
            var x = this;
            if (id !== null) {
                axios.get('/admin/list-answer-types/'+id) 
                    .then(function(response) {
                        x.answerTypes = response;
                        x.currentAnswerType = x.answerTypes.data[0].id;
                    });
            }
        },
        getQuestions() {
            let self = this;
            let url = null;
            if (this.questionId === undefined) {
                url = '/admin/questions/except/';
            } else {
                url = '/admin/questions/except/'+this.questionId;
            }
            axios.get(url)
                .then(async function(response) {
                        self.questions = response;
                });
            this.currentNextQuestion = -1;
        },
        getQuestionsExcept() {
            var self = this;
            axios.get('/admin/questions/')
                .then(async function(response) {
                        self.questions = response.data;
                });
            this.currentNextQuestion = -1;
        },
        getQuestion(id) {
            axios.get('/admin/question-by-id/'+id)
                .then(async (response) => {
                    return response.data;
                });
        },
        getAnswerType(id) {
            let result;
            axios.get('/api/get_answer_type/'+id)
                .then(function(response) {
                    return response.answer_type;
                });
        },
        validateAnswer() {
            let result = true;
            if (this.currentAnswer == '') {
                this.inputAnswerError = true;
                this.inputAnswerErrorMsg = 'Answer field is required.';
                result = false;
            } else {
                this.inputAnswerError = false;
                this.inputAnswerErrorMsg = '';
            }

            if (this.currentAnswerType === null) {
                this.inputAnswerTypeError = true;
                this.inputAnswerTypeErrorMsg = 'Answer Type field is required.';
                result = false;
            } else {
                this.inputAnswerTypeError = false;
                this.inputAnswerTypeErrorMsg = '';
            }
            return result;
        },
        findObjectByKey(array, key, value) {
            for (var i = 0; i < array.length; i++) {
                if (array[i][key] === value) {
                    return array[i];
                }
            }
            return null;
        },
        answerTypeById(id) {
            return this.findObjectByKey(this.answerTypes.data, 'id', id);
        },
        answerTypeByIndex(index) {
            return this.answerTypes.data[index];
        },
        nextQuestionById(id) {
            return this.findObjectByKey(this.questions.data, 'id', id);
        },
        nextQuestionByIndex(index) {
            return this.questions.data[index];
        },
        refreshItems() {
            let b = this.answers;
            /* this.answers.forEach((a) => {
                b.push(a);
            }) */
            this.answers = [];

            b.forEach((a) => {
                this.answers.push(a);
            });
        }
    }
}
</script>