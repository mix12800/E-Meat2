<template>
    <div class="boxed_wrapper ltr">
        <!-- preloader -->
        <div class="preloader" :style="preloaderStyle"></div>
        <!-- preloader -->

        <!-- sidebar cart item -->
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
                                    <a href="about.html" class="theme-btn"
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
        <!-- END sidebar widget item -->

        <!-- main header -->
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
                            <!--Mobile Navigation Toggler-->
                            <div class="mobile-nav-toggler">
                                <i class="icon-bar"></i>
                                <i class="icon-bar"></i>
                                <i class="icon-bar"></i>
                            </div>
                            <nav
                                class="main-menu navbar-expand-md navbar-light"
                            >
                                <div
                                    class="collapse navbar-collapse show clearfix"
                                    id="navbarSupportedContent"
                                >
                                    <ul class="navigation clearfix">
                                        <li><a href="/">Главная</a></li>
                                        <li><a href="about.html">О нас</a></li>
                                        <li class="dropdown">
                                            <a href="/">Магазин</a>
                                            <ul>
                                                <li>
                                                    <a href="team.html"
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
                                            <a href="contact.html">Контакты</a>
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
                                            <span
                                                class="flaticon-search"
                                            ></span>
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

            <!--sticky Header-->
            <div class="sticky-header">
                <div class="auto-container">
                    <div class="outer-box clearfix">
                        <figure class="logo-box pull-left">
                            <a href="/"
                                ><img
                                    src="/assets/images/small-logo.png"
                                    alt=""
                            /></a>
                        </figure>
                        <div class="menu-area pull-right">
                            <nav class="main-menu clearfix">
                                <!--Keep This Empty / Menu will come through Javascript-->
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- main-header end -->

        <!-- Mobile Menu  -->
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
                    <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
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
                            <a href="/"
                                ><span class="fab fa-pinterest-p"></span
                            ></a>
                        </li>
                        <li>
                            <a href="/"
                                ><span class="fab fa-instagram"></span
                            ></a>
                        </li>
                        <li>
                            <a href="/"><span class="fab fa-youtube"></span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <!-- End Mobile Menu -->

        <!-- main-slider -->
        <section class="main-slider">
            <div
                class="main-slider-carousel owl-theme owl-carousel owl-dots-none"
            >
                <div class="slide-item">
                    <div class="image-layer image-layer-1"></div>
                    <div class="auto-container">
                        <div class="content-box">
                            <h1>Свежее мясо безопасного качества.</h1>
                            <p>
                                Еда, которая важна для вас, для фермеров и для
                                планеты, которую мы все делим.
                            </p>
                            <div class="btn-box">
                                <a href="/" class="theme-btn"
                                    >Узнать больше<i
                                        class="fas fa-long-arrow-alt-right"
                                    ></i
                                ></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slide-item">
                    <div class="image-layer image-layer-2"></div>
                    <div class="auto-container">
                        <div class="content-box centred">
                            <h1>Свежее мясо безопасного качества</h1>
                            <p>
                                Еда, которая важна для вас, для фермеров и для
                                планеты, которую мы все делим.
                            </p>
                            <div class="btn-box">
                                <a href="/" class="theme-btn"
                                    >Узнать больше<i
                                        class="fas fa-long-arrow-alt-right"
                                    ></i
                                ></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slide-item">
                    <div class="image-layer image-layer-3"></div>
                    <div class="auto-container">
                        <div class="content-box">
                            <h1>Свежее мясо безопасного качества</h1>
                            <p>
                                Еда, которая важна для вас, для фермеров и для
                                планеты, которую мы все делим.
                            </p>
                            <div class="btn-box">
                                <a href="/" class="theme-btn"
                                    >Узнать больше<i
                                        class="fas fa-long-arrow-alt-right"
                                    ></i
                                ></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- main-slider end -->

        <!-- about-section -->
        <section class="about-section">
            <div class="auto-container">
                <div class="inner-container clearfix">
                    <div class="row clearfix">
                        <div class="col-lg-6 col-md-6 col-sm-12 video-column">
                            <div id="video_block_1">
                                <div class="video-inner video-inner-image">
                                    <a
                                        href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s"
                                        class="lightbox-image video-btn"
                                        data-caption=""
                                        ><i class="fas fa-play"></i
                                    ></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 content-column">
                            <div id="content_block_1">
                                <div class="content-box">
                                    <div class="sec-title">
                                        <span>О нас</span>
                                        <h2>Мы Предлагаем Лучшее Мясо</h2>
                                    </div>
                                    <div class="text">
                                        <p>
                                            Лорем Ипсум морковь, увеличенные
                                            скидки, но не минимум времени
                                            eiusmod
                                        </p>
                                    </div>
                                    <ul class="list clearfix">
                                        <li>100% органическое мясо</li>
                                        <li>
                                            Обеспечение безопасности платежей
                                        </li>
                                    </ul>
                                    <div class="btn-box">
                                        <a href="about.html" class="theme-btn"
                                            >Посмотреть больше<i
                                                class="fas fa-long-arrow-alt-right"
                                            ></i
                                        ></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- about-section end -->

        <!-- clients-section -->
        <section class="clients-section">
            <div class="auto-container">
                <div
                    class="clients-carousel owl-carousel owl-theme owl-dots-none owl-nav-none"
                >
                    <figure class="logo-image">
                        <a href="/"><img src="@/img/i.jpg" alt="" /></a>
                    </figure>
                    <figure class="logo-image">
                        <a href="/"><img src="@/img/i.jpg" alt="" /></a>
                    </figure>
                    <figure class="logo-image">
                        <a href="/"><img src="@/img/i.jpg" alt="" /></a>
                    </figure>
                    <figure class="logo-image">
                        <a href="/"><img src="@/img/i.jpg" alt="" /></a>
                    </figure>
                    <figure class="logo-image">
                        <a href="/"><img src="@/img/i.jpg" alt="" /></a>
                    </figure>
                </div>
            </div>
        </section>
        <!-- clients-section end -->

        <!-- service-section -->
        <section class="service-section bg-color-1">
            <div
                class="icon-layer"
                style="
                    background-image: url(/assets/images/icons/bg-icon-1.png);
                "
            ></div>
            <div class="auto-container">
                <div class="sec-title text-center">
                    <span>Что мы делаем</span>
                    <h2>Услуги для Вас</h2>
                </div>
                <div class="row clearfix">
                    <div class="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div
                            class="service-block-one wow fadeInUp animated animated"
                            data-wow-delay="00ms"
                            data-wow-duration="1500ms"
                        >
                            <div class="inner-box">
                                <div class="icon-box">
                                    <i class="flaticon-meat-4"></i>
                                </div>
                                <h3><a href="/">Антрекот из телятины</a></h3>
                                <p>Лорем ипсум сит амет, освящает наш новый</p>
                                <div class="btn-box">
                                    <a href="/" class="theme-btn">Подробнее</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div
                            class="service-block-one wow fadeInUp animated animated"
                            data-wow-delay="300ms"
                            data-wow-duration="1500ms"
                        >
                            <div class="inner-box">
                                <div class="icon-box">
                                    <i class="flaticon-hang"></i>
                                </div>
                                <h3><a href="/">Свиная вырезка</a></h3>
                                <p>Лорем ипсум сит амет, освящает наш новый</p>
                                <div class="btn-box">
                                    <a href="/" class="theme-btn">Подробнее</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div
                            class="service-block-one wow fadeInUp animated animated"
                            data-wow-delay="600ms"
                            data-wow-duration="1500ms"
                        >
                            <div class="inner-box">
                                <div class="icon-box">
                                    <i class="flaticon-meat-5"></i>
                                </div>
                                <h3><a href="/">Красивые ребрышки</a></h3>
                                <p>Лорем ипсум сит амет, освящает наш новый</p>
                                <div class="btn-box">
                                    <a href="/" class="theme-btn">Подробнее</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- service-section end -->

        <!-- about-style-two -->
        <section class="about-style-two">
            <div class="auto-container">
                <div class="row align-items-center clearfix">
                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div id="content_block_2">
                            <div class="content-box">
                                <div class="sec-title style-two">
                                    <span>О нас</span>
                                    <h2>О нашей компании</h2>
                                </div>
                                <div class="text">
                                    <p>
                                        Морковь Lorem ipsum, увеличенные скидки,
                                        но с возможностью просмотра в связи с
                                        работой и ожирением. Для получения
                                        дополнительной информации, пожалуйста,
                                        свяжитесь с нами и расскажите о
                                        физических упражнениях
                                    </p>
                                </div>
                                <ul class="list clearfix">
                                    <li>
                                        <i
                                            class="flaticon-call-center-agent"
                                        ></i>
                                        Эксперты подержки
                                    </li>
                                    <li>
                                        <i class="flaticon-free-delivery"></i>
                                        Бесплатная доставка
                                    </li>
                                    <li>
                                        <i
                                            class="flaticon-return-of-investment"
                                        ></i>
                                        Бесплатный возврат
                                    </li>
                                    <li>
                                        <i class="flaticon-winner"></i>
                                        Отличное предложене
                                    </li>
                                </ul>
                                <div class="link-box">
                                    <a href="about.html"
                                        >Узнайте больше о наших преимуществах<i
                                            class="flaticon-right"
                                        ></i
                                    ></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div id="image_block_1">
                            <div class="image-box">
                                <figure class="image image-1">
                                    <img
                                        src="/assets/images/resource/about-2.jpg"
                                        alt=""
                                    />
                                </figure>
                                <figure class="image image-2">
                                    <img
                                        src="/assets/images/resource/about-3.jpg"
                                        alt=""
                                    />
                                </figure>
                                <figure class="image image-3">
                                    <img
                                        src="/assets/images/resource/about-1.png"
                                        alt=""
                                    />
                                </figure>
                                <figure class="image image-4">
                                    <img
                                        src="/assets/images/resource/about-2.png"
                                        alt=""
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- about-style-two end -->

        <!-- shop-section -->
        <section class="shop-section">
            <div class="auto-container">
                <div class="sec-title style-two text-center">
                    <span>Посмотреть все продукты</span>
                    <h2>Рекомендуемые продукты</h2>
                </div>
                <div class="row clearfix">
                    <div class="col-lg-3 col-md-6 col-sm-12 shop-block">
                        <div
                            class="shop-block-one wow fadeInUp animated animated"
                            data-wow-delay="00ms"
                            data-wow-duration="1500ms"
                        >
                            <div class="inner-box">
                                <figure class="image-box">
                                    <img
                                        src="/assets/images/resource/shop/shop-1.jpg"
                                        alt=""
                                    />
                                    <ul class="list clearfix">
                                        <li>
                                            <a href="shop-1.html"
                                                ><i class="flaticon-cart"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="shop-details.html"
                                                >В корзину</a
                                            >
                                        </li>
                                    </ul>
                                </figure>
                                <div class="lower-content">
                                    <h6>
                                        <a href="shop-details.html"
                                            >Целая вырезка</a
                                        >
                                    </h6>
                                    <ul class="rating clearfix">
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                    </ul>
                                    <span class="price">$ 400.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 shop-block">
                        <div
                            class="shop-block-one wow fadeInUp animated animated"
                            data-wow-delay="200ms"
                            data-wow-duration="1500ms"
                        >
                            <div class="inner-box">
                                <figure class="image-box">
                                    <img
                                        src="/assets/images/resource/shop/shop-2.jpg"
                                        alt=""
                                    />
                                    <ul class="list clearfix">
                                        <li>
                                            <a href="shop-1.html"
                                                ><i class="flaticon-cart"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="shop-details.html"
                                                >В корзину</a
                                            >
                                        </li>
                                    </ul>
                                </figure>
                                <div class="lower-content">
                                    <h6>
                                        <a href="shop-details.html"
                                            >Фритюрница целиком</a
                                        >
                                    </h6>
                                    <ul class="rating clearfix">
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                    </ul>
                                    <span class="price">$ 450.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 shop-block">
                        <div
                            class="shop-block-one wow fadeInUp animated animated"
                            data-wow-delay="400ms"
                            data-wow-duration="1500ms"
                        >
                            <div class="inner-box">
                                <figure class="image-box">
                                    <img
                                        src="/assets/images/resource/shop/shop-3.jpg"
                                        alt=""
                                    />
                                    <ul class="list clearfix">
                                        <li>
                                            <a href="shop-1.html"
                                                ><i class="flaticon-cart"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="shop-details.html"
                                                >В корзину</a
                                            >
                                        </li>
                                    </ul>
                                </figure>
                                <div class="lower-content">
                                    <h6>
                                        <a href="shop-details.html"
                                            >Стейк на ребрышках</a
                                        >
                                    </h6>
                                    <ul class="rating clearfix">
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                    </ul>
                                    <span class="price">$ 500.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 shop-block">
                        <div
                            class="shop-block-one wow fadeInUp animated animated"
                            data-wow-delay="600ms"
                            data-wow-duration="1500ms"
                        >
                            <div class="inner-box">
                                <figure class="image-box">
                                    <img
                                        src="/assets/images/resource/shop/shop-4.jpg"
                                        alt=""
                                    />
                                    <ul class="list clearfix">
                                        <li>
                                            <a href="shop-1.html"
                                                ><i class="flaticon-cart"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="shop-details.html"
                                                >В корзину</a
                                            >
                                        </li>
                                    </ul>
                                </figure>
                                <div class="lower-content">
                                    <h6>
                                        <a href="shop-details.html"
                                            >Жаркое из цыплят</a
                                        >
                                    </h6>
                                    <ul class="rating clearfix">
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                    </ul>
                                    <span class="price">$ 380.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="more-btn centred">
                    <a href="shop-1.html" class="theme-btn">купить сейчас</a>
                </div>
            </div>
        </section>
        <!-- shop-section end -->

        <!-- portfolio-section -->
        <section class="portfolio-section">
            <div class="auto-container">
                <div
                    class="single-item-carousel owl-carousel owl-theme owl-dots-none"
                >
                    <div class="portfolio-block-one">
                        <div class="inner-box">
                            <figure class="image-box">
                                <img
                                    src="/assets/images/resource/portfolio-1.jpg"
                                    alt=""
                                />
                            </figure>
                            <div class="lower-content">
                                <div class="inner">
                                    <span>Мясо</span>
                                    <h4><a href="/">Свиная вырезка</a></h4>
                                    <div class="link">
                                        <a href="/"
                                            ><i class="flaticon-right"></i
                                        ></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-block-one">
                        <div class="inner-box">
                            <figure class="image-box">
                                <img
                                    src="/assets/images/resource/portfolio-2.jpg"
                                    alt=""
                                />
                            </figure>
                            <div class="lower-content">
                                <div class="inner">
                                    <span>Мясо</span>
                                    <h4><a href="/">Свиная вырезка</a></h4>
                                    <div class="link">
                                        <a href="/"
                                            ><i class="flaticon-right"></i
                                        ></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-block-one">
                        <div class="inner-box">
                            <figure class="image-box">
                                <img
                                    src="/assets/images/resource/portfolio-3.jpg"
                                    alt=""
                                />
                            </figure>
                            <div class="lower-content">
                                <div class="inner">
                                    <span>Мясо</span>
                                    <h4><a href="/">Свиная вырезка</a></h4>
                                    <div class="link">
                                        <a href="/"
                                            ><i class="flaticon-right"></i
                                        ></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- portfolio-section end -->

        <!-- testimonial-section -->
        <section class="testimonial-section">
            <div class="auto-container">
                <div class="sec-title style-two">
                    <span>Рекомендации</span>
                    <h2>Почему люди верят в нас!</h2>
                </div>
                <div
                    class="two-column-carousel owl-carousel owl-theme owl-dots-none"
                >
                    <div class="testimonial-block-one">
                        <div class="inner-box">
                            <div class="icon-box">
                                <i class="flaticon-quote"></i>
                            </div>
                            <p>
                                Обсудите что-нибудь важное. По крайней мере, еще
                                один приход, любая из наших рутинных работ
                                выполняется только это своего рода комедия,
                                которая следует за этим. Дэниелс боль в упреке
                            </p>
                            <div class="author-box">
                                <figure class="image-box">
                                    <img
                                        src="/assets/images/resource/testimonial-1.png"
                                        alt=""
                                    />
                                </figure>
                                <h5>Ричард К. Ле</h5>
                                <span class="designation">Менеджер HD</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-block-one">
                        <div class="inner-box">
                            <div class="icon-box">
                                <i class="flaticon-quote"></i>
                            </div>
                            <p>
                                Чтобы asi хотя бы приблизилась, с кем нам
                                следует практиковаться вместе с Нострадамусом с
                                меткой "морковь для рассады", помидор я фанат
                                elite, но я фанат помеченный как труд
                            </p>
                            <div class="author-box">
                                <figure class="image-box">
                                    <img
                                        src="/assets/images/resource/testimonial-2.png"
                                        alt=""
                                    />
                                </figure>
                                <h5>Доннелл Дж. Крич</h5>
                                <span class="designation">Сонограф</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- testimonial-section end -->

        <!-- funfact-section -->
        <section class="funfact-section centred bg-color-2">
            <div class="auto-container">
                <div
                    class="counter-inner wow slideInUp animated animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                >
                    <div class="line"></div>
                    <div class="row clearfix">
                        <div class="col-lg-3 col-md-6 col-sm-12 counter-block">
                            <div class="counter-block-one">
                                <div class="inner-box">
                                    <div class="icon-box">
                                        <i class="flaticon-notes"></i>
                                    </div>
                                    <div class="count-outer count-box">
                                        <span
                                            class="count-text"
                                            data-speed="1500"
                                            data-stop="2490"
                                            >0</span
                                        >
                                    </div>
                                    <span class="text"
                                        >Завершенные проекты</span
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 counter-block">
                            <div class="counter-block-one">
                                <div class="inner-box">
                                    <div class="icon-box">
                                        <i class="flaticon-flag"></i>
                                    </div>
                                    <div class="count-outer count-box">
                                        <span
                                            class="count-text"
                                            data-speed="1500"
                                            data-stop="7410"
                                            >0</span
                                        >
                                    </div>
                                    <span class="text"
                                        >Материалы для творчества</span
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 counter-block">
                            <div class="counter-block-one">
                                <div class="inner-box">
                                    <div class="icon-box">
                                        <i class="flaticon-medal"></i>
                                    </div>
                                    <div class="count-outer count-box">
                                        <span
                                            class="count-text"
                                            data-speed="1500"
                                            data-stop="5240"
                                            >0</span
                                        >
                                    </div>
                                    <span class="text">Опытные мастера</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 counter-block">
                            <div class="counter-block-one">
                                <div class="inner-box">
                                    <div class="icon-box">
                                        <i class="flaticon-speaker"></i>
                                    </div>
                                    <div class="count-outer count-box">
                                        <span
                                            class="count-text"
                                            data-speed="1500"
                                            data-stop="250"
                                            >0</span
                                        >
                                    </div>
                                    <span class="text"
                                        >Профессиональные награды</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- funfact-section end -->

        <!-- team-section -->
        <section class="team-section centred">
            <div class="outer-container">
                <div class="pattern-layer">
                    <div
                        class="pattern-1"
                        style="
                            background-image: url(/assets/images/shape/shape-1.png);
                        "
                    ></div>
                    <div
                        class="pattern-2"
                        style="
                            background-image: url(/assets/images/shape/shape-2.png);
                        "
                    ></div>
                </div>
                <div class="anim-icon">
                    <div
                        class="icon icon-1 float-bob-y"
                        style="
                            background-image: url(/assets/images/icons/anim-icon-1.png);
                        "
                    ></div>
                    <div
                        class="icon icon-2"
                        style="
                            background-image: url(/assets/images/icons/anim-icon-2.png);
                        "
                    ></div>
                </div>
                <div class="auto-container">
                    <div class="sec-title style-two">
                        <span>Познакомьтесь с нашей командой</span>
                        <h2>Наша творческая команда</h2>
                    </div>
                    <div
                        class="four-item-carousel owl-carousel owl-theme owl-nav-none"
                    >
                        <div class="team-block-one">
                            <div class="inner-box">
                                <figure class="image-box">
                                    <img
                                        src="/assets/images/team/team-1.jpg"
                                        alt=""
                                    />
                                    <ul class="social-links clearfix">
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-facebook-f"
                                                ></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-twitter"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-instagram"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-google-plus-g"
                                                ></i
                                            ></a>
                                        </li>
                                    </ul>
                                </figure>
                                <div class="lower-content">
                                    <h3><a href="/">Дэвид Смит</a></h3>
                                    <p>Эксперт по дизайну</p>
                                </div>
                            </div>
                        </div>
                        <div class="team-block-one">
                            <div class="inner-box">
                                <figure class="image-box">
                                    <img
                                        src="/assets/images/team/team-2.jpg"
                                        alt=""
                                    />
                                    <ul class="social-links clearfix">
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-facebook-f"
                                                ></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-twitter"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-instagram"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-google-plus-g"
                                                ></i
                                            ></a>
                                        </li>
                                    </ul>
                                </figure>
                                <div class="lower-content">
                                    <h3><a href="/">Барбара Смит</a></h3>
                                    <p>директор по рисованию</p>
                                </div>
                            </div>
                        </div>
                        <div class="team-block-one">
                            <div class="inner-box">
                                <figure class="image-box">
                                    <img
                                        src="/assets/images/team/team-3.jpg"
                                        alt=""
                                    />
                                    <ul class="social-links clearfix">
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-facebook-f"
                                                ></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-twitter"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-instagram"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-google-plus-g"
                                                ></i
                                            ></a>
                                        </li>
                                    </ul>
                                </figure>
                                <div class="lower-content">
                                    <h3><a href="/">Роберт Пинеда</a></h3>
                                    <p>менеджер проекта</p>
                                </div>
                            </div>
                        </div>
                        <div class="team-block-one">
                            <div class="inner-box">
                                <figure class="image-box">
                                    <img
                                        src="/assets/images/team/team-4.jpg"
                                        alt=""
                                    />
                                    <ul class="social-links clearfix">
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-facebook-f"
                                                ></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-twitter"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-instagram"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-google-plus-g"
                                                ></i
                                            ></a>
                                        </li>
                                    </ul>
                                </figure>
                                <div class="lower-content">
                                    <h3><a href="/">Дженна Сью</a></h3>
                                    <p>Менеджер</p>
                                </div>
                            </div>
                        </div>
                        <div class="team-block-one">
                            <div class="inner-box">
                                <figure class="image-box">
                                    <img
                                        src="/assets/images/team/team-1.jpg"
                                        alt=""
                                    />
                                    <ul class="social-links clearfix">
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-facebook-f"
                                                ></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-twitter"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-instagram"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-google-plus-g"
                                                ></i
                                            ></a>
                                        </li>
                                    </ul>
                                </figure>
                                <div class="lower-content">
                                    <h3><a href="/">Дэвид Смит</a></h3>
                                    <p>Эксперт по дизайну</p>
                                </div>
                            </div>
                        </div>
                        <div class="team-block-one">
                            <div class="inner-box">
                                <figure class="image-box">
                                    <img
                                        src="/assets/images/team/team-2.jpg"
                                        alt=""
                                    />
                                    <ul class="social-links clearfix">
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-facebook-f"
                                                ></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-twitter"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-instagram"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-google-plus-g"
                                                ></i
                                            ></a>
                                        </li>
                                    </ul>
                                </figure>
                                <div class="lower-content">
                                    <h3><a href="/">Барбара Смит</a></h3>
                                    <p>директор по рисованию</p>
                                </div>
                            </div>
                        </div>
                        <div class="team-block-one">
                            <div class="inner-box">
                                <figure class="image-box">
                                    <img
                                        src="/assets/images/team/team-3.jpg"
                                        alt=""
                                    />
                                    <ul class="social-links clearfix">
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-facebook-f"
                                                ></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-twitter"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-instagram"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-google-plus-g"
                                                ></i
                                            ></a>
                                        </li>
                                    </ul>
                                </figure>
                                <div class="lower-content">
                                    <h3><a href="/">Роберт Пинеда</a></h3>
                                    <p>менеджер проекта</p>
                                </div>
                            </div>
                        </div>
                        <div class="team-block-one">
                            <div class="inner-box">
                                <figure class="image-box">
                                    <img
                                        src="/assets/images/team/team-4.jpg"
                                        alt=""
                                    />
                                    <ul class="social-links clearfix">
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-facebook-f"
                                                ></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-twitter"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-instagram"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-google-plus-g"
                                                ></i
                                            ></a>
                                        </li>
                                    </ul>
                                </figure>
                                <div class="lower-content">
                                    <h3><a href="/">Дженна Сью</a></h3>
                                    <p>Менеджер</p>
                                </div>
                            </div>
                        </div>
                        <div class="team-block-one">
                            <div class="inner-box">
                                <figure class="image-box">
                                    <img
                                        src="/assets/images/team/team-1.jpg"
                                        alt=""
                                    />
                                    <ul class="social-links clearfix">
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-facebook-f"
                                                ></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-twitter"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-instagram"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-google-plus-g"
                                                ></i
                                            ></a>
                                        </li>
                                    </ul>
                                </figure>
                                <div class="lower-content">
                                    <h3><a href="/">Дэвид Смит</a></h3>
                                    <p>Эксперт по дизайну</p>
                                </div>
                            </div>
                        </div>
                        <div class="team-block-one">
                            <div class="inner-box">
                                <figure class="image-box">
                                    <img
                                        src="/assets/images/team/team-2.jpg"
                                        alt=""
                                    />
                                    <ul class="social-links clearfix">
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-facebook-f"
                                                ></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-twitter"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-instagram"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-google-plus-g"
                                                ></i
                                            ></a>
                                        </li>
                                    </ul>
                                </figure>
                                <div class="lower-content">
                                    <h3><a href="/">Барбара Смит</a></h3>
                                    <p>директор по рисованию</p>
                                </div>
                            </div>
                        </div>
                        <div class="team-block-one">
                            <div class="inner-box">
                                <figure class="image-box">
                                    <img
                                        src="/assets/images/team/team-3.jpg"
                                        alt=""
                                    />
                                    <ul class="social-links clearfix">
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-facebook-f"
                                                ></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-twitter"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-instagram"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-google-plus-g"
                                                ></i
                                            ></a>
                                        </li>
                                    </ul>
                                </figure>
                                <div class="lower-content">
                                    <h3><a href="/">Роберт Пинеда</a></h3>
                                    <p>менеджер проекта</p>
                                </div>
                            </div>
                        </div>
                        <div class="team-block-one">
                            <div class="inner-box">
                                <figure class="image-box">
                                    <img
                                        src="/assets/images/team/team-4.jpg"
                                        alt=""
                                    />
                                    <ul class="social-links clearfix">
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-facebook-f"
                                                ></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-twitter"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-instagram"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-google-plus-g"
                                                ></i
                                            ></a>
                                        </li>
                                    </ul>
                                </figure>
                                <div class="lower-content">
                                    <h3><a href="/">Дженна Сью</a></h3>
                                    <p>Менеджер</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- team-section end -->

        <!-- news-section -->
        <section class="news-section">
            <div class="auto-container">
                <div class="sec-title style-two centred">
                    <span>Блог и новости</span>
                    <h2>Последние записи в блоге</h2>
                </div>
                <div class="row clearfix">
                    <div class="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div
                            class="news-block-one wow fadeInUp animated animated"
                            data-wow-delay="00ms"
                            data-wow-duration="1500m"
                        >
                            <div class="inner-box">
                                <figure class="image-box">
                                    <a href="blog-details.html"
                                        ><img
                                            src="/assets/images/news/news-1.jpg"
                                            alt=""
                                    /></a>
                                </figure>
                                <div class="lower-content">
                                    <ul class="post-info clearfix">
                                        <li><a href="/">Леонард</a></li>
                                        <li>, 1 неделю назад</li>
                                    </ul>
                                    <h4>
                                        <a href="blog-details.html"
                                            >Проводите время так же низко, как
                                            устаете, и чувствуйте себя
                                            превосходно</a
                                        >
                                    </h4>
                                    <p>
                                        Лорем ипсум сит амет, со скидками, но
                                        доступен для просмотра
                                    </p>
                                    <div class="link">
                                        <a href="blog-details.html"
                                            >подробнее<i
                                                class="flaticon-right"
                                            ></i
                                        ></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div
                            class="news-block-one wow fadeInUp animated animated"
                            data-wow-delay="300ms"
                            data-wow-duration="1500m"
                        >
                            <div class="inner-box">
                                <figure class="image-box">
                                    <a href="blog-details.html"
                                        ><img
                                            src="/assets/images/news/news-2.jpg"
                                            alt=""
                                    /></a>
                                </figure>
                                <div class="lower-content">
                                    <ul class="post-info clearfix">
                                        <li><a href="/">Леонард</a></li>
                                        <li>, 1 неделю назад</li>
                                    </ul>
                                    <h4>
                                        <a href="blog-details.html"
                                            >Фанья любая для получения
                                            дополнительной информации,
                                            пожалуйста, свяжитесь с нами</a
                                        >
                                    </h4>
                                    <p>
                                        Лорем ипсум сит амет, со скидками, но
                                        доступен для просмотра
                                    </p>
                                    <div class="link">
                                        <a href="blog-details.html"
                                            >Подробнее<i
                                                class="flaticon-right"
                                            ></i
                                        ></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div
                            class="news-block-one wow fadeInUp animated animated"
                            data-wow-delay="600ms"
                            data-wow-duration="1500m"
                        >
                            <div class="inner-box">
                                <figure class="image-box">
                                    <a href="blog-details.html"
                                        ><img
                                            src="/assets/images/news/news-3.jpg"
                                            alt=""
                                    /></a>
                                </figure>
                                <div class="lower-content">
                                    <ul class="post-info clearfix">
                                        <li><a href="/">Леонард</a></li>
                                        <li>, 1 неделю назад</li>
                                    </ul>
                                    <h4>
                                        <a href="blog-details.html"
                                            >Голор ситмет увеличил темп игры</a
                                        >
                                    </h4>
                                    <p>
                                        Закон божий сит амет, освященный я фанат
                                        elite, но я фанат помеченные инциденты
                                    </p>
                                    <div class="link">
                                        <a href="blog-details.html"
                                            >Подробнее<i
                                                class="flaticon-right"
                                            ></i
                                        ></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- news-section end -->

        <!-- main-footer -->
        <footer class="main-footer">
            <div class="auto-container">
                <div class="footer-top">
                    <div class="widget-section">
                        <div class="row clearfix">
                            <div
                                class="col-lg-4 col-md-6 col-sm-12 footer-column"
                            >
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
                                            понадобятся ваши услуги или он
                                            захочет узнать больше о вас лично,
                                            зависит от того, как вы
                                            отреагируете.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="col-lg-4 col-md-6 col-sm-12 footer-column"
                            >
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
                                            <i
                                                class="flaticon-maps-and-flags"
                                            ></i>
                                            <p>Адрес</p>
                                            <h5>
                                                г.Челябинск, ул. Артиллерийская
                                                152
                                            </h5>
                                        </li>
                                    </ul>
                                    <ul class="social-links clearfix">
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-facebook-f"
                                                ></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-twitter"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-google-plus-g"
                                                ></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i class="fab fa-dribbble"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                                ><i
                                                    class="fab fa-pinterest-p"
                                                ></i
                                            ></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                class="col-lg-4 col-md-6 col-sm-12 footer-column"
                            >
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
                            &copy;2020 Авторское право <a href="/"> Пример</a>.
                            Все права защищены.
                        </h5>
                    </div>
                    <ul class="footer-nav pull-right clearfix">
                        <li><a href="/">Главная</a></li>
                        <li><a href="/">О нас</a></li>
                        <li><a href="/">Блог</a></li>
                        <li><a href="/">Контакт</a></li>
                    </ul>
                </div>
            </div>
        </footer>
        <!-- main-footer end -->

        <!--Scroll to top-->
        <button class="scroll-top scroll-to-target" data-target="html">
            <span class="fa fa-arrow-up"></span>
        </button>
    </div>
</template>

<script>
import preloaderGif from "../../images/carneshop/preloader.gif";

export default {
    name: "HomePage",
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
};
</script>
