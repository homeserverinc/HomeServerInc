<template>
    <div class="card" :id="'uuid-'+question.uuid">
        <div
            class="card-header p-2 bg-secondary text-white"
            :class="{'text-white': (isFirstQuestionOnQuiz || isTheLastQuestion), 'bg-success': isFirstQuestionOnQuiz, 'bg-danger': isTheLastQuestion}"
        >
            <h5 class="m-1 float-left">
                <i
                    class="fas fa-sm"
                    :class="{'fa-dot-circle': isSingleChoiceQuestion, 'fa-check-circle': !isSingleChoiceQuestion}"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Single choice question"
                ></i>
                <i  
                    v-if="isFirstQuestionOnQuiz"
                    class="fas fa-flag-checkered"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="First question of the Quiz"
                ></i>
                {{ question.question }}
                <a
                    class="text-white"
                    href="#"
                    v-if="hasNextQuestion"
                    v-scroll-to="'#uuid-'+question.next_question_uuid"
                >
                    <i class="fas fa-arrow-right"></i>
                    {{linkedQuestion}}
                </a>
            </h5>
            <div class="float-right mr-1">
                <div class="dropdown">
                    <button
                        class="btn btn-sm dropdown-toggle btn-secondary"
                        :class="{'btn-success': isFirstQuestionOnQuiz, 'btn-danger': isTheLastQuestion}"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-placement="top"
                        title="New"
                    >
                        <i class="fas fa-plus"></i>
                    </button>
                    <div
                        class="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuButton"
                    >
                        <a class="dropdown-item" href="#" @click="editQuestion">
                            <i class="fas fa-edit"></i> Edit Question
                        </a>
                        <a class="dropdown-item" href="#" @click.prevent="showDeleteQuestionModal">
                            <i class="fas fa-trash-alt"></i> Remove Question
                        </a>
                        <a class="dropdown-item" href="#" @click.prevent="addNewAnswer">
                            <i class="fas fa-list"></i> New Answer
                        </a>
                        <a
                            class="dropdown-item"
                            href="#"
                            v-if="!isSingleChoiceQuestion && !hasNextQuestion"
                            @click.prevent="showNewQuestionModal"
                        >
                            <i class="fas fa-question"></i> New Question
                        </a>
                        <a
                            class="dropdown-item"
                            href="#"
                            v-if="!isSingleChoiceQuestion && !hasNextQuestion"
                            @click.prevent="showLinkQuestionModal"
                        >
                            <i class="fas fa-link"></i> Link existing question
                        </a>
                        <a
                            class="dropdown-item"
                            href="#"
                            v-if="!isSingleChoiceQuestion && hasNextQuestion"
                            @click="unlinkQuestion"
                        >
                            <i class="fas fa-question"></i> Unlink Question
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body p-0">
            <answer-component v-for="answer in answers" :key="answer.uuid" :answer="answer"></answer-component>
        </div>
        <b-modal ref="addNewAnswerRef" size="lg" title="New Answer">
            <div class="form-group">
                <div class="row">
                    <div class="col-3">
                        <label for="answer_type">Answer Type</label>
                        <select
                            name="answer_type"
                            id="answer_type"
                            class="form-control"
                            v-model="newAnswer.answer_type_uuid"
                        >
                            <option
                                v-for="answer_type in answerTypes"
                                :key="answer_type.uuid"
                                :value="answer_type.uuid"
                            >{{answer_type.description}}</option>
                        </select>
                    </div>
                    <div class="col-2">
                        <label for="weight">Weight</label>
                        <input
                            type="text"
                            name="weight"
                            id="weight"
                            class="form-control"
                            v-model="newAnswer.weight"
                        >
                    </div>
                    <div class="col-7">
                        <label for="answer">Answer</label>
                        <input
                            type="text"
                            name="answer"
                            id="answer"
                            class="form-control"
                            autofocus
                            v-model="newAnswer.answer"
                        >
                    </div>
                </div>
            </div>
            <div slot="modal-footer" class="w-100">
                <div class="float-right">
                    <button class="btn btn-primary" @click="doOnAddNewAnswer">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="btn btn-danger" @click="cancelAddNewAnswer">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        </b-modal>
        <b-modal ref="editQuestionModal" size="lg" title="Edit Question">
            <div class="form-group">
                <div class="row">
                    <div class="col-3">
                        <label for="question">Question Type</label>
                        <input
                            type="text"
                            name="question_type"
                            id="question_type"
                            class="form-control"
                            disabled
                            v-model="currentQuestion.question_type"
                        >
                    </div>
                    <div class="col-9">
                        <label for="question">Question</label>
                        <input
                            type="text"
                            name="question"
                            id="question"
                            class="form-control"
                            autofocus
                            v-model="currentQuestion.question"
                        >
                    </div>
                </div>
            </div>
            <div slot="modal-footer" class="w-100">
                <div class="float-right">
                    <button class="btn btn-success" @click="doOnEditQuestion">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="btn btn-danger" @click="closeEditQuestionModal">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        </b-modal>
        <b-modal ref="delQuestionRef" title="Delete Question Confirmation">
            Do you really want to remove:
            <strong>{{ question.question }}</strong>
            <div slot="modal-footer" class="w-100">
                <div class="float-right">
                    <button class="btn btn-danger" @click="doOnDeleteQuestion">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="btn btn-secondary" @click="closeDeleteQuestionModal">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        </b-modal>
        <b-modal ref="linkQuestionModalRef" size="lg" title="Link a Question">
            <div class="form-group">
                <div class="form-group">
                    <label for="next_question_uuid">Answer Type</label>
                    <select
                        name="next_question_uuid"
                        id="next_question_uuid"
                        class="form-control"
                        autofocus
                        v-model="nextQuestionUuid"
                    >
                        <option
                            v-for="question in otherQuestions"
                            :key="question.uuid"
                            :value="question.uuid"
                        >{{question.question}}</option>
                    </select>
                </div>
            </div>
            <div slot="modal-footer" class="w-100">
                <div class="float-right">
                    <button class="btn btn-success" @click="doOnLinkQuestion">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="btn btn-danger" @click="closeLinkQuestionModal">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        </b-modal>
        <b-modal ref="newQuestionModalRef" size="lg" title="New Question">
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
                            autofocus
                            v-model="newQuestion.question"
                        >
                    </div>
                </div>
            </div>
            <div slot="modal-footer" class="w-100">
                <div class="float-right">
                    <button class="btn btn-success" @click="doOnAddNewQuestion">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="btn btn-danger" @click="closeNewQuestionModal">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
