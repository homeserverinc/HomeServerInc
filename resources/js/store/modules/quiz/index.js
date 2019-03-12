import Axios from "axios";
import { QUESTION_TYPES, ANSWER_TYPES } from "../../../constants";

const state = {
	quiz: {},
	answeredQuestions: [],
	history: [],
	answeredQuestionsPreview: [],
	answerTypes: ANSWER_TYPES,
	questionTypes: QUESTION_TYPES,
	currentQuestion: {
    answers: []
  },
	showQuestionTitle: true,
	currentQuestionAnswered: null,
	isLoading: false,
	showingModal: false,
	finishedQuiz: true,
	components: [
		"HsCategories",
		"HsQuiz"		
	],
	currentComponentIndex: 0,
	modalRef: null,
	_questions: 'leadQuestions'
};

const getters = {
	currentComponent: state => {
		return state.components[state.currentComponentIndex];
	},
	isFirstComponent: state => {
		return state.currentComponentIndex === 0;
	},
	hasNextComponent: state => {
		return state.currentComponentIndex < state.components.length;
	},
	componentIndex: state => component => {
		return state.components.indexOf(component);
	},
	question: state => uuid => {
		return state.quiz.questions.find(q => q.uuid === uuid);
	},
	answer: state => uuid => {
		return state.currentQuestion.answers.find(a => a.uuid === uuid);
  },
  orderedAnswers: state => {
      return state.currentQuestion.answers.sort((a, b) => {
        return a.answer_order - b.answer_order;
      });
  },
	answerIsSelected: (state, getters) => uuid => {
		if (getters.singleChoiceQuestion) {
			return state.currentQuestion.selected_answers;
		} else {
			if (Array.isArray(state.currentQuestion.selected_answers)) {
				return state.currentQuestion.selected_answers.find(
					answer => answer.uuid === uuid
				);
			} else {
				return null;
			}
		}
	},
	questionAnswered: (state, getters) => uuid => {
		let q = getters.question(uuid);
		if (q.question_type.uuid === state.questionTypes.SINGLE_CHOICE) {
			if (q.selected_answers !== "" && q.selected_answers !== null) {
				let a = getters.answer(q.selected_answers.uuid);
				if (
					a.answer_type_uuid == state.answerTypes.SINGLE_CHOICE_TEXT
				) {
					return q.custom_answer !== "" && q.custom_answer !== null;
				} else {
					return true;
				}
			} else {
				return false;
			}
		} else {
			if (q.selected_answers === null || q.selected_answers === "") {
				return false;
			} else {
				if (q.selected_answers.length > 0) {
					var result = true;
					q.selected_answers.forEach(a => {
						if (getters.answerIsSelected(a.uuid) !== null) {
							let x = getters.answer(a.uuid);
							if (
								x.answer_type_uuid ===
								state.answerTypes.MULTIPLE_CHOICE_TEXT
							) {
								if (
									q.custom_answer === "" ||
									q.custom_answer === null
								) {
									result = false;
								}
							}
						}
					});
					return result;
				} else {
					return false;
				}
			}
		}
	},
	singleChoiceQuestion: state => {
		if (state.currentQuestion !== undefined) {
			if (typeof state.currentQuestion.question_type != "undefined") {
				return (
					state.currentQuestion.question_type.uuid ===
					state.questionTypes.SINGLE_CHOICE
				);
			} else {
				return false;
			}
		} else {
			return false;
		}
	},
	nextQuestion: (state, getters) => {
		if (state.currentQuestion !== undefined) {
			if (state.currentQuestion.hasOwnProperty("question_type")) {
				if (
					state.currentQuestion.question_type.uuid ===
					state.questionTypes.SINGLE_CHOICE
				) {
					if (state.currentQuestion.selected_answers === null) {
						return null;
					} else {
						let answer = getters.answer(
							state.currentQuestion.selected_answers.uuid
						);
						return answer
							? getters.question(answer.next_question_uuid)
							: null;
					}
				} else {
					let nq = state.currentQuestion.next_question_uuid;
					return nq ? getters.question(nq) : null;
				}
			} else {
				return null;
			}
		} else {
			return null;
		}
	},
	prevQuestion: state => {
		if (state.answeredQuestions.length > 0) { 
			return state.answeredQuestions.slice(-1)[0];
		}
	}
};

