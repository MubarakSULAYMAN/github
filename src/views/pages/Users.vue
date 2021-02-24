<template>
    <div class="users grid">
        <user-menu-nav class="top-nav sticky" />

        <side-nav class="side-nav" />
        <overview class="main-content" v-if="overview === true" />
        <repositories class="main-content" />

        <footer>
            <div class="left-foot flex-row">
                <span>© 2021 GitHub, Inc.</span>
                <span>Terms</span>
                <span>Privacy</span>
                <span>Security</span>
                <span>Status</span>
                <span>Docs</span>
            </div>

            <span class="logo" @click="goTo('/')">
                <svg
                    height="24"
                    class="octicon octicon-mark-github"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="24"
                    aria-hidden="true"
                >
                    <path
                        fill-rule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    ></path>
                </svg>
            </span>

            <div class="right-foot flex-row">
                <span>Contact GitHub</span>
                <span>Pricing</span>
                <span>API</span>
                <span>Training</span>
                <span>Blog</span>
                <span>About</span>
            </div>
        </footer>
    </div>
</template>

<script>
import Overview from '../../components/Overview.vue'
import Repositories from '../../components/Repositories.vue'
import SideNav from '../../components/SideNav.vue'
import UserMenuNav from '../../components/UserMenuNav.vue'
export default {
    components: { UserMenuNav, SideNav, Overview, Repositories },

    methods: {
        goTo(route) {
            this.$router.push(route)
        },
    },

    data() {
        return {
            overview: false,
        }
    },
}
</script>

<style scoped>
.users {
    grid-template-columns: 25% 75%;
    padding-bottom: 3rem;
}

.top-nav {
    grid-column: 1 / 3;
    grid-row: 1;
    top: -2rem;
    background-color: #ffffff;
}

.side-nav {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    height: fit-content;
    margin-left: 4rem;
    margin-right: 2rem;
}

.main-content {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    margin-right: 4rem;
}

footer {
    grid-column: 1 / 3;
    grid-row: 3 / 4;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin: 4rem 4rem 0;
    padding: 4rem 0 1rem;
    font-size: var(--font-sm);
    border-top: 1px solid var(--github-dark);
}

footer .left-foot,
footer .right-foot {
    width: 75vh;
    justify-content: space-between;
}

footer span:not(.left-foot span:first-child) {
    color: var(--github-blue);
}

footer span:not(.left-foot span:first-child):hover,
footer span:not(.left-foot span:first-child):focus {
    text-decoration: underline;
    cursor: pointer;
}

span.logo svg.octicon.octicon-mark-github {
    opacity: 0.2;
}

span.logo svg.octicon.octicon-mark-github:hover {
    opacity: 0.6;
}

@media only screen and (max-width: 768px) {
    .users {
        grid-template-columns: 30% 70%;
    }

    .side-nav {
        margin-left: 1.5rem;
        margin-right: 1rem;
    }

    .main-content {
        margin-right: 1.5rem;
    }

    footer {
        margin: 0 4rem 0;
        padding: 2rem 0 1rem;
    }

    footer .left-foot,
    footer .right-foot {
        flex-wrap: wrap;
        justify-content: center;
        width: 100vw;
        margin-top: 1rem;
    }

    footer .left-foot span:not(:first-child),
    footer .right-foot span:not(:first-child) {
        margin-left: 1.5rem;
    }

    span.logo {
        display: none;
    }
}

@media only screen and (max-width: 425px) {
    .users {
        grid-template-columns: 100%;
    }

    .top-nav {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        top: -1.5rem;
        display: flex;
        width: 100%;
        overflow-x: scroll;
    }

    .side-nav {
        grid-column: 1 / 2;
        grid-row: 1;
        margin: 0;
        padding: 0 1rem;
    }

    .main-content {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
        margin-right: 0;
        padding: 0 1rem;
    }

    footer {
        grid-column: 1 / 2;
        grid-row: 4 / 5;
        margin: 0;
    }
}
</style>
