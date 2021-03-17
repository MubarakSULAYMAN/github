<template>
    <transition name="fly">
        <div class="warning" v-if="error_state === true">
            <p>
                <slot>An error just occured. It should resolve soon.</slot>
            </p>
        </div>
    </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
    created() {
        return [
            this.$store.dispatch('showWarning'),
            console.log('Error notification is created'),
        ]
    },

    computed: {
        ...mapState(['error_state']),
    },
}
</script>

<style scoped>
.warning {
    position: fixed;
    bottom: 3rem;
    left: 4rem;
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid red;
    border-radius: 5px;
    font-size: 20px;
    color: red;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 4px 4px red;
    transition: all 0.5s ease-in-out;
    z-index: 9999;
    animation: shake 0.3s ease-in-out 0.3s infinite alternate;
}

@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    .warning {
        background-color: transparent;
        -webkit-backdrop-filter: blur(2px);
        backdrop-filter: blur(2px);
    }
}

.fly-enter {
    transform: scaleY(0) translate(-999px);
}

.fly-enter-active,
.fly-leave-active {
    transition: transform 0.5s ease-in-out;
}

.fly-leave-to {
    transform: scaleY(0) translate(-999px);
}

.warning:hover {
    transform: translate(4px, 4px);
    box-shadow: none;
}

.warning p {
    margin: 0;
}

@keyframes shake {
    from {
        transform: rotate(1deg) translate(5px);
        -webkit-transform: rotate(1deg);
    }

    to {
        transform-origin: center center;
        -webkit-transform-origin: center center;
        transform: rotate(-1deg) translate(-5px);
        -webkit-transform: rotate(-1deg) translate(-5px);
    }
}
</style>
