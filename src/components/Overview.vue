<template>
    <div>
        <div class="readme">
            <div class="readme_details flex-row">
                <p>
                    <span class="readme_details__title w-fit">
                        <svg
                            class="octicon octicon-octoface mr-1"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M1.326 1.973a1.2 1.2 0 011.49-.832c.387.112.977.307 1.575.602.586.291 1.243.71 1.7 1.296.022.027.042.056.061.084A13.22 13.22 0 018 3c.67 0 1.289.037 1.861.108l.051-.07c.457-.586 1.114-1.004 1.7-1.295a9.654 9.654 0 011.576-.602 1.2 1.2 0 011.49.832c.14.493.356 1.347.479 2.29.079.604.123 1.28.07 1.936.541.977.773 2.11.773 3.301C16 13 14.5 15 8 15s-8-2-8-5.5c0-1.034.238-2.128.795-3.117-.08-.712-.034-1.46.052-2.12.122-.943.34-1.797.479-2.29zM8 13.065c6 0 6.5-2 6-4.27C13.363 5.905 11.25 5 8 5s-5.363.904-6 3.796c-.5 2.27 0 4.27 6 4.27z"
                            ></path>
                            <path
                                d="M4 8a1 1 0 012 0v1a1 1 0 01-2 0V8zm2.078 2.492c-.083-.264.146-.492.422-.492h3c.276 0 .505.228.422.492C9.67 11.304 8.834 12 8 12c-.834 0-1.669-.696-1.922-1.508zM10 8a1 1 0 112 0v1a1 1 0 11-2 0V8z"
                            ></path>
                        </svg>
                        <router-link to="">{{ username }}</router-link>
                        /README
                    </span>
                    .md
                </p>
                <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ml-auto mr-1"
                >
                    <span class="readme_details__feedback">
                        Send feedback
                    </span>
                </a>
                <span>
                    <svg
                        class="octicon octicon-pencil"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        aria-hidden="true"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"
                        ></path>
                    </svg>
                </span>
            </div>

            <div class="readme_content">Hi there</div>
        </div>

        <div class="pinned-container_wrap">
            <div class="pinned-container_title flex-row">
                <p class="mr-1">
                    Pinned
                    <span v-if="pinned_loading === true">
                        <svg
                            style="
                                box-sizing: content-box;
                                color: var(--color-icon-primary);
                            "
                            viewBox="0 0 16 16"
                            fill="none"
                            width="16"
                            height="16"
                            class="spinner pinned-items-spinner js-pinned-items-spinner v-align-text-bottom ml-1"
                        >
                            <circle
                                cx="8"
                                cy="8"
                                r="7"
                                stroke="currentColor"
                                stroke-opacity="0.25"
                                stroke-width="2"
                                vector-effect="non-scaling-stroke"
                            ></circle>
                            <path
                                d="M15 8a7.002 7.002 0 00-7-7"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                vector-effect="non-scaling-stroke"
                            >
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    from="0 8 8"
                                    to="360 8 8"
                                    dur="1s"
                                    repeatCount="indefinite"
                                ></animateTransform>
                            </path>
                        </svg>
                    </span>
                </p>
                <span>Customize your pins</span>
            </div>

            <div class="pinned-container grid">
                <div
                    class="pinned-card"
                    v-for="item in pinned_repos"
                    :key="item.repo"
                >
                    <div class="flex-row">
                        <a
                            :href="item.link"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="pinned-card_title"
                        >
                            <svg
                                class="octicon octicon-repo mr-2 text-gray flex-shrink-0"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                height="16"
                                aria-hidden="true"
                            >
                                <path
                                    fill="#586069"
                                    fill-rule="evenodd"
                                    d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                                ></path>
                            </svg>
                            {{ item.repo }}</a
                        >
                        <span>
                            <svg
                                class="octicon octicon-grabber"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                height="16"
                                aria-hidden="true"
                            >
                                <path
                                    fill="#586069"
                                    fill-rule="evenodd"
                                    d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"
                                ></path>
                            </svg>
                        </span>
                    </div>

                    <p class="pinned-card_description">
                        {{ item.description }}
                    </p>

                    <div class="pinned-card_summary mt-auto">
                        <span class="language">
                            <span class="dot inline-block"></span>
                            {{ item.language }}
                        </span>
                        <span class="fork">{{ item.forks }}</span>
                        <span class="license">{{ item.license }}</span>
                        <a
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span class="star">
                                <svg
                                    aria-label="star"
                                    class="octicon octicon-star"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    height="16"
                                    role="img"
                                >
                                    <path
                                        fill="#586069"
                                        fill-rule="evenodd"
                                        d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                                    ></path>
                                </svg>
                                {{ item.stars }}
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="contributions-wrap grid">
            <div class="contributions">
                <div class="contributions_summary">
                    <div class="contributions_map">map</div>

                    <div class="contributions_overview grid">
                        <div class="contributions_overview__summary">
                            summary
                        </div>
                        <div class="contributions_overview__chart flex-row">
                            <svg
                                style="
                                    box-sizing: content-box;
                                    color: var(--color-icon-primary);
                                "
                                viewBox="0 0 16 16"
                                fill="none"
                                width="16"
                                height="16"
                                class="spinner pinned-items-spinner js-pinned-items-spinner v-align-text-bottom ml-1"
                            >
                                <circle
                                    cx="8"
                                    cy="8"
                                    r="7"
                                    stroke="currentColor"
                                    stroke-opacity="0.25"
                                    stroke-width="2"
                                    vector-effect="non-scaling-stroke"
                                ></circle>
                                <path
                                    d="M15 8a7.002 7.002 0 00-7-7"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    vector-effect="non-scaling-stroke"
                                >
                                    <animateTransform
                                        attributeName="transform"
                                        type="rotate"
                                        from="0 8 8"
                                        to="360 8 8"
                                        dur="1s"
                                        repeatCount="indefinite"
                                    ></animateTransform>
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="contributions-activity">
                    <p>Contribution Activity</p>
                    <div class="contributions-activity_content flex-row">
                        <svg
                            style="
                                box-sizing: content-box;
                                color: var(--color-icon-primary);
                            "
                            viewBox="0 0 16 16"
                            fill="none"
                            width="16"
                            height="16"
                            class="spinner pinned-items-spinner js-pinned-items-spinner v-align-text-bottom ml-1"
                        >
                            <circle
                                cx="8"
                                cy="8"
                                r="7"
                                stroke="currentColor"
                                stroke-opacity="0.25"
                                stroke-width="2"
                                vector-effect="non-scaling-stroke"
                            ></circle>
                            <path
                                d="M15 8a7.002 7.002 0 00-7-7"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                vector-effect="non-scaling-stroke"
                            >
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    from="0 8 8"
                                    to="360 8 8"
                                    dur="1s"
                                    repeatCount="indefinite"
                                ></animateTransform>
                            </path>
                        </svg>
                    </div>
                </div>

                <button>Show more activity</button>

                <p class="footnote">
                    Seeing something unexpected? Take a look at the
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        GitHub profile guide </a
                    >.
                </p>
            </div>

            <div class="contributions_years flex-col">
                <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    v-for="year in active_years"
                    :key="year"
                    >{{ year }}</a
                >
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            active_years: [],
        }
    },

    methods: {
        getActiveYears() {
            for (
                let i = new Date().getFullYear();
                i >= parseInt(String(this.user_info.created_at).slice(0, 4));
                i--
            ) {
                this.active_years.push(i)
            }
        },
    },

    created() {
        return [this.$store.dispatch('fetchPinnedRepos'), this.getActiveYears()]
    },

    computed: {
        ...mapState({
            pinned_repos: state => state.repository.pinned_repos,
            pinned_loading: state => state.repository.pinned_loading,
            username: state => state.user.username,
            user_info: state => state.user.user_info,
        }),
    },
}
</script>

