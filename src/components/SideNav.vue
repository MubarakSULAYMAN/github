<template>
    <div class="container sticky">
        <div class="user-details grid">
            <div class="profile-pic_wrapper">
                <img
                    :src="user_info.avatar_url"
                    alt=""
                    class="profile-pic rounded-full"
                    tabindex="0"
                />
                <span tabindex="0" class="set-status">Set status</span>
            </div>

            <div>
                <p class="fullname">
                    {{ user_info.name }}
                </p>
                <p class="username">
                    {{ user_info.login }}
                </p>
            </div>
        </div>

        <div class="main-details">
            <button class="status">Status</button>

            <p class="bio">
                {{ user_info.bio }}
            </p>

            <button class="edit">Edit Profile</button>

            <div class="details-wrapper grid">
                <div class="repo-summary">
                    <router-link to="">
                        <svg
                            class="octicon octicon-people mr-1"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            aria-hidden="true"
                        >
                            <path
                                fill="#586069"
                                fill-rule="evenodd"
                                d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
                            ></path>
                        </svg>
                        <span class="follower">{{ user_info.followers }}</span>
                        followers
                    </router-link>
                    ·
                    <router-link to="">
                        <span class="following">{{ user_info.following }}</span>
                        following
                    </router-link>
                    ·
                    <router-link to="">
                        <svg
                            class="octicon octicon-star mr-1"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            aria-hidden="true"
                        >
                            <path
                                fill="#586069"
                                fill-rule="evenodd"
                                d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                            ></path>
                        </svg>
                        <span class="star">{{ starred_repos.length }}</span>
                    </router-link>
                </div>

                <div class="other-details">
                    <p class="work">
                        <svg
                            class="octicon octicon-organization mr-1"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                        >
                            <path
                                fill="#586069"
                                fill-rule="evenodd"
                                d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"
                            ></path>
                        </svg>
                        {{ user_info.company }}
                    </p>
                    <p class="location">
                        <svg
                            class="octicon octicon-location mr-1"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                        >
                            <path
                                fill="#586069"
                                fill-rule="evenodd"
                                d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                            ></path>
                        </svg>
                        {{ user_info.location }}
                    </p>
                    <p class="email link">
                        <svg
                            class="octicon octicon-mail mr-1"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                        >
                            <path
                                fill="#586069"
                                fill-rule="evenodd"
                                d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"
                            ></path>
                        </svg>
                        <a :href="'mailto:' + user_info.email">{{
                            user_info.email
                        }}</a>
                    </p>
                    <p class="website link">
                        <svg
                            class="octicon octicon-link mr-1"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                        >
                            <path
                                fill="#586069"
                                fill-rule="evenodd"
                                d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                            ></path>
                        </svg>
                        <a
                            :href="'http://' + user_info.blog"
                            target="_blank"
                            rel="noopener noreferrer"
                            >{{ user_info.blog }}</a
                        >
                    </p>
                    <p class="twitter link">
                        <!-- <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 273.5 222.3"
                        class="octicon"
                    >
                        <path
                            fill="#586069"
                            d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1"
                        ></path>
                    </svg> -->
                        <a
                            :href="
                                'https://twitter.com/' +
                                    user_info.twitter_username
                            "
                            target="_blank"
                            rel="noopener noreferrer"
                            >@{{ user_info.twitter_username }}</a
                        >
                    </p>
                </div>
            </div>

            <hr />

            <div class="highlight">
                <p class="">Highlights</p>
                <svg
                    class="octicon octicon-north-star mr-1"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    height="16"
                    aria-hidden="true"
                >
                    <path
                        fill="#586069"
                        d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"
                    ></path>
                </svg>
                <router-link to="">Arctic Code Vault Contributor</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            scroll: null,
        }
    },
    methods: {
        // handleScroll() {
        //     this.scroll = window.scrollY || window.scrollTop
        // },
        // scrollAction() {
        //     window.addEventListener('scroll', this.handleScroll)
        // }
    },

    computed: {
        //     scrollAction() {
        //         return window.addEventListener('scroll', this.handleScroll)
        //     },

        ...mapState({
            user_info: state => state.user.user_info,
            starred_repos: state => state.repository.starred_repos,
        }),
    },

    // mounted() {
    //     window.addEventListener('scroll', this.handleScroll)
    // },

    // created() {
    //     window.addEventListener('scroll', this.handleScroll)
    // },

    created() {
        return (
            this.$store.dispatch('fetchUsers'),
            console.log('Side nav is created')
        )
    },

    // watch: {
    //     this.scrollAction
    // }

    // destroyed() {
    //     window.removeEventListener('scroll', this.handleScroll)
    // },
}
</script>

