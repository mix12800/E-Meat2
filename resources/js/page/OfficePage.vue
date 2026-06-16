<template>
    <div class="boxed_wrapper ltr">
        <!-- устройство предварительной загрузки -->
        <div class="preloader" :style="preloaderStyle"></div>
        <!-- устройство предварительной загрузки -->

        <!-- элемент боковой панели -->
        <SidebarComponent :ChangePage="ChangePage" />
        <!-- КОНЕЧНЫЙ элемент виджета боковой панели -->

        <!-- Шапка -->
        <HeaderComponent
            :user="user"
            :IsAuth="IsAuth"
            :logout="logout"
            :ChangePage="ChangePage"
            :page="page"
        />
        <!-- Конец шапки -->

        <!-- Мобильное меню  -->
        <MobileMenuComponent :ChangePage="ChangePage" :page="page" />
        <!-- Конец мобильное меню -->

        <!--Page Title Office-->
        <PageTitleOffice />
        <!--End Page Title-->

        <!-- user-info-Office -->
        <UserInfoOffice :user="user" />
        <!-- end user-info-Office -->

        <!-- User Order -->
        <UserOrderComponent v-if="user.role == 'user'" />
        <!-- End User Order -->

        <template v-if="user.role == 'admin'">
            <!-- Navigation Office Admin-->
            <NavigationOfficeComponent
                :ChangePageOffice="ChangePageOffice"
                :pageOffice="pageOffice"
            />
            <!-- End Navigation Office -->

            <!-- Control User -->
            <ControlUserComponent
                v-if="pageOffice == 'ControlUserComponent'"
                :server="server"
            />
            <!-- End Control User -->

            <ControlСategorieComponent
                v-if="pageOffice == 'СategorieControlComponent'"
                :server="server"
            />
        </template>
    </div>
</template>
<script>
import preloaderGif from "../../images/carneshop/preloader.gif";
import ControlUserComponent from "../components/ControlUserComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import MobileMenuComponent from "../components/MobileMenuComponent.vue";
import NavigationOfficeComponent from "../components/NavigationOfficeComponent.vue";
import PageTitleOffice from "../components/PageTitleOfficeComponent.vue";
import SidebarComponent from "../components/SidebarComponent.vue";
import UserInfoOffice from "../components/UserInfoOfficeComponent.vue";
import UserOrderComponent from "../components/UserOrderComponent.vue";
import ControlСategorieComponent from "../components/ControlСategorieComponent.vue";

export default {
    name: "OfficePage",
    props: ["logout", "IsAuth", "page", "ChangePage", "user", "server"],

    data() {
        return {
            preloaderStyle: {
                backgroundImage: `url(${preloaderGif})`,
            },
            pageOffice:
                localStorage.getItem("pageOffice") || "ControlUserComponent",
        };
    },

    mounted() {
        this.$nextTick(() => {
            if (typeof window.initCarneshopTheme === "function") {
                window.initCarneshopTheme();
            }
        });

        if (!localStorage.getItem("token")) {
            this.ChangePage("HomePage");
        }
    },

    methods: {
        ChangePageOffice(page) {
            this.pageOffice = page;
            localStorage.setItem("pageOffice", page);
        },
    },

    components: {
        SidebarComponent,
        HeaderComponent,
        MobileMenuComponent,
        PageTitleOffice,
        UserInfoOffice,
        UserOrderComponent,
        ControlUserComponent,
        NavigationOfficeComponent,
        ControlСategorieComponent,
    },
};
</script>
