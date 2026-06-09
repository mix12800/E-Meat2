<template>
    <HomePage :page="page" :ChangePage="ChangePage" v-if="page == 'HomePage'" />
    <AboutPage
        :page="page"
        :ChangePage="ChangePage"
        v-if="page == 'AboutPage'"
    />

    <TeamPage :page="page" :ChangePage="ChangePage" v-if="page == 'TeamPage'" />
    <ContactPage :ChangePage="ChangePage" v-if="page == 'ContactPage'" />
</template>
<script>
import AboutPage from "./page/AboutPage.vue";
import ContactPage from "./page/ContactPage.vue";
import HomePage from "./page/HomePage.vue";
import TeamPage from "./page/TeamPage.vue";

export default {
    name: "App.vue",
    data() {
        return {
            page: localStorage.getItem("page") || "TeamPage",
        };
    },

    methods: {
        ChangePage(page) {
            this.page = page;
            localStorage.setItem("page", page);
        },
    },

    components: {
        HomePage,
        AboutPage,
        TeamPage,
        ContactPage,
    },
};
</script>
