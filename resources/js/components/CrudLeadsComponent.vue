<template>
    <div v-if="this.serviceId > 0" class="panel panel-default">
                  
            <div class="form-group" v-for="(question, index) in questions" :key="index">          
                <!-- question -->
                <div class="panel-heading" v-show="!question.answered"><h5>{{ question.question }}</h5></div>
                <!-- answers -->
                <transition-group name="list" tag="div">  
                <div class="panel-body" id="question-answers" key="teste" v-show="!question.answered">
                    <div v-for="(answer, answer_index) in question.answers" :key="answer_index">           
                        <!-- checkbox -->
                        <div class="col col-sm col-md-12 form-group" v-if="answer.answer_type_id == 1">
                            <input type="checkbox" :name="'questions['+question.id+'][answers][]'" :id="'question'+question.id+'-answer'+answer.id" :value="answer.answer" v-model="question.answers">
                            <label :for="'question'+question.id+'-answer'+answer.id">{{answer.answer}}</label>
                            <!-- <input type="hidden" :name="'questions['+question.id+'][answers]['+answer.id+']'" :value="answer.answer" > -->
                        </div>
                        <!-- text/checkbox -->
                        <div class="col col-sm col-md-12 form-group" v-if="answer.answer_type_id == 2">
                            <input type="checkbox" :name="'questions['+question.id+'][answers][]'" :id="'question'+question.id+'-answer'+answer.id"  :value="answer.id" v-model="question.answers" @change="setShowInputText(answer)">
                            <label :for="'question'+question.id+'-answer'+answer.id">{{answer.answer}}</label>
                            <input type="text" :v-if="showOtherInputText == true" class="form-control" :name="'questions['+question.id+'][answers]['+answer.id+']'">
                        </div>
                        <!-- v-model="question.answers.answer_text" -->
                        <!-- radiobutton -->
                        <div class="col col-sm col-md-12 form-group" v-if="answer.answer_type_id == 3">
                            <input type="radio" :name="'questions['+question.id+'][answers][id]'" :id="'question'+question.id+'-answer'+answer.id"  :value="answer.id" v-model="question.answered_id">
                            <label :for="'question'+question.id+'-answer'+answer.id">{{answer.answer}}</label>
                            <input type="hidden" :name="'questions['+question.id+'][answers][value]'" :value="answer.answer" >
                        </div>
                    </div>
                </div>
                </transition-group>
                <div class="panel-footer" v-show="!question.answered">
                    <button class="btn btn-sm btn-primary" @click.prevent="getPrevioustQuestion()" v-if="index > 0">Previous</button>
                    <button class="btn btn-sm btn-primary" @click.prevent="getNextQuestion()" v-if="!noMoreQuestions">Next</button>
                </div>
            </div>
        
        <!-- <input type="hidden" name="teste" id="teste" v-model="this.teste" /> -->
    </div>
</template>

<script>
export default {
    name: 'crudleads',
    props: [
        'serviceId'
    ],
    data() {
        return {
            questions: [],
            noMoreQuestions: false,
            showOtherInputText: false,
            //teste: ''
        }
    },
    watch: { 
        serviceId: function() {
            this.getFirstQuestion();
        }
    },
    methods: {
        getFirstQuestion() {
            this.questions = [];
            var self = this;
            axios.get('/admin/service-first-question/'+this.serviceId)
                 .then(async function (response) {
                    self.setUnansweredQuestion(response.data);
                    self.questions.push(response.data)
            });
        },
        setShowInputText(answer) {
            answer.show_input_text = !answer.show_input_text;
            this.showOtherInputText = !this.showOtherInputText;
        },
        setAnsweredQuestion(question) {
            question.answered = true;
        },
        setUnansweredQuestion(question) {
            this.showOtherInputText = false;
            question.answers.forEach((answer) => {
                Object.assign(answer, {'show_input_text': false});
            });
            Object.assign(question, {'answered': false, 'answered_id': '', 'answered_value': ''});
        },
        getNextQuestion() {
            let nextQuestionId = null;
            var self = this;
            var lastQuestion = self.questions[self.questions.length-1];
            
            self.setAnsweredQuestion(lastQuestion);

            self.questions.forEach((question) => {
                //if (question.id == lastQuestion.id) {
                    //console.log(question.question);
                    question.answers.forEach((answer) => {
                        if (answer.id == question.answered_id) {
                            //console.log(answer.answer);
                            nextQuestionId = answer.pivot.next_question_id;
                        }
                    }) 
                //}                 
            });
            if (nextQuestionId !== null) {
                axios.get('/admin/question-by-id/'+nextQuestionId)
                     .then((response) => {
                         self.setUnansweredQuestion(response.data);
                         self.questions.push(response.data);
                     });
            } else {
                this.noMoreQuestions = true;
            }
            //this.teste = JSON.stringify(this.questions);
        },
        getPrevioustQuestion() {
            this.questions.splice(-1,1);
            let lastQuestionIndex = this.questions.length - 1;
            if (lastQuestionIndex >= 0) {
                this.questions[lastQuestionIndex].answered = false;
                this.noMoreQuestions = false;
            }
        }
    }    
}
</script>
