<template>
    <div class="boxed_wrapper ltr">
        <!-- устройство предварительной загрузки -->
        <div class="preloader" :style="preloaderStyle"></div>
        <!-- устройство предварительной загрузки -->

        <!-- элемент боковой панели -->
        <SidebarComponent :ChangePage="ChangePage" />
        <!-- КОНЕЧНЫЙ элемент виджета боковой панели -->

        <!-- шапка -->
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

        <!--Page Title Shop List-->
        <PageTitleShopListComponent :ChangePage="ChangePage" />
        <!--End Page Title-->

        <!-- shop-page-section -->
        <ShopPageSectionComponent :server="server" :ChangePage="ChangePage" />
        <!-- shop-page-section end -->

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
import PageTitleShopListComponent from "../components/PageTitleShopListComponent.vue";
import ShopPageSectionComponent from "../components/ShopPageSectionComponent.vue";
import SidebarComponent from "../components/SidebarComponent.vue";
export default {
    name: "ShopPage",
    props: ["user", "IsAuth", "logout", "ChangePage", "page", "server"],
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
        PageTitleShopListComponent,
        SidebarComponent,
        HeaderComponent,
        MobileMenuComponent,
        MainFooterComponent,
        ShopPageSectionComponent,
    },
};
</script>
