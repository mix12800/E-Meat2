<template>
    <div class="boxed_wrapper ltr">
        <!-- устройство предварительной загрузки -->
        <div class="preloader" :style="preloaderStyle"></div>
        <!-- устройство предварительной загрузки -->

        <!-- Шапка -->
        <HeaderComponent :ChangePage="ChangePage" :page="page" />
        <!-- Конец шапки -->

        <section class="contact-section centred regPage">
            <div class="auto-container">
                <div class="sec-title">
                    <span>Создание нового аккаунта</span>
                    <h2>Регистрация</h2>
                </div>
                <div class="form-inner">
                    <div id="contact-form" class="default-form regPageInp">
                        <div class="w-50">
                            <div class="mb-3">
                                <div class="form-group">
                                    <i class="far fa-user"></i>
                                    <input
                                        v-model="name"
                                        type="text"
                                        name="name"
                                        :class="{ 'is-invalid': errors.name }"
                                        placeholder="Имя"
                                    />
                                    <div
                                        v-if="errors.name"
                                        class="invalid-feedback"
                                    >
                                        {{ errors.name.join(", ") }}
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="form-group">
                                    <i class="far fa-envelope"></i>
                                    <input
                                        v-model="email"
                                        type="email"
                                        name="email"
                                        :class="{ 'is-invalid': errors.email }"
                                        placeholder="Э. Почта"
                                    />
                                    <div
                                        v-if="errors.email"
                                        class="invalid-feedback"
                                    >
                                        {{ errors.email.join(", ") }}
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="form-group">
                                    <i class="bi bi-input-cursor-text"></i>
                                    <input
                                        v-model="login"
                                        type="text"
                                        name="login"
                                        :class="{ 'is-invalid': errors.login }"
                                        placeholder="Логин"
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
                                        name="password"
                                        :class="{
                                            'is-invalid': errors.password,
                                        }"
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
                                    @click="RegBtn()"
                                    class="theme-btn"
                                    type="button"
                                    name="submit-form"
                                >
                                    Зарегистрироватся
                                </button>
                            </div>
                            <span
                                >Есть аккаунт?
                                <a
                                    href="#"
                                    @click.prevent="ChangePage('AuthPage')"
                                    >Войти</a
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
import { error } from "jquery";
import preloaderGif from "../../images/carneshop/preloader.gif";
import HeaderComponent from "../components/HeaderComponent.vue";

export default {
    name: "RegPage",
    props: ["ChangePage", "page", "server", "LoginUser"],

    data() {
        return {
            preloaderStyle: {
                backgroundImage: `url(${preloaderGif})`,
            },
            errors: [],
            name: "",
            email: "",
            login: "",
            password: "",
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
        RegBtn() {
            let formdata = new FormData();
            formdata.append("name", this.name);
            formdata.append("email", this.email);
            formdata.append("login", this.login);
            formdata.append("password", this.password);
            this.server("/reg", "POST", formdata)
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
