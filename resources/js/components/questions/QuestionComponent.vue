<template>
    <div class="card" :id="'uuid-'+question.uuid">
        <div
            class="card-header p-2"
            :class="{'text-white': isFirstQuestionOnQuiz, 'bg-success': isFirstQuestionOnQuiz}"
        >
            <h5 class="m-1 float-left">
                <i
                    class="fas fa-sm"
                    :class="{'fa-dot-circle': isSingleChoiceQuestion, 'fa-check-circle': !isSingleChoiceQuestion}"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Single choice question"
                ></i>
                {{ question.question }}
                <a
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
                        class="btn btn-sm btn-secondary dropdown-toggle"
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
                        <a class="dropdown-item" href="#" @click="showDeleteQuestionModal">
                            <i class="fas fa-trash-alt"></i> Remove Question
                        </a>
                        <a class="dropdown-item" href="#" @click="addNewAnswer">
                            <i class="fas fa-list"></i> New Answer
                        </a>
                        <a
                            class="dropdown-item"
                            href="#"
                            v-if="!isSingleChoiceQuestion && !hasNextQuestion"
                        >
                            <i class="fas fa-question"></i> New Question
                        </a>
                        <a
                            class="dropdown-item"
                            href="#"
                            v-if="!isSingleChoiceQuestion && !hasNextQuestion"
                            @click="showLinkQuestionModal"
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
                    <div class="col-9">
                        <label for="answer">Answer</label>
                        <input
                            type="text"
                            name="answer"
                            id="answer"
                            class="form-control"
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
    </div>
</template>

<script>
import bModal from "bootstrap-vue/es/components/modal/modal";
import bModalDirective from "bootstrap-vue/es/directives/modal/modal";
import answerComponent from "./AnswerComponent.vue";
import { QUESTION_TYPES, ANSWER_TYPES } from "../../constants";
import VALID_MUTATIONS from "../../store/modules/questions";
import uuid from "uuid";

function resetNewAnswer() {
    return {
        uuid: "",
        answer_order: 0,
        answer_type_uuid: "",
        question_uuid: "",
        next_question_uuid: "",
        answer: ""
    };
}

function resetQuestion() {
    return {
        uuid: "",
        question: "",
        question_type: ""
    };
}

export default {
    data() {
        return {
            newAnswer: {
                uuid: "",
                answer_order: 0,
                answer_type_uuid: "",
                question_uuid: "",
                next_question_uuid: "",
                answer: ""
            },
            currentQuestion: {
                uuid: "",
                question: "",
                question_type: ""
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
            this.$refs.addNewAnswerRef.show();
        },
        cancelAddNewAnswer() {
            this.closeAddNewAnswer();
        },
        closeAddNewAnswer() {
            this.$refs.addNewAnswerRef.hide();
        },
        doOnAddNewAnswer() {
            this.newAnswer.uuid = uuid();
            this.newAnswer.question_uuid = this.question.uuid;
            this.newAnswer.answer_order = this.nextAnswerOrder;
            this.$store.commit("questionsModule/ADD_ANSWER", this.newAnswer);
            this.newAnswer = this.closeAddNewAnswer();
            this.newAnswer = resetNewAnswer();
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
            this.$store.commit(
                "questionsModule/UPDATE_QUESTION",
                this.currentQuestion
            );
            this.currentQuestion = resetQuestion();
            this.closeEditQuestionModal();
        },
        closeDeleteQuestionModal() {
            this.$refs.delQuestionRef.hide();
        },
        doOnDeleteQuestion() {
            this.$store.commit(
                "questionsModule/REMOVE_QUESTION",
                this.question.uuid
            );
            this.closeDeleteQuestionModal();
        },
        showDeleteQuestionModal() {
            this.$refs.delQuestionRef.show();
        },
        unlinkQuestion() {
            this.$store.commit(
                "questionsModule/UNLINK_QUESTION",
                this.question.uuid
            );
        },
        showLinkQuestionModal() {
            this.$refs.linkQuestionModalRef.show();
        },
        closeLinkQuestionModal() {
            this.$refs.linkQuestionModalRef.hide();
            this.nextQuestionUuid = "";
        },
        doOnLinkQuestion() {
            this.$store.commit("questionsModule/LINK_QUESTION", {
                uuid: this.question.uuid,
                link: this.nextQuestionUuid
            });
            this.closeLinkQuestionModal();
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
            return this.$store.getters["questionsModule/getOtherQuestions"](this.question.uuid);
        }
    }
};
</script>

