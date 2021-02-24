<template>
    <div class="home grid">
        <div class="left-side sticky">
            <div class="repo-top flex-row">
                <span class="title">Repositories</span>
                <button class="new-repo ml-auto">New</button>
            </div>

            <div class="wrapper">
                <input type="text" placeholder="Find a repository..." />

                <div class="repositories">
                    <!-- Break name if longer than 12 char -->
                    <div class="repos flex-col overflow-y-auto">
                        <router-link to="" v-for="n in 8" :key="n">{{
                            n
                        }}</router-link>
                    </div>
                </div>

                <hr class="before" />

                <router-link to="" class="show-more">
                    <p>Show more</p>
                </router-link>

                <hr class="after" />

                <div class="repo-foot">
                    <p>Working with a team?</p>
                    <p>
                        GitHub is built for collaboration. Set up an
                        organization to improve the way your team works
                        together, and get access to more features.
                    </p>

                    <button>Create an organization</button>
                </div>
            </div>
        </div>

        <div class="right-side grid">
            <div class="feeds">
                <div class="fork-star grid">
                    <img src="" alt="" />
                    <div class="fork-star_details flex-col">
                        <div class="fork-star_summary">
                            <router-link to="">gbolahanO</router-link>
                            forked
                            <router-link to=""
                                >gbolahanO/clean-code-javascript</router-link
                            >
                            from
                            <router-link to="">
                                ryanmcdermott/clean-code-javascript
                            </router-link>
                            <span>8 hours ago</span>
                        </div>

                        <div class="fork-star_card">
                            <div class="fork-star_card__details grid">
                                <router-link to="" class="title">
                                    ryanmcdermott/clean-code-javascript
                                </router-link>
                                <button>
                                    <svg
                                        class="octicon octicon-star inline-flex mr-1"
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
                                    Star
                                </button>
                            </div>
                            <p class="fork-star_card__description note">
                                Clean Code concepts adapted for JavaScript
                            </p>
                            <div class="fork-star_card__snip flex-row">
                                <span class="language">JavaScript</span>
                                <span class="star">
                                    <router-link to="">
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
                                        46.8k</router-link
                                    >
                                </span>
                                <span class="issues">
                                    <router-link to=""
                                        >2 issues need help</router-link
                                    >
                                </span>
                                <span class="updated">Updated Feb 19</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="commit grid">
                    <img src="" alt="" />
                    <div class="commit_details flex-col">
                        <div class="commit_summary">
                            <p>
                                <router-link to=""> jsjoeio </router-link>
                                pushed to
                                <router-link to=""
                                    >cdr/code-server
                                </router-link>
                                <span> 20 hours ago</span>
                            </p>
                            <div class="ml-auto">
                                <svg
                                    class="octicon octicon-unfold link-gray inline-flex mr-1"
                                    aria-label="Expand"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    height="16"
                                    role="img"
                                >
                                    <path
                                        fill="#586069"
                                        fill-rule="evenodd"
                                        d="M8.177.677l2.896 2.896a.25.25 0 01-.177.427H8.75v1.25a.75.75 0 01-1.5 0V4H5.104a.25.25 0 01-.177-.427L7.823.677a.25.25 0 01.354 0zM7.25 10.75a.75.75 0 011.5 0V12h2.146a.25.25 0 01.177.427l-2.896 2.896a.25.25 0 01-.354 0l-2.896-2.896A.25.25 0 015.104 12H7.25v-1.25zm-5-2a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM6 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 016 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM12 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 0112 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5z"
                                    ></path>
                                </svg>
                            </div>
                        </div>

                        <div class="commit_card">
                            <div class="commit_card__details">
                                <p>
                                    20 commits to
                                    <router-link to="" class="branch">
                                        add-tests-emitter
                                    </router-link>
                                </p>
                                <!-- list of commits (2 max) -->
                                <p class="commit_card__description">
                                    <img src="" alt="" />
                                    <router-link to="">5f1fab7</router-link>
                                    Re-export logger field for plugins
                                </p>
                                <p class="commit_card__description">
                                    <img src="" alt="" />
                                    <router-link to="">a8e9287</router-link>
                                    Re-export express for plugins
                                </p>
                                <router-link to="" class="more-info"
                                    >18 more commits »</router-link
                                >
                            </div>
                        </div>
                    </div>
                </div>

                <div class="release grid">
                    <img src="" alt="" />
                    <div class="release_details flex-col">
                        <div class="release_summary">
                            <router-link to="">jsjoeio </router-link>
                            released
                            <router-link to="">v3.9.0</router-link>
                            at
                            <router-link to=""> cdr/code-server </router-link>
                            <span>7 days ago</span>
                        </div>

                        <div class="release_card">
                            <div class="release_card__details">
                                <p>
                                    <router-link to="">
                                        code-server-3.9.0-amd64.rpm
                                    </router-link>
                                </p>
                                <p>
                                    <router-link to="">
                                        code-server-3.9.0-arm64.rpm
                                    </router-link>
                                </p>
                                <router-link to="" class="more-info">
                                    View all 7 assets for this release »
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="follow-feed grid">
                    <img src="" alt="" />
                    <div class="follow-feed_details flex-col">
                        <div class="follow-feed_summary">
                            <router-link to="">gbolahanO</router-link>
                            started following
                            <router-link to="">ecnerwala </router-link>
                            <span>8 days ago</span>
                        </div>

                        <div class="follow-feed_card grid">
                            <img src="" alt="" />
                            <div class="follow-feed_card__main">
                                <div class="follow-feed_card__details grid">
                                    <p>
                                        <router-link to="" class="name">
                                            Andrew Lawrence He
                                        </router-link>
                                        <span>
                                            <router-link to="" class="username"
                                                >ecnerwala</router-link
                                            >
                                        </span>
                                    </p>
                                    <button>Follow</button>
                                </div>
                                <p class="follow-feed_card__description job">
                                    Software Engineer || Top Competitive
                                    Programmer
                                </p>
                                <div class="follow-feed_card__snip flex-row">
                                    <router-link to=""
                                        >40 repositories</router-link
                                    >
                                    <router-link to=""
                                        >521 followers</router-link
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="error-card" v-if="hasError === true">
                    <p class="error-msg">
                        There was an error in loading the activity feed.
                        <router-link to="">Reload this page</router-link>.
                    </p>
                </div>

                <div class="feeds_tips">
                    <p class="w-full">
                        <svg
                            class="octicon octicon-light-bulb text-gray mr-1"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                        >
                            <path
                                fill="#586069"
                                fill-rule="evenodd"
                                d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 01-1.484.211c-.04-.282-.163-.547-.37-.847a8.695 8.695 0 00-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.75.75 0 01-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75zM6 15.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zM5.75 12a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z"
                            ></path>
                        </svg>
                        <span>ProTip!</span> The feed shows you events from
                        people you <router-link to="">follow</router-link> and
                        repositories you <router-link to="">watch</router-link>.
                    </p>
                    <p>
                        <svg
                            class="octicon octicon-rss mr-1"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                        >
                            <path
                                fill="#586069"
                                fill-rule="evenodd"
                                d="M2.002 2.725a.75.75 0 01.797-.699C8.79 2.42 13.58 7.21 13.974 13.201a.75.75 0 11-1.497.098 10.502 10.502 0 00-9.776-9.776.75.75 0 01-.7-.798zM2 13a1 1 0 112 0 1 1 0 01-2 0zm.84-5.95a.75.75 0 00-.179 1.489c2.509.3 4.5 2.291 4.8 4.8a.75.75 0 101.49-.178A7.003 7.003 0 002.838 7.05z"
                            ></path>
                        </svg>
                        Subscribe to your news feed
                    </p>
                </div>

                <footer class="grid w-full">
                    <div class="copyright">
                        <div class="copyright_content flex-col">
                            <img src="" alt="" />
                            © 2021 GitHub, Inc.
                        </div>
                    </div>

                    <div class="foot-links grid">
                        <ul class="foot-links__g1">
                            <li v-for="links in foot_links1" :key="links.name">
                                <router-link to="">
                                    {{ links.name }}
                                </router-link>
                            </li>
                        </ul>

                        <ul class="foot-links__g2">
                            <li v-for="links in foot_links2" :key="links.name">
                                <router-link to="">
                                    {{ links.name }}
                                </router-link>
                            </li>
                        </ul>

                        <ul class="foot-links__g3">
                            <li v-for="links in foot_links3" :key="links.name">
                                <router-link to="">
                                    {{ links.name }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>

            <div class="explore">
                <p class="title">Explore repositories</p>

                <div class="explore-card">
                    <router-link to="" class="explore-card_name"
                        >FazeelUsmani/GeeksForGeeks-DSA-2</router-link
                    >
                    <p class="explore-card_description">
                        This repository contains all the assignments and
                        practice questions solved during the Data Structures and
                        Algorithms course in C++ taught by the Geeks For Geeks
                        team.
                    </p>
                    <div class="explore-card_extra flex-row">
                        <span>Language</span>
                        <span>Star</span>
                    </div>
                </div>

                <router-link to="" class="more">Explore more →</router-link>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Home',
    components: {},

    methods: {
        goTo(route) {
            this.$router.push(route)
        },
    },

    data() {
        return {
            hasError: false,
            foot_links1: [
                { name: 'Blog', link: '' },
                { name: 'About', link: '' },
                { name: 'Shop', link: '' },
                { name: 'Contact', link: '' },
                { name: 'GitHub', link: '' },
                { name: 'Pricing', link: '' },
            ],

            foot_links2: [
                { name: 'API', link: '' },
                { name: 'Training', link: '' },
                { name: 'Status', link: '' },
                { name: 'Security', link: '' },
            ],

            foot_links3: [
                { name: 'Terms', link: '' },
                { name: 'Privacy', link: '' },
                { name: 'Docs', link: '' },
            ],
        }
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

.home {
    grid-template-columns: 25% 75%;
    min-height: 100vh;
}

.left-side {
    top: 0;
    max-height: 100vh;
    padding: 3rem 2rem;
}

div.repo-top {
    align-items: center;
    margin-bottom: 0.5rem;
}

button.new-repo {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.4rem;
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

.left-side input[type='text'] {
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid var(--github-dark);
    border-radius: 0.5rem;
    font-size: var(--font-normal);
    background-color: var(--github-lighter-gray);
    transition: all 0.3s ease;
}

.left-side input[type='text']:hover {
    background-color: transparent;
}

.left-side input[type='text']:focus {
    border-color: var(--github-blue);
    box-shadow: 0 0 0 3px var(--github-lighter-blue);
    outline: none;
}

.repositories {
    margin-top: 0.5rem;
    line-height: 1.5rem;
}

.repos {
    height: fit-content;
    max-height: 20rem;
}

.repos a.router-link-exact-active.router-link-active {
    width: fit-content;
    width: -moz-fit-content;
    margin-bottom: 0.25rem;
    color: var(--github-blue);
    font-weight: bold;
    text-decoration: none;
}

.repos a.router-link-exact-active.router-link-active:hover,
.repos a.router-link-exact-active.router-link-active:focus {
    text-decoration: underline;
}

hr {
    width: 100%;
    height: 1px;
    margin: 1rem 0rem;
    background-color: var(--github-dark);
    border: none;
}

.left-side .wrapper hr.before {
    display: none;
}

.repo-foot {
    line-height: 1.5rem;
}

.title,
.repo-foot p:first-child {
    color: var(--github-black);
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
    font-weight: 200;
    background-color: transparent;
    transition: all 0.3s ease;
}

.repo-foot button:hover {
    color: #ffffff;
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

a.router-link-exact-active.router-link-active.show-more {
    color: var(--github-gray);
    font-size: var(--font-sm);
    text-decoration: none;
}

a.router-link-exact-active.router-link-active.show-more:hover,
a.router-link-exact-active.router-link-active.show-more:focus {
    color: var(--github-blue);
    text-decoration: none;
}

.right-side {
    grid-template-columns: 68% 32%;
    padding: 1rem 2rem;
    background-color: var(--github-gray-light);
}

.feeds {
    position: relative;
    padding-right: 2rem;
}

.fork-star,
.commit,
.release,
.follow-feed {
    grid-template-columns: 3rem 1fr;
    border-bottom: 1px solid var(--github-dark);
    margin-top: 1.5rem;
}

.fork-star img,
.commit img,
.release img,
.follow-feed img {
    width: 2rem;
    height: 2rem;
    object-fit: contain;
    border-radius: 100%;
}

.commit_card__description img {
    width: 0.9rem;
    height: 0.9rem;
    margin-right: 0.5rem;
}

[class*='_details'] > [class*='_summary'] {
    color: var(--github-black);
}

[class*='_summary'] span {
    color: var(--github-gray) !important;
    font-size: var(--font-sm);
}

[class*='__details'] > a.router-link-exact-active.router-link-active,
[class*='_details']
    > [class*='_summary']
    a.router-link-exact-active.router-link-active,
.fork-star_card a.router-link-exact-active.router-link-active.title {
    color: var(--github-black);
    font-weight: bold;
    text-decoration: none;
}

[class*='__details'] > a.router-link-exact-active.router-link-active:hover,
[class*='_details']
    > [class*='_summary']
    a.router-link-exact-active.router-link-active:hover,
.fork-star_card a.router-link-exact-active.router-link-active.title:hover {
    color: var(--github-blue);
}

[class*='_details']
    > [class*='_summary']
    a.router-link-exact-active.router-link-active {
    line-height: 1.5rem;
}

.fork-star_card__details {
    grid-template-columns: 1fr 5rem;
}

.follow-feed_card {
    grid-template-columns: 3rem 1fr;
}

.follow-feed_card__details {
    grid-template-columns: 1fr 5rem;
}

.fork-star_card button,
.follow-feed_card button {
    width: fit-content;
    height: fit-content;
    margin-left: auto;
    padding: 0.25rem 0.75rem;
    color: var(--github-black);
    font-size: var(--font-sm);
    border: 1px solid var(--github-dark);
    border-radius: 0.25rem;
    background-color: var(--github-lighter-gray);
}

.fork-star_card button:hover,
.fork-star_card button:focus,
.follow-feed_card button:hover,
.follow-feed_card button:focus {
    background-color: var(--github-gray-light);
}

.fork-star_card,
.commit_card,
.release_card,
.follow-feed_card {
    margin-top: 0.5rem;
}

[class*='_card'] [class*='__description'],
[class*='_card'] a.router-link-exact-active.router-link-active,
[class*='_card'] [class*='__snip'] {
    font-size: var(--font-sm);
}

[class*='_card'] a.router-link-exact-active.router-link-active.more-info {
    color: var(--github-gray);
    font-weight: normal;
}

[class*='_card'] a.router-link-exact-active.router-link-active.more-info:hover {
    color: var(--github-blue);
}

a.router-link-exact-active.router-link-active.branch {
    padding: 0.1rem 0.3rem;
    border-radius: 0.3rem;
    background-color: var(--github-lighter-blue-fade);
}

.fork-star_card,
.commit_card,
.release_card,
.follow-feed_card,
.error-card {
    margin-bottom: 1.5rem;
    line-height: 1.5rem;
}

.fork-star_card,
.commit_card,
.follow-feed_card,
.error-card {
    padding: 1rem;
    border: 1px solid var(--github-dark);
    border-radius: 0.5rem;
    background-color: #ffffff;
}

.error-card {
    padding: 2rem;
}

p.error-msg {
    text-align: center;
    color: var(--github-gray-dark);
}

p a.router-link-exact-active.router-link-active {
    color: var(--github-blue);
    text-decoration: none;
}

.release_card__details p a.router-link-exact-active.router-link-active {
    color: var(--github-gray-dark);
}

.release_card__details p a.router-link-exact-active.router-link-active:hover {
    color: var(--github-blue);
}

a.router-link-exact-active.router-link-active:hover,
a.router-link-exact-active.router-link-active:focus {
    text-decoration: underline;
}

[class*='_card__details'] a.router-link-exact-active.router-link-active.title,
a.router-link-exact-active.router-link-active.name,
a.router-link-exact-active.router-link-active.username,
p.job {
    color: var(--github-black);
    font-size: var(--font-normal);
}

p.note {
    font-size: var(--font-normal) !important;
    color: var(--github-gray-dark);
}

a.router-link-exact-active.router-link-active.name {
    font-weight: bold;
}

.fork-star_card__snip {
    flex-wrap: wrap;
}

[class*='_card__snip'] span a.router-link-exact-active.router-link-active:hover,
a.router-link-exact-active.router-link-active.name:hover,
a.router-link-exact-active.router-link-active.username:hover,
[class*='_card__snip'] a.router-link-exact-active.router-link-active:hover {
    color: var(--github-blue);
    text-decoration: none;
}

a.router-link-exact-active.router-link-active.username,
[class*='_card__snip'] a.router-link-exact-active.router-link-active {
    color: var(--github-gray-dark);
    text-decoration: none;
}

[class*='_card__snip'] span,
[class*='_card__snip'] a.router-link-exact-active.router-link-active {
    margin-right: 1rem;
}

.feeds_tips {
    margin-top: 2rem;
}

.feeds_tips,
.copyright_content {
    font-size: var(--font-sm);
}

.feeds_tips p,
footer div {
    line-height: 1.5rem;
}

.feeds_tips p > span {
    font-weight: bold;
}

footer {
    margin: 4rem 0 2rem 0;
    grid-template-columns: 40% 60%;
    font-size: var(--font-sm);
    font-weight: 200;
}

.foot-links {
    width: 80%;
    grid-template-columns: repeat(3, 33%);
}

ul[class*='foot-links__'] {
    list-style: none;
}

.foot-links a.router-link-exact-active.router-link-active {
    color: var(--github-gray);
    text-decoration: none;
}

.foot-links a.router-link-exact-active.router-link-active:hover {
    color: var(--github-blue);
    text-decoration: underline;
}

.explore {
    margin-top: 0.5rem;
    margin-right: 1rem;
}

.explore .title {
    margin-bottom: 1rem;
}

.explore-card {
    margin: 1rem 0;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--github-dark);
    font-size: var(--font-sm);
    line-height: 1.5rem;
}

.explore-card:not(:last-child) {
    border-bottom: transparent;
}

.explore-card p {
    margin-bottom: 0.5rem;
}

.explore-card a.router-link-exact-active.router-link-active {
    color: var(--github-black);
    font-weight: bold;
    text-decoration: none;
}

.explore-card a.router-link-exact-active.router-link-active:hover,
.explore-card a.router-link-exact-active.router-link-active:focus {
    color: var(--github-blue);
}

.explore-card_extra span {
    width: fit-content;
    width: -moz-fit-content;
    margin-right: 0.5rem;
}

.explore a.router-link-exact-active.router-link-active {
    font-size: var(--font-sm);
    text-decoration: none;
}

.explore a.router-link-exact-active.router-link-active:hover,
.explore a.router-link-exact-active.router-link-active:focus {
    color: var(--github-blue);
}

.more {
    color: inherit;
}

@media only screen and (max-width: 768px) {
    .home {
        grid-template-columns: 30% 70%;
    }

    .right-side {
        grid-template-columns: 100%;
        padding: 1rem;
    }

    .feeds {
        padding-right: 0;
    }

    .fork-star,
    .commit,
    .release,
    .follow-feed {
        margin-top: 1rem;
    }

    [class*='_card__snip'] span,
    [class*='_card__snip'] a.router-link-exact-active.router-link-active {
        margin-right: 0.5rem;
    }

    .explore {
        display: none;
    }
}

@media only screen and (max-width: 425px) {
    .home {
        grid-template-columns: 100%;
        overflow-y: scroll;
    }

    .wrapper input[type='text'] {
        width: 100%;
    }

    .left-side {
        padding: 1.5rem;
        background-color: var(--github-gray-light);
    }

    .left-side .wrapper {
        padding: 0.5rem;
        border: 1px solid var(--github-dark);
        border-radius: 0.5rem;
        background-color: #ffffff;
    }

    .left-side .wrapper hr.before {
        display: block;
    }

    .show-more p {
        margin-bottom: 1rem;
        margin-left: 1rem;
    }

    .new-repo,
    .repo-foot,
    .left-side .wrapper hr.after {
        display: none;
    }

    .fork-star_card__snip {
        margin-top: 0.5rem;
    }
}
</style>