const actions = {
	loadExistingLead({state, commit, dispatch, getters}, uuid) {
		Axios.get("/admin/quiz-get-lead/" + uuid)
			.then(async r => {
				let data = JSON.parse(r.data.data.questions);
				if (data != null && r.data.data.category != null) {
					commit('setQuiz', data.quiz);
					commit('setAnsweredQuestionsPreview', data.answeredQuestions);
					commit("setCurrentQuestion", getters.question(state.quiz.first_question_uuid));
					commit('setFinishedQuiz', true);
					console.log(r.data.data.category);
					if (r.data.data.category) {
						
						dispatch('HsCategories/apiGetCategories', data.quiz.uuid, {root: true});
						dispatch('HsCategories/setCategory', r.data.data.category, {root: true});
					} else {
						dispatch('HsCategories/apiGetCategories', data.quiz.uuid, {root: true});
					}
				} else {
					dispatch('HsCategories/apiGetCategories', null, {root: true});
					commit("HsQuiz/setFinishedQuiz", false, {root: true});
				}
				commit('setLoading', false);
			})
	},
	apiGetQuiz({ state, commit, getters }, categoryUuid) {
		if (!state.isLoading) {
			commit("setLoading", true);
		}
		Axios.get("/admin/quiz-get-quiz/" + categoryUuid)
			.then(async r => {
				commit("setQuiz", r.data.data);
				commit("setCurrentQuestion", getters.question(state.quiz.first_question_uuid));
				commit("setLoading", false);
			})
			.catch(e => {
				console.log(e);
			});
	},
	selectCheckboxes({ commit, state }, answer) {
		if (!Array.isArray(state.currentQuestion.selected_answers)) {
			commit("initSelectedAnswers");
		}
		if (answer.checked) {
			commit("addCheckedAnswer", { uuid: answer.value });
		} else {
			commit("delCheckedAnswer", answer.value);
		}
	},
	goToNextQuestion({ commit, state, getters, dispatch }) {
		dispatch("setAnsweredQuestion");
		if (state.currentQuestion.uuid !== getters.nextQuestion.uuid) {
			commit("setCurrentQuestion", getters.nextQuestion);
			commit("setCurrentQuestionAnswered", null);
		}
		commit("setAnswerVisible", true);
		commit("setShowQuestionTitle", true);
	},
	goToPrevQuestion({ commit, state, getters }) {
		if (typeof state.currentQuestion != "undefined") {
			commit("setShowQuestionTitle", false);
			commit("setAnswerVisible", false);
		}
		let prevq = getters.prevQuestion;
		commit("setCurrentQuestionAnswered", null);
		commit("setCurrentQuestion", getters.question(prevq.uuid));
		commit("setSelectedAnswer", prevq.selected_answers);
		commit("popAnsweredQuesiton");
		commit("setAnswerVisible", true);
		commit("setShowQuestionTitle", true);
	},
	answerCurrentQuestion({ commit, dispatch, getters }, q) {
		commit("setSelectedAnswer", { uuid: q.uuid });
		if (getters.singleChoiceQuestion) {
			dispatch("next", q.component);
		}
	},
	setAnsweredQuestion({ commit }) {
		commit("setShowQuestionTitle", false);
		commit("setAnswerVisible", false);
		commit("addAnswerdQuestion");
	},
	next({state, commit, getters, dispatch}, component) {
		if (component.$options._componentTag === "HsQuiz") {
			if (getters.questionAnswered(state.currentQuestion.uuid)) {
				if (getters.nextQuestion == null) {
					dispatch("setAnsweredQuestion");
					dispatch("finishQuiz");
				} else {
					dispatch("goToNextQuestion");
				}
			} else {
				commit("setCurrentQuestionAnswered", false);
			}
		} else {
			component.$validator.validate().then(async result => {
				if (result) {
					dispatch("getNext", component);
				}
			});
		}
	},
	prev({state, commit, dispatch}, component) {
		let compName = component.$options._componentTag;
		if (compName == 'HsQuiz') {
			if (state.answeredQuestions.length == 0 || state.currentQuestion.uuid == state.quiz.first_question_uuid) {
				commit('prevComponent');
			} else {
				dispatch('goToPrevQuestion');
			}
		} 
	},
	getNext({ state, commit, dispatch }, component) {
		let compName = component.$options._componentTag;
		switch (compName) {
			case "HsCategories":
				commit("currentComponentIndex", state.components.indexOf("HsQuiz"));
				break;
		}
	},
	closeModalWindow({state, commit}) {
		if (state.modalRef !== null) {
			if (state._questions !== null) {
				 state._questions.value = JSON.stringify(
					{	
						quiz: state.quiz,
						answeredQuestions: state.answeredQuestions
					}
				);
			}
			state.modalRef.hide();
			commit('setShowingModal', false);
		}
	},
	finishQuiz({state, commit, dispatch}) {
		commit("setFinishedQuiz", true);
		commit("setAnsweredQuestionsPreview", state.answeredQuestions);
		dispatch("closeModalWindow");
	},
	showingModal({state, getters, commit}, showing) {
		commit('setShowingModal', showing);
		if (state.answeredQuestionsPreview.length > 0) {
			//commit('setAnsweredQuestions', []);
			commit("setCurrentQuestion", getters.question(state.quiz.first_question_uuid));
			commit("setAnswerVisible", true);
			commit("setShowQuestionTitle", true);
			//commit('setCurrentQuestion', state.answeredQuestionsPreview[0]);
		}
	}
};

