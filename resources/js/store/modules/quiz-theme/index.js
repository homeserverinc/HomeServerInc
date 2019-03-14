const state = {
    suffixTheme: 'light',
    enableShadow: true
}

const mutations = {
    setSuffixTheme(state, payload) {
        state.suffixTheme = payload;
    },
    setEnableShadow(state, payload) {
        state.enableShadow = payload;
    }
}

const namespaced = true;

export default {
    namespaced,
    state,
    mutations
}