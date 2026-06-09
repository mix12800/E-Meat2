<template>
    <div class="mobile-menu">
        <div class="menu-backdrop"></div>
        <div class="close-btn"><i class="fas fa-times"></i></div>

        <nav class="menu-box">
            <div class="nav-logo">
                <a href="/"
                    ><img src="/assets/images/logo-2.png" alt="" title=""
                /></a>
            </div>
            <div class="menu-outer">
                <!--Здесь меню появится автоматически через Javascript / То же меню, что и в заголовке-->
            </div>
            <div class="contact-info">
                <h4>Контактная информация</h4>
                <ul>
                    <li>г.Челябинск, ул. Артиллерийская 152</li>
                    <li>
                        <a href="tel:+8801682648101">+7(999) 252-49-56</a>
                    </li>
                    <li><a href="mailto:e@emyaso.ru">e@emyaso.ru</a></li>
                </ul>
            </div>
            <div class="social-links">
                <ul class="clearfix">
                    <li>
                        <a href="/"><span class="fab fa-twitter"></span></a>
                    </li>
                    <li>
                        <a href="/"
                            ><span class="fab fa-facebook-square"></span
                        ></a>
                    </li>
                    <li>
                        <a href="/"><span class="fab fa-pinterest-p"></span></a>
                    </li>
                    <li>
                        <a href="/"><span class="fab fa-instagram"></span></a>
                    </li>
                    <li>
                        <a href="/"><span class="fab fa-youtube"></span></a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: "MobileMenuComponent",
};
</script>
