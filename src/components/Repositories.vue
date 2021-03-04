<template>
    <div class="repos flex-col">
        <div class="input-wrapper flex-row">
            <input
                type="text"
                name=""
                id=""
                class="find-repo"
                placeholder="Find a repository..."
            />
            <select name="" id="">
                <option value="">Type Others</option>
            </select>
            <select name="" id="">
                Languages
            </select>
            <button class="new-repo">New</button>
        </div>

        <div class="repo-card">
            <div
                class="repo-card_main grid"
                v-for="repo in repos"
                :key="repo.id"
            >
                <div class="repo-card_details">
                    <div class="repo-card_name">
                        <a
                            :href="repo.svn_url"
                            target="_blank"
                            rel="noopener noreferrer"
                            >{{ repo.name }}</a
                        >
                        <span v-if="repo.private === true">Private</span>
                    </div>

                    <div
                        class="fork-description"
                        v-if="repo.forked_from !== ''"
                    >
                        Forked from
                        <a
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            repo.forked_from
                        </a>
                    </div>
                    <div class="repo-card_description">
                        {{ repo.description }}
                    </div>

                    <!-- <div class="repo-card_tags">
                        <a
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>contact</span>
                        </a>

                        <a
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>users</span>
                        </a>

                        <a
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>randomuser-api</span>
                        </a>

                        <a
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>randomuser</span>
                        </a>

                        <a
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>vuex</span>
                        </a>

                        <a
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>vuejs</span>
                        </a>
                    </div> -->

                    <div class="repo-card_summary">
                        <span class="language" v-if="repo.language !== null">
                            <span
                                class="dot inline-block"
                                :style="{
                                    backgroundColor:
                                        langColors[repo.language.toLowerCase()],
                                }"
                            ></span>
                            {{ repo.language }}
                        </span>
                        <a
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                            v-if="repo.forks > 0"
                        >
                            <span class="fork">{{ repo.forks_count }}</span>
                        </a>
                        <!-- <span class="license" v-if="repo.licence !== null">{{
                            repo.license.name
                        }}</span> -->
                        <!-- <a
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span class="issue">1 issue needs help</span>
                        </a> -->
                        <span class="date"
                            >Updated {{ repo.updated_at | diffForHumans }}</span
                        >
                    </div>
                </div>

                <div class="repo-card_star flex-col">
                    <button class="ml-auto">
                        <!--unfilled star -->
                        <svg
                            class="octicon octicon-star mr-1"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                        >
                            <path
                                fill="#586069"
                                fill-rule="evenodd"
                                d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                            ></path>
                        </svg>

                        <!-- filled star -->
                        <!-- <svg
              class="octicon octicon-star-fill mr-1"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"
              ></path>
            </svg> -->
                        Star
                    </button>
                </div>
            </div>
        </div>

        <div class="paginate flex-row">
            <router-link to="" custom>
                <button disabled role="link">Previous</button>
            </router-link>
            <router-link to="" custom>
                <button role="link">Next</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import LocalizedFormat from 'dayjs/plugin/relativeTime'

export default {
    props: {
        repos: {
            type: [Array, Object],
            required: true,
        },
    },

    data() {
        return {
            langColors: {
                vue: '#2c3e50',
                javascript: '#f1e05a',
                php: '#4f5d95',
                'jupyter notebook': '#da5b0b',
                python: '#3572a5',
                html: '#e34c26',
                css: '#563d7c',
                java: '#b07219',
                shell: '#89e051',
            },
        }
    },

    created() {
        dayjs.extend(relativeTime, LocalizedFormat)
    },

    filters: {
        diffForHumans(date) {
            if (!date) {
                return null
            }

            if (
                dayjs(date)
                    .fromNow()
                    .includes('year')
            ) {
                return `on ${dayjs(date).format('D MMM YYYY')}`
            }

            if (
                dayjs(date)
                    .fromNow()
                    .includes('month') &&
                parseInt(String(date).slice(0, 4)) === new Date().getFullYear()
            ) {
                return `on ${dayjs(date).format('D MMM')}`
            }

            return dayjs(date).fromNow()
        },
    },
}
</script>

<style scoped>
:focus:not(:focus-visible) {
    outline: none;
}

