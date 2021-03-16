import RequestService from '@/utils/services/RequestService'

const state = {
    username: 'MubarakSULAYMAN',
    user_info: [],
    user_info_loading: true,
}

const mutations = {
    UPDATE_USERNAME(state, name) {
        state.username = name
    },

    UPDATE_USER_INFO(state, user) {
        state.user_info = user
    },
}

const actions = {
    async fetchUsers({ commit, rootState, state, dispatch }) {
        try {
            let response = await RequestService.getUser(state.username)

            if ([200, 201].includes(rootState.request_status)) {
                commit('UPDATE_USER_INFO', response.data)
            }
        } catch (e) {
            dispatch('showWarning')
            commit(
                'UPDATE_ERROR_MESSAGE',
                'Error occured while fetching user details.',
            )

            if (e.request.status === 0) {
                dispatch('showWarning')
                commit(
                    'UPDATE_ERROR_MESSAGE',
                    'Kindly check internet connection',
                )
            } else if ([403].includes(e.response.request.status)) {
                dispatch('showWarning')
                commit(
                    'UPDATE_ERROR_MESSAGE',
                    'An error occured, kindly check back soon.',
                )
            } else if ([404].includes(e.response.request.status)) {
                dispatch('showWarning')
                commit(
                    'UPDATE_ERROR_MESSAGE',
                    'Username maybe invalid, try again.',
                )
            }
        }
    },
}

export default {
    state,
    mutations,
    actions,
}
