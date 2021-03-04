<template>
    <div class="flex-col">
        <div class="note">
            <p>This is temporarily unavailable.</p>
            <p>We will be working to deliver more functionalities.</p>
        </div>
        <img src="@/assets/images/github-noted.png" alt="" />
        <the-shortcuts class="shortcuts" />
    </div>
</template>

<script>
import TheShortcuts from '../views/layouts/TheShortcuts.vue'
export default {
    components: { TheShortcuts },
}
</script>

<style scoped>
div:not(.note) {
    position: relative;
    width: 100%;
    height: fit-content;
    font-family: 'Helvetica Rounded Bold';
    font-style: normal;
    font-weight: bold;
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

    p:first-child {
        font-size: var(--font-lg);
    }

    p:nth-child(2) {
        font-size: var(--font-normal);
    }

    img {
        margin-top: 1rem;
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

    p:first-child {
        font-size: var(--font-md);
    }

    p:nth-child(2) {
        font-size: var(--font-xs);
    }

    img {
        margin-bottom: 1rem;
    }
}
</style>
