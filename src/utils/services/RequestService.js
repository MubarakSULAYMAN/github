import axios from 'axios'

const apiClient = axios.create({
    baseURL: `https://api.github.com`,
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default {
    getUser(username) {
        return apiClient.get(`/users/${username}`)
    },

    getRepos(username, per_page, page) {
        return apiClient.get(
            `/users/${username}/repos?per_page=${per_page}&sort=updated&page=${page}`,
        )
    },

    getStarredRepos(username) {
        return apiClient.get(`/users/${username}/starred`)
    },

    getPinnedRepos(username) {
        return axios.get(
            `https://gh-pinned-repos-5l2i19um3.vercel.app/?username=${username}`,
        )
    },
}
