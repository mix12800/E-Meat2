<template>
    <div class="boxed_wrapper ltr">
        <!-- preloader -->
        <div class="preloader" :style="preloaderStyle"></div>
        <!-- preloader -->

        <!-- элемент боковой панели -->
        <SidebarComponent :ChangePage="ChangePage" />
        <!-- КОНЕЧНЫЙ элемент виджета боковой панели -->

        <!-- Шапка -->
        <HeaderComponent :ChangePage="ChangePage" :page="page" />
        <!-- Конец шапки -->

        <!-- Мобильное меню  -->
        <MobileMenuComponent />
        <!-- Конец мобильное меню -->

        <!--Page Title Team-->
        <PageTitleTeam />
        <!--End Page Title-->

        <!-- team-page-section -->
        <TeamPageSection />
        <!-- team-page-section end -->

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
import PageTitleTeam from "../components/PageTitleTeamComponent.vue";
import SidebarComponent from "../components/SidebarComponent.vue";
import TeamPageSection from "../components/TeamPageSectionComponent.vue";

export default {
    name: "TeamPage",
    props: ['ChangePage', 'page'],

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
        PageTitleTeam,
        TeamPageSection,
        MainFooterComponent,
    },
};
</script>
