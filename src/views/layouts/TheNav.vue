<template>
    <div class="nav-container">
        <div class="nav flex-row bg-black">
            <svg
                height="24"
                class="octicon octicon-three-bars"
                viewBox="0 0 16 16"
                version="1.1"
                width="24"
                fill="#ffffff"
                aria-hidden="true"
                @click="mobile_nav = !mobile_nav"
            >
                <path
                    fill-rule="evenodd"
                    d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
                ></path>
            </svg>

            <svg
                class="octicon octicon-mark-github v-align-middle"
                height="32"
                viewBox="0 0 16 16"
                version="1.1"
                width="32"
                fill="#ffffff"
                aria-hidden="true"
                @click="home"
            >
                <path
                    fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
            </svg>

            <span class="input-wrap w-fit bg-black">
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search or jump to..."
                    class="bg-black"
                    v-model="search_term"
                    @focus="hide_slash = true"
                    @blur="hide_slash = false"
                    ref="searchInput"
                />
                <!-- @keypress.s="setSearchFocus" -->
                <!-- .exact -->
                <!-- focus on pressing of "s" -->
                <span
                    class="slash inline-block bg-black"
                    v-show="!search_term && hide_slash === false"
                >
                    /
                </span>
            </span>

            <router-link
                to="/in-view"
                class="w-fit bg-black"
                v-for="route in router_group"
                :key="route.name"
            >
                <!-- :disabled="!whateverActivatesThisLink"
                :event="whateverActivatesThisLink ? 'click' : ''" -->
                {{ route.name }}
            </router-link>

            <div class="nav_extras flex-row ml-auto" v-if="user_exist">
                <svg
                    class="octicon octicon-bell"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    height="16"
                    fill="#ffffff"
                    aria-hidden="true"
                >
                    <path
                        d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"
                    ></path>
                    <path
                        fill-rule="evenodd"
                        d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"
                    ></path>
                </svg>

                <svg
                    class="octicon octicon-plus"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    height="16"
                    fill="#ffffff"
                    aria-hidden="true"
                >
                    <path
                        fill-rule="evenodd"
                        d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"
                    ></path>
                </svg>
                <span class="user-profile dropdown" tabindex="0">
                    <img
                        :src="user_info.avatar_url"
                        :alt="user_info.name"
                        class="w-full h-full rounded-full"
                    />
                    <div class="dropdown-content">
                        <p>
                            <router-link :to="`/${username}`">
                                Signed in as <br />
                                <span>{{ username }}</span>
                            </router-link>
                        </p>

                        <hr />

                        <button class="set-status flex-row">
                            <svg
                                class="octicon octicon-smiley"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                height="16"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"
                                ></path>
                            </svg>
                            Set status
                        </button>

                        <hr />

                        <router-link
                            :to="option.route"
                            v-for="option in main_options"
                            :key="option.name"
                            @click.native="changeRoute(option.name)"
                        >
                            <!-- :to="{option.route, params: {username: username}}" -->
                            Your {{ option.name }}
                        </router-link>

                        <hr />

                        <router-link
                            :to="option.route"
                            v-for="option in other_options"
                            :key="option.name"
                        >
                            {{ option.name }}
                        </router-link>
                    </div>
                </span>
                <!-- tooltip of "warning sign" and "Sorry, something went wrong. px-1 py-2" -->
            </div>
        </div>

        <div class="drawer flex-col bg-black" v-if="mobile_nav === true">
            <div class="input-wrap w-fit bg-black">
                <!-- <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search or jump to..."
                    class="bg-black"
                    v-model="search_term"
                    @focus="hide_slash = true"
                    @blur="hide_slash = false"
                    ref="search"
                    v-on:keyup.page-up="setSearchFocus"
                /> -->
                <!-- @keypress.s="setSearchFocus" -->
                <!-- .exact -->
                <!-- focus on pressing of "s" -->
                <!-- <span
                    class="slash inline-block bg-black"
                    v-show="!search_term && hide_slash === false"
                >
                    /
                </span> -->
            </div>

            <router-link to="/in-view" class="w-fit bg-black">
                Dashboard
            </router-link>

            <router-link
                to="/in-view"
                class="w-fit bg-black"
                v-for="route in router_group"
                :key="route.name"
            >
                {{ route.name }}
            </router-link>

            <router-link to="/in-view" class="w-fit bg-black">
                Settings
            </router-link>

            <router-link :to="`/${username}`" class="w-fit bg-black">
                {{ username }}
            </router-link>

            <router-link to="/in-view" class="w-fit bg-black">
                Sign out
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            mobile_nav: false,
            search_term: '',
            hide_slash: false,

            router_group: [
                {
                    name: 'Pull requests',
                    link: '',
                },
                {
                    name: 'Issues',
                    link: '',
                },
                {
                    name: 'Marketplace',
                    link: '',
                },
                {
                    name: 'Explore',
                    link: '',
                },
            ],

            other_options: [
                {
                    name: 'Upgrade',
                    route: '/not-available',
                },
                {
                    name: 'Feature preview',
                    route: '/not-available',
                },
                {
                    name: 'Help',
                    route: '/not-available',
                },
                {
                    name: 'Settings',
                    route: '/not-available',
                },
                {
                    name: 'Sign out',
                    route: '/not-available',
                },
            ],
        }
    },

    methods: {
        goTo(route) {
            this.$router.push(route)
        },

        home() {
            return (
                this.goTo('/'), this.$store.dispatch('fetchCustomRepos', [7, 1])
            )
        },

        changeRoute(route) {
            console.log(route)
            switch (route) {
                case 'profile':
                    this.$store.dispatch('fetchPinnedRepos')
                    break
                case 'repository':
                    this.$store.dispatch('fetchRepos', [30, 1])
                    break
                // case 'project':
                //     // code block
                //     break
                // case 'stars':
                //     // code block
                //     break
                // case 'gists':
                //     // code block
                //     break
                // default:
                // // code block
            }
        },

        derivedData() {
            return [
                {
                    name: 'profile',
                    route: `/${this.username}`,
                },
                {
                    name: 'repository',
                    route: `/${this.username}?tab=repositories`,
                },
                {
                    name: 'projects',
                    route: `/${this.username}?tab=projects`,
                },
                {
                    name: 'stars',
                    route: `/${this.username}?tab=stars`,
                },
                {
                    name: 'gists',
                    route: `/${this.username}?tab=packages`,
                },
            ]
        },

        doCommand(e) {
		// let cmd = String.fromCharCode(e.keyCode).toLowerCase();
		// do stuff
        if (e.key === 's') {
                e.preventDefault()
                // this.$nextTick(() => this.$refs.searchInput.$el.focus())
                // this.$nextTick(() => this.$refs.searchInput.focus())
                this.$refs.searchInput.focus()
                // this.$refs.searchInput.$el.focus()
            }
	},
    },

    computed: {
        main_options() {
            return this.derivedData()
        },

        ...mapState(['user_exist']),

        ...mapState({
            username: state => state.user.username,
            user_info: state => state.user.user_info,
        }),
    },

    created() {
        window.addEventListener('keypress', this.doCommand)

        return [
            this.$store.dispatch('fetchUsers'),
            console.log(
                this.username,
                this.user_info,
                // this.user_info.name,
                // this.user_info.avatar_url,
                this.user_exist,
            ),
            console.log('The nav is created.'),
        ]
    },

    // beforeDestroy() {
    //     window.removeEventListener('keypress', this.doCommand)
    // },

    destroyed() {
        window.removeEventListener('keypress', this.doCommand)
    },
}
</script>

