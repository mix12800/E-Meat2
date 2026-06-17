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

        <!--Page Title Testimonial-->
        <PageTitleTestimonialComponent :ChangePage="ChangePage" />
        <!--End Page Title-->

        <!-- testimonial-page-section -->
        <TestimonialPageSectionComponent />
        <!-- testimonial-page-section -->

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
import PageTitleTestimonialComponent from "../components/PageTitleTestimonialComponent.vue";
import SidebarComponent from "../components/SidebarComponent.vue";
import TestimonialPageSectionComponent from "../components/TestimonialPageSectionComponent.vue";

export default {
    name: "TestimonialPage",
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
        SidebarComponent,
        HeaderComponent,
        MobileMenuComponent,
        PageTitleTestimonialComponent,
        TestimonialPageSectionComponent,
        MainFooterComponent,
    },
};
</script>
