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
        <MobileMenuComponent />
        <!-- Конец мобильное меню -->

        <!--Page Title Contact-->
        <PageTitleContact />
        <!--End Page Title-->

        <!-- google-map-section -->
        <section class="google-map-section">
            <div class="map-column">
                <div
                    class="google-map"
                    id="contact-google-map"
                    data-map-lat="40.712776"
                    data-map-lng="-74.005974"
                    data-icon-path="assets/images/icons/map-marker.png"
                    data-map-title="Brooklyn, New York, United Kingdom"
                    data-map-zoom="12"
                    data-markers='{
                        "marker-1": [40.712776, -74.005974, "<h4>Branch Office</h4><p>77/99 New York</p>","assets/images/icons/map-marker.png"]
                    }'
                ></div>
            </div>
        </section>
        <!-- google-map-section end -->

        <!-- contact-info-section -->
        <ContactInfoSection />
        <!-- contact-info-section end -->

        <!-- contact-section -->
        <section class="contact-section centred">
            <div class="auto-container">
                <div class="sec-title">
                    <span>Contact</span>
                    <h2>Get In Touch</h2>
                </div>
                <div class="form-inner">
                    <form
                        method="post"
                        action="assets/inc/sendemail.php"
                        id="contact-form"
                        class="default-form"
                    >
                        <div class="row clearfix">
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <div class="form-group">
                                    <i class="far fa-user"></i>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Name"
                                        required=""
                                    />
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <div class="form-group">
                                    <i class="far fa-envelope"></i>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required=""
                                    />
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <div class="form-group">
                                    <i class="fas fa-phone-volume"></i>
                                    <input
                                        type="text"
                                        name="phone"
                                        required=""
                                        placeholder="Phone"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <div class="form-group">
                                    <i class="far fa-file-alt"></i>
                                    <input
                                        type="text"
                                        name="subject"
                                        required=""
                                        placeholder="Subject"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="form-group">
                                    <i class="far fa-comment-alt"></i>
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                    ></textarea>
                                </div>
                            </div>
                            <div
                                class="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred"
                            >
                                <button
                                    class="theme-btn"
                                    type="submit"
                                    name="submit-form"
                                >
                                    SEND MESSAGE
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
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
import HeaderComponent from "../components/HeaderComponent.vue";
import MainFooterComponent from "../components/MainFooterComponent.vue";
import MobileMenuComponent from "../components/MobileMenuComponent.vue";
import PageTitleContact from "../components/PageTitleContactComponent.vue";
import SidebarComponent from "../components/SidebarComponent.vue";

export default {
    name: "ContactPage",
    props: ["ChangePage"],

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
    },
};
</script>
