<template>
    <div class="boxed_wrapper ltr">
        <!-- !-- устройство предварительной загрузки -->
        <div class="preloader" :style="preloaderStyle"></div>
        <!-- устройство предварительной загрузки -->

        <!-- Шапка -->
        <HeaderComponent
            :user="user"
            :IsAuth="IsAuth"
            :logout="logout"
            :ChangePage="ChangePage"
            :page="page"
        />
        <!-- Конец шапки -->

        <section class="contact-section centred regPage">
            <div class="auto-container">
                <div class="sec-title">
                    <span>Вход в аккаунт</span>
                    <h2>Вход</h2>
                </div>
                <div class="form-inner">
                    <div id="contact-form" class="default-form regPageInp">
                        <div class="w-50">
                            <div class="mb-3">
                                <div class="form-group">
                                    <i class="bi bi-input-cursor-text"></i>
                                    <input
                                        v-model="login"
                                        type="text"
                                        :class="{
                                            'is-invalid': errors.login,
                                        }"
                                        name="login"
                                        placeholder="Логини"
                                    />
                                    <div
                                        v-if="errors.login"
                                        class="invalid-feedback"
                                    >
                                        {{ errors.login.join(", ") }}
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="form-group">
                                    <i class="bi bi-lock"></i>
                                    <input
                                        v-model="password"
                                        type="text"
                                        :class="{
                                            'is-invalid': errors.password,
                                        }"
                                        name="password"
                                        placeholder="Пароль"
                                    />
                                    <div
                                        v-if="errors.password"
                                        class="invalid-feedback"
                                    >
                                        {{ errors.password.join(", ") }}
                                    </div>
                                </div>
                            </div>
                            <div
                                class="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred mb-2"
                            >
                                <button
                                    @click="AuthBtn()"
                                    class="theme-btn"
                                    type="button"
                                    name="submit-form"
                                >
                                    Войти
                                </button>
                            </div>
                            <span
                                >Нет аккаунта?
                                <a
                                    href="#"
                                    @click.prevent="ChangePage('RegPage')"
                                    >Зарегистрироватся</a
                                ></span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import preloaderGif from "../../images/carneshop/preloader.gif";
import HeaderComponent from "../components/HeaderComponent.vue";

export default {
    name: "AuthPage",
    props: ["ChangePage", "page", "LoginUser", "server", "logout", "IsAuth" , "user"],

    data() {
        return {
            preloaderStyle: {
                backgroundImage: `url(${preloaderGif})`,
            },
            login: "",
            password: "",
            errors: [],
        };
    },
    mounted() {
        this.$nextTick(() => {
            if (typeof window.initCarneshopTheme === "function") {
                window.initCarneshopTheme();
            }
        });
    },

    methods: {
        AuthBtn() {
            let formdata = new FormData();
            formdata.append("login", this.login);
            formdata.append("password", this.password);
            this.server("/auth", "POST", formdata)
                .then((result) => {
                    if (result.errors) {
                        this.errors = result.errors;
                    }
                    if (result.token) {
                        this.LoginUser(result.token);
                    }
                })
                .catch((error) => console.error(error));
        },
    },

    components: {
        HeaderComponent,
    },
};
</script>
