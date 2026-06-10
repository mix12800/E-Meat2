<template>
    <HomePage :IsAuth="IsAuth" :page="page" :ChangePage="ChangePage" v-if="page == 'HomePage'" />
    <AboutPage
        :page="page"
        :ChangePage="ChangePage"
        v-if="page == 'AboutPage'"
    />

    <TeamPage :page="page" :ChangePage="ChangePage" v-if="page == 'TeamPage'" />
    <ContactPage
        :ChangePage="ChangePage"
        :page="page"
        v-if="page == 'ContactPage'"
    />
    <TestimonialPage
        :ChangePage="ChangePage"
        v-if="page == 'TestimonialPage'"
        :page="page"
    />

    <BlogPage :page="page" :ChangePage="ChangePage" v-if="page == 'BlogPage'" />

    <RegPage
        :LoginUser="LoginUser"
        :server="server"
        :page="page"
        :ChangePage="ChangePage"
        v-if="page == 'RegPage'"
    />

    <AuthPage
        :LoginUser="LoginUser"
        :server="server"
        :page="page"
        :ChangePage="ChangePage"
        v-if="page == 'AuthPage'"
    />
</template>
<script>
import AboutPage from "./page/AboutPage.vue";
import AuthPage from "./page/AuthPage.vue";
import BlogPage from "./page/BlogPage.vue";
import ContactPage from "./page/ContactPage.vue";
import HomePage from "./page/HomePage.vue";
import RegPage from "./page/RegPage.vue";
import TeamPage from "./page/TeamPage.vue";
import TestimonialPage from "./page/TestimonialPage.vue";

export default {
    name: "App.vue",
    data() {
        return {
            page: localStorage.getItem("page") || "HomePage",
            apiServer: "http://127.0.0.1:8000/api",
            user: {},
            IsAuth: false,
        };
    },

    methods: {
        ChangePage(page) {
            this.page = page;
            localStorage.setItem("page", page);
        },

        async server(route, method = "GET", formdata = null) {
            let myHeaders = new Headers();
            myHeaders.append("Accept", "application/json");
            myHeaders.append(
                "Authorization",
                "Bearer " + localStorage.getItem("token"),
            );

            let requestOptions = {
                method: method,
                headers: myHeaders,
                redirect: "follow",
            };

            if (method != "GET") {
                requestOptions.body = formdata;
            }

            return await fetch(this.apiServer + route, requestOptions).then(
                (response) => response.json(),
            );
        },

        GetUser() {
            this.server("/getuser")
                .then((result) => {
                    this.user = result.user;
                })
                .catch((error) => console.error(error));
        },

        LoginUser(token) {
            localStorage.setItem("token", token);
            this.GetUser();
            this.IsAuth = true;
            this.ChangePage("HomePage");
        },
    },

    components: {
        HomePage,
        AboutPage,
        TeamPage,
        ContactPage,
        TestimonialPage,
        BlogPage,
        RegPage,
        AuthPage,
    },
};
</script>
