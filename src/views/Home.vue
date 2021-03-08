<template>
    <div>
        <change-user-modal
            v-if="requesting === false && presenting === false"
        />

        <animated-octocat v-if="requesting === true && presenting === false" />

        <div
            class="home grid"
            v-if="requesting === false && presenting === true"
        >
            <div class="side-nav sticky overflow-x-none overflow-y-auto">
                <home-side-nav />
            </div>

            <div class="all-feeds grid">
                <div class="feeds">
                    <home-main-feeds />
                </div>

                <div class="explore">
                    <home-explore-feeds />
                </div>
            </div>
        </div>

        <error-notification v-if="error_state === true">
            {{ error_message }}
        </error-notification>
    </div>
</template>

// api endpoints
// https://api.github.com/users/MubarakSULAYMAN/received_events
// https://api.github.com/users/MubarakSULAYMAN/events/public

<script>
import { mapState } from 'vuex'

import ErrorNotification from '@/components/ErrorNotification.vue'
import HomeExploreFeeds from '../components/HomeExploreFeeds.vue'
import HomeMainFeeds from '../components/HomeMainFeeds.vue'
import HomeSideNav from '../components/HomeSideNav.vue'
import ChangeUserModal from '../components/ChangeUserModal.vue'
import AnimatedOctocat from '../components/AnimatedOctocat.vue'

export default {
    name: 'Home',
    components: {
        ErrorNotification,
        HomeExploreFeeds,
        HomeMainFeeds,
        HomeSideNav,
        ChangeUserModal,
        AnimatedOctocat,
    },

    methods: {
        goTo(route) {
            this.$router.push(route)
        },
    },

    computed: {
        ...mapState([
            'requesting',
            'request_status',
            'presenting',
            'error_message',
            'error_state',
        ]),
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

.side-nav {
    top: 0;
    max-height: 100vh;
    padding: 1.5rem;
}

.all-feeds {
    grid-template-columns: 68% 32%;
    padding: 1rem 2rem;
    background-color: var(--github-gray-light);
}

.feeds {
    position: relative;
    padding-right: 2rem;
}

.explore {
    margin-top: 0.5rem;
    margin-right: 1rem;
}

@media only screen and (max-width: 768px) {
    .home {
        grid-template-columns: 30% 70%;
    }

    .side-nav {
        padding: 1rem;
    }

    .all-feeds {
        grid-template-columns: 100%;
        padding: 1rem;
    }

    .feeds {
        padding-right: 0;
    }
}

@media only screen and (max-width: 425px) {
    .home {
        grid-template-columns: 100%;
        overflow-y: scroll;
    }

    .side-nav {
        padding: 1.5rem;
        background-color: var(--github-gray-light);
    }
}
</style>
