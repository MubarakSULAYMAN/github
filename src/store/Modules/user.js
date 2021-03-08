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
    async fetchUsers({ commit, state, dispatch }) {
        try {
            let response = await RequestService.getUser(state.username)

            commit('UPDATE_USER_INFO', response.data)
        } catch (e) {
            dispatch('showWarning')
            commit(
                'UPDATE_ERROR_MESSAGE',
                'Error occured while fetching user details.',
            )
        }
    },
}

export default {
    state,
    mutations,
    actions,
}
