import Axios from "axios";

const state = {
	category: {},
	categories: [],
	hiddenComponent: null
};

const getters = {
	categoryOfQuiz: state => uuid => {
		return state.categories.find(c => c.quiz_uuid === uuid);
	}
};

const actions = {
	apiGetCategories({ state, rootState, dispatch, commit, getters }, quizUuid = null) {
		if (!rootState.HsQuiz.isLoading) {
			commit("HsQuiz/setLoading", true, {root: true});
		}
		Axios.get("/admin/quiz-get-categories")
			.then(async r => {
				commit("setCategories", r.data.data);
				if (quizUuid !== null) {
					dispatch("setCategory", getters.categoryOfQuiz(quizUuid).uuid);
					commit("HsQuiz/currentComponentIndex", 1, {root: true});
				} else {
					if (state.categories.length == 1) {
						dispatch("setCategory", state.categories[0]);
					} else {
						commit("HsQuiz/setLoading", false, {root: true});
					}
				}
			})
			.catch(e => {
				console.log(e);
			});
	},
	selectCategory({ commit, rootState, dispatch }, categoryUuid) {
		if (!rootState.HsQuiz.isLoading) {
			commit("HsQuiz/setLoading", true, {root: true});
		}
		dispatch("setCategory", categoryUuid);
		if (categoryUuid != null) {
			this.dispatch("HsQuiz/apiGetQuiz", categoryUuid);
		}
	},
	setCategory({state, commit}, category) {
		console.log(state.hiddenComponent);
		commit('setCategory', category);
		if (state.hiddenComponent !== null) {

			state.hiddenComponent.value = category
		}
	}
};

const mutations = {
	setCategories(state, payload) {
		state.categories = payload;
	},
	setCategory(state, payload) {
		state.category = state.categories.find(
			category => category.uuid === payload
		);
	},
	setHiddenCategoryComponent(state, payload) {
		state.hiddenComponent = payload;
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
