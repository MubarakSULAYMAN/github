<template>
    <div class="side-nav">
        <div class="repo-top flex-row">
            <span class="title">Repositories</span>
            <button class="new-repo ml-auto">New</button>
        </div>

        <div class="wrapper">
            <input
                type="text"
                placeholder="Find a repository..."
                v-model="filter_term"
            />

            <div class="repositories">
                <div
                    class="repos flex-col"
                    v-for="repo in newRepos"
                    :key="repo.name"
                >
                    <a
                        :href="repo.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        >{{ repo.full_name }}</a
                    >
                </div>
            </div>

            <hr class="before" />

            <router-link
                to=""
                class="show-more"
                v-if="show_more"
                @click.native="updateRepos(), (show_more = !show_more)"
            >
                <p>Show more</p>
            </router-link>
            <p v-if="loading_more === true">Loading more...</p>
            <p v-if="repos.length === 100">
                Showing recent top 100 results
            </p>

            <hr class="after" />

            <div class="repo-foot">
                <p>Working with a team?</p>
                <p>
                    GitHub is built for collaboration. Set up an organization to
                    improve the way your team works together, and get access to
                    more features.
                </p>

                <button>Create an organization</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            main_repos: [],
            show_more: true,
            filter_term: '',
        }
    },

    methods: {
        extractRepos() {
            if (this.username.length > 13) {
                const reposExtract = this.repos.map(repo => ({
                    full_name: `${this.username.slice(0, 12)}.../${repo.name}`,
                    url: repo.url,
                }))
                return reposExtract
            }

            return this.repos
        },

        updateRepos() {
            return [
                this.$store
                    .dispatch('fetchCustomRepos', [100, 1])
                    .then(this.$store.dispatch('changeLoadingMore', false)),
                this.$store.dispatch('changeLoadingMore', true),
            ]
        },
    },

    computed: {
        repos() {
            return this.custom_repos
        },

        filteredList() {
            return this.extractRepos().filter(repo => {
                return `${repo.full_name}`
                    .toLowerCase()
                    .includes(this.filter_term.toLowerCase())
            })
        },

        newRepos() {
            return this.filteredList
        },

        ...mapState({
            username: state => state.user.username,
            loading_more: state => state.repository.loading_more,
            repos: state => state.repository.custom_repos,
            request_status: state => state.repository.request_status,
        }),
    },

    // created() {
    //     return [console.log(this.request_status)]
    // },
}
</script>

<style scoped>
div.repo-top {
    align-items: center;
    margin-bottom: 0.5rem;
}

button.new-repo {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.4rem;
    color: var(--github-white);
    background-color: var(--github-green);
    transition: all 0.3s ease;
}

button.new-repo:hover {
    background-color: var(--github-green-dark);
}

button.new-repo:focus {
    box-shadow: 0 0 0 3px var(--github-green-lighter);
    outline: none;
}

.side-nav input[type='text'] {
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid var(--github-dark);
    border-radius: 0.5rem;
    font-size: var(--font-normal);
    background-color: var(--github-lighter-gray);
    transition: all 0.3s ease;
}

.side-nav input[type='text']:hover {
    background-color: transparent;
}

.side-nav input[type='text']:focus {
    border-color: var(--github-blue);
    box-shadow: 0 0 0 3px var(--github-lighter-blue);
    outline: none;
}

.repositories {
    height: fit-content;
    margin-top: 0.5rem;
    line-height: 1.5rem;
    line-break: auto;
}

.repos {
    word-break: break-all;
}

.repos a {
    width: fit-content;
    width: -moz-fit-content;
    margin-bottom: 0.25rem;
    color: var(--github-blue);
    font-family: 'Helvetica Bold';
    font-style: normal;
    font-weight: bold;
    text-decoration: none;
}

.repos a:hover,
.repos a:focus,
.repos a.router-link-exact-active.router-link-active {
    text-decoration: underline;
}

hr {
    width: 100%;
    height: 1px;
    margin: 1rem 0rem;
    background-color: var(--github-dark);
    border: none;
}

.wrapper input[type='text'] {
    width: 100%;
}

.side-nav .wrapper hr.before {
    display: none;
}

.repo-foot {
    line-height: 1.5rem;
}

.title,
.repo-foot p:first-child {
    color: var(--github-black);
    font-family: 'Helvetica Bold';
    font-style: normal;
    font-weight: bold;
}

.repo-foot button {
    width: fit-content;
    width: -moz-fit-content;
    max-width: 100%;
    padding: 0.5rem 1rem;
    border: 1px solid var(--github-dark);
    border-radius: 0.25rem;
    color: var(--github-blue);
    font-size: var(--font-sm);
    font-family: 'Helvetica Light';
    font-style: normal;
    font-weight: lighter;
    background-color: transparent;
    transition: all 0.3s ease;
}

.repo-foot button:hover {
    color: var(--github-white);
    border-color: transparent;
    background-color: var(--github-blue);
}

.repo-foot button:focus {
    border-color: var(--github-blue);
    box-shadow: 0 0 0 3px var(--github-lighter-blue);
    outline: none;
}

.show-more p {
    margin-top: 1rem;
}

a.show-more {
    color: var(--github-gray);
    font-size: var(--font-sm);
    text-decoration: none;
}

a:hover,
a:focus {
    color: var(--github-blue);
    text-decoration: none;
}

@media only screen and (max-width: 425px) {
    .side-nav .wrapper {
        padding: 0.5rem;
        border: 1px solid var(--github-dark);
        border-radius: 0.5rem;
        background-color: var(--github-white);
    }

    .side-nav .wrapper hr.before {
        display: block;
    }

    .show-more p {
        margin-bottom: 1rem;
        margin-left: 1rem;
    }

    .side-nav .wrapper hr.after {
        display: none;
    }
}
</style>