<style scoped>
a {
    color: inherit;
    text-decoration: none;
}

.readme {
    margin: 2rem 0;
    padding: 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid var(--github-dark);
}

.readme_details {
    font-size: var(--font-sm);
}

.readme_details__title {
    color: var(--github-black);
}

.readme_details__title a.router-link-exact-active.router-link-active:hover,
.readme_details__title a.router-link-exact-active.router-link-active:focus {
    color: var(--github-blue);
}

.readme_details a:nth-child(2):hover,
.readme_details a:nth-child(2):focus {
    color: var(--github-blue);
    text-decoration: underline;
}

.readme_details__feedback {
    margin-left: auto;
}

.readme_details__feedback:hover,
.readme_details__feedback:focus {
    color: var(--github-blue);
    text-decoration: underline;
}

.readme_content {
    color: var(--github-black);
    font-family: 'Helvetica Bold';
    font-style: normal;
    font-weight: bold;
}

.pinned-container_wrap {
    margin-bottom: 2rem;
}

.pinned-container_wrap div p {
    width: fit-content;
    color: var(--github-black);
    font-size: var(--font-md);
}

.pinned-container_wrap div span {
    margin-left: auto;
}

.pinned-container {
    grid-template-columns: repeat(2, calc(50% - 0.5rem));
    gap: 1rem;
    margin-top: 1rem;
}

