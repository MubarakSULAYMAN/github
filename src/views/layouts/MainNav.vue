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
                @click="goTo('/')"
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
                    ref="search"
                    v-on:keyup.page-up="setSearchFocus"
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
                :to="route.link"
                class="w-fit bg-black"
                v-for="route in router_group"
                :key="route.name"
            >
                {{ route.name }}
            </router-link>

            <div class="nav_extras flex-row ml-auto">
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

                <!-- New repository Import repository New gist New organization New project -->
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
                <!-- <span class="dropdown-caret"></span> -->

                <span class="user-profile rounded-full">
                    <img src="" alt="" class="w-full h-full" />
                    <!-- caret -->
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

            <router-link to="" class="w-fit bg-black"> Dashboard </router-link>

            <router-link
                :to="route.link"
                class="w-fit bg-black"
                v-for="route in router_group"
                :key="route.name"
            >
                {{ route.name }}
            </router-link>

            <router-link to="" class="w-fit bg-black"> Settings </router-link>

            <router-link to="" class="w-fit bg-black">
                MubarakSULAYMAN
            </router-link>

            <router-link to="" class="w-fit bg-black"> Sign out </router-link>
        </div>
    </div>
</template>

<script>
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
        }
    },

    methods: {
        goTo(route) {
            this.$router.push(route)
        },
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
    color: #ffffff;
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
    background-color: #ffffff;
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
    color: #ffffff;
}

.nav a.router-link-exact-active.router-link-active {
    margin-left: 1rem;
    padding: 1.5rem 0;
    color: #ffffff;
    font-weight: bold;
    text-decoration: none;
    background-color: var(--github-black);
}

.nav a.router-link-exact-active.router-link-active:hover,
.nav a.router-link-exact-active.router-link-active:focus {
    color: var(--github-dark);
}

.nav a.router-link-exact-active.router-link-active:hover {
    outline: none;
}

.nav_extras {
    width: fit-content;
}

.user-profile {
    width: 1rem;
    height: 1rem;
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

    .nav a.router-link-exact-active.router-link-active {
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
    .nav a.router-link-exact-active.router-link-active,
    svg.octicon.octicon-plus,
    span.user-profile {
        display: none;
    }

    .drawer {
        display: flex;
        width: 100vw;
        height: fit-content;
        padding: 0 1.5rem 2rem;
        /* margin-bottom: 1rem; */
        /* z-index: 10 !important; */
    }

    .drawer .input-wrap {
        position: relative;
        display: inline-block;
        margin-bottom: 1rem;
    }

    .drawer .input[type='text'] {
        width: 100%;
        padding: 0.5rem 0.75rem;
        color: #ffffff;
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
        background-color: #ffffff;
        border-color: var(--github-blue);
        /* border-bottom: none;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0; */
        outline: none;
    }

    .drawer .slash {
        position: absolute;
        top: 0.35rem;
        right: 0.75rem;
        padding: 0.1rem 0.5rem;
        color: var(--github-darker);
        font-weight: bold;
        border: 1px solid var(--github-darker);
        border-radius: 0.25rem;
        box-sizing: border-box;
    }

    .drawer a.router-link-exact-active.router-link-active {
        width: 100%;
        /* margin-left: 1rem; */
        padding: 0.75rem 0;
        color: #ffffff;
        font-weight: bold;
        text-decoration: none;
        border-top: 1px solid var(--github-darker);
        /* background-color: var(--github-black); */
    }

    .drawer a.router-link-exact-active.router-link-active:hover,
    .drawer a.router-link-exact-active.router-link-active:focus {
        color: var(--github-dark);
    }

    .drawer a.router-link-exact-active.router-link-active:hover {
        outline: none;
    }
}
</style>
