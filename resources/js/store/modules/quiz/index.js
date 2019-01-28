import Axios from 'axios';

const VALID_MUTATIONS = {
    'SELECT_SERVICE': 'SELECT_SERVICE'
}

const state = {
    service: {},
    answeredQuestions: []
}

const actions = {
    getApiService({commit}, uuid) {
        Axios.get('/api/service/'+uuid)
            .then(async (res) => {
                console.log(res);
                commit(VALID_MUTATIONS.SELECT_SERVICE, res.data);
            });
    }
}

const getters = {

}

const mutations = {
    [VALID_MUTATIONS.SELECT_SERVICE](state, service) {
        state.service = service;
    }
}

const namespaced = true;

export default {    
    namespaced,
    state,
    getters,
    actions,
    mutations
}