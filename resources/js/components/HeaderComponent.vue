<template>
    <header class="main-header">
        <div class="header-top">
            <div class="auto-container">
                <div class="top-info">
                    <ul class="info-list clearfix">
                        <li>
                            <i class="flaticon-location-pin"></i>
                            г.Челябинск, ул. Артиллерийская 152
                        </li>
                        <li>
                            <i class="flaticon-envelope"></i>
                            <a href="mailto:e@emyaso.ru">e@emyaso.ru</a>
                        </li>
                        <li class="phone">
                            <i class="flaticon-dial"></i>
                            <a href="tel:234554657345">+7(999) 252-49-56</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="header-upper">
            <div class="auto-container">
                <div class="outer-box clearfix">
                    <div class="logo-box">
                        <figure class="logo">
                            <a href="/"
                                ><img src="/assets/images/logo.png" alt=""
                            /></a>
                        </figure>
                    </div>
                    <div class="menu-area pull-right">
                        <!--Переключатель мобильной навигации-->
                        <div class="mobile-nav-toggler">
                            <i class="icon-bar"></i>
                            <i class="icon-bar"></i>
                            <i class="icon-bar"></i>
                        </div>
                        <nav class="main-menu navbar-expand-md navbar-light">
                            <div
                                class="collapse navbar-collapse show clearfix"
                                id="navbarSupportedContent"
                            >
                                <ul class="navigation clearfix">
                                    <li
                                        :class="{ current: page == 'HomePage' }"
                                    >
                                        <a
                                            href="#"
                                            @click.prevent="
                                                ChangePage('HomePage')
                                            "
                                            >Главная</a
                                        >
                                    </li>
                                    <li
                                        :class="{
                                            current: page == 'AboutPage',
                                        }"
                                    >
                                        <a
                                            href="#"
                                            @click.prevent="
                                                ChangePage('AboutPage')
                                            "
                                            >О нас</a
                                        >
                                    </li>
                                    <li
                                        class="dropdown"
                                        :class="{
                                            current: page == 'TeamPage',
                                        }"
                                    >
                                        <a href="/">Магазин</a>
                                        <ul>
                                            <li>
                                                <a
                                                    href="team.html"
                                                    @click.prevent="
                                                        ChangePage('TeamPage')
                                                    "
                                                    >Наша команда</a
                                                >
                                            </li>
                                            <li>
                                                <a href="testimonial.html"
                                                    >Отзывы</a
                                                >
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="dropdown">
                                        <a href="/">Новости</a>
                                        <ul>
                                            <li>
                                                <a href="blog.html">Блог</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a
                                            href="contact.html"
                                            @click.prevent="
                                                ChangePage('ContactPage')
                                            "
                                            >Контакты</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <ul class="menu-right-content pull-left clearfix">
                            <li class="user-box">
                                <a href="/"
                                    ><i
                                        class="flaticon-user-symbol-of-thin-outline"
                                    ></i
                                ></a>
                            </li>
                            <li class="search-box-outer">
                                <div class="dropdown">
                                    <button
                                        class="search-box-btn"
                                        type="button"
                                        id="dropdownMenu3"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <span class="flaticon-search"></span>
                                    </button>
                                    <ul
                                        class="dropdown-menu pull-right search-panel"
                                        aria-labelledby="dropdownMenu3"
                                    >
                                        <li class="panel-outer">
                                            <div class="form-container">
                                                <form
                                                    method="post"
                                                    action="blog.html"
                                                >
                                                    <div class="form-group">
                                                        <input
                                                            type="search"
                                                            name="field-name"
                                                            value=""
                                                            placeholder="Search...."
                                                            required=""
                                                        />
                                                        <button
                                                            type="submit"
                                                            class="search-btn"
                                                        >
                                                            <span
                                                                class="fas fa-search"
                                                            ></span>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="cart-box">
                                <a href="shop-1.html"
                                    ><i class="flaticon-shopping-cart-1"></i
                                    ><span>0</span></a
                                >
                            </li>
                            <li class="nav-box">
                                <div
                                    class="nav-btn nav-toggler navSidebar-button clearfix"
                                >
                                    <i class="flaticon-list"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!--липкий Шапка-->
        <div class="sticky-header">
            <div class="auto-container">
                <div class="outer-box clearfix">
                    <figure class="logo-box pull-left">
                        <a href="/"
                            ><img src="/assets/images/small-logo.png" alt=""
                        /></a>
                    </figure>
                    <div class="menu-area pull-right">
                        <nav class="main-menu clearfix">
                            <!--Оставьте это поле пустым / Меню будет отображаться через Javascript-->
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "HeaderComponent",
    props: ["ChangePage", "page"],
};
</script>
