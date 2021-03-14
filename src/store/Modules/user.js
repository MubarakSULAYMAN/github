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
    // changeUsername({ commit }, new_name) {
    //     commit('UPDATE_USERNAME', new_name)
    // },

    async fetchUsers({ commit, rootState, state, dispatch }) {
        // commit('UPDATE_REQUESTING', true)

        try {
            let response = await RequestService.getUser(state.username)
            // console.log('Processing users...')

            // commit('UPDATE_REQUEST_STATUS', response.status)
            // console.log(rootState.request_status)

            if ([200, 201].includes(rootState.request_status)) {
                // commit('UPDATE_REQUESTING', false)
                // commit('UPDATE_PRESENTING', true)
                // commit('UPDATE_USER_EXIST', true)
                commit('UPDATE_USER_INFO', response.data)
                // console.log('User data ready')
            }
        } catch (e) {
            dispatch('showWarning')
            commit(
                'UPDATE_ERROR_MESSAGE',
                'Error occured while fetching user details.',
            )

            if (e.request.status === 0) {
                // commit('UPDATE_REQUESTING', true)
                // commit('UPDATE_PRESENTING', true)
                // commit('UPDATE_USER_EXIST', false)
                dispatch('showWarning')
                commit(
                    'UPDATE_ERROR_MESSAGE',
                    'Kindly check internet connection',
                )
            } else if ([403].includes(e.response.request.status)) {
                // commit('UPDATE_REQUESTING', true)
                // commit('UPDATE_PRESENTING', true)
                // commit('UPDATE_USER_EXIST', true)
                dispatch('showWarning')
                commit(
                    'UPDATE_ERROR_MESSAGE',
                    'An error occured, kindly check back soon.',
                )
            } else if ([404].includes(e.response.request.status)) {
                // commit('UPDATE_REQUESTING', false)
                // commit('UPDATE_PRESENTING', true)
                // commit('UPDATE_USER_EXIST', false)
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
