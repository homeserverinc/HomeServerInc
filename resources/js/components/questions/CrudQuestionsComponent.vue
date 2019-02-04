<template>
    <div>
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col mr-auto">
                        <select
                            name="quiz_uuid"
                            id="quiz_uuid"
                            class="form-control"
                            v-model="quiz_uuid"
                        >
                            <option value>Select one quiz</option>
                            <option
                                v-for="quiz in quizzes"
                                :key="quiz.uuid"
                                :value="quiz.uuid"
                            >{{ quiz.quiz }}</option>
                        </select>
                    </div>
                    <div class="col-2" v-if="questions.length == 0 && quiz_uuid !== ''">
                        <button class="btn btn-secondary" @click="showNewQuestionModal">
                            <i class="fas fa-plus"></i> New question
                        </button>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <question-component v-for="q in questions" :key="q.uuid" :question="q"></question-component>
            </div>
        </div>
        <b-modal ref="newQuestionModal" size="lg" title="New Question">
            <div class="form-group">
                <div class="row">
                    <div class="col-3">
                        <label for="question_type">Question Type</label>
                        <select
                            name="question_type"
                            id="question_type"
                            class="form-control"
                            v-model="newQuestion.question_type_uuid"
                        >
                            <option
                                v-for="question_type in question_types"
                                :key="question_type.uuid"
                                :value="question_type.uuid"
                            >{{question_type.description}}</option>
                        </select>
                    </div>
                    <div class="col-9">
                        <label for="question">Question</label>
                        <input
                            type="text"
                            name="question"
                            id="question"
                            class="form-control"
                            v-model="newQuestion.question"
                        >
                    </div>
                </div>
            </div>
            <div slot="modal-footer" class="w-100">
                <div class="float-right">
                    <button class="btn btn-success" @click="doOnAddQuestion">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="btn btn-danger" @click="closeModal">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        </b-modal>
        <div id="scroll-end"></div>
    </div>
</template>

<style>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
}
</style>


<script>
import bModal from "bootstrap-vue/es/components/modal/modal";
import bModalDirective from "bootstrap-vue/es/directives/modal/modal";
import questionComponent from "./QuestionComponent.vue";
import RegisterStoreModule from "../../mixins/RegisterStoreModule";
import questionsModule from "../../store/modules/questions";
import { mapFields } from "vuex-map-fields";
import uuid from "uuid";

function resetNewQuestion() {
    return {
        uuid: "",
        question_type_uuid: "",
        question: "",
        next_question_uuid: "",
        quiz_uuid: "",
        answers: []
    };
}

export default {
    data() {
        return {
            newQuestion: {
                uuid: "",
                question_type_uuid: "",
                question: "",
                next_question_uuid: "",
                quiz_uuid: "",
                answers: []
            }
        };
    },
    mixins: [RegisterStoreModule],
    components: {
        questionComponent,
        bModal
    },
    directives: {
        bModalDirective
    },
    created() {
        this.registerStoreModule("questionsModule", questionsModule);
        this.$store.dispatch("questionsModule/getQuizzes");
        console.log(this);
    },
    computed: {
        questions() {
            return this.$store.getters["questionsModule/questions"];
        },
        quizzes() {
            return this.$store.getters["questionsModule/quizzes"];
        },
        quiz_uuid: {
            get() {
                return this.$store.state.questionsModule.quiz_uuid;
            },
            set(uuid) {
                this.newQuestion.quiz_uuid = uuid;
                this.$store.dispatch("questionsModule/selectQuiz", uuid);
            }
        },
        question_types() {
            return this.$store.getters["questionsModule/questionTypes"];
        },
        firstQuestionOfQuiz() {
            return this.$store.state.questionsModule.quiz.first_question_uuid;
        }
    },
    methods: {
        showNewQuestionModal() {
            this.$refs.newQuestionModal.show();
        },
        closeModal() {
            this.$refs.newQuestionModal.hide();
            this.newQuestion = null;
            this.newQuestion = resetNewQuestion;
        },
        doOnAddQuestion() {
            this.newQuestion.uuid = uuid();
            this.$store.commit(
                "questionsModule/ADD_QUESTION",
                this.newQuestion
            );
            this.newQuestion = resetNewQuestion();
            this.closeModal();
        }
    }
};
</script>
