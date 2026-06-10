<template>
    <div class="boxed_wrapper ltr">
        <!-- устройство предварительной загрузки -->
        <div class="preloader" :style="preloaderStyle"></div>
        <!-- устройство предварительной загрузки -->

        <!-- элемент боковой панели -->
        <SidebarComponent :ChangePage="ChangePage" />
        <!-- КОНЕЧНЫЙ элемент виджета боковой панели -->

        <!-- Шапка -->
        <HeaderComponent :ChangePage="ChangePage" :page="page" />
        <!-- Конец шапки -->

        <!-- Мобильное меню  -->
        <MobileMenuComponent :ChangePage="ChangePage" :page="page" />
        <!-- Конец мобильное меню -->

        <!--Page Title Contact-->
        <PageTitleContact />
        <!--End Page Title-->

        <!-- google-map-section -->
        <MapSectionComponent />
        <!-- google-map-section end -->

        <!-- contact-info-section -->
        <ContactInfoSection />
        <!-- contact-info-section end -->

        <!-- contact-section -->
        <ContactSectionPageComponent />
        <!-- contact-section end -->

        <!-- clients-section -->
        <ClientsSectionComponent />
        <!-- clients-section end -->

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
import ClientsSectionComponent from "../components/ClientsSectionComponent.vue";
import ContactInfoSection from "../components/ContactInfoSection.vue";
import ContactSectionPageComponent from "../components/ContactSectionPageComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import MainFooterComponent from "../components/MainFooterComponent.vue";
import MapSectionComponent from "../components/MapSectionComponent.vue";
import MobileMenuComponent from "../components/MobileMenuComponent.vue";
import PageTitleContact from "../components/PageTitleContactComponent.vue";
import SidebarComponent from "../components/SidebarComponent.vue";

export default {
    name: "ContactPage",
    props: ["ChangePage", "page"],

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
        PageTitleContact,
        ContactInfoSection,
        ClientsSectionComponent,
        MainFooterComponent,
        MapSectionComponent,
        ContactSectionPageComponent,
    },
};
</script>