:focus:not(:-moz-focusring) {
    outline: none;
}

a {
    color: inherit;
    text-decoration: none;
}

.input-wrapper {
    justify-items: baseline;
    justify-content: space-between;
    padding: 1rem 0;
    border-bottom: 1px solid var(--github-dark);
}

input[type='text'].find-repo {
    width: 60%;
    padding: 0.5rem 1rem;
    border: 1px solid var(--github-dark);
    border-radius: 0.5rem;
}

input[type='text'].find-repo:focus {
    border-color: var(--github-blue);
    box-shadow: 0 0 0 3px var(--github-lighter-blue);
    outline: none;
}

select {
    padding: 0.5rem 1rem;
    border: 1px solid var(--github-dark);
    border-radius: 0.5em;
    background-color: var(--github-lighter-gray);
    transition: all 0.3s ease;
}

select:first-child {
    width: 10rem;
}
select:nth-child(2) {
    width: 16rem;
}

select:hover,
select:focus {
    background-color: var(--github-gray-light);
}

select:focus {
    border-color: var(--github-blue);
    box-shadow: 0 0 0 3px var(--github-lighter-blue);
    outline: none;
}

button.new-repo {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    color: #ffffff;
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

.repo-card {
    line-height: 2rem;
}

.repo-card_main {
    grid-template-columns: 80% 20%;
    padding: 2rem 0;
    border-bottom: 1px solid var(--github-dark);
}

.repo-card_name a {
    margin-right: 0.5rem;
    font-size: var(--font-lg);
    color: var(--github-blue);
    font-family: 'Helvetica Bold';
    font-style: normal;
    font-weight: bold;
}

.repo-card_name a:hover {
    text-decoration: underline;
}

.repo-card_name span {
    padding: 0 0.25rem;
    font-size: var(--font-sm);
    border: 1px solid var(--github-dark);
    border-radius: 0.5rem;
}

.repo-card_tags span {
    margin-right: 0.5rem;
    padding: 0.35rem 0.75rem;
    color: var(--github-blue);
    font-size: var(--font-xs);
    border: 1px solid transparent;
    border-radius: 0.75rem;
    background-color: var(--github-lighter-blue-fade);
    transition: all 0.1s ease;
}

.repo-card_tags span:hover {
    background-color: var(--github-lighter-blue-fade-s);
}

.fork-description,
.repo-card_summary {
    font-size: var(--font-sm);
}

span .dot {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 100%;
    /* background-color: var(--github-black); */
}

.repo-card_summary span:not(span .dot) {
    margin-right: 1rem;
}

.repo-card_star button {
    padding: 0.5rem 1rem;
    color: var(--github-black);
    font-size: var(--font-sm);
    border: 1px solid var(--github-dark);
    border-radius: 0.5rem;
    background-color: var(--github-lighter-gray);
    transition: all 0.3s ease;
}

.repo-card_star button:hover,
.repo-card_star button:focus {
    background-color: var(--github-gray-light);
}

.repo-card_star button:focus {
    box-shadow: 0 0 0 3px var(--github-lighter-blue);
    outline: none;
}

span.fork:hover,
a span.issue:hover {
    color: var(--github-blue);
}

.paginate {
    justify-content: center;
    margin: 1rem 0 5rem 0;
}

.paginate button {
    padding: 0.5rem 1rem;
    color: var(--github-blue);
    font-size: var(--font-md);
    border: 1px solid var(--github-dark);
    background-color: var(--github-gray-light);
}

.paginate a:first-child button {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
}

.paginate a:nth-child(2) button {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border-left-color: transparent;
}

.paginate button:hover,
.paginate button:focus,
.paginate button.router-link-exact-active.router-link-active:focus {
    color: #ffffff;
    background-color: var(--github-blue);
    outline: none;
}

.paginate a:first-child button {
    opacity: 0.5;
}

@media only screen and (max-width: 768px) {
    .repo-card_star {
        justify-content: center;
    }
}

@media only screen and (max-width: 425px) {
    .repo-card_main {
        grid-template-columns: 75% 25%;
    }
    .repo-card_main {
        padding: 1rem 0;
    }
}
</style>
