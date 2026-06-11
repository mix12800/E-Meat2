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

        <!-- main-slider -->
        <MainSliderComponent />
        <!-- main-slider end -->

        <!-- about-section -->
        <AboutSectionComponent :ChangePage="ChangePage" />
        <!-- about-section end -->

        <!-- clients-section -->
        <ClientsSectionComponent />
        <!-- clients-section end -->

        <!-- service-section -->
        <ErviceSectionComponent />
        <!-- service-section end -->

        <!-- about-style-two -->
        <AboutStyleTwoComponent :ChangePage="ChangePage" />
        <!-- about-style-two end -->

        <!-- shop-section -->
        <ShopSectionComponent />
        <!-- shop-section end -->

        <!-- portfolio-section -->
        <PortfolioSectionComponent />
        <!-- portfolio-section end -->

        <!-- testimonial-section -->
        <TestimonialSectionComponent />
        <!-- testimonial-section end -->

        <!-- funfact-section -->
        <FunfactSectionComponent />
        <!-- funfact-section end -->

        <!-- team-section -->
        <TeamSectionComponent />
        <!-- team-section end -->

        <!-- news-section -->
        <NewsSectionComponent />
        <!-- news-section end -->

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
import AboutSectionComponent from "../components/AboutSectionComponent.vue";
import ClientsSectionComponent from "../components/ClientsSectionComponent.vue";
import ErviceSectionComponent from "../components/ErviceSectionComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import MainSliderComponent from "../components/MainSliderComponent.vue";
import MobileMenuComponent from "../components/MobileMenuComponent.vue";
import SidebarComponent from "../components/SidebarComponent.vue";
import AboutStyleTwoComponent from "../components/AboutStyleTwoComponent.vue";
import ShopSectionComponent from "../components/ShopSectionComponent.vue";
import PortfolioSectionComponent from "../components/PortfolioSectionComponent.vue";
import TestimonialSectionComponent from "../components/TestimonialSectionComponent.vue";
import FunfactSectionComponent from "../components/FunfactSectionComponent.vue";
import TeamSectionComponent from "../components/TeamSectionComponent.vue";
import NewsSectionComponent from "../components/NewsSectionComponent.vue";
import MainFooterComponent from "../components/MainFooterComponent.vue";

export default {
    name: "HomePage",
    props: ["ChangePage", "page", "IsAuth", "logout", "user"],
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
        MainSliderComponent,
        AboutSectionComponent,
        ClientsSectionComponent,
        ErviceSectionComponent,
        AboutStyleTwoComponent,
        ShopSectionComponent,
        PortfolioSectionComponent,
        TestimonialSectionComponent,
        FunfactSectionComponent,
        TeamSectionComponent,
        NewsSectionComponent,
        MainFooterComponent,
    },
};
</script>