const mutations = {
	loadAnswerToQuestion(state, {payload, getters}) {
		let q = getters.question(payload.uuid);
		console.log(q);
		q.selected_answers = payload.selected_answers;
		q.custom_answer = payload.custom_answer;
		console.log(q);
	},
	setQuiz(state, payload) {
		state.quiz = payload;
	},
	setCurrentQuestion(state, payload) {
		state.currentQuestion = payload;
	},
	initSelectedAnswers(state) {
		state.currentQuestion.selected_answers = [];
	},
	addCheckedAnswer(state, answer) {
		state.currentQuestion.selected_answers.push(answer);
	},
	delCheckedAnswer(state, answer) {
		state.currentQuestion.selected_answers = state.currentQuestion.selected_answers.filter(
			a => a.uuid != answer
		);
	},
	setShowQuestionTitle(state, payload) {
		state.showQuestionTitle = payload;
	},
	setCustomText(state, payload) {
		state.currentQuestion.custom_answer = payload;
	},
	setSelectedAnswer(state, payload) {
		state.currentQuestion.selected_answers = payload;
		state.currentQuestionAnswered = true;
	},
	setAnswerVisible(state, payload) {
		state.currentQuestion.answers.forEach(answer => {
			answer.visible = payload;
		});
	},
	addAnswerdQuestion(state) {
		if (state.answeredQuestions.some(q => q.uuid === state.currentQuestion.uuid)) {
			state.answeredQuestions = state.answeredQuestions.map(item => {
				if (item.uuid === state.currentQuestion.uuid) {
					item = state.currentQuestion;
				}
				return item;
			});
		} else {
			state.answeredQuestions.push(state.currentQuestion);
		}
	},
	setAnsweredQuestions(state, payload) {
		state.answeredQuestions = JSON.parse(JSON.stringify(payload));
	},
	popAnsweredQuesiton(state) {
		state.answeredQuestions.pop();
	},
	setCurrentQuestionAnswered(state, payload) {
		state.currentQuestionAnswered = payload;
	},
	setLoading(state, payload) {
		state.isLoading = payload;
	},
	setFinishedQuiz(state, payload) {
		state.finishedQuiz = payload;
	},
	nextComponent(state) {
		state.currentComponentIndex++;
	},
	prevComponent(state) {
		state.currentComponentIndex--;
	},
	currentComponentIndex(state, payload) {
		state.currentComponentIndex = payload;
	},
	setShowingModal(state, payload) {
		state.showingModal = payload;
	}, 
	setModalRef(state, payload) { 
		state.modalRef = payload;
	},
	setAnsweredQuestionsPreview(state, payload) {
		state.answeredQuestionsPreview = JSON.parse(JSON.stringify(payload));
	},
	_questions(state, payload) {
		state._questions = payload;
	},
	setHiddenComponent(state, payload) {
		state._questions = payload;
	},
	setHiddenCategoryComponent(state, payload) {
		state.hiddenConponent = payload;
	}
};

const namespaced = true;

export default {
	namespaced,
	state,
	getters,
	actions,
	mutations
};
