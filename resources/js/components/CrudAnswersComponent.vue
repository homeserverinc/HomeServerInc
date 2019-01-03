<template>
    <div>
        <div class="col-md-12 p-0" v-if="!singleChoiceQuestion">
            <div class="form-group">
                <label for="singleNextQuestion">Next Question</label>
                <select ref="inputSingleNextQuestion" v-model="currentNextQuestion" class="form-control selectpicker" data-style="btn-secondary" data-live-search="true" name="singleNextQuestion" id="singleNextQuestion" >
                    <option selected="selected" :value="null"> Nothing Selected </option>
                    <option v-for="(question, index) in questions.data" :key="index" :value="question.uuid"> {{ question.question }} </option>
                </select>
            </div>
        </div>
        <div class="border">
            <table class="table table-sm table-striped table-hover" style="margin: 0px">
                <thead class="thead-light">
                    <tr class="d-flex">
                        <th class="col-md-1">#</th>
                        <th class="col-md-3">Answer</th>
                        <th class="col-md-2">Type</th>
                        <th class="col-md-5"><span v-if="singleChoiceQuestion">Next Question</span></th>
                        <th class="col-md-1">Actions</th>
                    </tr>
                </thead>
                <tbody name="fade" is="transition-group">
                    <!-- <transition name="fade"> -->
                    <tr class="d-flex" v-for="(answer, index) in orderedAnswers" :key="index">
                        <td class="col-md-1">
                            {{ answer.answer_order }}
                            <input type="hidden" :name="'answers['+index+'][answer_order]'" :value="answer.answer_order">
                        </td>
                        <td class="col-md-3">
                            {{ answer.answer }}
                            <input type="hidden" :name="'answers['+index+'][answer]'" :value="answer.answer">
                            <input type="hidden" :name="'answers['+index+'][answer_uuid]'" :value="answer.answerUuid">
                            <input type="hidden" :name="'answers['+index+'][answer_question_uuid]'" :value="answer.answerQuestionUuid">
                        </td>
                        <td class="col-md-2">
                            {{ answer.answerType }}
                            <input type="hidden" :name="'answers['+index+'][answer_type_uuid]'" :value="answer.answerTypeUuid">
                            <input type="hidden" :name="'answers['+index+'][answer_type]'" :value="answer.answerType">
                        </td>
                        <td class="col-md-5">
                            {{ answer.nextQuestion }}
                            <input type="hidden" :name="'answers['+index+'][next_question_uuid]'" :value="answer.nextQuestionUuid">
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
                <div v-bind:class="{'col-md-1 pr-0': true, ' has-error': inputAnswerOrderError}">
                    <input type="text" ref="inputAnswerOrder" v-model="currentAnswerOrder" class="form-control" name="order" id="order">
                    <span class="help-block" :v-if="inputAnswerOrderError">
                        <strong>{{ inputAnswerOrderErrorMsg }}</strong>
                    </span>
                </div>
                <div v-bind:class="{'col-md-3 p-0': true, ' has-error': inputAnswerError}">
                    <input type="text" ref="inputAnswer" v-model="currentAnswer" class="form-control" name="answer" id="answer">
                    <span class="help-block" :v-if="inputAnswerError">
                        <strong>{{ inputAnswerErrorMsg }}</strong>
                    </span>
                </div>
                <div v-bind:class="{'col-md-2 p-0': true, ' has-error': inputAnswerTypeError}">
                    <select ref="inputAnswerType" v-model="currentAnswerType" class="form-control selectpicker" data-style="btn-secondary" name="answerType" id="answerType">
                        <option v-for="(answerType, index) in answerTypes.data" :value="answerType.uuid" :key="index">{{ answerType.answer_type }}</option>
                    </select>
                    <span class="help-block" :v-if="inputAnswerTypeError">
                        <strong>{{ inputAnswerTypeErrorMsg }}</strong>
                    </span>
                </div>
                <div class="col-md-5 p-0">
                    <div v-if="singleChoiceQuestion">
                        <select ref="inputQuestion" v-model="currentNextQuestion" class="form-control selectpicker" data-style="btn-secondary" data-live-search="true" name="nextQuestion" id="nextQuestion" >
                            <option selected="selected" :value="null"> Nothing Selected </option>
                            <option v-for="(question, index) in questions.data" :key="index" :value="question.uuid"> {{ question.question }} </option>
                        </select>
                    </div>
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
    </div>
