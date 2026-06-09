<template>
    <div class="xs-sidebar-group info-group info-sidebar">
            <div class="xs-overlay xs-bg-black"></div>
            <div class="xs-sidebar-widget">
                <div class="sidebar-widget-container">
                    <div class="widget-heading">
                        <a href="#" class="close-side-widget">X</a>
                    </div>
                    <div class="sidebar-textwidget">
                        <div class="sidebar-info-contents">
                            <div class="content-inner">
                                <div class="logo">
                                    <a href="/"
                                        ><img
                                            src="/assets/images/logo-2.png"
                                            alt=""
                                    /></a>
                                </div>
                                <div class="content-box">
                                    <h4>О нас</h4>
                                    <p>
                                        Благодарим вас за проявленный интерес к
                                        нашей компании, основному
                                        самолетостроителю, но продолжайте... я
                                        боялся боли и страданий инопланетян.
                                        Объявление для получения дополнительной
                                        информации, пожалуйста, свяжитесь с нами
                                        и займитесь физическими упражнениями.
                                    </p>
                                    <a href="about.html" @click.prevent="ChangePage('AboutPage')" class="theme-btn"
                                        >О нас<i
                                            class="fas fa-long-arrow-alt-right"
                                        ></i
                                    ></a>
                                </div>
                                <div class="contact-info">
                                    <h4>Контактная информация</h4>
                                    <ul>
                                        <li>
                                            г.Челябинск, ул. Артиллерийская 152
                                        </li>
                                        <li>
                                            <a href="tel:+8801682648101"
                                                >+7(999) 252-49-56</a
                                            >
                                        </li>
                                        <li>
                                            <a href="mailto:e@emyaso.ru"
                                                >e@emyaso.ru</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                                <ul class="social-box">
                                    <li class="facebook">
                                        <a
                                            href="#"
                                            class="fab fa-facebook-f"
                                        ></a>
                                    </li>
                                    <li class="twitter">
                                        <a href="#" class="fab fa-twitter"></a>
                                    </li>
                                    <li class="linkedin">
                                        <a
                                            href="#"
                                            class="fab fa-linkedin-in"
                                        ></a>
                                    </li>
                                    <li class="instagram">
                                        <a
                                            href="#"
                                            class="fab fa-instagram"
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    name: 'SidebarComponent',
    props: ['ChangePage'],
}
</script>