import bModal from "bootstrap-vue/es/components/modal/modal";
import bModalDirective from "bootstrap-vue/es/directives/modal/modal";
import answerComponent from "./AnswerComponent.vue";
import { QUESTION_TYPES, ANSWER_TYPES } from "../../constants";
import VALID_MUTATIONS from "../../store/modules/questions";

function resetNewAnswer() {
    return {
        uuid: "",
        answer_order: 0,
        answer_type_uuid: "a65f6762-924e-4025-bcc7-a188976dddf0",
        question_uuid: "",
        next_question_uuid: "",
        answer: "",
        weight: 1
    };
}

function resetQuestion() {
    return {
        uuid: "",
        question: "",
        question_type: "4cd9927e-717a-4726-b5e6-e6532201dfad"
    };
}

function resetNewQuestion() {
    return {
        uuid: "",
        question_type_uuid: "4cd9927e-717a-4726-b5e6-e6532201dfad",
        question: "",
        next_question_uuid: "",
        quiz_uuid: "",
        answers: []
    };
}

export default {
    data() {
        return {
            newAnswer: {
                uuid: "",
                answer_order: 0,
                answer_type_uuid: "a65f6762-924e-4025-bcc7-a188976dddf0",
                question_uuid: "",
                next_question_uuid: "",
                answer: "",
                weight: 1
            },
            currentQuestion: {
                uuid: "",
                question: "",
                question_type: "4cd9927e-717a-4726-b5e6-e6532201dfad"
            },
            newQuestion: {
                uuid: "",
                question_type_uuid: "4cd9927e-717a-4726-b5e6-e6532201dfad",
                question: "",
                next_question_uuid: "",
                quiz_uuid: "",
                answers: []
            },
            nextQuestionUuid: ""
        };
    },
    props: {
        question: {}
    },
    components: {
        answerComponent,
        bModal
    },
    directives: {
        bModalDirective
    },
    methods: {
        addNewAnswer() {
            if (this.isSingleChoiceQuestion) {
                this.newAnswer.answer_type_uuid =
                    "a65f6762-924e-4025-bcc7-a188976dddf0";
            } else {
                this.newAnswer.answer_type_uuid =
                    "dd0841bc-73fa-423c-99dc-e2f56a476b0b";
            }
            this.$refs.addNewAnswerRef.show();
        },
        cancelAddNewAnswer() {
            this.closeAddNewAnswer();
        },
        closeAddNewAnswer() {
            this.$refs.addNewAnswerRef.hide();
        },
        doOnAddNewAnswer() {
            this.newAnswer.question_uuid = this.question.uuid;
            this.newAnswer.answer_order = this.nextAnswerOrder;
            this.$store.dispatch(
                "questionsModule/addNewAnswer",
                this.newAnswer
            );
            this.newAnswer = this.closeAddNewAnswer();
            this.newAnswer = resetNewAnswer();
            this.$scrollTo("#uuid-" + this.question.uuid);
        },
        editQuestion() {
            this.currentQuestion = {
                uuid: this.question.uuid,
                question: this.question.question,
                question_type: this.$store.getters[
                    "questionsModule/questionTypes"
                ].find(t => t.uuid === this.question.question_type_uuid)
                    .description
            };
            this.$refs.editQuestionModal.show();
        },
        closeEditQuestionModal() {
            this.$refs.editQuestionModal.hide();
        },
        doOnEditQuestion() {
            this.$store.dispatch(
                "questionsModule/updateExistingQuestion",
                this.currentQuestion
            );

            this.currentQuestion = resetQuestion();
            this.closeEditQuestionModal();
        },
        closeDeleteQuestionModal() {
            this.$refs.delQuestionRef.hide();
        },
        doOnDeleteQuestion() {
            this.$store.dispatch(
                "questionsModule/deleteQuestion",
                this.question.uuid
            );
            this.closeDeleteQuestionModal();
        },
        showDeleteQuestionModal() {
            this.$refs.delQuestionRef.show();
        },
        unlinkQuestion() {
            this.currentQuestion = {
                uuid: this.question.uuid,
                question: this.question.question,
                next_question_uuid: ''
            };
            this.$store.dispatch("questionsModule/updateExistingQuestion",
                this.currentQuestion);
            this.currentQuestion = resetQuestion();
        },
        showLinkQuestionModal() {
            this.$refs.linkQuestionModalRef.show();
        },
        closeLinkQuestionModal() {
            this.$refs.linkQuestionModalRef.hide();
            this.nextQuestionUuid = "";
        },
        doOnLinkQuestion() {
            this.currentQuestion = {
                uuid: this.question.uuid,
                question: this.question.question,
                next_question_uuid: this.nextQuestionUuid
            };
            this.$store.dispatch("questionsModule/updateExistingQuestion",
                this.currentQuestion);
            this.currentQuestion = resetQuestion();
            
            this.closeLinkQuestionModal();
        },
        showNewQuestionModal() {
            this.$refs.newQuestionModalRef.show();
        },
        closeNewQuestionModal() {
            this.newQuestion = resetNewQuestion();
            this.$refs.newQuestionModalRef.hide();
        },
        doOnAddNewQuestion() {
            this.newQuestion.quiz_uuid = this.$store.state.questionsModule.quiz_uuid;
            this.newQuestion.parent = {
                type: 'question',
                obj: this.question
            }
            this.$store.dispatch('questionsModule/addNewQuestion', this.newQuestion);
            
            this.closeNewQuestionModal();
            this.$scrollTo("#scroll-end");
        }
    },
    computed: {
        isSingleChoiceQuestion() {
            return this.$store.getters[
                "questionsModule/isSingleChoiceQuestion"
            ](this.question.uuid);
        },
        hasNextQuestion() {
            return (
                this.question.next_question_uuid != "" &&
                this.question.next_question_uuid != null
            );
        },
        answers() {
            return this.question.answers.sort((answerA, answerB) => {
                return answerA.answer_order - answerB.answer_order;
            });
        },
        answerTypes() {
            return this.$store.getters["questionsModule/questionAnswerTypes"](
                this.question.uuid
            );
        },
        nextAnswerOrder() {
            return (this.question.answers.length + 1) * 10;
        },
        linkedQuestion() {
            if (this.hasNextQuestion) {
                return this.$store.getters["questionsModule/question"](
                    this.question.next_question_uuid
                ).question;
            }
        },
        isFirstQuestionOnQuiz() {
            return (
                this.question.uuid ===
                this.$store.getters["questionsModule/firstQuizQuestion"]
            );
        },
        otherQuestions() {
            return this.$store.getters["questionsModule/getOtherQuestions"](
                this.question.uuid
            );
        },
        question_types() {
            return this.$store.getters["questionsModule/questionTypes"];
        },
        isTheLastQuestion() {
            return this.$store.getters["questionsModule/isTheLastQuestion"](
                this.question.uuid
            );
        }
    }
};
</script>

