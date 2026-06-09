<template>
    <footer class="main-footer">
        <div class="auto-container">
            <div class="footer-top">
                <div class="widget-section">
                    <div class="row clearfix">
                        <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget logo-widget">
                                <figure class="footer-logo">
                                    <a href="/"
                                        ><img
                                            src="/assets/images/footer-logo.png"
                                            alt=""
                                    /></a>
                                </figure>
                                <div class="text">
                                    <p>
                                        Вероятность того, что кому-то
                                        понадобятся ваши услуги или он захочет
                                        узнать больше о вас лично, зависит от
                                        того, как вы отреагируете.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget contact-widget">
                                <ul class="info clearfix">
                                    <li>
                                        <i class="flaticon-phone"></i>
                                        <p>Позвоните нам</p>
                                        <h5>
                                            <a href="tel:8602729738"
                                                >+7(999) 252-49-56</a
                                            >
                                        </h5>
                                    </li>
                                    <li>
                                        <i class="flaticon-maps-and-flags"></i>
                                        <p>Адрес</p>
                                        <h5>
                                            г.Челябинск, ул. Артиллерийская 152
                                        </h5>
                                    </li>
                                </ul>
                                <ul class="social-links clearfix">
                                    <li>
                                        <a href="/"
                                            ><i class="fab fa-facebook-f"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="/"
                                            ><i class="fab fa-twitter"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="/"
                                            ><i class="fab fa-google-plus-g"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="/"
                                            ><i class="fab fa-dribbble"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="/"
                                            ><i class="fab fa-pinterest-p"></i
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget newsletter-widget">
                                <div class="widget-title">
                                    <h6>Новостная рассылка</h6>
                                </div>
                                <div class="widget-content">
                                    <p>
                                        Будьте в курсе всего нового, что
                                        заслуживает внимания
                                    </p>
                                    <form
                                        action="contact.html"
                                        method="post"
                                        class="newsletter-form"
                                    >
                                        <div class="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                required=""
                                            />
                                            <button type="submit">
                                                <i
                                                    class="flaticon-paper-plane-1"
                                                ></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom clearfix">
                <div class="copyright pull-left">
                    <h5>
                        &copy;2020 Авторское право <a href="/"> Пример</a>. Все
                        права защищены.
                    </h5>
                </div>
                <ul class="footer-nav pull-right clearfix">
                    <li><a href="#" @click.prevent="ChangePage('HomePage')">Главная</a></li>
                    <li><a href="#" @click.prevent="ChangePage('AboutPage')">О нас</a></li>
                    <li><a href="#">Блог</a></li>
                    <li><a href="#">Контакт</a></li>
                </ul>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: "MainFooterComponent",
    props: ['ChangePage'],
};
</script>