</template>

<script>

export default {
    name:'crudanswers',
    props: [
        'inputAnswer',
        'inputAnswerType',
        'returnedData',
        'questionTypeUuid',
        'questionUuid',
        'quizUuid'
    ],
    data() {
        return  {
            currentAnswer: '',
            currentAnswerOrder: 10,
            currentAnswerIndex: null,
            currentAnswerType: null,
            currentNextQuestion: null,
            inputAnswerError: false,
            inputAnswerErrorMsg: '',
            inputAnswerOrderError: false,
            inputAnswerOrderErrorMsg: '',
            inputAnswerTypeError: false,
            inputAnswerTypeErrorMsg: '',
            answerTypeIndex: null,
            editing: false,
            answers: [],
            answerTypes: [],
            answerTypes: [],
            questions: [],  
            updatingAnswer: {},
            selectedQuestionTypeUuid: null,
            singleNextQuestion: null,
            questionTypes: [],
            singleChoiceQuestion: true
        }
    },
    watch: {
        questionTypeUuid: function() {
            this.getAnswerTypes(this.questionTypeUuid);
            this.setQuestionType();
        }
    },
    updated() {
        $(this.$refs.inputAnswerType).selectpicker('refresh');
        $(this.$refs.inputQuestion).selectpicker('refresh');
        $(this.$refs.inputSingleNextQuestion).selectpicker('refresh');
    },
    mounted() {
        this.getQuestions();
        this.getQuestionTypes();
        $(this.$refs.ref_questino_type_uuid).selectpicker('refresh');
        //if has ans question type defined - editing
        if (this.questionTypeUuid !== 'undefined') {
            this.getAnswerTypes(this.questionTypeUuid);
        }
        if (this.returnedData !== null) {
            let items = this.returnedData;
            this.returnedData.forEach((answer) => {
                let nextquestion = '';
                if (answer.next_question_uuid !== null) {
                    nextquestion = answer.next_question.question
                }
                this.answers.push({
                            'answer': answer.answer,
                            'answer_order': answer.answer_order,
                            'answerUuid': answer.uuid,
                            'answerQuestionUuid': answer.answer_question_uuid,
                            'answerType': answer.answer_type.answer_type,
                            'answerTypeUuid': answer.answer_type_uuid,
                            'nextQuestion': nextquestion,
                            'nextQuestionUuid': answer.next_question_uuid,
                        });
            });  
            this.currentAnswerOrder = this.nextAnswerOrder();
        }
        this.singleChoiceQuestion = (this.getQuestionType()) ? this.getQuestionType().single_choice : false;
        
    },
    computed: {
        orderedAnswers() {
            return this.answers.sort((a, b) => {
                return a.answer_order > b.answer_order;
            });
        }
    },
    methods: {
        setQuestionType() {
            if (this.questionTypes.length > 0) {
                let qt = this.questionTypes.find(t => t.uuid === this.questionTypeUuid);
                this.singleChoiceQuestion = (qt) ? parseInt(qt.single_choice) : false;
            } else {
                this.singleChoiceQuestion = false;
            } 
        },
        getQuestionType() {
            return this.questionTypes.find((a) => a.uuid === this.questionTypeUuid);
        },
        addAnswer() {
            if (this.validateAnswer()) {
                let nextQuestionUuid, nextQuestion;
                if (this.currentNextQuestion != null) {
                    nextQuestionUuid = this.currentNextQuestion;
                    nextQuestion = this.nextQuestionByUuid(nextQuestionUuid).question;
                }

                let answerTypeUuid, answerType;
                if (this.answerTypes.data.length > 0) {
                    answerTypeUuid = this.currentAnswerType;
                    answerType = this.answerTypeByUuid(answerTypeUuid).answer_type;
                }
                this.answers.push({
                    'answer': this.currentAnswer,
                    'answer_order': this.currentAnswerOrder,
                    'answerTypeUuid': answerTypeUuid,
                    'answerType': answerType,
                    'nextQuestionUuid': nextQuestionUuid,
                    'nextQuestion': nextQuestion
                });
                this.currentAnswerOrder = this.nextAnswerOrder();
                this.currentAnswer = '';
                this.currentAnswerType = this.answerTypeByIndex(0).uuid;
                this.currentNextQuestion = null;
                this.$refs.inputAnswer.focus();
            }
        },
        nextAnswerOrder() {
            let a = this.orderedAnswers;
            return (a.length > 0) ? parseInt(a[a.length - 1].answer_order) + 10 : 10;
        },
        deleteAnswer(index) {
            this.$delete(this.answers, index);
        },
        editAnswer(index) {
            this.editing = true;
            this.updatingAnswer = this.answers.slice(index, index+1)[0];  
            this.currentAnswerOrder = this.updatingAnswer.answer_order;          
            this.currentAnswerIndex = index;
            this.currentAnswerType = this.updatingAnswer.answerTypeUuid; 
            this.currentNextQuestion = this.updatingAnswer.nextQuestionUuid;           
            this.currentAnswer = this.updatingAnswer.answer;
            $(this.$refs.inputAnswerType).selectpicker('val', this.updatingAnswer.answerTypeUuid);
            $(this.$refs.inputQuestion).selectpicker('val', this.updatingAnswer.nextQuestionUuid);
        },
        updateAnswer() {
            if (this.validateAnswer()) {
                let nextQuestionUuid, nextQuestion;
                if (this.currentNextQuestion != null) {
                    nextQuestionUuid = this.currentNextQuestion;
                    nextQuestion = this.nextQuestionByUuid(nextQuestionUuid).question;
                }

                let answerTypeUuid, answerType;
                if (this.answerTypes.data.length > 0) {
                    answerTypeUuid = this.currentAnswerType;
                    answerType = this.answerTypeByUuid(answerTypeUuid).answer_type;
                }
                
                this.updatingAnswer.answer = this.currentAnswer;
                this.updatingAnswer.answer_order = this.currentAnswerOrder;
                this.updatingAnswer.answerTypeUuid = answerTypeUuid;
                this.updatingAnswer.answerType = answerType;
                this.updatingAnswer.nextQuestionUuid = nextQuestionUuid;
                this.updatingAnswer.nextQuestion = nextQuestion;

                this.$set(this.answers, this.currentAnswerIndex, this.updatingAnswer);

                this.editing = false;
                this.updatingAnswer = null;
                this.currentAnswerOrder = this.nextAnswerOrder();
                this.currentAnswer = '';
                this.currentAnswerType = this.answerTypeByIndex(0).uuid;
                this.currentNextQuestion = null;
                this.$refs.inputAnswer.focus();
            }
        },
        getAnswerTypes(uuid) {
            var x = this;
            if (uuid !== null) {
                axios.get('/admin/list-answer-types/'+uuid) 
                    .then(function(response) {
                        x.answerTypes = response;
                        x.currentAnswerType = x.answerTypes.data[0].uuid;
                    });
            }
        },
        getQuestionTypes() {
            let url = '/admin/question-types/json';
            let self = this;
            axios.get(url)
                .then(async (res) => {
                    self.questionTypes = res.data;
                    this.setQuestionType();
                });
        },
        getQuestions() {
            let self = this;
            let url = null;
            console.log(this.quizUuid);
            if (this.questionUuid === undefined) {
                url = '/admin/questions/except/';
            } else {
                url = '/admin/questions/except/'+this.questionUuid;
            }
            axios.get(url)
                .then(async function(response) {
                        self.questions = response;
                });
            this.currentNextQuestion = null;
        },
        getQuestionsExcept() {
            var self = this;
            axios.get('/admin/questions/')
                .then(async function(response) {
                        self.questions = response.data;
                });
            this.currentNextQuestion = null;
        },
        getQuestion(uuid) {
            axios.get('/admin/question-by-uuid/'+uuid)
                .then(async (response) => {
                    return response.data;
                });
        },
        getAnswerType(uuid) {
            let result;
            axios.get('/api/get_answer_type/'+uuid)
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
        answerTypeByUuid(uuid) {
            return this.findObjectByKey(this.answerTypes.data, 'uuid', uuid);
        },
        answerTypeByIndex(index) {
            return this.answerTypes.data[index];
        },
        nextQuestionByUuid(uuid) {
            return this.findObjectByKey(this.questions.data, 'uuid', uuid);
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

            /* b.forEach((a) => {
                this.answers.push(a);
            }); */
        }
    }
}
</script>