.pinned-container_title span {
    font-size: var(--font-sm);
    cursor: pointer;
}

.pinned-container_title span:hover {
    color: var(--github-blue);
}

.pinned-card,
.contributions-activity_content {
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--github-dark);
}

.pinned-card_title {
    margin-bottom: 1rem;
    color: var(--github-blue);
    font-family: 'Helvetica Bold';
    font-style: normal;
    font-weight: bold;
}

.pinned-card_title:hover,
.pinned-card_title:focus {
    text-decoration: underline;
}

.pinned-card_description {
    margin-bottom: 1rem;
    color: inherit !important;
    font-size: var(--font-sm) !important;
}

.pinned-card_summary {
    /* display: flex;
    flex */
    font-size: var(--font-sm);
}

span .dot {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 100%;
    background-color: var(--github-black);
}

.pinned-card_summary span:not(span .dot) {
    margin-right: 1rem;
}

.pinned-card_summary a:hover {
    font-family: 'Helvetica Bold';
    font-style: normal;
    font-weight: bold;
}

.pinned-card_summary a:hover {
    color: var(--github-blue);
}

.contributions-wrap {
    grid-template-columns: 85% 15%;
}

.contributions_summary {
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--github-dark);
}

.contributions_map,
.contributions_overview,
.contributions_year {
    padding: 1rem;
}

.contributions_map {
    border-bottom: 1px solid var(--github-dark);
}

.contributions_overview {
    grid-template-columns: repeat(2, 50%);
}

.contributions_overview__summary {
    border-right: 1px solid var(--github-dark);
}

.contributions-activity {
    margin-bottom: 1rem;
}

.contributions-wrap button {
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.75rem 0;
    color: var(--github-blue);
    font-size: var(--font-sm);
    font-family: 'Helvetica Bold';
    font-style: normal;
    font-weight: bold;
    text-align: center;
    border-radius: 0.5rem;
    border: 1px solid var(--github-dark);
    background-color: var(--github-white);
}

.contributions-wrap button:hover {
    background-color: var(--github-gray-light);
}

.contributions-wrap .footnote {
    margin-top: 1rem;
    font-size: var(--font-sm);
}

.contributions-wrap .footnote a:hover,
.contributions-wrap .footnote a:focus {
    color: var(--github-blue);
    text-decoration: underline;
}

.contributions_years a {
    margin-left: 2rem;
    margin-bottom: 0.75rem;
    padding: 0.75rem;
    font-size: var(--font-sm);
    border-radius: 0.5rem;
}

.contributions_years a:hover {
    background-color: var(--github-gray-light);
}

.contributions_years a:first-child,
.contributions_years a:focus {
    color: var(--github-white);
    background-color: var(--github-blue);
}

.contributions_overview__chart,
.contributions-activity_content {
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width: 768px) {
    .main-content {
        margin-bottom: 4rem;
    }

    .contributions-wrap {
        grid-template-columns: 100%;
    }

    .contributions_years {
        display: none;
    }
}

@media only screen and (max-width: 425px) {
    .main-content {
        margin-bottom: 6rem;
    }

    .pinned-container {
        grid-template-columns: 100%;
    }
}
</style>
