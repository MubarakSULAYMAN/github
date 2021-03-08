<template>
    <div class="explore">
        <p class="title">Explore repositories</p>

        <div class="explore-card">
            <router-link to="" class="explore-card_name"
                >FazeelUsmani/GeeksForGeeks-DSA-2</router-link
            >
            <p class="explore-card_description">
                This repository contains all the assignments and practice
                questions solved during the Data Structures and Algorithms
                course in C++ taught by the Geeks For Geeks team.
            </p>
            <div class="explore-card_extra flex-row">
                <span>Language</span>
                <span>Star</span>
            </div>
        </div>

        <router-link to="" class="more">Explore more →</router-link>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
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
    font-family: 'Helvetica Bold';
    font-style: normal;
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
    .explore {
        display: none;
    }
}
</style>
