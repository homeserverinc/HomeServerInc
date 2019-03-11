import { QUESTION_TYPES, ANSWER_TYPES } from "../../../constants";
import Axios from "axios";
import qs from 'qs';

const VALID_MUTATIONS = { 
    ADD_QUIZZES: "ADD_QUIZZES",
    SELECT_QUIZ: "SELECT_QUIZ",
    SET_QUESTIONS: "SET_QUESTIONS",
    ADD_QUESTION: "ADD_QUESTION",
    ADD_ANSWER: "ADD_ANSWER",
    DEL_ANSWER: "DEL_ANSWER",
    UPDATE_ANSWER: "UPDATE_ANSWER",
    UPDATE_QUESTION: "UPDATE_QUESTION",
    REMOVE_QUESTION: "REMOVE_QUESTION",
    UNLINK_QUESTION: "UNLINK_QUESTION",
    LINK_QUESTION: "LINK_QUESTION",
    NEW_QUESTION_UUID: "NEW_QUESTION_UUID"
};

const state = {
    questions: [],
    quizzes: [],
    quiz_uuid: "",
    lastNewQuestionUUID: ""
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
    answer: (state, getters) => (question_uuid, answer_uuid) => {
        return getters.question(question_uuid).answers.find(a => a.uuid === answer_uuid);
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
        if (state.quiz_uuid !== '') { 
            return state.quizzes.find(q => q.uuid === state.quiz_uuid).first_question_uuid;
        }
    },
    getOtherQuestions: (state) => (uuid) => {
        return state.questions.filter(q => q.uuid !== uuid);
    },
    isTheLastQuestion: (state, getters) => uuid => {
        if (getters.question(uuid).answers.length === 0) {
            return true;
        }
        if (getters.isSingleChoiceQuestion(uuid)) {
            var answers = getters.question(uuid).answers;
            for (var i = 0; i < answers.length; i++) {
                if ((answers[i].next_question_uuid === null) || (answers[i].next_question_uuid === '')) {
                    return true;
                }
            }
        } else {
            let q = getters.question(uuid).next_question_uuid;
            return ((q === null) || (q === ''))
        }
        return false;
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
    },
    addNewQuestion({commit, getters, dispatch}, question) {
        console.log(question);
        Axios.post('/admin/crud-questions/add_question', qs.stringify(question))
            .then(async r => {
                console.log(r);
                switch (question.parent.type) {
                    case 'answer':
                        let a = getters.answer(question.parent.obj.question_uuid, question.parent.obj.uuid);
                        a.next_question_uuid = r.data.uuid;
                        dispatch('updateExistingAnswer', a);
                        break;
                
                    case 'question':
                        let q = getters.question(question.parent.obj.uuid);
                        q.next_question_uuid = r.data.uuid;
                        dispatch('updateExistingQuestion', q);
                        break;
                }
                commit(VALID_MUTATIONS.ADD_QUESTION, r.data);
                commit(VALID_MUTATIONS.NEW_QUESTION_UUID, r.data.uuid);
            })
            .catch(r => {
                console.log(r);
            });
    },
    addNewAnswer({commit}, answer) {
        Axios.post('/admin/crud-questions/add_answer', qs.stringify(answer))
            .then(async r => {
                console.log(r.data);
                commit(VALID_MUTATIONS.ADD_ANSWER, r.data);
            })
            .catch(r => {
                console.log(r);
        });
    },
    updateExistingQuestion({commit}, question) {
        Axios.post('/admin/crud-questions/edit_question', qs.stringify(question))
            .then(async r => {
                console.log(r);
                commit(VALID_MUTATIONS.UPDATE_QUESTION, r.data);
            })
            .catch(r => {
                console.log(r);
            });
    },
    updateExistingAnswer({commit}, answer) {
        Axios.post('/admin/crud-questions/edit_answer', qs.stringify(answer))
            .then(async r => {
                console.log(r);
                commit(VALID_MUTATIONS.UPDATE_ANSWER, r.data);
            })
            .catch(r => {
                console.log(r);
            });
    },
    deleteQuestion({commit, dispatch}, question) {
        Axios.post('/admin/crud-questions/del_question', qs.stringify({uuid: question}))
            .then(r => {
                console.log(r);
                commit(VALID_MUTATIONS.REMOVE_QUESTION, question);
            })
            .catch(r => {
                console.log(r);
            });
    },
    persistLinkOnAnswer({commit}, link) {
        let post = {
            answer_uuid: link.uuid,
            next_question_uuid: link.link
        };
        Axios.post('/admin/crud-questions/link_answer_questinon', qs.stringify(post))
            .then(r => {
                console.log(r);
                commit(VALID_MUTATIONS.LINK_QUESTION, link);
            })
            .catch(r => {
                console.log(r);
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
        x.answer = answer.answer;
        x.answer_order = answer.answer_order;
        x.weight = answer.weight;
        x.next_question_uuid = answer.next_question_uuid;
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
        x.next_question_uuid = value.next_question_uuid;
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
    },
    [VALID_MUTATIONS.NEW_QUESTION_UUID](state, payload) {
        state.lastNewQuestionUUID = payload;
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
