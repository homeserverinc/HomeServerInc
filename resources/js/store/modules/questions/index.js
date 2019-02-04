import { QUESTION_TYPES, ANSWER_TYPES } from "../../../constants";
import Axios from "axios";

const VALID_MUTATIONS = {
    ADD_QUIZZES: "ADD_QUIZZES",
    SELECT_QUIZ: "SELECT_QUIZ",
    SET_QUESTIONS: "SET_QUESTIONS",
    ADD_QUESTION: "ADD_QUESTION",
    DEL_QUESTION: "DEL_QUESTION",
    ADD_ANSWER: "ADD_ANSWER",
    DEL_ANSWER: "DEL_ANSWER",
    UPDATE_ANSWER: "UPDATE_ANSWER",
    UPDATE_QUESTION: "UPDATE_QUESTION",
    REMOVE_QUESTION: "REMOVE_QUESTION",
    UNLINK_QUESTION: "UNLINK_QUESTION",
    LINK_QUESTION: "LINK_QUESTION"
};

const state = {
    questions: [],
    quizzes: [],
    quiz_uuid: ""
};

const getters = {
    quizzes: state => {
        return state.quizzes;
    },
    questions: state => {
        return state.questions;
    },
    question: state => uuid => {
        return state.questions.find(question => question.uuid === uuid);
    },
    answer: getters => (question_uuid, answer_uuid) => {
        return getters
            .question(question_uuid)
            .answers.find(a => a.uuid === answer_uuid);
    },
    isSingleChoiceQuestion: (state, getters) => question_uuid => {
        return (
            getters.question(question_uuid).question_type_uuid ===
            QUESTION_TYPES.SINGLE_CHOICE
        );
    },
    isSingleChoiceAnswer: state => question_type_uuid => {
        return (
            question_type_uuid === ANSWER_TYPES.SINGLE_CHOICE ||
            question_type_uuid === ANSWER_TYPES.SINGLE_CHOICE_TEXT
        );
    },
    questionAnswerTypes: (state, getters) => question_uuid => {
        if (getters.isSingleChoiceQuestion(question_uuid)) {
            return [
                {
                    uuid: ANSWER_TYPES.SINGLE_CHOICE,
                    description: "Radio"
                },
                {
                    uuid: ANSWER_TYPES.SINGLE_CHOICE_TEXT,
                    description: "Radio/Textbox"
                }
            ];
        } else {
            return [
                {
                    uuid: ANSWER_TYPES.MULTIPLE_CHOICE,
                    description: "Checkbox"
                },
                {
                    uuid: ANSWER_TYPES.MULTIPLE_CHOICE_TEXT,
                    description: "Checkbox/Textbox"
                }
            ];
        }
    },
    questionTypes: state => {
        return [
            {
                uuid: QUESTION_TYPES.SINGLE_CHOICE,
                description: "Single Choice"
            },
            {
                uuid: QUESTION_TYPES.MULTIPLE_CHOICE,
                description: "Multiple Choices"
            }
        ];
    },
    firstQuizQuestion: (state) => {
        return state.quizzes.find(q => q.uuid === state.quiz_uuid).first_question_uuid;
    },
    getOtherQuestions: (state) => (uuid) => {
        return state.questions.filter(q => q.uuid !== uuid);
    }
};

const actions = {
    delAnswer({ getters, commit }, answer) {
        commit(VALID_MUTATIONS.DEL_ANSWER, answer);
        var i = 1;
        getters.question(answer.question_uuid).answers.forEach(a => {
            a.order = i * 10;
            i++;
            commit(VALID_MUTATIONS.UPDATE_ANSWER, a);
        });
    },
    getQuizzes({ commit }) {
        Axios.get("/admin/quizzes/json").then(async res => {
            commit(VALID_MUTATIONS.ADD_QUIZZES, res.data);
        });
    },
    selectQuiz({ commit, dispatch }, quiz_uuid) {
        commit(VALID_MUTATIONS.SELECT_QUIZ, quiz_uuid);
        if (quiz_uuid === "") {
            commit(VALID_MUTATIONS.SET_QUESTIONS, []);
        } else {
            dispatch("getQuizQuestions", quiz_uuid);
        }
    },
    getQuizQuestions({ commit }, quiz_uuid) {
        Axios.get("/admin/quiz/" + quiz_uuid + "/questions").then(async res => {
            commit(VALID_MUTATIONS.SET_QUESTIONS, res.data);
        });
    }
};

const mutations = {
    [VALID_MUTATIONS.SET_QUESTIONS](state, questions) {
        state.questions = questions;
    },
    [VALID_MUTATIONS.ADD_QUESTION](state, question) {
        state.questions.push(question);
    },
    [VALID_MUTATIONS.DEL_QUESTION](state, question) {
        state.questions = state.questions.filter(q => (q.uuid = question.uuid));
    },
    [VALID_MUTATIONS.ADD_ANSWER](state, answer) {
        state.questions
            .find(x => x.uuid === answer.question_uuid)
            .answers.push(answer);
    },
    [VALID_MUTATIONS.DEL_ANSWER](state, answer) {
        let q = state.questions.find(x => x.uuid === answer.question_uuid);
        q.answers = q.answers.filter(y => y.uuid !== answer.uuid);
    },
    [VALID_MUTATIONS.UPDATE_ANSWER](state, answer) {
        let x = state.questions
            .find(q => q.uuid === answer.question_uuid)
            .answers.find(a => a.uuid === answer.uuid);
        x = answer;
    },
    [VALID_MUTATIONS.ADD_QUIZZES](state, quizzes) {
        state.quizzes = quizzes;
    },
    [VALID_MUTATIONS.SELECT_QUIZ](state, uuid) {
        state.quiz_uuid = uuid;
    },
    [VALID_MUTATIONS.UPDATE_QUESTION](state, value) {
        let x = state.questions.find(q => q.uuid === value.uuid);
        x.question = value.question;
    },
    [VALID_MUTATIONS.REMOVE_QUESTION](state, uuid) {
        state.questions.forEach(q => {
            if (q.next_question_uuid === uuid) {
                q.next_question_uuid = "";
            }
            q.answers.forEach(a => {
                if (a.next_question_uuid === uuid) {
                    a.next_question_uuid = "";
                }
            });
        });
        state.questions = state.questions.filter(x => x.uuid !== uuid);
    },
    [VALID_MUTATIONS.UNLINK_QUESTION](state, uuid) {
        state.questions.forEach(q => {
            if (q.uuid === uuid) {
                q.next_question_uuid = "";
            }
            q.answers.forEach(a => {
                if (a.uuid === uuid) {
                    a.next_question_uuid = "";
                }
            });
        });
    },
    [VALID_MUTATIONS.LINK_QUESTION](state, link) {
        state.questions.forEach(q => {
            if (q.uuid === link.uuid) {
                q.next_question_uuid = link.link;
            }
            q.answers.forEach(a => {
                if (a.uuid === link.uuid) {
                    a.next_question_uuid = link.link;
                }
            });
        });
    }
};

export default {
    VALID_MUTATIONS,
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
