<template>
    <div class="wrapper">
        <div class="content flex-col">
            <p>Will you like to proceed as</p>
            <input
                type="text"
                name=""
                id=""
                placeholder="Use a valid username or proceed with default."
                v-model="username"
                @keydown.enter="getUser"
            />
            <button class="ml-auto" @click="getUser">YES</button>
            <p v-if="processing === true">Proceeding as "{{ username }}"...</p>
            <p v-if="[404].includes(request_status)">
                "{{ username }}" maybe INVALID!!!
            </p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            processing: false,
        }
    },

    methods: {
        getUser() {
            if (this.username !== '') {
                return [
                    this.$store.commit('UPDATE_REQUESTING', true),
                    this.$store.commit('UPDATE_PRESENTING', false),
                    this.$store.commit('UPDATE_USER_EXIST', false),
                    // this.$store.dispatch('fetchUsers'),
                    this.$store
                        .dispatch('fetchCustomRepos', [7, 1])
                        .then(this.$store.dispatch('fetchUsers')),
                    // this.$store.dispatch('changePageRequesting', true),
                    (this.processing = true),
                ]
            }
        },
    },

    computed: {
        ...mapState(['request_status']),

        username: {
            get() {
                return this.$store.state.user.username
            },

            set(value) {
                this.$store.commit('UPDATE_USERNAME', value)
            },
        },
    },
}
</script>

<style scoped>
.wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    color: var(--github-black);
    background-color: var(--github-gray);
    z-index: 999;
}

.content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40rem;
    padding: 2rem;
    border: 1px solid var(--github-gray-dark);
    border-radius: 1rem;
    background-color: var(--github-white);
    transform: translate(-50%, -70%);
    z-index: 1111;
}

p:first-child {
    font-size: 2rem;
}

p:first-child {
    font-family: 'Helvetica Bold';
    font-style: normal;
    font-weight: bold;
}

p:nth-child(3) {
    color: red;
}

input {
    margin: 0.5rem 0;
    width: 100%;
}

input:hover,
input:focus,
button:hover,
button:focus {
    box-shadow: 0 0 0 3px var(--github-lighter-blue);
}

input,
button {
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    color: var(--github-blue);
    border: 1px solid var(--github-dark);
    border-radius: 0.25rem;
    background-color: var(--github-white);
}

button {
    color: var(--github-black);
}

button:hover {
    color: var(--github-blue);
}

button:focus {
    color: var(--github-white);
    border-color: transparent;
    background-color: var(--github-blue);
}

@media only screen and (max-width: 425px) {
    .content {
        width: 70%;
    }

    p:first-child {
        font-size: 1rem;
    }

    input {
        margin: 0.25rem 0;
    }

    input,
    button {
        padding: 0.25rem 0.5rem;
        font-size: 0.9rem;
    }
}
</style>
