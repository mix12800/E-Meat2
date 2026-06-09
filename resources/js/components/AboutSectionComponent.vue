<template>
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
                                        Лорем Ипсум морковь, увеличенные скидки,
                                        но не минимум времени eiusmod
                                    </p>
                                </div>
                                <ul class="list clearfix">
                                    <li>100% органическое мясо</li>
                                    <li>Обеспечение безопасности платежей</li>
                                </ul>
                                <div class="btn-box">
                                    <a href="about.html" @click.prevent="ChangePage('AboutPage')" class="theme-btn"
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
</template>
<script>
export default {
    name: "AboutSectionComponent",
    props: ["ChangePage"],
};
</script>
