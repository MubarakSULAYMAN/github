<template>
    <div class="flex-col">
        <div class="note">
            <p>Unable to locate user.</p>
        </div>
        <the-shortcuts class="shortcuts" />
    </div>
</template>

<script>
import TheShortcuts from '../views/layouts/TheShortcuts.vue'
export default {
    components: { TheShortcuts },

    created() {
        return console.log('Invalid user is created')
    },
}
</script>

<style scoped>
div:not(.note) {
    position: relative;
    /* width: 100vw; */
    height: 100vh;
    font-family: 'Helvetica Rounded Bold';
    font-style: normal;
    font-weight: bold;
    background-image: url('../assets/images/github-4O4.png');
    object-fit: cover;
    background-repeat: no-repeat;
    background-origin: border-box;
    background-position: center;
}

div.note {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 1;
}

p:first-child {
    color: var(--github-black);
    font-size: var(--font-xl);
}

p:nth-child(2) {
    font-size: var(--font-md);
    font-family: 'Helvetica Light';
    font-style: normal;
    font-weight: lighter;
}

img {
    width: 100%;
}

.shortcuts {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
}

@media only screen and (max-width: 768px) {
    div.note {
        position: absolute;
        top: 0;
        left: 0;
        margin-top: 1rem;
    }

    p {
        font-size: var(--font-lg);
    }

    .shortcuts {
        position: absolute;
        bottom: 0;
        right: 0;
    }
}

@media only screen and (max-width: 425px) {
    div:not(.note) {
        justify-content: center;
        align-content: center;
        margin-bottom: 1rem;
    }

    p {
        font-size: var(--font-md);
    }
}
</style>
