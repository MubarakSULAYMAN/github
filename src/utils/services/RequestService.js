import axios from 'axios'

const apiClient = axios.create({
    baseURL: `https://api.github.com`,
    withCredentials: false,
    headers: {
        // Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        // Authorization: 'token xxxx',
        // 'Access-Control-Allow-Origin': 'http://localhost:8080',
        // // 'Access-Control-Allow-Origin': 'http://github.netlify.app/',
        // 'Access-Control-Allow-Headers':
        //     'Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-GitHub-OTP, X-Requested-With',
        // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE',
        // Allow: 'HEAD, OPTIONS, GET',
        // 'Access-Control-Expose-Headers':
        //     'ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval',
        // 'Access-Control-Max-Age': 86400,
        // 'Access-Control-Allow-Credentials': true,
    },
})

export default {
    getUser() {
        // return apiClient.get('/users/{user}')
        return apiClient.get('/users/MubarakSULAYMAN')
    },

    getRepos() {
        // return apiClient.get('/users/{user}/repos{?type,page,per_page,sort}')
        return apiClient.get(
            '/users/MubarakSULAYMAN/repos?per_page=30&sort=updated',
        )
    },

    getStarredRepos() {
        // return apiClient.get('/users/{user}/starred')
        return apiClient.get('/users/MubarakSULAYMAN/starred?per_page=1')
    },

    getPinnedRepos() {
        // return 'https://gh-pinned-repos-5l2i19um3.vercel.app/?username=Username'
        return axios.get(
            'https://gh-pinned-repos-5l2i19um3.vercel.app/?username=MubarakSULAYMAN',
        )
    },
}
