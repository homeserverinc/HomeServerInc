import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        question: {
            answers: [
                {
                    order: 0
                }
            ]
        },
        answer: {},
        questionTypes: [],
        answerTypes: []
    },
    getters: {
        answers: (state) => {
            return state.question.answers.sort((a, b) =>  {
                return a.order > b.order
            });
        }, 
        answer: (state, uuid) => {
            return state.question.answers.find((a) => a.uuid === uuid);
        },
        newAnswerOrder: (state) => {
            let a = state.question.answers;
            return (a.length > 0) ? a[a.length - 1].order + 10 : 10;
        }
    },
    actions: {
        getAnswerTypes({commit}) {
            Axios.get('/admin/answer-types') 
                .then(async (res) => {
                    commit('setAnswerTypes', res.data);
                });
        },
        getQuestionTypes({commit}) {
            Axios.get('/admin/question-types') 
                .then(async (res) => {
                    commit('setQuestionTypes', res.data);
                });
        }
    },
    mutations: {
        setAnswerTypes(state, value) {
            state.answerTypes = value
        },
        setQuestionTypes(state, value) {
            state.questionTypes = value;
        }
    }
});