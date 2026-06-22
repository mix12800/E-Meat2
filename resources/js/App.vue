<template>
    <HomePage
        :user="user"
        :logout="logout"
        :IsAuth="IsAuth"
        :page="page"
        :ChangePage="ChangePage"
        v-if="page == 'HomePage'"
    />

    <AboutPage
        :user="user"
        :logout="logout"
        :IsAuth="IsAuth"
        :page="page"
        :ChangePage="ChangePage"
        v-if="page == 'AboutPage'"
    />

    <TeamPage
        :user="user"
        :logout="logout"
        :IsAuth="IsAuth"
        :page="page"
        :ChangePage="ChangePage"
        v-if="page == 'TeamPage'"
    />

    <ContactPage
        :user="user"
        :logout="logout"
        :IsAuth="IsAuth"
        :ChangePage="ChangePage"
        :page="page"
        v-if="page == 'ContactPage'"
    />

    <TestimonialPage
        :user="user"
        :logout="logout"
        :IsAuth="IsAuth"
        :ChangePage="ChangePage"
        :page="page"
        v-if="page == 'TestimonialPage'"
    />

    <BlogPage
        :user="user"
        :logout="logout"
        :IsAuth="IsAuth"
        :page="page"
        :ChangePage="ChangePage"
        v-if="page == 'BlogPage'"
    />

    <RegPage
        :user="user"
        :logout="logout"
        :IsAuth="IsAuth"
        :LoginUser="LoginUser"
        :server="server"
        :page="page"
        :ChangePage="ChangePage"
        v-if="page == 'RegPage'"
    />

    <AuthPage
        :user="user"
        :logout="logout"
        :IsAuth="IsAuth"
        :LoginUser="LoginUser"
        :server="server"
        :page="page"
        :ChangePage="ChangePage"
        v-if="page == 'AuthPage'"
    />

    <ShopPage
        :server="server"
        :user="user"
        :IsAuth="IsAuth"
        :logout="logout"
        :ChangePage="ChangePage"
        :page="page"
        v-if="page == 'ShopPage'"
    />

    <OfficePage
        :server="server"
        :user="user"
        :logout="logout"
        :IsAuth="IsAuth"
        :page="page"
        :ChangePage="ChangePage"
        v-if="page == 'OfficePage'"
    />

    <ShopDetailsPage
        :user="user"
        :IsAuth="IsAuth"
        :logout="logout"
        :ChangePage="ChangePage"
        :page="page"
        v-if="page == 'ShopDetailsPage'"
    />
</template>
<script>
import AboutPage from "./page/AboutPage.vue";
import AuthPage from "./page/AuthPage.vue";
import BlogPage from "./page/BlogPage.vue";
import ContactPage from "./page/ContactPage.vue";
import HomePage from "./page/HomePage.vue";
import OfficePage from "./page/OfficePage.vue";
import RegPage from "./page/RegPage.vue";
import ShopPage from "./page/ShopPage.vue";
import TeamPage from "./page/TeamPage.vue";
import TestimonialPage from "./page/TestimonialPage.vue";
import ShopDetailsPage from "./page/ShopDetailsPage.vue";

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

    mounted() {
        if (localStorage.getItem("token")) {
            this.GetUser();
            this.IsAuth = true;
        }
    },

    methods: {
        ChangePage(page) {
            this.page = page;
            localStorage.setItem("page", page);
        },

        logout() {
            this.IsAuth = false;
            localStorage.removeItem("token");
            this.ChangePage("HomePage");
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
            this.ChangePage("OfficePage");
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

            if (method != "GET" && method != "DELETE") {
                requestOptions.body = formdata;
            }

            return await fetch(this.apiServer + route, requestOptions).then(
                (response) => {
                    if (response.status == 401) {
                        this.logout();
                    }
                    return response.json();
                },
            );
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
        OfficePage,
        ShopPage,
        ShopDetailsPage,
    },
};
</script>
