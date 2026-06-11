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

        <!--Page Title Blog-->
        <PageTitleBlogComponent />
        <!--End Page Title-->

        <!-- sidebar-page-container -->
        <SidebarPageContainerComponent />
        <!-- sidebar-page-container end -->

        <!-- main-footer -->
        <MainFooterComponent :ChangePage="ChangePage" />
        <!-- main-footer end -->

        <!--Scroll to top-->
        <button class="scroll-top scroll-to-target" data-target="html">
            <span class="fa fa-arrow-up"></span>
        </button>
    </div>
</template>
<script>
import preloaderGif from "../../images/carneshop/preloader.gif";
import HeaderComponent from "../components/HeaderComponent.vue";
import MainFooterComponent from "../components/MainFooterComponent.vue";
import MobileMenuComponent from "../components/MobileMenuComponent.vue";
import PageTitleBlogComponent from "../components/PageTitleBlogComponent.vue";
import SidebarComponent from "../components/SidebarComponent.vue";
import SidebarPageContainerComponent from "../components/SidebarPageContainerComponent.vue";

export default {
    name: "BlogPage",
    props: ["ChangePage", "page", "logout", "IsAuth", "user"],
    data() {
        return {
            preloaderStyle: {
                backgroundImage: `url(${preloaderGif})`,
            },
        };
    },
    mounted() {
        this.$nextTick(() => {
            if (typeof window.initCarneshopTheme === "function") {
                window.initCarneshopTheme();
            }
        });
    },

    components: {
        PageTitleBlogComponent,
        SidebarComponent,
        HeaderComponent,
        MobileMenuComponent,
        MainFooterComponent,
        SidebarPageContainerComponent,
    },
};
</script>