<style scoped>
* {
    --input-max-width: 35rem;
}

.nav {
    position: relative;
    height: 4.5rem;
    padding: 0 2rem;
    align-items: center;
    transition: all 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

svg {
    display: inline-block;
}

svg.octicon.octicon-three-bars {
    display: none;
}

.nav svg.octicon.octicon-plus,
.user-profile {
    margin-left: 1rem;
}

.input-wrap {
    position: relative;
    display: inline-block;
    margin-left: 1rem;
}

input[type='text'] {
    width: 20rem;
    padding: 0.5rem 0.75rem;
    color: var(--github-white);
    border: 1px solid var(--github-darker);
    border-radius: 0.4rem;
    transition: all 0.2s ease-in;
}

input[type='text']::placeholder,
input[type='text']::-moz-placeholder,
input[type='text']::-webkit-input-placeholder {
    color: var(--github-dark);
}

input[type='text']:focus {
    width: var(--input-max-width);
    color: var(--github-black);
    background-color: var(--github-white);
    border-color: var(--github-blue);
    border-bottom: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    outline: none;
}

.slash {
    position: absolute;
    top: 0.35rem;
    right: 0.75rem;
    padding: 0.1rem 0.5rem;
    color: var(--github-darker);
    font-family: 'Helvetica Bold';
    font-style: normal;
    font-weight: bold;
    border: 1px solid var(--github-darker);
    border-radius: 0.25rem;
    box-sizing: border-box;
}

.input-copy {
    position: absolute;
    top: 50px;
    left: 0;
    width: var(--input-max-width);
    border-radius: 0.25rem;
    border-top: none;
    color: var(--github-white);
}

.nav a {
    margin-left: 1rem;
    padding: 1.5rem 0;
    color: var(--github-white);
    font-family: 'Helvetica Bold';
    font-style: normal;
    font-weight: bold;
    text-decoration: none;
    background-color: var(--github-black);
}

/* .nav a.router-link-exact-active.router-link-active {
    color: var(--github-dark);
} */

.nav a:hover {
    outline: none;
}

.nav_extras {
    width: fit-content;
}

.user-profile img {
    width: 1.5rem;
    height: 1.5rem;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    position: absolute;
    right: -1rem;
    display: none;
    width: 200px;
    padding: 0.5rem 0;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: normal;
    border-radius: 0.5rem;
    border: 1px solid var(--github-dark);
    background-color: var(--github-white);
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 10;
}

.dropdown-content p a span {
    display: inline-block;
    margin-top: 5px;
    font-family: 'Helvetica Bold';
    font-style: normal;
    font-weight: bold;
}

.dropdown-content a:first-child:hover {
    color: var(--github-black);
    background-color: inherit;
}

.dropdown-content a {
    display: block;
    margin-left: 0 !important;
    padding: 8px 16px;
    color: var(--github-black);
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: normal;
    text-decoration: none;
    background-color: inherit;
}

.dropdown-content a:hover {
    color: var(--github-white);
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: normal;
    background-color: var(--github-blue);
}

.dropdown:hover .dropdown-content,
.dropdown:focus .dropdown-content {
    display: block;
}

.dropdown-content hr {
    width: 100%;
    height: 1px;
    margin: 0.5rem 0rem;
    background-color: var(--github-dark);
    border: none;
}

.dropdown-content::after {
    content: ' ';
    position: absolute;
    bottom: 100%;
    right: 10%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #ffffff transparent;
}

.dropdown-content:hover {
    visibility: visible;
}

.set-status {
    width: calc(100% - 2rem);
    margin: 0 1rem;
    padding: 0.5rem 0;
    font-size: 12px;
    color: var(--github-gray-dark);
}

.set-status svg {
    margin-right: 0.5rem;
    fill: var(--github-gray-dark);
}

.set-status:hover {
    color: var(--github-blue);
}

.set-status:hover svg {
    fill: var(--github-blue);
}

.drawer {
    display: none;
}

@media only screen and (max-width: 768px) {
    .nav {
        padding: 0 1.5rem;
    }

    input[type='text'] {
        width: 18rem;
    }

    .nav a {
        margin-left: 0.8rem;
    }
}

@media only screen and (max-width: 425px) {
    .nav {
        justify-content: space-between !important;
    }

    .nav_extras {
        margin-left: 0;
    }

    svg.octicon.octicon-three-bars {
        display: block;
    }

    .input-wrap,
    .nav a,
    svg.octicon.octicon-plus,
    span.user-profile {
        display: none;
    }

    .drawer {
        display: flex;
        width: 100vw;
        height: fit-content;
        padding: 0 1.5rem 2rem;
    }

    .drawer .input-wrap {
        position: relative;
        display: inline-block;
        margin-bottom: 1rem;
    }

    .drawer .input[type='text'] {
        width: 100%;
        padding: 0.5rem 0.75rem;
        color: var(--github-white);
        border: 1px solid var(--github-darker);
        border-radius: 0.4rem;
        transition: all 0.2s ease-in;
    }

    .drawer .input[type='text']::placeholder,
    .drawer .input[type='text']::-moz-placeholder,
    .drawer .input[type='text']::-webkit-input-placeholder {
        color: var(--github-dark);
    }

    .drawer .input[type='text']:focus {
        width: 100% !important;
        color: var(--github-black);
        background-color: var(--github-white);
        border-color: var(--github-blue);
        outline: none;
    }

    .drawer .slash {
        position: absolute;
        top: 0.35rem;
        right: 0.75rem;
        padding: 0.1rem 0.5rem;
        color: var(--github-darker);
        font-family: 'Helvetica Bold';
        font-style: normal;
        font-weight: bold;
        border: 1px solid var(--github-darker);
        border-radius: 0.25rem;
        box-sizing: border-box;
    }

    .drawer a {
        width: 100%;
        padding: 0.75rem 0;
        color: var(--github-white);
        font-family: 'Helvetica Bold';
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        border-top: 1px solid var(--github-darker);
    }

    .drawer a:hover,
    .drawer a.router-link-exact-active.router-link-active {
        color: var(--github-dark);
    }

    .drawer a:hover {
        outline: none;
    }
}
</style>