<style scoped>
* {
    --custom-size: 18rem;
}

p,
.follower,
.following,
.star {
    color: var(--github-black);
    line-height: 1.5rem;
}

.profile-pic_wrapper {
    width: var(--custom-size);
    height: var(--custom-size);
    margin-bottom: 1rem;
}

img.profile-pic {
    position: relative;
    top: -2rem;
    width: 100%;
    height: 100%;
    border: 1px solid var(--github-dark);
    object-fit: contain;
}

.profile-pic_wrapper span {
    font-size: var(--font-sm);
}

.fullname {
    font-size: var(--font-xl);
    font-family: 'Helvetica Bold';
    font-style: normal;
    font-weight: bold;
    line-height: 2rem;
}

.username {
    font-size: var(--font-lg);
    color: var(--github-gray) !important;
    margin-bottom: 1rem;
}

.bio {
    font-size: var(--font-md);
}

button {
    width: 100%;
    margin: 1rem 0;
    padding: 0.75rem;
    color: var(--github-black);
    text-align: center;
    border: 1px solid var(--github-dark);
    border-radius: 0.5rem;
    background-color: var(--github-lighter-gray);
}

button.status {
    display: none;
}

button:hover,
button:focus {
    background-color: var(--github-gray-light);
}

button:focus {
    border-color: var(--github-blue);
    box-shadow: 0 0 0 3px var(--github-lighter-blue);
}

.repo-summary {
    margin-bottom: 1rem;
}

.repo-summary a,
.highlight a,
.other-details p a {
    color: var(--github-black);
    text-decoration: none;
    line-height: 1.5rem;
}

.repo-summary a:hover,
.repo-summary a:hover span,
.other-details p a:hover {
    color: var(--github-blue);
}

.other-details p a:hover {
    text-decoration: underline;
}

.fullname {
    line-break: auto;
}

.username,
.other-details {
    word-break: break-all;
}

.follower,
.following,
.star {
    font-family: 'Helvetica Bold';
    font-style: normal;
    font-weight: bold;
}

.twitter svg {
    display: inline-block;
    transform: scale(0.1);
    border: 1px solid red;
}

hr {
    width: 100%;
    height: 1px;
    margin: 1rem 0rem;
    background-color: var(--github-dark);
    border: none;
}

.highlight p:first-child {
    font-size: var(--font-md);
    font-family: 'Helvetica Bold';
    font-style: normal;
    font-weight: bold;
}

.highlight {
    margin-bottom: 10rem;
}

@media only screen and (max-width: 768px) {
    * {
        --custom-size: 10rem;
    }

    img.profile-pic {
        top: -1rem;
    }

    button {
        padding: 0.5rem 1rem;
    }
}

@media only screen and (max-width: 425px) {
    .user-details {
        grid-template-columns: 5rem 1fr;
    }

    * {
        --custom-size: 3.5rem;
    }

    .user-details {
        margin-top: 0.5rem;
    }

    .profile-pic_wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .profile-pic_wrapper img {
        top: 0;
        width: var(--custom-size);
        height: var(--custom-size);
        border-radius: 100%;
    }

    p.username {
        margin-bottom: 0;
    }

    .set-status {
        display: none;
    }

    button.status {
        display: block;
        color: var(--github-gray) !important;
        font-size: var(--font-sm);
        text-align: left;
        background-color: var(--github-white);
    }

    .details-wrapper {
        grid-template-columns: 100%;
    }

    .repo-summary {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }

    .other-details {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
    }

    .other-details p:not(p.email, p.website),
    hr,
    .highlight {
        display: none;
    }
}
</style>
