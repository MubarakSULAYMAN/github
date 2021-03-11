import RequestService from '@/utils/services/RequestService'

const state = {
    repos: [],
    custom_repos: [],
    per_page: 30,
    c_per_page: null,
    page: 1,
    total_pages: 1,
    c_page: null,
    loading_more: false,
    starred_repos: [],
    pinned_repos: [],
    pinned_loading: true,
}

const mutations = {
    UPDATE_REPOS(state, repos) {
        state.repos = repos
    },

    UPDATE_CUSTOM_REPOS(state, repos) {
        state.custom_repos = repos
    },

    UPDATE_PER_PAGE(state, per_page) {
        state.per_page = per_page
    },

    UPDATE_C_PER_PAGE(state, per_page) {
        state.per_page = per_page
    },

    UPDATE_PAGE(state, page) {
        state.page = page
    },

    UPDATE_TOTAL_PAGES(state, t_pages) {
        state.total_pages = t_pages
    },

    UPDATE_C_PAGE(state, page) {
        state.page = page
    },

    UPDATE_LOADING_MORE(state, bool) {
        state.loading_more = bool
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
    changeLoadingMore({ commit }, val) {
        commit('UPDATE_LOADING_MORE', val)
    },

    changePageRequesting({ commit }, bool) {
        commit('UPDATE_REQUESTING', bool)
    },

    changePage({ commit }, new_page) {
        commit('UPDATE_PAGE', new_page)
    },

    async fetchRepos({ commit, rootState, dispatch }, [per_page, page]) {
        commit('UPDATE_REQUESTING', true)
        commit('UPDATE_PER_PAGE', per_page)
        commit('UPDATE_PAGE', page)
        commit(
            'UPDATE_TOTAL_PAGES',
            Math.ceil(rootState.user.user_info.public_repos / state.per_page),
        )

        // console.log(state.total_pages)

        try {
            let response = await RequestService.getRepos(
                rootState.user.username,
                per_page,
                page,
            )

            commit('UPDATE_REQUEST_STATUS', response.status)
            commit('UPDATE_REPOS', response.data)

            // console.log(response)
            // console.log(response.status)
            // console.log(rootState.request_status)

            if ([200, 201].includes(rootState.request_status)) {
                commit('UPDATE_REQUESTING', false)
                commit('UPDATE_PRESENTING', true)
                commit('UPDATE_USER_EXIST', true)
            }
        } catch (e) {
            dispatch('showWarning')
            commit(
                'UPDATE_ERROR_MESSAGE',
                'An error occured while making your request, kindly refresh.',
            )
            // console.error(Promise.reject(e))
            // console.error('request :', e.request.status)
            // console.error('request :', e.response)
            // console.error('response :', e.response.request.status)

            if (e.request.status === 0) {
                commit('UPDATE_REQUESTING', true)
                commit('UPDATE_PRESENTING', true)
                commit('UPDATE_USER_EXIST', false)
                dispatch('showWarning')
                commit(
                    'UPDATE_ERROR_MESSAGE',
                    'Kindly check internet connection',
                )
            } else if ([403].includes(e.response.request.status)) {
                commit('UPDATE_REQUESTING', true)
                commit('UPDATE_PRESENTING', true)
                commit('UPDATE_USER_EXIST', true)
                dispatch('showWarning')
                commit(
                    'UPDATE_ERROR_MESSAGE',
                    'An error occured, kindly check back soon.',
                )
            } else if ([404].includes(e.response.request.status)) {
                commit('UPDATE_REQUESTING', false)
                commit('UPDATE_PRESENTING', true)
                commit('UPDATE_USER_EXIST', false)
                dispatch('showWarning')
                commit(
                    'UPDATE_ERROR_MESSAGE',
                    'Username maybe invalid, try again.',
                )
            }
        }
    },

    async fetchCustomRepos({ commit, rootState, dispatch }, [per_page, page]) {
        commit('UPDATE_C_PER_PAGE', per_page)
        commit('UPDATE_C_PAGE', page)

        try {
            let response = await RequestService.getRepos(
                rootState.user.username,
                per_page,
                page,
            )

            commit('UPDATE_REQUEST_STATUS', response.status)
            commit('UPDATE_CUSTOM_REPOS', response.data)

            // console.log(response.status)
            // console.log(rootState.request_status)

            if ([200, 201].includes(rootState.request_status)) {
                commit('UPDATE_REQUESTING', false)
                commit('UPDATE_PRESENTING', true)
                commit('UPDATE_USER_EXIST', true)
            }
        } catch (e) {
            dispatch('showWarning')
            commit(
                'UPDATE_ERROR_MESSAGE',
                'An error occured while making your request, kindly refresh.',
            )
            // console.error(Promise.reject(e))
            // console.error('request :', e.request.status)
            // console.error('request :', e.response)
            // console.error('response :', e.response.request.status)

            if (e.request.status === 0) {
                commit('UPDATE_REQUESTING', true)
                commit('UPDATE_PRESENTING', true)
                commit('UPDATE_USER_EXIST', false)
                dispatch('showWarning')
                commit(
                    'UPDATE_ERROR_MESSAGE',
                    'Kindly check internet connection',
                )
            } else if ([403].includes(e.response.request.status)) {
                commit('UPDATE_REQUESTING', true)
                commit('UPDATE_PRESENTING', true)
                commit('UPDATE_USER_EXIST', true)
                dispatch('showWarning')
                commit(
                    'UPDATE_ERROR_MESSAGE',
                    'An error occured, kindly check back soon.',
                )
            } else if ([404].includes(e.response.request.status)) {
                commit('UPDATE_REQUESTING', false)
                commit('UPDATE_PRESENTING', true)
                commit('UPDATE_USER_EXIST', false)
                dispatch('showWarning')
                commit(
                    'UPDATE_ERROR_MESSAGE',
                    'Username maybe invalid, try again.',
                )
            }
        }
    },

    async fetchStarredRepos({ commit, rootState, dispatch }) {
        try {
            let response = await RequestService.getStarredRepos(
                rootState.user.username,
            )
            // console.log('Processing starred user...'),
                commit('UPDATE_STARRED_REPOS', response.data)

            commit('UPDATE_REQUEST_STATUS', response.status)
            // console.log(rootState.request_status)

            if ([200, 201].includes(rootState.request_status)) {
                commit('UPDATE_REQUESTING', false)
                commit('UPDATE_PRESENTING', true)
                commit('UPDATE_USER_EXIST', true)

                // console.log('Starred users here!')
            }
        } catch (e) {
            dispatch('showWarning')
            commit(
                'UPDATE_ERROR_MESSAGE',
                'Error occured while fetching starred repos.',
            )

            if (e.request.status === 0) {
                commit('UPDATE_REQUESTING', true)
                commit('UPDATE_PRESENTING', true)
                commit('UPDATE_USER_EXIST', false)
                dispatch('showWarning')
                commit(
                    'UPDATE_ERROR_MESSAGE',
                    'Kindly check internet connection',
                )
            } else if ([403].includes(e.response.request.status)) {
                commit('UPDATE_REQUESTING', true)
                commit('UPDATE_PRESENTING', true)
                commit('UPDATE_USER_EXIST', true)
                dispatch('showWarning')
                commit(
                    'UPDATE_ERROR_MESSAGE',
                    'An error occured, kindly check back soon.',
                )
            } else if ([404].includes(e.response.request.status)) {
                commit('UPDATE_REQUESTING', false)
                commit('UPDATE_PRESENTING', true)
                commit('UPDATE_USER_EXIST', false)
                dispatch('showWarning')
                commit(
                    'UPDATE_ERROR_MESSAGE',
                    'Username maybe invalid, try again.',
                )
            }
        }
    },

    async fetchPinnedRepos({ commit, rootState, dispatch }) {
        try {
            let response = await RequestService.getPinnedRepos(
                rootState.user.username,
            )

            commit('UPDATE_PINNED_REPOS', response.data)

            if ([200, 201].includes(rootState.request_status)) {
                commit('UPDATE_REQUESTING', false)
                commit('UPDATE_PRESENTING', true)
                commit('UPDATE_USER_EXIST', true)
                commit('UPDATE_PINNED_LOADER', false)
            }
        } catch (e) {
            dispatch('showWarning')
            commit(
                'UPDATE_ERROR_MESSAGE',
                'Error occured while fetching pinned repos.',
            )

            if (e.request.status === 0) {
                commit('UPDATE_REQUESTING', true)
                commit('UPDATE_PRESENTING', true)
                commit('UPDATE_USER_EXIST', false)
                dispatch('showWarning')
                commit(
                    'UPDATE_ERROR_MESSAGE',
                    'Kindly check internet connection',
                )
            } else if ([403].includes(e.response.request.status)) {
                commit('UPDATE_REQUESTING', true)
                commit('UPDATE_PRESENTING', true)
                commit('UPDATE_USER_EXIST', true)
                dispatch('showWarning')
                commit(
                    'UPDATE_ERROR_MESSAGE',
                    'An error occured, kindly check back soon.',
                )
            } else if ([404].includes(e.response.request.status)) {
                commit('UPDATE_REQUESTING', false)
                commit('UPDATE_PRESENTING', true)
                commit('UPDATE_USER_EXIST', false)
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
