import RequestService from '@/utils/services/RequestService'

const state = {
    repos: [],
    per_page: 30,
    page: 1,
    starred_repos: [],
    pinned_repos: [],
    pinned_loading: true,
}

const mutations = {
    UPDATE_REPOS(state, repos) {
        state.repos = repos
    },

    UPDATE_PER_PAGE(state, per_page) {
        state.per_page = per_page
    },

    UPDATE_PAGE(state, page) {
        state.page = page
    },

    UPDATE_STARRED_REPOS(state, starred) {
        state.starred_repos = starred
    },

    UPDATE_PINNED_REPOS(state, pins) {
        state.pinned_repos = pins
    },

    UPDATE_PINNED_LOADER(state, loader) {
        state.pinned_loading = loader
    },
}

const actions = {
    async fetchRepos({ commit, state, rootState, dispatch }) {
        try {
            let response = await RequestService.getRepos(
                rootState.user.username,
                state.per_page,
                state.page,
            )

            commit('UPDATE_REPOS', response.data)
            commit('UPDATE_PER_PAGE', state.per_page)
            commit('UPDATE_PAGE', state.page)

            commit('UPDATE_REQUESTING', true)
            commit('UPDATE_REQUEST_STATUS', response.status)

            setTimeout(() => {
                if ([200, 201].includes(rootState.request_status)) {
                    commit('UPDATE_REQUESTING', false)
                    commit('UPDATE_PRESENTING', true)
                }
            }, 500)
        } catch (e) {
            dispatch('showWarning')
            commit(
                'UPDATE_ERROR_MESSAGE',
                'Error occured while fetching repos.',
            )
        }
    },

    async fetchStarredRepos({ commit, rootState, dispatch }) {
        try {
            let response = await RequestService.getStarredRepos(
                rootState.user.username,
            )
            commit('UPDATE_STARRED_REPOS', response.data)
        } catch (e) {
            dispatch('showWarning')
            commit(
                'UPDATE_ERROR_MESSAGE',
                'Error occured while fetching starred repos.',
            )
        }
    },

    async fetchPinnedRepos({ commit, rootState, dispatch }) {
        try {
            let response = await RequestService.getPinnedRepos(
                rootState.user.username,
            )
            commit('UPDATE_PINNED_REPOS', response.data)
            commit('UPDATE_PINNED_LOADER', false)
        } catch (e) {
            dispatch('showWarning')
            commit(
                'UPDATE_ERROR_MESSAGE',
                'Error occured while fetching pinned repos.',
            )
        }
    },
}

export default {
    state,
    mutations,
    actions,
}
