import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/Modules/user.js'
import repository from '@/store/Modules/repository.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        requesting: false,
        request_status: null,
        presenting: false,
        error_message: '',
        error_state: false,
    },

    mutations: {
        UPDATE_REQUESTING(state, req) {
            state.requesting = req
        },

        UPDATE_REQUEST_STATUS(state, status) {
            state.request_status = status
        },

        UPDATE_PRESENTING(state, pres) {
            state.presenting = pres
        },

        UPDATE_ERROR_MESSAGE(state, message) {
            state.error_message = message
        },

        UPDATE_ERROR_STATE(state, error) {
            state.error_state = error
        },
    },

    actions: {
        showWarning({ commit }) {
            commit('UPDATE_ERROR_STATE', true)
            setTimeout(() => commit('UPDATE_ERROR_STATE', false), 5000)
        },

        changeErrorMessage({ commit }) {
            commit('UPDATE_ERROR_MESSAGE', true)
        },
    },

    modules: {
        user,
        repository,
    },
})
