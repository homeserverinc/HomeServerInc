<template>
    <div class="list-group-item list-group-item-action p-2" :id="answer.uuid">
        <span class="badge badge-secondary">{{answer.answer_order}}</span>
        {{ answer.answer }}
        <a
            href="#"
            v-if="hasNextQuestion"
            v-scroll-to="'#uuid-'+answer.next_question_uuid"
        >
            <i class="fas fa-arrow-right"></i>
            {{linkedQuestion}}
        </a>
        <div class="float-right">
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
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#"
                        @click.prevent="showEditAnswer"
                    >
                        <i class="fas fa-edit"></i> Edit Answer
                    </a>
                    <a class="dropdown-item" href="#"
                        @click.prevent="confirmDelAnswer"
                    >
                        <i class="fas fa-trash-alt"></i> Remove Answer
                    </a>
                    <a
                        class="dropdown-item"
                        href="#"
                        v-if="isSingleChoiceAnswer && !hasNextQuestion"
                        @click.prevent="showNewQuestionModal"
                    >
                        <i class="fas fa-question"></i> New Question
                    </a>
                    <a
                        class="dropdown-item"
                        href="#"
                        v-if="isSingleChoiceAnswer && !hasNextQuestion"
                        @click.prevent="showLinkQuestionModal"
                    >
                        <i class="fas fa-link"></i> Link existing question
                    </a>
                    <a
                        class="dropdown-item"
                        href="#"
                        v-if="isSingleChoiceAnswer && hasNextQuestion"
                        @click="unlinkQuestion"
                    >
                        <i class="fas fa-link"></i> Unlink question
                    </a>
                </div>
            </div>
        </div>

        <b-modal ref="delAnswerRef" title="Delete Answer Confirmation">
            Do you really want to remove:
            <strong>{{ answer.answer }}</strong>
            <div slot="modal-footer" class="w-100">
                <div class="float-right">
                    <button class="btn btn-danger" @click="deleteAnswer">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="btn btn-secondary" @click="closeModal">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        </b-modal>
        <b-modal ref="editAnswerRef" size="lg" title="Edit Answer">
            <div class="form-group">
                <div class="row">
                    <div class="col-2">
                        <label for="answer_order">#</label>
                        <input
                            type="text"
                            name="answer_order"
                            id="answer_order"
                            class="form-control"
                            v-model="editAnswer.answer_order"
                        >
                    </div>
                    <div class="col-3">
                        <label for="answer_type">Answer Type</label>
                        <select
                            name="answer_type"
                            id="answer_type"
                            class="form-control"
                            v-model="editAnswer.answer_type_uuid"
                        >
                            <option
                                v-for="answer_type in answer_types"
                                :key="answer_type.uuid"
                                :value="answer_type.uuid"
                            >{{answer_type.description}}</option>
                        </select>
                    </div>
                    <div class="col-7">
                        <label for="answer">Answer</label>
                        <input
                            type="text"
                            name="answer"
                            id="answer"
                            class="form-control"
                            v-model="editAnswer.answer"
                        >
                    </div>
                </div>
            </div>
            <div slot="modal-footer" class="w-100">
                <div class="float-right">
                    <button class="btn btn-danger" @click="closeModal">
                        <i class="fas fa-check"></i>
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
import uuid from "uuid";

function resetEditAnswer() {
    return {
        answer_order: 0,
        uuid: "",
        question_uuid: "",
        answer_type_uuid: "",
        answer: "",
        next_question_uuid: ""
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
            editAnswer: {
                answer_order: 0,
                uuid: "",
                question_uuid: "",
                answer_type_uuid: "",
                answer: "",
                next_question_uuid: ""
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
        answer: {}
    },
    components: {
        bModal
    },
    directives: {
        bModalDirective
    },
    methods: {
        confirmDelAnswer() {
            this.$refs.delAnswerRef.show();
        },
        closeModal() {
            this.$refs.delAnswerRef.hide();
            this.$refs.editAnswerRef.hide();
        },
        deleteAnswer() {
            this.$store.dispatch("questionsModule/delAnswer", this.answer);
            this.closeModal();
        },
        showEditAnswer() {
            this.editAnswer = this.answer;
            this.$refs.editAnswerRef.show();
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
                uuid: this.answer.uuid,
                link: this.nextQuestionUuid
            });
            this.closeLinkQuestionModal();
        },
        unlinkQuestion() {
            this.$store.commit(
                "questionsModule/UNLINK_QUESTION",
                this.answer.uuid
            );
        },
        showNewQuestionModal() {
            this.$refs.newQuestionModalRef.show();
        },
        closeNewQuestionModal() {
            this.newQuestion = resetNewQuestion();
            this.$refs.newQuestionModalRef.hide();
        },
        doOnAddNewQuestion() {
            
            this.newQuestion.uuid = uuid();
            this.$store.commit(
                "questionsModule/ADD_QUESTION",
                this.newQuestion
            );
            this.$store.commit("questionsModule/LINK_QUESTION", {
                uuid: this.answer.uuid,
                link: this.newQuestion.uuid
            });
            this.closeNewQuestionModal();
            this.$scrollTo('#scroll-end');
        }
    },
    computed: {
        answer_types() {
            return this.$store.getters["questionsModule/questionAnswerTypes"](
                this.answer.question_uuid
            );
        },
        hasNextQuestion() {
            return (
                this.answer.next_question_uuid !== "" &&
                this.answer.next_question_uuid !== null
            );
        },
        isSingleChoiceAnswer() {
            return this.$store.getters["questionsModule/isSingleChoiceAnswer"](
                this.answer.answer_type_uuid
            );
        },
        linkedQuestion() {
            if (this.hasNextQuestion) {
                return this.$store.getters["questionsModule/question"](
                    this.answer.next_question_uuid
                ).question;
            }
        },
        otherQuestions() {
            return this.$store.getters["questionsModule/getOtherQuestions"](
                this.answer.question_uuid
            );
        },
        question_types() {
            return this.$store.getters["questionsModule/questionTypes"];
        },
    }
};
</script>
